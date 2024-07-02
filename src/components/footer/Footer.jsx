import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { GrInstagram } from 'react-icons/gr';
import { FaFacebook } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <footer className='border-t dark:border-white/20'>
        <div className='mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
            <div>
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

              <p className='mt-4 max-w-xs text-gray-500 dark:text-gray-400'>
                We provide financial solutions tailored to your business needs, ensuring you stay ahead in the market.
              </p>

              <ul className='mt-8 flex gap-6'>
                <li>
                  <a
                    href='#'
                    rel='noreferrer'
                    target='_blank'
                    className='text-gray-500 dark:text-gray-500 transition hover:opacity-85'
                  >
                    <span className='sr-only'>Facebook</span>
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    rel='noreferrer'
                    target='_blank'
                    className=' transition text-gray-500 dark:text-gray-500 hover:opacity-85'
                  >
                    <span className='sr-only'>Instagram</span>
                    <GrInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    rel='noreferrer'
                    target='_blank'
                    className='text-gray-500 dark:text-gray-500 transition hover:opacity-85'
                  >
                    <span className='sr-only'>Twitter</span>
                    <BsTwitterX />
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    rel='noreferrer'
                    target='_blank'
                    className='text-gray-500 dark:text-gray-500 transition hover:opacity-85'
                  >
                    <span className='sr-only'>GitHub</span>
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    rel='noreferrer'
                    target='_blank'
                    className='text-gray-500 dark:text-gray-500 transition hover:opacity-85'
                  >
                    <span className='sr-only'>Dribbble</span>
                    <FaDribbble />
                  </a>
                </li>
              </ul>
            </div>

            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4'>
              <div>
                <p className='font-medium text-gray-900 dark:text-white'>Services</p>

                <ul className='mt-6 space-y-4 text-sm'>
                  <li>
                    <a
                      href='#'
                      className='text-gray-500 dark:text-gray-500 transition hover:opacity-85'
                    >
                      Financial Planning
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-gray-500 dark:text-gray-500 transition hover:opacity-85'
                    >
                      Investment Advisory
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-gray-500 dark:text-gray-500 transition hover:opacity-85'
                    >
                      Tax Consulting
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-gray-500 dark:text-gray-500 transition hover:opacity-85'
                    >
                      Risk Management
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-gray-500 dark:text-gray-500 transition hover:opacity-85'
                    >
                      Portfolio Management
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className='font-medium text-gray-900 dark:text-white'>Company</p>

                <ul className='mt-6 space-y-4 text-sm'>
                  <li>
                    <a
                      href='#'
                      className='text-gray-500 dark:text-gray-500 transition hover:opacity-85'
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-gray-500 dark:text-gray-500 transition hover:opacity-85'
                    >
                      Meet the Team
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-gray-500 dark:text-gray-500 transition hover:opacity-85'
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-gray-500 dark:text-gray-500 transition hover:opacity-85'
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className='font-medium text-gray-900 dark:text-white'>Helpful Links</p>

                <ul className='mt-6 space-y-4 text-sm'>
                  <li>
                    <a
                      href='#'
                      className='text-gray-500 dark:text-gray-500 transition hover:opacity-85'
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-gray-500 dark:text-gray-500 transition hover:opacity-85'
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-gray-500 dark:text-gray-500 transition hover:opacity-85'
                    >
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-gray-500 dark:text-gray-500 transition hover:opacity-85'
                    >
                      Resources
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className='font-medium text-gray-900 dark:text-white'>Legal</p>

                <ul className='mt-6 space-y-4 text-sm'>
                  <li>
                    <a
                      href='#'
                      className='text-gray-500 dark:text-gray-500 transition hover:opacity-85'
                    >
                      Accessibility
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-gray-500 dark:text-gray-500 transition hover:opacity-85'
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-gray-500 dark:text-gray-500 transition hover:opacity-85'
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-gray-500 dark:text-gray-500 transition hover:opacity-85'
                    >
                      Disclosures
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className='text-xs text-gray-500 dark:text-gray-400'>
            &copy; 2022. FnPersona. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};
export default Footer;
