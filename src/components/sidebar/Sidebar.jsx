import { NavLink } from 'react-router-dom';
import {
  Home,
  ShoppingCart,
  Package,
  Users2,
  LineChart,
  Settings,
  GoalIcon,
  CoinsIcon,
  DollarSign,
  Wallet,
  Calendar,
  BriefcaseBusinessIcon,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import logo from '../../assets/logo.svg'

function Sidebar() {
  return (
    <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r dark:border-[#555555] dark:bg-black bg-background sm:flex'>
      <TooltipProvider>
        <nav className='flex flex-col items-center gap-4 px-2 sm:py-5'>
          <NavLink
            to='/'
            className='group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base bg-white shadow-md '
          >
            <img src={logo}
              className={`h-6 p-1  w-8 transition-all group-hover:scale-110 `}
            />
            <span className='sr-only'>FnPersona</span>
          </NavLink>

          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink
                to='/dashboard/lobby'
                className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
              >
                <Home className='h-5 w-5  activebutton' />
                <span className='sr-only'>Dashboard</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side='right'>Dashboard</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink
                to='/dashboard/networth'
                className='flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
              >
                <Wallet className='h-5 w-5  activebutton' />
                <span className='sr-only'>Net Worth</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side='right'>Net Worth</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink
                to='/dashboard/budget'
                className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
              >
                <DollarSign className='h-5 w-5 activebutton' />
                <span className='sr-only'>Budget</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side='right'>Budget</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink
                to='/dashboard/goal'
                className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
              >
                <GoalIcon className='h-5 w-5 activebutton' />
                <span className='sr-only'>Goal</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side='right'>Goal</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink
                to='/dashboard/investments'
                className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
              >
                <BriefcaseBusinessIcon className='h-5 w-5 activebutton' />
                <span className='sr-only'>Investments</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side='right'>Investments</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink
                to='/dashboard/recurring'
                className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
              >
                <Calendar className='h-5 w-5 activebutton' />
                <span className='sr-only'>Recurring Expenses</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side='right'>Recurring Expenses</TooltipContent>
          </Tooltip>
        </nav>
        <nav className='mt-auto flex flex-col items-center gap-4 px-2 sm:py-5'>
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink
                to='/dashboard/settings'
                className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
              >
                <Settings className='h-5 w-5 activebutton' />
                <span className='sr-only'>Settings</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side='right'>Settings</TooltipContent>
          </Tooltip>
        </nav>
      </TooltipProvider>
    </aside>
  );
}

export default Sidebar;
