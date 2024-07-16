import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
          <h2 className="text-2xl font-semibold dark:text-white">Projections</h2>
          {milestoneMessage && (
            <p className="text-green-500 dark:text-green-400 font-semibold animate-pulse">{milestoneMessage}</p>
          )}
          <div className="mt-4">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={projections.graphData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-8 ">
            <h3 className="text-xl font-semibold dark:text-white">Investment Growth Table</h3>
            <table className="mt-4 w-[600px] border-collapse border border-gray-200 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left dark:text-white ">Age</th>
                  <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left dark:text-white flex justify-center">Investment Value ($)</th>
                </tr>
              </thead>
              <tbody>
                {projections.tableData.map((row, index) => (
                  <tr key={index} className="even:bg-gray-100 dark:even:bg-gray-800">
                    <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 dark:text-white">{row.age}</td>
                    <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 dark:text-white flex justify-center">${row.investment.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Firecalculator;
