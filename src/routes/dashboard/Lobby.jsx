import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CardsStats from '@/components/graph/client/CardsStats';
import ExerciseMinutes from '@/components/graph/client/ExerciseMinutes';
import TabPie from '@/components/graph/client/TabPie';

const Lobby = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
      <div className='md:col-span-2 lg:col-span-3'>
        <CardsStats />
      </div>
      <div className='row-span-2'>
        <TabPie />
      </div>
      <div className='col-span-1'>
        <ExerciseMinutes />
      </div>
    </div>
  );
};

export default Lobby;
