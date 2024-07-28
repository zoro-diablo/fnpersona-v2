import { NavLink } from 'react-router-dom';
import {
  Home,
  Settings,
  GoalIcon,
  DollarSign,
  Wallet,
  Calendar,
  BriefcaseBusinessIcon,
  Calculator,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import logo from '../../assets/logo.svg';
import { GrTransaction } from 'react-icons/gr';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

function Sidebar() {
  return (
    <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r dark:border-[#555555] dark:bg-black bg-background sm:flex'>
      <TooltipProvider>
        <nav className='flex flex-col items-center gap-4 px-2 sm:py-5'>
          <NavLink
            to='/'
            className='group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base bg-white shadow-md '
          >
            <img
              src={logo}
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
                <Home className='h-5 w-5 activebutton' />
                <span className='sr-only'>Dashboard</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side='right'>Dashboard</TooltipContent>
          </Tooltip>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <NavLink
                to='/dashboard/budget'
                className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
              >
                <DollarSign className='h-5 w-5 activebutton' />
                <span className='sr-only'>Budget</span>
              </NavLink>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56 ml-14 mt-[-35px]'>
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <NavLink
                    to='/dashboard/budget/addbudget'
                    className='flex items-center px-2 py-2 text-sm dark:text-gray-100 dark:hover:bg-gray-700'
                  >
                    Add Budget
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavLink
                    to='/dashboard/budget/overview'
                    className='flex items-center px-2 py-2 text-sm dark:text-gray-100 dark:hover:bg-gray-700'
                  >
                    Overview Budget
                  </NavLink>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink
                to='/dashboard/transactions'
                className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
              >
                <GrTransaction className='h-5 w-5 activebutton' />
                <span className='sr-only'>Transactions</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side='right'>Transactions</TooltipContent>
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
                to='/dashboard/retirement'
                className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
              >
                <Calculator className='h-5 w-5 activebutton' />
                <span className='sr-only'>RetirementPlanner</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side='right'>RetirementPlanner</TooltipContent>
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
                to='/dashboard/networth'
                className='flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
              >
                <Wallet className='h-5 w-5 activebutton' />
                <span className='sr-only'>Net Worth</span>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side='right'>Net Worth</TooltipContent>
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
