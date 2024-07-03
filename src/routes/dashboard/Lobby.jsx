import UpcomingExp from '@/components/graph/client/UpcomingExp';
import TabPie from '@/components/graph/client/TabPie';
import Goals from '@/components/cards/Goals';
import NetWorthCard from '@/components/graph/client/NetWorthCard';
import BudgetOverviewCard from '@/components/graph/client/BudgetOverviewCard';
import { Overview } from '@/components/graph/client/Overview';

const Lobby = () => {
  return (
    <div className='h-[89vh] overflow-hidden grid grid-cols-4 gap-3'>
      <div className='col-span-3'>
        <div className='flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          <div className='col-span-3'>
            <div className='grid grid-cols-4 gap-3'>
              <NetWorthCard />
              <BudgetOverviewCard />
              <div className='col-span-2'>
                <Goals />
              </div>
            </div>
          </div>
          <div className='col-span-2'>
            <Overview />
          </div>
        </div>
      </div>
      <div>
        <TabPie className='col-span-4 row-span-2' />
        <UpcomingExp className='row-span-2 col-span-1 md:col-span-2 lg:col-span-3' />
      </div>
    </div>
  );
};

export default Lobby;
