import { DollarSign, ArrowUpRight, ArrowDownRight, Coins } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { GiExpense } from 'react-icons/gi';

const BudgetCards = () => {
  return (
    <div className='grid gap-3'>
      <Card className='dark:bg-black'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Total Income</CardTitle>
          <DollarSign className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>$45,231.89</div>
          <div className='flex items-center space-x-1'>
            <ArrowUpRight className='h-3 w-3 text-green-500' />
            <p className='text-xs text-muted-foreground'>+20.1% from last month</p>
          </div>
        </CardContent>
      </Card>
      <Card className='dark:bg-black'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Total Expense</CardTitle>
          <GiExpense className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>$32,123.45</div>
          <div className='flex items-center space-x-1'>
            <ArrowUpRight className='h-3 w-3 text-green-500' />
            <p className='text-xs text-muted-foreground'>+15.3% from last month</p>
          </div>
        </CardContent>
      </Card>
      <Card className='dark:bg-black'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-sm font-medium'>Remaining Budget</CardTitle>
          <Coins className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold text-red-500'>-$3,108.44</div>
          <div className='flex items-center space-x-1'>
            <ArrowDownRight className='h-3 w-3 text-red-500' />
            <p className='text-xs text-muted-foreground'>-5.7% from last month</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default BudgetCards;
