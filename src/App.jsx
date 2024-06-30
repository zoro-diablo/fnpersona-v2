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
import Dashboard from './routes/Dashboard';
import SignIn from './routes/Login';
import { AuthProvider } from '@/context/AuthContext';
import { Toaster } from './components/ui/toaster';
import useScrollToTop from './utils/useScrollToTop';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route
          path='dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>
    </Route>
  )
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

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
