import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { FaEllipsisV, FaTrash, FaEdit, FaEye } from 'react-icons/fa';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Goals = () => {
  const [goals, setGoals] = useState([
    { id: 1, name: 'Emergency Fund', targetAmount: 5000, currentAmount: 1500, deadline: '2024-12-31', contributions: [] },
    { id: 2, name: 'Vacation', targetAmount: 2000, currentAmount: 500, deadline: '2024-08-01', contributions: [] },
  ]);

  const [netWorth, setNetWorth] = useState(10000);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [viewingContributionsGoal, setViewingContributionsGoal] = useState(null);
  const [goalToDelete, setGoalToDelete] = useState(null);

  const handleAddGoal = () => {
    setSelectedGoal({ name: '', targetAmount: '', currentAmount: 0, deadline: '', contributions: [] });
    setIsEditMode(false);
  };

  const handleEditGoal = (goal) => {
    setSelectedGoal(goal);
    setIsEditMode(true);
  };

  const handleDeleteGoal = (goal) => {
    setGoalToDelete(goal); 
  };

  const handleConfirmDelete = () => {
    setGoals(goals.filter(goal => goal.id !== goalToDelete.id));
    setGoalToDelete(null); 
  };

  const handleCancelDelete = () => {
    setGoalToDelete(null); 
  };

  const handleSaveGoal = (goal) => {
    if (isEditMode) {
      setGoals(goals.map(g => (g.id === goal.id ? goal : g)));
    } else {
      setGoals([...goals, { ...goal, id: goals.length + 1 }]);
    }
    setSelectedGoal(null);
  };

  const handleContribution = (goalId, amount) => {
    setGoals(goals.map(goal => {
      if (goal.id === goalId) {
        const newAmount = goal.currentAmount + amount;
        const newContribution = { date: new Date().toISOString().split('T')[0], amount };
        return {
          ...goal,
          currentAmount: newAmount,
          contributions: [...goal.contributions, newContribution],
        };
      }
      return goal;
    }));
  };

  const handleViewContributions = (goal) => {
    setViewingContributionsGoal(goal);
  };

  const GoalForm = ({ goal, onSave, isEditMode }) => {
    const [formData, setFormData] = useState(goal);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onSave(formData);
    };

    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold dark:text-white">{isEditMode ? 'Edit Goal' : 'Add New Goal'}</h3>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-1">
            <Label htmlFor="name" className="dark:text-white">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="dark:text-white dark:bg-black"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="targetAmount" className="dark:text-white">Target Amount</Label>
            <Input
              id="targetAmount"
              name="targetAmount"
              type="number"
              value={formData.targetAmount}
              onChange={handleChange}
              required
              className="dark:text-white dark:bg-black"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="deadline" className="dark:text-white">Deadline</Label>
            <Input
              id="deadline"
              name="deadline"
              type="date"
              value={formData.deadline}
              onChange={handleChange}
              required
              className="dark:text-white  dark:bg-black"
            />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={() => onSave(null)} className="dark:text-white">
            Cancel
          </Button>
          <Button type="submit">{isEditMode ? 'Save Changes' : 'Add Goal'}</Button>
        </div>
      </form>
    );
  };

  const ContributionForm = ({ goal, onAddContribution }) => {
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (amount && !isNaN(amount)) {
        onAddContribution(goal.id, parseFloat(amount));
        setAmount('');
      }
    };

    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <div className="space-y-1">
          <Label htmlFor="contribution" className="dark:text-white ">Add Contribution</Label>
          <Input
            id="contribution"
            name="contribution"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="dark:text-white border border-black dark:bg-black"
          />
        </div>
        <Button type="submit">Add Contribution</Button>
      </form>
    );
  };

  const ContributionsList = ({ goal }) => (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold dark:text-white">Contributions for {goal.name}</h3>
      {goal.contributions.length > 0 ? (
        <ul>
          {goal.contributions.map((contribution, index) => (
            <li key={index} className="flex justify-between dark:text-white">
              <span>{contribution.date}</span>
              <span>${contribution.amount}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="dark:text-white">No contributions yet.</p>
      )}
    </div>
  );

  const calculateNetWorthImpact = (goal) => {
    return netWorth - (goal.targetAmount - goal.currentAmount);
  };

  return (
    <div className="container mt-6 py-8 px-4 md:px-6">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
        <header className="mb-8 md:mb-0">
          <h1 className="text-3xl font-bold dark:text-white">Goals</h1>
          <p className="text-muted-foreground dark:text-white/50">
            Set and track your financial goals.
          </p>
        </header>
        <Button size="lg" className="border-2" onClick={handleAddGoal}>
          Add New Goal
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {goals.map((goal) => (
          <Card key={goal.id} className="relative cursor-pointer hover:bg-muted ">
            <CardContent className="grid gap-2 p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold dark:text-white">{goal.name}</h3>
                <div className="flex items-center space-x-2">
                  <div className="text-primary font-semibold dark:text-white">${goal.currentAmount} / ${goal.targetAmount}</div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="p-1">
                        <FaEllipsisV />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleViewContributions(goal)}>
                        <FaEye className="mr-2 " />Contributions History
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleEditGoal(goal)}>
                        <FaEdit className="mr-2" /> Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDeleteGoal(goal)}>
                        <FaTrash className="mr-2" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <Progress value={(goal.currentAmount / goal.targetAmount) * 100} />
              <div className="text-sm text-muted-foreground dark:text-white">Deadline: {goal.deadline}</div>
              <div className="text-sm text-muted-foreground dark:text-white">
                Net Worth Impact if Achieved: ${calculateNetWorthImpact(goal)}
              </div>
              <ContributionForm goal={goal} onAddContribution={handleContribution} />
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedGoal && (
        <Dialog
          open={!!selectedGoal && !viewingContributionsGoal}
          onOpenChange={() => setSelectedGoal(null)}
          key={selectedGoal.id}
        >
          <DialogContent className="max-w-[425px] w-full mx-auto bg-white p-6 rounded-md shadow-md">
            <GoalForm goal={selectedGoal} onSave={handleSaveGoal} isEditMode={isEditMode} />
          </DialogContent>
        </Dialog>
      )}

      {viewingContributionsGoal && (
        <Dialog
          open={!!viewingContributionsGoal}
          onOpenChange={() => setViewingContributionsGoal(null)}
          key={viewingContributionsGoal.id}
        >
          <DialogContent className="max-w-[425px] w-full mx-auto bg-white p-6 rounded-md shadow-md">
            <ContributionsList goal={viewingContributionsGoal} />
          </DialogContent>
        </Dialog>
      )}

      {goalToDelete && (
        <Dialog
          open={!!goalToDelete}
          onOpenChange={() => setGoalToDelete(null)}
        >
          <DialogContent className="max-w-[425px] w-full mx-auto bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold dark:text-white">Confirm Delete Goal</h3>
            <p className="text-sm dark:text-white">Are you sure you want to delete this goal?</p>
            <div className="flex justify-end mt-4">
              <Button variant="outline" onClick={handleCancelDelete} className="dark:text-white">Cancel</Button>
              <Button onClick={handleConfirmDelete} className="ml-2">Confirm Delete</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Goals;
