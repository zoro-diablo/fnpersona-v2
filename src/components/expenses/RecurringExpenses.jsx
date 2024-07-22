import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Checkbox } from "@/components/ui/checkbox";

const localizer = momentLocalizer(moment);

export function RecurringExpenses() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: 'Netflix Subscription',
      amount: 14.99,
      dueDate: '2024-07-15',
      frequency: 'Monthly',
      splitBill: false,
      participants: [],
    },
    {
      id: 2,
      name: 'Gym Membership',
      amount: 49.99,
      dueDate: '2024-07-01',
      frequency: 'Monthly',
      splitBill: false,
      participants: [],
    },
    {
      id: 3,
      name: 'Rent',
      amount: 1200.0,
      dueDate: '2024-07-01',
      frequency: 'Monthly',
      splitBill: true,
      participants: [
        { name: 'Alice', share: 600.0 },
        { name: 'Bob', share: 600.0 },
      ],
    },
    {
      id: 4,
      name: 'Internet',
      amount: 59.99,
      dueDate: '2024-07-20',
      frequency: 'Monthly',
      splitBill: true,
      participants: [
        { name: 'Alice', share: 30.0 },
        { name: 'Bob', share: 29.99 },
      ],
    },
  ]);

  const [selectedExpense, setSelectedExpense] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [hoveredExpenseId, setHoveredExpenseId] = useState(null);
  const [calendarEvent, setCalendarEvent] = useState(null);
  const [errors, setErrors] = useState({});

  const handleExpenseClick = (expense) => {
    setSelectedExpense({
      ...expense,
      participants: expense.participants || [],
    });
    setIsEditMode(true);
  };

  const handleCloseDetails = () => {
    setSelectedExpense(null);
    setIsEditMode(false);
    setCalendarEvent(null);
    setErrors({});
  };

  const handleAddExpense = () => {
    setSelectedExpense({
      name: '',
      amount: '',
      dueDate: '',
      frequency: '',
      splitBill: false,
      participants: [],
    });
    setIsEditMode(false);
  };

  const validateForm = (form) => {
    const newErrors = {};
    if (!form.name.value) newErrors.name = 'Name is required';
    if (!form.amount.value || isNaN(form.amount.value) || form.amount.value <= 0)
      newErrors.amount = 'Valid amount is required';
    if (!form.dueDate.value) newErrors.dueDate = 'Due date is required';
    if (!form.frequency.value) newErrors.frequency = 'Frequency is required';

    if (selectedExpense.splitBill) {
      selectedExpense.participants.forEach((participant, index) => {
        if (!participant.name) newErrors[`participantName${index}`] = 'Name is required';
        if (isNaN(participant.share) || participant.share <= 0)
          newErrors[`participantShare${index}`] = 'Valid share is required';
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveExpense = (e) => {
    e.preventDefault();
    const form = e.target;

    if (!validateForm(form)) return;

    const newExpense = {
      id: selectedExpense.id || expenses.length + 1,
      name: form.name.value,
      amount: parseFloat(form.amount.value),
      dueDate: form.dueDate.value,
      frequency: form.frequency.value,
      splitBill: form.splitBill.checked,
      participants: selectedExpense.participants,
    };

    if (isEditMode) {
      const updatedExpenses = expenses.map((expense) =>
        expense.id === newExpense.id ? newExpense : expense
      );
      setExpenses(updatedExpenses);
    } else {
      setExpenses([...expenses, newExpense]);
    }
    handleCloseDetails();
  };

  const handleDeleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  const handleParticipantChange = (index, key, value) => {
    const updatedParticipants = selectedExpense.participants.map(
      (participant, i) =>
        i === index ? { ...participant, [key]: key === 'share' ? parseFloat(value) : value } : participant
    );
    setSelectedExpense((prevExpense) => ({
      ...prevExpense,
      participants: updatedParticipants,
    }));
  };

  const handleAddParticipant = () => {
    setSelectedExpense((prevExpense) => ({
      ...prevExpense,
      participants: [...prevExpense.participants, { name: '', share: 0 }],
    }));
  };

  const handleRemoveParticipant = (index) => {
    const updatedParticipants = selectedExpense.participants.filter(
      (participant, i) => i !== index
    );
    setSelectedExpense((prevExpense) => ({
      ...prevExpense,
      participants: updatedParticipants,
    }));
  };

  const events = expenses.map((expense) => ({
    title: expense.name,
    start: new Date(expense.dueDate),
    end: new Date(expense.dueDate),
    allDay: true,
    resource: expense,
  }));

  const handleEventClick = (event) => {
    setCalendarEvent(event.resource);
  };

  const getReminders = () => {
    const today = moment();
    return expenses
      .map((expense) => {
        const dueDate = moment(expense.dueDate);
        const daysUntilDue = dueDate.diff(today, 'days');
        return {
          ...expense,
          daysUntilDue,
        };
      })
      .filter(
        (expense) => expense.daysUntilDue >= 0 && expense.daysUntilDue <= 7
      )
      .sort((a, b) => a.daysUntilDue - b.daysUntilDue);
  };

  const reminders = getReminders();

  return (
    <div className='container  py-8 px-4 md:px-6'>
      <div className='mb-8 flex flex-col md:flex-row justify-between items-center'>
        <header className='mb-8 md:mb-0'>
          <h1 className='text-2xl font-bold dark:text-white'>
            Recurring Expenses
          </h1>
          <p className='text-muted-foreground dark:text-white/50'>
            Manage and track your recurring expenses.
          </p>
        </header>
        <Button size='lg' className='border-2' onClick={handleAddExpense}>
          Add New Expense
        </Button>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {expenses.map((expense) => (
          <Card
            key={expense.id}
            className='relative cursor-pointer hover:bg-muted'
            onMouseEnter={() => setHoveredExpenseId(expense.id)}
            onMouseLeave={() => setHoveredExpenseId(null)}
          >
            <CardContent className='grid gap-2 p-5'>
              <div className='flex items-center justify-between'>
                <h3 className='text-lg font-semibold'>{expense.name}</h3>
                <div className='text-primary font-semibold'>
                  ${expense.amount.toFixed(2)}
                </div>
              </div>
              <div className='flex items-center justify-between text-sm text-muted-foreground'>
                <div>Due: {expense.dueDate}</div>
                <div>{expense.frequency}</div>
              </div>
              {expense.splitBill && (
                <div className='mt-2'>
                  <h4 className='text-sm font-semibold'>Participants:</h4>
                  <ul className='text-sm text-muted-foreground'>
                    {expense.participants.map((participant, index) => (
                      <li key={index}>
                        {participant.name}: ${parseFloat(participant.share).toFixed(2)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {hoveredExpenseId === expense.id && (
                <div className='absolute top-0 right-0 h-full grid items-center justify-center bg-gray-100  rounded-r-lg w-[20%]'>
                  <button
                    className='p-2 group'
                    onClick={() => handleExpenseClick(expense)}
                  >
                    <FaEdit
                      className='text-gray-600 mx-1 group-hover:text-black transition-colors duration-200'
                      size={22}
                    />
                  </button>
                  <button
                    className='p-2 group'
                    onClick={() => handleDeleteExpense(expense.id)}
                  >
                    <FaTrash
                      className='text-gray-600 mx-1 group-hover:text-red-600 transition-colors duration-200'
                      size={22}
                    />
                  </button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      {(selectedExpense || calendarEvent) !== null && (
        <Dialog open onOpenChange={handleCloseDetails}>
          <DialogContent className='sm:max-w-[425px] w-full mx-auto bg-white p-6 rounded-md shadow-md'>
            <form onSubmit={handleSaveExpense} className='flex flex-col gap-4'>
              <div className='flex items-center justify-between'>
                <h3 className='text-2xl font-semibold dark:text-white'>
                  {isEditMode ? 'Edit Expense' : 'Add New Expense'}
                </h3>
              </div>
              <div className='grid grid-cols-1 gap-4'>
                <div className='space-y-1'>
                  <Label htmlFor='name' className='dark:text-white'>
                    Name
                  </Label>
                  <Input
                    id='name'
                    name='name'
                    defaultValue={
                      selectedExpense?.name || calendarEvent?.name || ''
                    }
                    required
                    className='dark:text-white'
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div className='space-y-1'>
                  <Label htmlFor='amount' className='dark:text-white'>
                    Amount
                  </Label>
                  <Input
                    id='amount'
                    name='amount'
                    type='number'
                    step='0.01'
                    defaultValue={
                      selectedExpense?.amount || calendarEvent?.amount || ''
                    }
                    required
                    className='dark:text-white'
                  />
                  {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
                </div>
                <div className='space-y-1'>
                  <Label htmlFor='dueDate' className='dark:text-white'>
                    Due Date
                  </Label>
                  <Input
                    id='dueDate'
                    name='dueDate'
                    type='date'
                    defaultValue={
                      selectedExpense?.dueDate || calendarEvent?.dueDate || ''
                    }
                    required
                    className='dark:text-white'
                  />
                  {errors.dueDate && <p className="text-red-500 text-sm">{errors.dueDate}</p>}
                </div>
                <div className='space-y-1'>
                  <Label htmlFor='frequency' className='dark:text-white'>
                    Frequency
                  </Label>
                  <Input
                    id='frequency'
                    name='frequency'
                    defaultValue={
                      selectedExpense?.frequency ||
                      calendarEvent?.frequency ||
                      ''
                    }
                    required
                    className='dark:text-white'
                  />
                  {errors.frequency && <p className="text-red-500 text-sm">{errors.frequency}</p>}
                </div>
                <div className=' flex items-center'>
                  <Label htmlFor='splitBill' className='dark:text-white'>
                    Split Bill
                  </Label>
                  <input
                    id='splitBill'
                    name='splitBill'
                    type='checkbox'
                    defaultChecked={selectedExpense?.splitBill || false}
                    className='form-checkbox h-4 w-4 text-primary-600 transition duration-150 ease-in-out ml-2 cursor-pointer '
                    onChange={(e) =>
                      setSelectedExpense((prevExpense) => ({
                        ...prevExpense,
                        splitBill: e.target.checked,
                      }))
                    }
                  />
                </div>
                {selectedExpense?.splitBill && (
                  <div className='space-y-1'>
                    <Label className='dark:text-white mr-2'>Participants</Label>
                    {selectedExpense.participants.map((participant, index) => (
                      <div key={index} className='flex items-center gap-2'>
                        <Input
                          type='text'
                          placeholder='Name'
                          value={participant.name}
                          onChange={(e) =>
                            handleParticipantChange(
                              index,
                              'name',
                              e.target.value
                            )
                          }
                          required
                          className='dark:text-white'
                        />
                        {errors[`participantName${index}`] && <p className="text-red-500 text-sm">{errors[`participantName${index}`]}</p>}
                        <Input
                          type='number'
                          placeholder='Share'
                          step='0.01'
                          value={participant.share}
                          onChange={(e) =>
                            handleParticipantChange(
                              index,
                              'share',
                              e.target.value
                            )
                          }
                          required
                          className='dark:text-white'
                        />
                        {errors[`participantShare${index}`] && <p className="text-red-500 text-sm">{errors[`participantShare${index}`]}</p>}
                        <button
                          type='button'
                          onClick={() => handleRemoveParticipant(index)}
                          className='text-red-500 hover:text-red-700 transition duration-150 ease-in-out'
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      type='button'
                      onClick={handleAddParticipant}
                      className='text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out text-sm p-2'
                    >
                      Add Participant
                    </button>
                  </div>
                )}
              </div>
              <div className='flex justify-end gap-2'>
                <Button
                  variant='outline'
                  onClick={handleCloseDetails}
                  className='dark:text-white'
                >
                  Cancel
                </Button>
                <Button type='submit'>
                  {isEditMode ? 'Save Changes' : 'Add Expense'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      )}
      <div className='mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h2 className='text-2xl font-bold dark:text-white mb-2'>
            Calendar View
          </h2>
          <BigCalendar
            localizer={localizer}
            events={events}
            startAccessor='start'
            endAccessor='end'
            style={{ height: 500, backgroundColor: 'white', borderRadius: 5 }}
            onSelectEvent={handleEventClick}
          />
        </div>
        <div>
          <h2 className='text-2xl font-bold dark:text-white mb-2'>Reminders</h2>
          {reminders.length === 0 ? (
            <p className='text-muted-foreground dark:text-white/50'>
              No reminders for the next 7 days.
            </p>
          ) : (
            reminders.map((reminder) => (
              <Card key={reminder.id}>
                <CardContent className='grid gap-2 p-5'>
                  <div className='flex items-center justify-between'>
                    <div className='font-semibold'>{reminder.name}</div>
                    <div className='text-primary'>
                      {moment(reminder.dueDate).format('MMM DD')}
                    </div>
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    Reminder set for {reminder.daysUntilDue} day(s) before
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
