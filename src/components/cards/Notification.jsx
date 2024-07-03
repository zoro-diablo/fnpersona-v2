import { Card, CardContent } from '@/components/ui/card';

const Notification = () => {
  return (
    <Card className='bg-white dark:bg-black'>
      <CardContent>
        <div className='px-2 py-5  rounded-lg shadow-lg max-w-2xl bg-white dark:bg-black text-black dark:text-white'>
          <div className='flex flex-col sm:flex-row justify-between'>
            <div className='w-full flex flex-col sm:pr-2 mb-4 sm:mb-0'>
              <div className='border-b border-gray-600 dark:border-gray-300 pb-3 mb-3'>
                <h3 className='text-lg font-semibold'>Notifications</h3>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='relative p-3 rounded bg-gray-100 dark:bg-gray-800 shadow-md border-l-4 border-green-500 flex justify-between items-center transition-transform transform hover:scale-105'>
                  <p className='m-0 flex-grow'>
                    <strong>Rent:</strong> Due on Jul 1 - $1,500.00
                  </p>
                  <span
                    className='text-green-500 text-xs px-2 py-1 flex items-center justify-center'
                    style={{ width: '80px', height: '24px' }}
                  >
                    On Time
                  </span>
                </div>
                <div className='relative p-3 rounded bg-gray-100 dark:bg-gray-800 shadow-md border-l-4 border-green-500 flex justify-between items-center transition-transform transform hover:scale-105'>
                  <p className='m-0 flex-grow'>
                    <strong>Rent:</strong> Due on Jul 1 - $1,500.00
                  </p>
                  <span
                    className='text-green-500 text-xs px-2 py-1 flex items-center justify-center'
                    style={{ width: '80px', height: '24px' }}
                  >
                    On Time
                  </span>
                </div>
                <div className='relative p-3 rounded bg-gray-100 dark:bg-gray-800 shadow-md border-l-4 border-blue-500 flex justify-between items-center transition-transform transform hover:scale-105'>
                  <p className='m-0 flex-grow'>
                    <strong>Credit Card:</strong> Due on Jul 15 - $423.45
                  </p>
                  <span
                    className='text-blue-500 text-xs px-2 py-1 flex items-center justify-center'
                    style={{ width: '80px', height: '24px' }}
                  >
                    Up coming
                  </span>
                </div>
                <div className='relative p-3 rounded bg-gray-100 dark:bg-gray-800 shadow-md border-l-4 border-red-500 flex justify-between items-center transition-transform transform hover:scale-105'>
                  <p className='m-0 flex-grow'>
                    <strong>Electricity:</strong> Due on Jul 20 - $125.00
                  </p>
                  <span
                    className='text-red-500 text-xs px-2 py-1 flex items-center justify-center'
                    style={{ width: '80px', height: '24px' }}
                  >
                    Due Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Notification;
