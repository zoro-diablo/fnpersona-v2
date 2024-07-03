import { Card } from '../ui/card';
import { ImStarFull } from 'react-icons/im';
import { MdSignalCellularAlt } from 'react-icons/md';
import { GiBullseye } from 'react-icons/gi';
import { Progress } from '@radix-ui/react-progress';

const Goals = () => {
  return (
    <Card className='dark:bg-black p-5'>
      <div className='flex justify-between '>
        <div>Month to date</div>
        <div>
          <ImStarFull />
        </div>
      </div>
      <div className='flex justify-center flex-col items-center gap-y-2'>
        <p className='text-xl font-semibold'>Sessions</p>
        <div className='flex gap-2'>
          <div className=' '>
            <MdSignalCellularAlt
              className='bg-white rounded-full p-1 text-black'
              size={23}
            />
          </div>
          <p>My Website</p>
        </div>
        <p className='text-4xl font-bold'>76%</p>
      </div>
      <div className='flex justify-between'>
        <p className='font-semibold'>6,890</p>
        <div className='flex gap-2 items-center text-gray-400'>
          <div>
            <GiBullseye className=' text-gray-400' size={22} />
          </div>
          <div className=' font-medium'>8000</div>
        </div>
      </div>
      <div className='my-3 '>
      <Progress value={20} color="indigo" />
      </div>

      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <div>icon</div>
          <div>8000</div>
        </div>
        <div className='flex gap-2'>
          <div>icon</div>
          <div>8000</div>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <div>icon</div>
          <div>8000</div>
        </div>
        <div className='flex gap-2'>
          <div>icon</div>
          <div>8000</div>
        </div>
      </div>
    </Card>
  );
};

export default Goals;
