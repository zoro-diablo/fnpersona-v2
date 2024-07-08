import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { category: 'Marketing', budget: 275, fill: '#e88d31' },
  { category: 'R&D', budget: 200, fill: '#2762d8' },
  { category: 'Sales', budget: 200, fill: '#e33671' },
  { category: 'Operations', budget: 287, fill: '#2fb88b' },
  { category: 'HR', budget: 173, fill: '#ae56db' },
  { category: 'Other', budget: 190, fill: '#e88d31' },
];

const chartConfig = {
  budget: {
    label: 'Budget',
  },
  Marketing: {
    label: 'Marketing',
    color: 'hsl(var(--chart-1))',
  },
  RD: {
    label: 'R&D',
    color: 'hsl(var(--chart-2))',
  },
  Sales: {
    label: 'Sales',
    color: 'hsl(var(--chart-3))',
  },
  Operations: {
    label: 'Operations',
    color: 'hsl(var(--chart-4))',
  },
  HR: {
    label: 'HR',
    color: 'hsl(var(--chart-5))',
  },
  Other: {
    label: 'Other',
    color: 'hsl(var(--chart-6))',
  },
};

const BudgetDistri = () => {
  const totalBudget = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.budget, 0);
  }, []);

  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle className='text-xl'>Overall Budget Distribution  </CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className='flex-1 pb-0 dark:text-white'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[250px] dark:text-white '
        >
          <PieChart className='dark:text-white'>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
              className='dark:text-white'
            />
            <Pie
              data={chartData}
              dataKey='budget'
              nameKey='category'
              innerRadius={60}
              strokeWidth={5}
              className='dark:text-white'
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
                        className='dark:text-white'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='dark:text-white text-3xl font-bold'
                        >
                          {totalBudget.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='dark:text-white'
                        >
                          Budget
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
        <div className='leading-none text-muted-foreground text-center'>
          Showing overall budget distribution for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export default BudgetDistri;
