import { TrendingUp } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';


const netWorthData = [
  { name: 'Jan', netWorth: 15000 },
  { name: 'Feb', netWorth: 16000 },
  { name: 'Mar', netWorth: 15500 },
  { name: 'Apr', netWorth: 16500 },
  { name: 'May', netWorth: 17000 },
  { name: 'Jun', netWorth: 17500 },
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

const NetWorthImpactChart = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Net Worth Impact Graph</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='h-[200px]'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart
              data={netWorthData}
              margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
            >
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type='monotone'
                strokeWidth={4}
                dataKey='netWorth'
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
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        <div className='flex gap-2 font-medium leading-none'>
          Profit up by 5.2% this month <TrendingUp className='h-4 w-4' />
        </div>
        <div className='leading-none text-muted-foreground'>
          Showing net worth impact for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export default NetWorthImpactChart;
