import React, { useState, useEffect } from 'react';
import { Card } from '../ui/card';
import { ImStarFull } from 'react-icons/im';
import { MdSignalCellularAlt } from 'react-icons/md';
import { GiBullseye } from 'react-icons/gi';
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight, FaTag } from 'react-icons/fa';

const IconComponent = ({ percentage, variant }) => {
  const isPositive = variant === 'positive';

  return (
    <div
      className={`inline-flex gap-2 self-end rounded p-1 text-${isPositive ? 'green' : 'red'}-600 bg-${isPositive ? 'green' : 'red'}-100`}
    >
      {isPositive ? (
        <FaArrowUp className='h-4 w-4' />
      ) : (
        <FaArrowDown className='h-4 w-4' />
      )}
      <span className='text-xs font-semibold'> {percentage}% </span>
    </div>
  );
};

const goalsData = [
  {
    title: 'Sessions',
    percentage: 76,
    current: 6890,
    goal: 8000,
    progress: 76,
    variant: 'positive',
    changePercentage: 34.1,
    daysLeft: 13,
  },
  {
    title: 'Conversions',
    percentage: 54,
    current: 4320,
    goal: 8000,
    progress: 54,
    variant: 'negative',
    changePercentage: -12.3,
    daysLeft: 13,
  },
  {
    title: 'New Users',
    percentage: 45,
    current: 3600,
    goal: 8000,
    progress: 45,
    variant: 'negative',
    changePercentage: -18.5,
    daysLeft: 13,
  },
  {
    title: 'Revenue',
    percentage: 82,
    current: 8200,
    goal: 10000,
    progress: 82,
    variant: 'positive',
    changePercentage: 22.5,
    daysLeft: 13,
  },
];

const Goals = () => {
  const [currentGoalIndex, setCurrentGoalIndex] = useState(0);
  const [starredGoals, setStarredGoals] = useState({});
  const [taggedGoals, setTaggedGoals] = useState({});
  const currentGoal = goalsData[currentGoalIndex];

  const handlePrevGoal = () => {
    setCurrentGoalIndex((prevIndex) =>
      prevIndex === 0 ? goalsData.length - 1 : prevIndex - 1
    );
  };

  const handleNextGoal = () => {
    setCurrentGoalIndex((prevIndex) =>
      prevIndex === goalsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleStar = () => {
    setStarredGoals((prev) => ({
      ...prev,
      [currentGoalIndex]: !prev[currentGoalIndex],
    }));
  };

  const toggleTag = () => {
    setTaggedGoals((prev) => ({
      ...prev,
      [currentGoalIndex]: !prev[currentGoalIndex],
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextGoal();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className='dark:bg-black p-5 h-full flex flex-col justify-between'>
      <div>
        <div className='flex justify-between mb-4'>
          <div>Month to date</div>
          <div onClick={toggleStar}>
            <ImStarFull
              className={starredGoals[currentGoalIndex] ? 'text-gold' : 'text-gray-400'}
            />
          </div>
        </div>
        <div className='flex justify-center items-center gap-x-10 mb-2'>
          <button onClick={handlePrevGoal}>
            <FaArrowLeft />
          </button>
          <div className='flex flex-col items-center gap-y-2'>
            <p className='text-xl font-semibold'>{currentGoal.title}</p>
            <div className='flex gap-2 items-center'>
              <MdSignalCellularAlt
                className='bg-white rounded-full p-1 text-black'
                size={23}
              />
              <p>My Website</p>
            </div>
            <p className={`text-4xl font-bold ${currentGoal.variant === 'positive' ? 'text-emerald-400' : 'text-red-400'}`}>
              {currentGoal.percentage}%
            </p>
          </div>
          <button onClick={handleNextGoal}>
            <FaArrowRight />
          </button>
        </div>
        <div className='flex justify-between mb-4'>
          <p className='font-semibold'>{currentGoal.current}</p>
          <div className='flex gap-2 items-center text-gray-400'>
            <GiBullseye className='text-gray-400' size={22} />
            <div className='font-medium'>{currentGoal.goal}</div>
          </div>
        </div>
        <div className='mb-4'>
          <div>
            <span id='ProgressLabel' className='sr-only'>
              Loading
            </span>
            <span
              role='progressbar'
              aria-labelledby='ProgressLabel'
              aria-valuenow={currentGoal.progress}
              className='block rounded-full bg-gray-200'
            >
              <span
                className={`block h-3 rounded-full ${currentGoal.variant === 'positive' ? 'bg-emerald-500' : 'bg-red-500'}`}
                style={{ width: `${currentGoal.progress}%` }}
              ></span>
            </span>
          </div>
        </div>
        <div className='flex justify-between py-2'>
          <div className='flex gap-2 items-center'>
            <IconComponent
              percentage={currentGoal.changePercentage}
              variant={currentGoal.variant}
            />
            <p className='text-sm'>
              {currentGoal.changePercentage > 0 ? 'above' : 'below'} Goal
            </p>
          </div>
          <div className='flex gap-1 items-center'>
            <p className='text-sm'>{currentGoal.daysLeft} days left</p>
          </div>
        </div>
      </div>
      <div className='flex justify-end gap-2 items-center' onClick={toggleTag}>
        <FaTag size={16} className={taggedGoals[currentGoalIndex] ? 'text-blue-500' : ''} />
        <p>Tagged</p>
      </div>
    </Card>
  );
};

export default Goals;
