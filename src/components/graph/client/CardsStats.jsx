import * as React from 'react';
import { Minus, Plus } from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FaMoneyBill } from 'react-icons/fa';
import { GiExpense } from 'react-icons/gi';

const revenueData = [
  { name: 'Page A', revenue: 4000, subscription: 2400 },
  { name: 'Page B', revenue: 3000, subscription: 1398 },
  { name: 'Page C', revenue: 2000, subscription: 9800 },
  { name: 'Page D', revenue: 2780, subscription: 3908 },
  { name: 'Page E', revenue: 1890, subscription: 4800 },
  { name: 'Page F', revenue: 2390, subscription: 3800 },
  { name: 'Page G', revenue: 3490, subscription: 4300 },
];

const goalData = [
  { goal: 400 },
  { goal: 300 },
  { goal: 200 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 239 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 349 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: 'black',
          borderRadius: '8px',
          border: '1px solid lightgray',
          padding: '8px',
          color: 'white',
          fontSize: '12px',
        }}
      >
        <p className='label'>{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

function CardsStats() {
  return (
    <div className='grid gap-6 lg:grid-cols-2 xl:grid-cols-2'>
      <Card className='dark:bg-black' style={{ height: '250px' }}>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-md font-medium'>Total Net Worth</CardTitle>
          <CardTitle className='text-3xl font-medium text-emerald-400'>
            <FaMoneyBill />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-4xl font-bold'>$15,231.89</div>
          <p className='text-[13px] font-medium text-muted-foreground dark:text-white/50'>
            <span className='text-emerald-500 font-semibold'>+20.1%</span> last
            month
          </p>
          <div className='h-[150px] my-4'>
            <ResponsiveContainer width='100%' height='70%'>
              <LineChart
                data={revenueData}
                margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
              >
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type='monotone'
                  strokeWidth={2}
                  dataKey='revenue'
                  activeDot={{
                    r: 6,
                    style: { fill: '#1f77b4', opacity: 0.25 },
                  }}
                  stroke='#18191a'
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card className='dark:bg-black' style={{ height: '250px' }}>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-md font-medium'>Budget Overview</CardTitle>
          <CardTitle className='text-3xl font-medium text-red-500'>
            <GiExpense />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-4xl font-bold'>$231.89</div>
          <p className='text-[13px] font-medium text-muted-foreground dark:text-white/50'>
            <span className='text-red-500 font-semibold'>- 9.1%</span> last
            month
          </p>
          <div className='mt-4 h-[150px]'>
            <ResponsiveContainer width='100%' height='70%'>
              <BarChart data={revenueData}>
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey='subscription' fill='#18191a' />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardsStats;
