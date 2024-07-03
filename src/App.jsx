import { useState, useEffect } from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './components/theme/theme-provider';
import Home from './routes/Home';
import RootLayout from './layout/RootLayout';
import Preloader from './components/loader/Preloader';
import SignUp from './routes/SignUp';
import ProtectedRoute from './context/ProtectedRoute';
import SignIn from './routes/Login';
import { AuthProvider } from '@/context/AuthContext';
import { Toaster } from './components/ui/toaster';
import DashboardLayout from './layout/DashboardLayout';
import Lobby from './routes/dashboard/Lobby';
import NetWorth from './routes/dashboard/NetWorth';
import Budget from './routes/dashboard/Budget';
import Goals from './routes/dashboard/Goals';
import Investment from './routes/dashboard/Investment';
import Recurring from './routes/dashboard/Recurring';
import Settings from './routes/dashboard/Settings';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
        </Route>
        <Route
          path='dashboard'
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path='lobby' element={<Lobby />} />
          <Route path='networth' element={<NetWorth />} />
          <Route path='budget' element={<Budget />} />
          <Route path='goal' element={<Goals />} />
          <Route path='investments' element={<Investment />} />
          <Route path='recurring' element={<Recurring />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Route>
    </Route>
  )
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='dark:bg-black'>
        <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
        </AnimatePresence>
        {!isLoading && (
          <AuthProvider>
            <Toaster />
            <RouterProvider router={router} />
          </AuthProvider>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
