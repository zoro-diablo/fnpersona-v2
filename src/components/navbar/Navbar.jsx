import { Link } from 'react-router-dom';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '../theme/mode-toggle';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.svg';
import { useAuth } from '@/context/AuthContext';
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

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className='fixed top-0 left-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-1 border-gray-200 dark:border-white/20'
    >
      <div className='container flex h-16 items-center justify-between px-4 md:px-6'>
        <div className='flex items-center gap-5'>
          <Link
            to='/'
            className='flex items-center gap-2 text-lg font-semibold'
          >
            <img
              src={logo}
              className='h-5 sm:h-6 w-auto dark:invert'
              alt='logo'
            />
            <p className='sm:text-[18px] text-[15px]'>FnPersona</p>
          </Link>
          <div className='hidden md:flex gap-5 ml-2 pt-1'>
            <Link
              to='/'
              className='hover:underline hover:underline-offset-4 text-sm dark:text-[#888888] font-medium text-gray-500'
            >
              Home
            </Link>
            <Link
              to='/about'
              className='hover:underline hover:underline-offset-4 text-sm dark:text-[#888888] font-medium text-gray-500'
            >
              About
            </Link>
            <Link
              to='/services'
              className='hover:underline hover:underline-offset-4 text-sm dark:text-[#888888] font-medium text-gray-500'
            >
              Services
            </Link>
          </div>
        </div>
        <nav className='hidden gap-6 text-sm font-medium md:flex items-center'>
          <Button variant='outline'>Learn more</Button>
          <ModeToggle />
          {user ? (
            <>
              <span className='font-medium text-gray-700 dark:text-gray-300'>
                Welcome, {user.name}
              </span>
              <AlertDialog>
                <Link to='/dashboard/lobby'>
                  <Button className='font-medium'>Dashboard</Button>
                </Link>

                <AlertDialogTrigger asChild>
                  <Button variant='outline' className='font-medium'>
                    Logout
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action will log you out of your account.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className='text-white'>
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={logout}>
                      Logout
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </>
          ) : (
            <>
              <Link to='/signin'>
                <Button variant='primary' className='font-medium'>
                  Sign in
                </Button>
              </Link>
              <Link to='/signup'>
                <Button className='font-medium'>Sign up</Button>
              </Link>
            </>
          )}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='outline' size='icon' className='md:hidden'>
              <MenuIcon className='h-6 w-6 dark:text-white' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side='right'
            className='w-full max-w-xs bg-white p-6 dark:text-white'
          >
            <div className='flex flex-col gap-6 text-sm font-medium dark:text-white'>
              <Link to='/' className='hover:underline hover:underline-offset-4'>
                Home
              </Link>
              <Link
                to='/about'
                className='hover:underline hover:underline-offset-4'
              >
                About
              </Link>
              <Link
                to='/services'
                className='hover:underline hover:underline-offset-4'
              >
                Services
              </Link>
              <Link
                to='/contact'
                className='hover:underline hover:underline-offset-4'
              >
                Contact
              </Link>
              {user ? (
                <>
                  <Link to='/dashboard/lobby'>
                    <p className='font-medium'>Dashboard</p>
                  </Link>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant='outline' className='font-medium'>
                        Logout
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action will log you out of your account.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={logout}>
                          Logout
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </>
              ) : (
                <>
                  <Link
                    to='/signin'
                    className='hover:underline hover:underline-offset-4'
                  >
                    Sign in
                  </Link>
                  <Link
                    to='/signup'
                    className='hover:underline hover:underline-offset-4'
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

const MenuIcon = (props) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  );
};

export default Navbar;
