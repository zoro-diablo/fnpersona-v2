import React, { useState } from 'react';
import { Card, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const revenueData = [
  { name: 'Jan', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Feb', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Mar', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Apr', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'May', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Jun', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Jul', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Aug', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Sep', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Oct', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Nov', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Dec', total: Math.floor(Math.random() * 5000) + 1000 },
];

const expenseData = [
  { name: 'Jan', total: Math.floor(Math.random() * 4000) + 500 },
  { name: 'Feb', total: Math.floor(Math.random() * 4000) + 500 },
  { name: 'Mar', total: Math.floor(Math.random() * 4000) + 500 },
  { name: 'Apr', total: Math.floor(Math.random() * 4000) + 500 },
  { name: 'May', total: Math.floor(Math.random() * 4000) + 500 },
  { name: 'Jun', total: Math.floor(Math.random() * 4000) + 500 },
  { name: 'Jul', total: Math.floor(Math.random() * 4000) + 500 },
  { name: 'Aug', total: Math.floor(Math.random() * 4000) + 500 },
  { name: 'Sep', total: Math.floor(Math.random() * 4000) + 500 },
  { name: 'Oct', total: Math.floor(Math.random() * 4000) + 500 },
  { name: 'Nov', total: Math.floor(Math.random() * 4000) + 500 },
  { name: 'Dec', total: Math.floor(Math.random() * 4000) + 500 },
];

const savingsData = [
  { name: 'Jan', total: Math.floor(Math.random() * 3000) + 500 },
  { name: 'Feb', total: Math.floor(Math.random() * 3000) + 500 },
  { name: 'Mar', total: Math.floor(Math.random() * 3000) + 500 },
  { name: 'Apr', total: Math.floor(Math.random() * 3000) + 500 },
  { name: 'May', total: Math.floor(Math.random() * 3000) + 500 },
  { name: 'Jun', total: Math.floor(Math.random() * 3000) + 500 },
  { name: 'Jul', total: Math.floor(Math.random() * 3000) + 500 },
  { name: 'Aug', total: Math.floor(Math.random() * 3000) + 500 },
  { name: 'Sep', total: Math.floor(Math.random() * 3000) + 500 },
  { name: 'Oct', total: Math.floor(Math.random() * 3000) + 500 },
  { name: 'Nov', total: Math.floor(Math.random() * 3000) + 500 },
  { name: 'Dec', total: Math.floor(Math.random() * 3000) + 500 },
];

const budgetData = [
  { name: 'Jan', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Feb', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Mar', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Apr', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'May', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Jun', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Jul', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Aug', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Sep', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Oct', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Nov', total: Math.floor(Math.random() * 2000) + 500 },
  { name: 'Dec', total: Math.floor(Math.random() * 2000) + 500 },
];

export function Overview() {
  const [data, setData] = useState(revenueData);
  const [total, setTotal] = useState('$15,231.89');
  const [percentage, setPercentage] = useState('+20.1% last month');
  const [percentageColor, setPercentageColor] = useState('text-emerald-500');

  const handleTabChange = (value) => {
    let totalValue;
    let percentageValue;
    let percentageColorClass;
    switch (value) {
      case 'revenue':
        setData(revenueData);
        totalValue = revenueData.reduce((acc, item) => acc + item.total, 0).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        percentageValue = '+20.1% last month'; 
        percentageColorClass = 'text-emerald-500';
        break;
      case 'expense':
        setData(expenseData);
        totalValue = expenseData.reduce((acc, item) => acc + item.total, 0).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        percentageValue = '-5.2% last month'; 
        percentageColorClass = 'text-red-500';
        break;
      case 'savings':
        setData(savingsData);
        totalValue = savingsData.reduce((acc, item) => acc + item.total, 0).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        percentageValue = '+15.3% last month'; 
        percentageColorClass = 'text-emerald-500';
        break;
      case 'budget':
        setData(budgetData);
        totalValue = budgetData.reduce((acc, item) => acc + item.total, 0).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        percentageValue = '-10.0% last month'; 
        percentageColorClass = 'text-red-500';
        break;
      default:
        setData(revenueData);
        totalValue = revenueData.reduce((acc, item) => acc + item.total, 0).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        percentageValue = '+20.1% last month'; 
        percentageColorClass = 'text-emerald-500';
    }
    setTotal(totalValue);
    setPercentage(percentageValue);
    setPercentageColor(percentageColorClass);
  };

  return (
    <Card className='dark:bg-black p-5'>
      <div className='flex justify-between'>
        <CardTitle className='flex gap-1 items-center'>
          <div className='text-2xl font-bold'>{total}</div>
          <p className='text-[13px] font-medium text-muted-foreground dark:text-white/50'>
            <span className={`${percentageColor} font-semibold`}>{percentage}</span>
          </p>
        </CardTitle>
        <Tabs defaultValue='revenue' className='w-[310px]' onValueChange={handleTabChange}>
          <TabsList className='grid w-full grid-cols-4'>
            <TabsTrigger value='revenue'>Revenue</TabsTrigger>
            <TabsTrigger value='expense'>Expense</TabsTrigger>
            <TabsTrigger value='savings'>Savings</TabsTrigger>
            <TabsTrigger value='budget'>Budget</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className='p-2'>
        <ResponsiveContainer width='95%' height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey='name'
              stroke='#888888'
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke='#888888'
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Bar
              dataKey='total'
              fill='currentColor'
              radius={[4, 4, 0, 0]}
              className='fill-primary'
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
