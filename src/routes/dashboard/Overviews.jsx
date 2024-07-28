import BudgetCards from '@/components/budget/BudgetCards';
import NotificationTwo from '@/components/budget/NotificationTwo';
import { BudgetBarGraph } from '@/components/graph/client/BudgetBarGraph';
import BudgetDistri from '@/components/graph/client/BudgetDistri';
import BudgetExp from '@/components/graph/client/BudgetExp';

const Overviews = () => {
  return (
    
      <div className="container mx-auto p-4">
      <div className="text-2xl font-semibold mt-5 dark:text-white">Budget Overview</div>
      <p className="text-muted-foreground mb-4 mt-1 dark:text-white/50">
        Get a clear snapshot of your spending and savings.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="col-span-1 sm:col-span-2 lg:col-span-4"></div>
        <div className="col-span-1">
          <BudgetCards />
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
          <BudgetBarGraph />
        </div>
        <div className="col-span-1">
          <BudgetDistri />
        </div>
        <div className="col-span-1">
          <BudgetExp />
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
          <NotificationTwo />
        </div>
      </div>
    </div>  
  );
};

export default Overviews;
