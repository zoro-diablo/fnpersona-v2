import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { LineChart, Line, CartesianGrid, Dot } from 'recharts';
import { TrendingUp } from "lucide-react";
import {
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "hsl(var(--chart-2))",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};

const Firecalculator = () => {
  const [lifestyleExpenses, setLifestyleExpenses] = useState('');
  const [retirementAge, setRetirementAge] = useState('');
  const [currentSavings, setCurrentSavings] = useState('');
  const [annualSavings, setAnnualSavings] = useState('');
  const [projections, setProjections] = useState(null);
  const [milestoneMessage, setMilestoneMessage] = useState('');

  const handleCalculate = () => {
    const graphData = [
      { age: 30, value: 10000 },
      { age: 35, value: 25000 },
      { age: 40, value: 50000 },
      { age: 45, value: 100000 },
      { age: 50, value: 150000 },
      { age: 55, value: 250000 },
      { age: 60, value: 400000 },
      { age: 65, value: 600000 },
    ];

    const tableData = graphData.map((entry) => ({
      age: entry.age,
      investment: entry.value,
    }));

    setProjections({ graphData, tableData });

    if (graphData.some(data => data.value >= 100000)) {
      setMilestoneMessage('Congratulations! You reached $100,000 in investments.');
    } else {
      setMilestoneMessage('');
    }
  };

  return (
    <div className="container mt-6 py-8 px-4 md:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold dark:text-white animate-fadeIn">FIRE Calculator</h1>
        <p className="text-muted-foreground dark:text-white/50 animate-fadeIn">
          Calculate your path to Financial Independence and Early Retirement.
        </p>
      </header>
      
      <div className="mb-8 animate-fadeIn">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label htmlFor="lifestyleExpenses" className="dark:text-white">Desired Lifestyle Expenses ($/year)</Label>
            <Input
              id="lifestyleExpenses"
              name="lifestyleExpenses"
              type="number"
              value={lifestyleExpenses}
              onChange={(e) => setLifestyleExpenses(e.target.value)}
              required
              className="dark:text-white dark:bg-black"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="retirementAge" className="dark:text-white">Retirement Age</Label>
            <Input
              id="retirementAge"
              name="retirementAge"
              type="number"
              value={retirementAge}
              onChange={(e) => setRetirementAge(e.target.value)}
              required
              className="dark:text-white dark:bg-black"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="currentSavings" className="dark:text-white">Current Savings ($)</Label>
            <Input
              id="currentSavings"
              name="currentSavings"
              type="number"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(e.target.value)}
              required
              className="dark:text-white dark:bg-black"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="annualSavings" className="dark:text-white">Annual Savings ($/year)</Label>
            <Input
              id="annualSavings"
              name="annualSavings"
              type="number"
              value={annualSavings}
              onChange={(e) => setAnnualSavings(e.target.value)}
              required
              className="dark:text-white dark:bg-black"
            />
          </div>
        </div>
        <Button onClick={handleCalculate} className="mt-4 animate-fadeIn">Calculate</Button>
      </div>

      {projections && (
        <div className="mt-8 animate-slideIn">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div className="w-full">
              <Card className="h-[400px]">
                <CardHeader>
                  <CardTitle>Investment Growth</CardTitle>
                  <CardDescription>Projection over time</CardDescription>
                </CardHeader>
                <CardContent className="h-[240px]">
                  <ChartContainer config={chartConfig} className="h-[200px] w-full">
                    <LineChart
                      data={projections.graphData}
                      margin={{ top: 24, left: 24, right: 24 }}
                    >
                      <CartesianGrid vertical={false} />
                      <ChartTooltip
                        cursor={false}
                        content={
                          <ChartTooltipContent
                            indicator="line"
                            nameKey="investment"
                            hideLabel
                          />
                        }
                      />
                      <Line
                        dataKey="value"
                        type="natural"
                        stroke="var(--color-visitors)"
                        strokeWidth={2}
                        dot={({ payload, ...props }) => {
                          return (
                            <Dot
                              key={payload.age}
                              r={5}
                              cx={props.cx}
                              cy={props.cy}
                              fill= "#a3a3a3"
                              stroke={payload.fill}
                              
                            />
                          );
                        }}
                      />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2 text-sm">
                  <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="leading-none text-muted-foreground">
                    Showing total investment growth over time
                  </div>
                </CardFooter>
              </Card>
            </div>
            <div className="w-full mb-4">
              <h3 className="text-xl font-semibold dark:text-white mb-2">Investment Growth Table</h3>
              <table className="w-full border-collapse border border-gray-200 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700 ">
                    <th className="border border-gray-200 dark:border-gray-700 px-4 py-1 text-left dark:text-white">Age</th>
                    <th className="border border-gray-200 dark:border-gray-700 px-4  py-1 text-left dark:text-white">Investment Value ($)</th>
                  </tr>
                </thead>
                <tbody>
                  {projections.tableData.map((row, index) => (
                    <tr key={index} className="even:bg-gray-100 dark:even:bg-gray-800">
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 dark:text-white">{row.age}</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 dark:text-white">${row.investment.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <Card className="col-span-1">
              <CardContent>
                <div className='px-2 py-5 rounded-lg shadow-lg text-black dark:text-white'>
                  <div className='flex flex-col sm:flex-row justify-between w-full'>
                    <div className='w-full flex flex-col sm:pr-2 mb-4 sm:mb-0'>
                      <div className='border-b border-gray-900 dark:border-gray-300 pb-3 mb-3'>
                        <h3 className='text-lg font-semibold'>Notifications</h3>
                      </div>
                      <div className='flex flex-col gap-3'>
                        <div className='relative p-3 rounded bg-gray-100 dark:bg-gray-800 shadow-md border-l-4 border-green-500 flex justify-between items-center transition-transform transform hover:scale-105'>
                          <p className='m-0 flex-grow'>
                            <strong>Rent:</strong> Due on Jul 1 - $1,500.00
                          </p>
                          <span className='text-green-500 text-xs px-2 py-1 flex items-center justify-center' style={{ width: '80px', height: '24px' }}>On Time</span>
                        </div>
                        <div className='relative p-3 rounded bg-gray-100 dark:bg-gray-800 shadow-md border-l-4 border-green-500 flex justify-between items-center transition-transform transform hover:scale-105'>
                          <p className='m-0 flex-grow'>
                            <strong>Rent:</strong> Due on Jul 1 - $1,500.00
                          </p>
                          <span className='text-green-500 text-xs px-2 py-1 flex items-center justify-center' style={{ width: '80px', height: '24px' }}>On Time</span>
                        </div>
                        <div className='relative p-3 rounded bg-gray-100 dark:bg-gray-800 shadow-md border-l-4 border-blue-500 flex justify-between items-center transition-transform transform hover:scale-105'>
                          <p className='m-0 flex-grow'>
                            <strong>Credit Card:</strong> Due on Jul 15 - $423.45
                          </p>
                          <span className='text-blue-500 text-xs px-2 py-1 flex items-center justify-center' style={{ width: '80px', height: '24px' }}>Upcoming</span>
                        </div>
                        <div className='relative p-3 rounded bg-gray-100 dark:bg-gray-800 shadow-md border-l-4 border-red-500 flex justify-between items-center transition-transform transform hover:scale-105'>
                          <p className='m-0 flex-grow'>
                            <strong>Electricity:</strong> Due on Jul 20 - $125.00
                          </p>
                          <span className='text-red-500 text-xs px-2 py-1 flex items-center justify-center' style={{ width: '80px', height: '24px' }}>Due Soon</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardContent>
                <div className=' py-5 rounded-lg shadow-lg text-black dark:text-white'>
                  <div>
                    <h2 className="text-xl font-bold mb-4 ">Recommendations</h2>
                    <div className="space-y-2 ">
                      <div className="relative p-3 rounded bg-gray-100 dark:bg-gray-800 shadow-md flex justify-between items-center">
                        <p className="font-medium">Increase savings rate by 5%</p>
                      </div>
                      <div className="relative p-3 rounded bg-gray-100 dark:bg-gray-800 shadow-md flex justify-between items-center">
                        <p className="font-medium">Consider investing in higher yield assets</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Firecalculator;