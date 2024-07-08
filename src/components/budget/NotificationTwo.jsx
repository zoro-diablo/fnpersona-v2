import { Card, CardContent } from '@/components/ui/card';

const notifications = [
  {
    type: 'Rent',
    dueDate: 'Jul 1',
    amount: '$1,500.00',
    status: 'On Time',
    borderColor: 'border-green-500',
    textColor: 'text-green-500',
  },
  {
    type: 'Rent',
    dueDate: 'Jul 1',
    amount: '$1,500.00',
    status: 'On Time',
    borderColor: 'border-green-500',
    textColor: 'text-green-500',
  },
  {
    type: 'Credit Card',
    dueDate: 'Jul 15',
    amount: '$423.45',
    status: 'Up coming',
    borderColor: 'border-blue-500',
    textColor: 'text-blue-500',
  },
  {
    type: 'Electricity',
    dueDate: 'Jul 20',
    amount: '$125.00',
    status: 'Due Soon',
    borderColor: 'border-red-500',
    textColor: 'text-red-500',
  },
];

const NotificationTwo = () => {
  return (
    <Card className='bg-white dark:bg-black h-full'>
      <CardContent>
        <div className='px-2 py-5 rounded-lg shadow-lg max-w-2xl bg-white dark:bg-black text-black dark:text-white'>
          <div className='flex flex-col sm:flex-row justify-between'>
            <div className='w-full flex flex-col sm:pr-2 mb-4 sm:mb-0'>
              <div className='border-b border-gray-600 dark:border-gray-300 pb-3 mb-3'>
                <h3 className='text-lg font-semibold'>Notifications</h3>
              </div>
              <div className='flex flex-col gap-3'>
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className={`relative p-3 rounded bg-gray-100 dark:bg-gray-800 shadow-md border-l-4 ${notification.borderColor} flex justify-between items-center transition-transform transform hover:scale-105`}
                  >
                    <p className='m-0 flex-grow'>
                      <strong>{notification.type}:</strong> Due on{' '}
                      {notification.dueDate} - {notification.amount}
                    </p>
                    <span
                      className={`${notification.textColor} text-xs px-2 py-1 flex items-center justify-center`}
                      style={{ width: '80px', height: '24px' }}
                    >
                      {notification.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationTwo;
