import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CalendarIcon, DeleteIcon, Edit } from 'lucide-react';
import { MdDelete } from 'react-icons/md';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { cn } from '@/lib/utils';
import { addDays, format } from 'date-fns';
import { Calendar } from '../ui/calendar';

export function BudgetComponent() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [view, setView] = useState('list');
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Marketing',
      budget: 5000,
      spent: 3500,
      showDetails: false,
    },
    {
      id: 2,
      name: 'Engineering',
      budget: 10000,
      spent: 8000,
      showDetails: false,
    },
    {
      id: 3,
      name: 'Design',
      budget: 3000,
      spent: 2000,
      showDetails: false,
    },
  ]);

  const handleCreateCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
    setShowCreateModal(false);
  };

  const handleEditCategory = (updatedCategory) => {
    setCategories(
      categories.map((category) =>
        category.id === updatedCategory.id ? updatedCategory : category
      )
    );
    setShowEditModal(false);
  };

  const handleDeleteCategory = () => {
    setCategories(
      categories.filter((category) => category.id !== selectedCategory.id)
    );
    setShowDeleteModal(false);
    setSelectedCategory(null);
  };

  return (
    <div>
      <h1 className='text-2xl font-bold dark:text-white container'>Budget Overview</h1>
      <div>
        
      </div>
      <div className=' mt-2 py-4 container'>
        <header className='flex items-center justify-between mb-6'>
          <h1 className='text-2xl font-bold dark:text-white'>
            <DatePickerWithRange />
          </h1>
          <div className='flex items-center gap-4'>
            <Button
              variant={view === 'list' ? 'outline' : 'primary'}
              onClick={() => setView('list')}
              className='dark:text-white'
            >
              List View
            </Button>
            <Button
              variant={view === 'grid' ? 'outline' : 'primary'}
              onClick={() => setView('grid')}
              className='dark:text-white'
            >
              Grid View
            </Button>
            <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
              <DialogTrigger asChild>
                <Button onClick={() => setShowCreateModal(true)}>
                  Create New Category
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className='dark:text-white'>
                    Create New Category
                  </DialogTitle>
                </DialogHeader>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const newCategory = {
                      id: categories.length + 1,
                      name: e.target.name.value,
                      budget: parseFloat(e.target.budget.value),
                      spent: 0,
                      showDetails: false,
                    };
                    handleCreateCategory(newCategory);
                  }}
                >
                  <div className='grid gap-4'>
                    <div>
                      <Label htmlFor='name' className='dark:text-white'>
                        Name
                      </Label>
                      <Input
                        id='name'
                        name='name'
                        required
                        className='dark:text-white'
                      />
                    </div>
                    <div>
                      <Label htmlFor='budget' className='dark:text-white'>
                        Budget
                      </Label>
                      <Input
                        id='budget'
                        name='budget'
                        type='number'
                        min='0'
                        required
                        className='dark:text-white'
                      />
                    </div>
                    <div className='flex justify-center'>
                      <Button type='submit'>Create Category</Button>
                    </div>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </header>
        {view === 'list' ? (
          <div className='space-y-4 overflow-y-auto max-h-[600px]'>
            {categories.map((category) => (
              <Card key={category.id} className='dark:bg-black'>
                <CardHeader>
                  <div className='flex justify-between'>
                    <CardTitle className='font-medium text-xl'>
                      {category.name}
                    </CardTitle>
                    <MdDelete
                      size={21}
                      className='hover:text-red-500 cursor-pointer'
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowDeleteModal(true);
                      }}
                    />
                  </div>
                  <div className='flex items-center gap-2 justify-between'>
                    <span className='text-lg font-bold'>
                      ${category.spent} / ${category.budget}
                    </span>
                    <Dialog
                      open={showEditModal}
                      onOpenChange={setShowEditModal}
                    >
                      <DialogTrigger asChild>
                        <Button
                          variant='outline'
                          size='sm'
                          onClick={() => {
                            setSelectedCategory(category);
                            setShowEditModal(true);
                          }}
                        >
                          Edit
                        </Button>
                      </DialogTrigger>
                      {selectedCategory && (
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className='dark:text-white'>
                              Edit Category
                            </DialogTitle>
                          </DialogHeader>
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              const updatedCategory = {
                                ...selectedCategory,
                                budget: parseFloat(e.target.budget.value),
                              };
                              handleEditCategory(updatedCategory);
                            }}
                          >
                            <div className='grid gap-4'>
                              <div>
                                <Label
                                  htmlFor='name'
                                  className='dark:text-white'
                                >
                                  Name
                                </Label>
                                <Input
                                  id='name'
                                  name='name'
                                  defaultValue={selectedCategory.name}
                                  disabled
                                  className='dark:text-white'
                                />
                              </div>
                              <div>
                                <Label
                                  htmlFor='budget'
                                  className='dark:text-white'
                                >
                                  Budget
                                </Label>
                                <Input
                                  id='budget'
                                  name='budget'
                                  type='number'
                                  min='0'
                                  defaultValue={selectedCategory.budget}
                                  required
                                  className='dark:text-white'
                                />
                              </div>
                              <div className='flex justify-center'>
                                <Button type='submit'>Update Category</Button>
                              </div>
                            </div>
                          </form>
                        </DialogContent>
                      )}
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <Progress value={(category.spent / category.budget) * 100} />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {categories.map((category) => (
              <Card key={category.id} className='relative dark:bg-black'>
                <CardContent className='flex flex-col items-center justify-center gap-4 py-5'>
                  <div className='text-2xl font-bold'>{category.name}</div>
                  <div className='flex items-center gap-2'>
                    <span className='text-lg font-bold'>
                      ${category.spent} / ${category.budget}
                    </span>
                  </div>
                  <Progress value={(category.spent / category.budget) * 100} />
                  <div className='flex justify-between items-center w-full'>
                    <Dialog
                      open={showEditModal}
                      onOpenChange={setShowEditModal}
                    >
                      <DialogTrigger asChild>
                        <Edit
                          variant='outline'
                          className='hover:opacity-85 cursor-pointer'
                          size={20}
                          onClick={() => {
                            setSelectedCategory(category);
                            setShowEditModal(true);
                          }}
                        >
                          Edit
                        </Edit>
                      </DialogTrigger>
                      {selectedCategory && (
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className='text-white'>
                              Edit Category
                            </DialogTitle>
                          </DialogHeader>
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              const updatedCategory = {
                                ...selectedCategory,
                                budget: parseFloat(e.target.budget.value),
                              };
                              handleEditCategory(updatedCategory);
                            }}
                          >
                            <div className='grid gap-4'>
                              <div>
                                <Label
                                  htmlFor='name'
                                  className='dark:text-white'
                                >
                                  Name
                                </Label>
                                <Input
                                  id='name'
                                  name='name'
                                  defaultValue={selectedCategory.name}
                                  disabled
                                  className='text-white'
                                />
                              </div>
                              <div>
                                <Label
                                  htmlFor='budget'
                                  className='dark:text-white'
                                >
                                  Budget
                                </Label>
                                <Input
                                  id='budget'
                                  name='budget'
                                  type='number'
                                  className='text-white'
                                  min='0'
                                  defaultValue={selectedCategory.budget}
                                  required
                                />
                              </div>
                              <div className='flex justify-center'>
                                <Button type='submit'>Update Category</Button>
                              </div>
                            </div>
                          </form>
                        </DialogContent>
                      )}
                    </Dialog>
                    <MdDelete
                      className='cursor-pointer hover:text-red-400 '
                      size={22}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowDeleteModal(true);
                      }}
                    >
                      Delete
                    </MdDelete>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        <Dialog open={showDeleteModal} onOpenChange={setShowDeleteModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className='dark:text-white'>
                Confirm Deletion
              </DialogTitle>
            </DialogHeader>
            <div className='grid gap-4'>
              <p className='dark:text-white'>
                Are you sure you want to delete the category"
                {selectedCategory?.name}"?
              </p>
              <div className='flex justify-center gap-4'>
                <Button
                  variant='outline'
                  onClick={() => setShowDeleteModal(false)}
                  className='dark:text-white'
                >
                  Cancel
                </Button>
                <Button variant='destructive' onClick={handleDeleteCategory}>
                  Delete
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export function DatePickerWithRange({ className }) {
  const [date, setDate] = useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id='date'
            variant={'outline'}
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} -{' '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            initialFocus
            mode='range'
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            className='dark:bg-[#27272a] dark:text-white border-none outline-none bg-white '
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
