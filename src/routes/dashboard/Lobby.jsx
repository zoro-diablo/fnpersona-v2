import UpcomingExp from '@/components/graph/client/UpcomingExp';
import TabPie from '@/components/graph/client/TabPie';
import Goals from '@/components/cards/Goals';
import NetWorthCard from '@/components/graph/client/NetWorthCard';
import BudgetOverviewCard from '@/components/graph/client/BudgetOverviewCard';
import { Overview } from '@/components/graph/client/Overview';
import Notification from '@/components/cards/Notification';

const Lobby = () => {
  return (
    <div className='xl:overflow-hidden md:overflow-auto grid md:grid-cols-2 xl:grid-cols-4 gap-3 '>
      <div className='md:col-span-2 xl:col-span-3 '>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
          <div className='md:col-span-2 xl:col-span-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3'>
              <NetWorthCard />
              <BudgetOverviewCard />
              <div className='md:col-span-2 xl:col-span-2'>
                <Goals />
              </div>
            </div>
          </div>
          <div className='md:col-span-2 xl:col-span-2 '>
            <Overview />
          </div>
          <Notification />
        </div>
      </div>
      <div className='grid md:grid-cols-1 '>
        <TabPie />
        <UpcomingExp />
      </div>
    </div>
  );
};

export default Lobby;
