import { Link, useLocation } from 'react-router-dom';
import {
  PanelLeft,
  Search,
  Home,
  Wallet,
  DollarSign,
  GoalIcon,
  BriefcaseBusinessIcon,
  Calendar,
  Settings,
} from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useAuth } from '@/context/AuthContext';
import { ModeToggle } from '../theme/mode-toggle';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useState } from 'react';
import logo from '../../assets/logo.svg';

function TopNavbar() {
  const { user, logout } = useAuth();
  const [isLogoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const location = useLocation();

  const handleLogoutClick = () => {
    setLogoutDialogOpen(true);
  };

  const handleLogoutConfirm = () => {
    logout();
    setLogoutDialogOpen(false);
  };

  const handleLogoutCancel = () => {
    setLogoutDialogOpen(false);
  };

  const currentPage = location.pathname.split('/').pop();

  return (
    <header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 '>
      <Sheet>
        <SheetTrigger asChild className='dark:text-white '>
          <Button
            size='icon'
            variant='outline'
            className='sm:hidden   dark:text-white'
          >
            <PanelLeft className='h-5 w-5 ' />
            <span className='sr-only '>Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='sm:max-w-xs'>
          <nav className='grid gap-6 text-lg font-medium'>
            <Link
              to='/'
              className='group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base'
            >
              <img
                src={logo}
                alt='FnPersona'
                className='h-6 w-6 transition-all group-hover:scale-110 dark:invert'
              />
              <span className='sr-only dark:text-white'>FnPersona</span>
            </Link>
            <Link
              to='/dashboard/lobby'
              className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground dark:text-white'
            >
              <Home className='h-5 w-5' />
              Dashboard
            </Link>
            <Link
              to='/dashboard/networth'
              className='flex items-center gap-4 px-2.5 text-foreground dark:text-white'
            >
              <Wallet className='h-5 w-5' />
              Net Worth
            </Link>
            <Link
              to='/dashboard/budget'
              className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground dark:text-white'
            >
              <DollarSign className='h-5 w-5' />
              Budget
            </Link>
            <Link
              to='/dashboard/goal'
              className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground dark:text-white'
            >
              <GoalIcon className='h-5 w-5' />
              Goal
            </Link>
            <Link
              to='/dashboard/investments'
              className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground dark:text-white'
            >
              <BriefcaseBusinessIcon className='h-5 w-5' />
              Investments
            </Link>
            <Link
              to='/dashboard/recurring'
              className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground dark:text-white'
            >
              <Calendar className='h-5 w-5' />
              Recurring Expenses
            </Link>
            <Link
              to='/dashboard/settings'
              className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground dark:text-white'
            >
              <Settings className='h-5 w-5' />
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <Breadcrumb className='hidden md:flex'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to='/'>Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='relative ml-auto flex-1 md:grow-0'>
        <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground dark:text-white' />
        <Input
          type='search'
          placeholder='Search...'
          className='w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px] dark:bg-black dark:text-white'
        />
      </div>
      <ModeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='outline'
            size='icon'
            className='overflow-hidden rounded-full'
          >
            <img
              src={user?.picture || '/placeholder-user.jpg'}
              width={36}
              height={36}
              alt='Avatar'
              className='overflow-hidden rounded-full'
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel className='cursor-pointer'>
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='cursor-pointer'>
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer'>
            Support
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className='cursor-pointer'
            onClick={handleLogoutClick}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={isLogoutDialogOpen} onOpenChange={setLogoutDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action will log you out of your account.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={handleLogoutCancel}
              className='dark:text-white'
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleLogoutConfirm}>
              Logout
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </header>
  );
}

export default TopNavbar;
