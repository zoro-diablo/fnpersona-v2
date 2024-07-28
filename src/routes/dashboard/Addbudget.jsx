import BudgetGroup from '@/components/budget/BudgetGroup';

const Addbudget = () => {
    return (
        
            <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-1 sm:col-span-2 lg:col-span-4">
            <BudgetGroup />
          </div>
        </div>
      </div>
    );
  };
export default Addbudget;