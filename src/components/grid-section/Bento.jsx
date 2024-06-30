import { cn } from '@/lib/utils';
import { BentoGrid, BentoGridItem } from '@/utils/bento-grid';
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Section from '../section/Section';

export function BentoGridThirdDemo() {
  return (
    <Section customPaddings=''>
      <motion.div
        className='max-w-6xl space-y-2 mx-auto md:auto-rows-[20rem]'
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <h1 className='text-2xl font-bold'>
          Comprehensive Financial Management
        </h1>
        <p className='text-lg text-neutral-600'>
          Utilize our tools to track, manage, and enhance your financial health
          effectively.
        </p>
      </motion.div>
      <BentoGrid className='max-w-6xl mx-auto md:auto-rows-[20rem] mt-5 grid-cols-1 md:grid-cols-3 gap-4'>
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className={cn('h-full flex flex-col', item.className)}
          >
            <BentoGridItem
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn('h-full flex flex-col justify-between border border-gray-300 dark:border-white/30', item.itemClassName)}
              icon={item.icon}
            />
          </motion.div>
        ))}
      </BentoGrid>
    </Section>
  );
}

const Skeleton = () => (
  <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black'></div>
);

const SkeletonOne = () => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial='initial'
      whileHover='animate'
      className='flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2'
    >
      <motion.div
        variants={variants}
        className='flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black'
      >
        <div className='h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0' />
        <div className='w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900' />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className='flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black'
      >
        <div className='w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900' />
        <div className='h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0' />
      </motion.div>
      <motion.div
        variants={variants}
        className='flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black'
      >
        <div className='h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0' />
        <div className='w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900' />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: { width: 0 },
    animate: { width: '100%', transition: { duration: 0.2 } },
    hover: { width: ['0%', '100%'], transition: { duration: 2 } },
  };
  const arr = new Array(6).fill(0);

  return (
    <motion.div
      initial='initial'
      animate='animate'
      whileHover='hover'
      className='flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2'
    >
      {arr.map((_, i) => (
        <motion.div
          key={'skeleton-two' + i}
          variants={variants}
          style={{ maxWidth: Math.random() * (100 - 40) + 40 + '%' }}
          className='flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4'
        ></motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: { backgroundPosition: '0 50%' },
    animate: { backgroundPosition: ['0, 50%', '100% 50%', '0 50%'] },
  };

  return (
    <motion.div
      initial='initial'
      animate='animate'
      variants={variants}
      transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
      className='flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2'
      style={{
        background:
          'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        backgroundSize: '400% 400%',
      }}
    >
      <motion.div className='h-full w-full rounded-lg'></motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = { initial: { x: 20, rotate: -5 }, hover: { x: 0, rotate: 0 } };
  const second = { initial: { x: -20, rotate: 5 }, hover: { x: 0, rotate: 0 } };

  return (
    <motion.div
      initial='initial'
      animate='animate'
      whileHover='hover'
      className='flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2'
    >
      <motion.div
        variants={first}
        className='h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center'
      >
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShScHdXy8bbapkEfqSJpXy4BcX3IBj-BMvjQ&s'
          alt='avatar'
          height='100'
          width='100'
          className='rounded-full h-10 w-10'
        />
        <p className='sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4'>
          I don&apos;t need any help from AI!
        </p>
        <p className='border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4'>
          Delusional
        </p>
      </motion.div>
      <motion.div className='h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center'>
        <img
          src='https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944'
          alt='avatar'
          height='100'
          width='100'
          className='rounded-full h-10 w-10'
        />
        <p className='sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4'>
          I manage my Finances with FnPersona
        </p>
        <p className='border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4'>
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className='h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center'
      >
        <img
          src='https://pics.craiyon.com/2023-07-02/4c0a45a93c9b4231b4fcaef8846c7852.webp'
          alt='avatar'
          height='100'
          width='100'
          className='rounded-full h-10 w-10'
        />
        <p className='sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4'>
          I love AI and i want ...
        </p>
        <p className='border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4'>
          Helpless
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial='initial'
      whileHover='animate'
      className='flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2'
    >
      <motion.div
        variants={variants}
        className='flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start space-x-2 bg-white dark:bg-black'
      >
        <img
          src='https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg'
          alt='avatar'
          height='100'
          width='100'
          className='rounded-full h-10 w-10'
        />
        <p className='text-xs text-neutral-500'>
        How can I effectively manage my budget and save for future goals?
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className='flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black'
      >
        <p className='text-xs text-neutral-500'>Use our budget ...</p>
        <div className='h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0' />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: 'Financial Overview',
    description: (
      <span className='text-sm'>
        Get a comprehensive snapshot of your net worth and financial health.
      </span>
    ),
    header: <SkeletonOne />,
    className: 'md:col-span-1',
    itemClassName: '',
    icon: <IconClipboardCopy className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Expense Management',
    description: (
      <span className='text-sm'>
        Easily manage and track your recurring expenses and bills.
      </span>
    ),
    header: <SkeletonTwo />,
    className: 'md:col-span-1',
    itemClassName: '',
    icon: <IconFileBroken className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Financial Goals',
    description: (
      <span className='text-sm'>
        Set, track, and achieve your financial goals with personalized insights.
      </span>
    ),
    header: <SkeletonThree />,
    className: 'md:col-span-1',
    itemClassName: '',
    icon: <IconSignature className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Our Clients',
    description: (
      <span className='text-sm'>
      We make sure you always feel good and never have a bad experience.
      </span>
    ),
    header: <SkeletonFour />,
    className: 'md:col-span-2 md:row-span-1', 
    itemClassName: '',
    icon: <IconTableColumn className='h-4 w-4 text-neutral-500 ' />,
  },
  {
    title: 'AI Assistant',
    description: (
      <span className='text-sm'>
        Use our AI assistant when you have some query about managing your finances effectively.
      </span>
    ),
    header: <SkeletonFive />,
    className: 'md:col-span-1',
    itemClassName: '',
    icon: <IconBoxAlignRightFilled className='h-4 w-4 text-neutral-500' />,
  },
];
