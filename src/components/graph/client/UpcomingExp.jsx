import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  CalendarClockIcon,
  CalendarIcon,
  CreditCardIcon,
  PowerIcon,
} from 'lucide-react';
import React, { useState } from 'react';
import { addDays, format } from 'date-fns';

const UpcomingExp = () => {
  const expenses = [
    { type: 'Rent', date: new Date(2024, 5, 1), amount: 1500.00 },
    { type: 'Credit Card', date: new Date(2024, 5, 15), amount: 423.45 },
    { type: 'Electricity', date: new Date(2024, 5, 20), amount: 125.00 },
  ];

  const highlightedDates = expenses.map(expense => expense.date);
  const initialFocusDate = highlightedDates.length > 0 ? highlightedDates[0] : new Date();

  return (
    <Card className='dark:bg-black'>
      <CardHeader>
        <CardTitle className='text-lg'>Upcoming Expenses</CardTitle>
        <CardDescription className='text-[12px]'>Upcoming recurring bills and payments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid gap-4'>
          {expenses.map((expense, index) => (
            <div key={index} className='flex items-center gap-4'>
              <div className='flex h-10 w-10 items-center justify-center rounded-full bg-muted'>
                {expense.type === 'Rent' && <CalendarIcon className='h-5 w-5 text-muted-foreground' />}
                {expense.type === 'Credit Card' && <CreditCardIcon className='h-5 w-5 text-muted-foreground' />}
                {expense.type === 'Electricity' && <PowerIcon className='h-5 w-5 text-muted-foreground' />}
              </div>
              <div>
                <div className='font-medium text-md'>{expense.type}</div>
                <div className='text-sm text-muted-foreground dark:text-gray-400'>Due on {format(expense.date, 'MMM d')}</div>
              </div>
              <div className='ml-auto font-medium'>${expense.amount.toFixed(2)}</div>
            </div>
          ))}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant='outline'
                className='w-full justify-start text-left font-normal'
              >
                <CalendarClockIcon className='mr-2 h-4 w-4' />
                View Calendar
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0 bg-white bg-opacity-10 dark:bg-black dark:bg-opacity-10 backdrop-blur-lg border border-black border-opacity-30 dark:border-white dark:border-opacity-30 text-black dark:text-white rounded-lg z-50' align='end'>
              <Calendar 
                initialFocus 
                mode='range' 
                numberOfMonths={2} 
                selected={highlightedDates} 
                defaultMonth={initialFocusDate}
              />
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingExp;
