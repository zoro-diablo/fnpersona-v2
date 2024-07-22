import { Card, CardContent } from "../ui/card";

const NotificationAlert = () => {
  const notifications = [
    {
      id: 1,
      message: 'Your goal "Emergency Fund" is 30% away from completion.',
    },
    { id: 2, message: 'Reminder: Your goal "Vacation" is due on 2024-08-01.' },
  ];

  const alerts = [
    {
      id: 1,
      message: 'You have an upcoming deadline for your goal "Vacation".',
    },
  ];

  const NotificationCard = ({ notification }) => (
    <Card className='relative cursor-pointer hover:bg-muted '>
      <CardContent className='grid gap-2 p-5'>
        <div className='text-sm text-muted-foreground dark:text-white'>
          {notification.message}
        </div>
      </CardContent>
    </Card>
  );

  const AlertCard = ({ alert }) => (
    <Card className='relative cursor-pointer hover:bg-muted '>
      <CardContent className='grid gap-2 p-5'>
        <div className='text-sm text-muted-foreground dark:text-white'>
          {alert.message}
        </div>
      </CardContent>
    </Card>
  );
  return (
    <div>
      <div className='mb-8 mt-5'>
        <h3 className='text-2xl font-semibold mb-4 dark:text-white'>
          Notifications
        </h3>
        {notifications.map((notification) => (
          <NotificationCard key={notification.id} notification={notification} />
        ))}
      </div>

      <div className='mb-8'>
        <h3 className='text-2xl font-semibold mb-4 dark:text-white'>Alerts</h3>
        {alerts.map((alert) => (
          <AlertCard key={alert.id} alert={alert} />
        ))}
      </div>
    </div>
  );
};
export default NotificationAlert;
