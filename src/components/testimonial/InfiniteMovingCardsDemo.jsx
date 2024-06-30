import React, { useEffect, useState } from 'react';
import Section from '../section/Section';
import { motion } from 'framer-motion';
import ribbonBlack from '../../assets/ribbon-black.png';
import ribbonWhite from '../../assets/ribbon-white.png';
import { useTheme } from '../theme/theme-provider';

const testimonials = [
  {
    quote:
      'Utilizing AI for tax calculations has transformed our financial operations. It was the best decision we made for accuracy and efficiency.',
    name: 'Alex Johnson',
    title: 'Chief Financial Officer, Tech Solutions Inc.',
  },
  {
    quote:
      "AI-driven financial tools are a game-changer. Whether it's managing taxes or optimizing expenses, these innovations have made our processes seamless and reliable.",
    name: 'Emily Thompson',
    title: 'Finance Manager, Global Enterprises',
  },
  {
    quote:
      "AI in finance is not just the future; it's the present. The dream of effortless tax management is now a reality, thanks to these advanced tools.",
    name: 'Michael Green',
    title: 'CEO, Future Investments Ltd.',
  },
  {
    quote:
      "It's universally acknowledged that accurate tax calculation and compliance are crucial for any business's success. AI has made this task significantly easier.",
    name: 'Sarah Williams',
    title: 'Tax Consultant, Financial Freedom Advisors',
  },
  {
    quote:
      'Integrating AI into our financial operations was like setting sail on a smooth sea. The precision and efficiency it brought were beyond our expectations.',
    name: 'David Brown',
    title: 'Founder, Brown & Co. Accounting',
  },
];

const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };

  const { theme } = useTheme();

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
    >
      <motion.img
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        src={theme ?   ribbonWhite : ribbonBlack}
        alt='ribbon'
        className='h-[70px] mx-auto shad-cn'
        data-theme={theme ? 'light' : 'dark'}
      />

      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className='text-lg sm:text-2xl font-bold text-center mb-5 leading-snug'
      >
        The Financial App
        <br className='block sm:hidden' />
        That&apos;s Revolutionizing the Industry
      </motion.p>

      <motion.ul
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 0 }}
        transition={{ duration: 1 }}
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ${
          start ? 'animate-scroll' : ''
        } ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
      >
        {items.map((item, idx) => (
          <li
            key={item.name}
            className='w-[300px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-gray-300 bg-white text-black px-4 py-4 md:w-[450px] md:px-8 md:py-6 dark:bg-black dark:text-white dark:border-gray-700'
          >
            <blockquote>
              <div
                aria-hidden='true'
                className='user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]'
              ></div>
              <span className='relative z-20 text-[10px] sm:text-sm leading-[1.6] font-normal'>
                {item.quote}
              </span>
              <div className='relative z-20 mt-6 flex flex-row items-center'>
                <span className='flex flex-col gap-1'>
                  <span className='text-sm leading-[1.6] text-gray-600 font-normal dark:text-gray-400'>
                    {item.name}
                  </span>
                  <span className='text-sm leading-[1.6] text-gray-600 font-normal dark:text-gray-400'>
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export function InfiniteMovingCardsDemo() {
  return (
    <div>
      <div className='h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />
      </div>
    </div>
  );
}
