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
import React from 'react';

const ExerciseMinutes = () => {
  return (
    <Card className='dark:bg-black'>
      <CardHeader>
        <CardTitle>Upcoming Expenses</CardTitle>
        <CardDescription>Upcoming recurring bills and payments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid gap-4'>
          <div className='flex items-center gap-4'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-muted'>
              <CalendarIcon className='h-5 w-5 text-muted-foreground' />
            </div>
            <div>
              <div className='font-medium'>Rent</div>
              <div className='text-sm text-muted-foreground dark:text-gray-400'>Due on Jun 1</div>
            </div>
            <div className='ml-auto font-medium'>$1,500.00</div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-muted'>
              <CreditCardIcon className='h-5 w-5 text-muted-foreground' />
            </div>
            <div>
              <div className='font-medium'>Credit Card</div>
              <div className='text-sm text-muted-foreground dark:text-gray-400'>Due on Jun 15</div>
            </div>
            <div className='ml-auto font-medium'>$423.45</div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-muted'>
              <PowerIcon className='h-5 w-5 text-muted-foreground' />
            </div>
            <div>
              <div className='font-medium'>Electricity</div>
              <div className='text-sm text-muted-foreground dark:text-gray-400'>Due on Jun 20</div>
            </div>
            <div className='ml-auto font-medium'>$125.00</div>
          </div>
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
            <PopoverContent className='w-auto p-0' align='end'>
              <Calendar initialFocus mode='range' numberOfMonths={2} />
            </PopoverContent>
          </Popover>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExerciseMinutes;
