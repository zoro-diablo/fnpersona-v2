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

export function BudgetComponent() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
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

  return (
    <div className='container mt-12 py-8'>
      <header className='flex items-center justify-between mb-6'>
        <h1 className='text-2xl font-bold dark:text-white'>
          Budget Management
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
                    <Label htmlFor='name'>Name</Label>
                    <Input
                      id='name'
                      name='name'
                      required
                      className='dark:text-white'
                    />
                  </div>
                  <div>
                    <Label htmlFor='budget'>Budget</Label>
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
            <Card key={category.id}>
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
                <div className='flex items-center gap-2 justify-between'>
                  <span className='text-lg font-bold'>
                    ${category.spent} / ${category.budget}
                  </span>
                  <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
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
                              <Label htmlFor='name'>Name</Label>
                              <Input
                                id='name'
                                name='name'
                                defaultValue={selectedCategory.name}
                                disabled
                                className='dark:text-white'
                              />
                            </div>
                            <div>
                              <Label htmlFor='budget'>Budget</Label>
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
            <Card key={category.id} className='relative'>
              <CardContent className='flex flex-col items-center justify-center gap-4 py-5'>
                <div className='text-2xl font-bold'>{category.name}</div>
                <div className='flex items-center gap-2'>
                  <span className='text-lg font-bold'>
                    ${category.spent} / ${category.budget}
                  </span>
                </div>
                <Progress value={(category.spent / category.budget) * 100} />
                  <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
                    <DialogTrigger asChild>
                      <Button
                        variant='outline'
                        className='w-full'
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
                          <DialogTitle className='text-white'>Edit Category</DialogTitle>
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
                              <Label htmlFor='name'>Name</Label>
                              <Input
                                id='name'
                                name='name'
                                defaultValue={selectedCategory.name}
                                disabled
                                className='text-white'
                              />
                            </div>
                            <div>
                              <Label htmlFor='budget'>Budget</Label>
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
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
