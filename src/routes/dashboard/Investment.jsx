'use client';
import { TrendingUp } from 'lucide-react';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';
import { useMemo } from 'react';
import { Label, Pie, PieChart } from 'recharts';
import { Button } from '@/components/ui/button';
import {
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Card } from '@/components/ui/card';

const invoices = [
  {
    name: 'Acct-1',
    Status: 'Linked',
    totalAmount: '$250.00',
    type: 'Brokerage',
  },
  {
    name: 'Acct-2',
    Status: 'Linked',
    totalAmount: '$150.00',
    type: 'Retirement',
  },
  { name: 'Acct-3', Status: 'Linked', totalAmount: '$350.00', type: 'Savings' },
];

const pieChartData = [
  { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
  { browser: 'firefox', visitors: 287, fill: 'var(--color-firefox)' },
  { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
  { browser: 'other', visitors: 190, fill: 'var(--color-other)' },
];

const lineChartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: { label: 'Desktop', color: 'hsl(var(--chart-1))' },
  mobile: { label: 'Mobile', color: 'hsl(var(--chart-2))' },
  visitors: { label: 'Visitors' },
  chrome: { label: 'Chrome', color: 'hsl(var(--chart-1))' },
  safari: { label: 'Safari', color: 'hsl(var(--chart-2))' },
  firefox: { label: 'Firefox', color: 'hsl(var(--chart-3))' },
  edge: { label: 'Edge', color: 'hsl(var(--chart-4))' },
  other: { label: 'Other', color: 'hsl(var(--chart-5))' },
};

const Investment = () => {
  const totalVisitors = useMemo(() => {
    return pieChartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <div className='container my-5'>
      <div className='flex justify-between items-center'>
      <header className="mb-8">
        <h1 className="text-3xl font-bold dark:text-white animate-fadeIn">Investments</h1>
        <p className="text-muted-foreground dark:text-white/50 animate-fadeIn">
          Calculate your path to Financial Independence and Early Retirement.
        </p>
      </header>
        <Button className='mb-4'>Link Investment Accounts</Button>
      </div>

      <Table>
        <TableCaption>List of your Linked Investment Accounts</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className='text-right'>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((account) => (
            <TableRow key={account.name}>
              <TableCell className='font-medium dark:text-gray-200'>
                {account.name}
              </TableCell>
              <TableCell className='font-medium dark:text-gray-200'>
                {account.Status}
              </TableCell>
              <TableCell className='font-medium dark:text-gray-200'>
                {account.type}
              </TableCell>
              <TableCell className='text-right dark:text-gray-200'>
                {account.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3} className='dark:text-gray-200'>
              Total
            </TableCell>
            <TableCell className='text-right dark:text-gray-200'>
              $750
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <div className='flex gap-4 mb-4 mt-8'>
        <Card className='flex-1 w-[50px] h-[380px]'>
          <CardHeader>
            <CardTitle>Pie Chart - Donut with Text</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent className='flex-1 pb-0'>
            <ChartContainer
              config={chartConfig}
              className='mx-auto w-[200px] h-[200px]'
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={pieChartData}
                  dataKey='visitors'
                  nameKey='browser'
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor='middle'
                            dominantBaseline='middle'
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className='fill-foreground text-xl font-bold'
                            >
                              {totalVisitors.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className='fill-muted-foreground'
                            >
                              Visitors
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className='flex-col gap-2 text-sm'>
            <div className='flex items-center gap-2 font-medium leading-none'>
              Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
            </div>
            <div className='leading-none text-muted-foreground'>
              Showing total visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>

        <Card className='flex-1 w-[300px] h-[380px]'>
          <CardHeader>
            <CardTitle>Line Chart - Dots</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className='w-full h-[200px]'>
              <LineChart data={lineChartData} margin={{ left: 12, right: 12 }}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey='month'
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Line
                  dataKey='desktop'
                  type='natural'
                  stroke='var(--color-desktop)'
                  strokeWidth={2}
                  dot={{ fill: 'var(--color-desktop)' }}
                  activeDot={{ r: 4 }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className='flex-col items-start gap-2 text-sm'>
            <div className='flex gap-2 font-medium leading-none'>
              Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
            </div>
            <div className='leading-none text-muted-foreground'>
              Showing total visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>
      </div>

      <Card className='w-full max-w-md'>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid gap-4'>
            <div className='flex items-center justify-between'>
              <h3 className='text-lg font-semibold'>Name</h3>
              <Badge
                variant='outline'
                className='text-green-500 border-green-500'
              >
                Confirmed
              </Badge>
            </div>
            <div className='flex items-center justify-between text-sm text-gray-500 dark:text-gray-400'>
              <div>Date: 27th July 2024</div>
              <div>Time: 1:00pm</div>
            </div>
            <div className='flex items-center justify-between font-medium'>
              <div>Total Cost:</div>
              <div>$1200</div>
            </div>
            <div className='flex items-center justify-between'>
              <Link
                href='#'
                className='text-blue-700 hover:underline'
                prefetch={false}
              >
                View Details
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Investment;
