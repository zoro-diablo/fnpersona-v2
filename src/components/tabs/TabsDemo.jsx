import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import img1 from '../../assets/tab1.jpg';
import img2 from '../../assets/tab2.jpg';
import img3 from '../../assets/tab3.jpg';
import img4 from '../../assets/tab4.jpg';
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 150 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={cn(
          'flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full',
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => moveSelectedTabToTop(idx)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn('relative px-4 py-2 rounded-full', tabClassName)}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId='clickedbutton'
                transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                className={cn(
                  'absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full',
                  activeTabClassName
                )}
              />
            )}
            <span className='relative block text-black dark:text-white'>
              {tab.title}
            </span>
          </button>
        ))}
      </motion.div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn('mt-32', contentClassName)}
      />
    </>
  );
};

const FadeInDiv = ({ className, tabs, hovering }) => {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className='relative w-full h-full'>
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{ y: isActive(tab) ? [0, 40, 0] : 0 }}
          className={cn('w-full h-full absolute top-0 left-0', className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};

const DummyContent = () => {
  return (
    <img
      src={img1}
      alt='dummy image'
      width='1000'
      height='1000'
      className='object-cover object-left-top h-[85%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto'
    />
  );
};
const DummyContentTwo = () => {
  return (
    <img
      src={img2}
      alt='dummy image'
      width='1000'
      height='1000'
      className='object-cover object-left-top h-[85%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto'
    />
  );
};
const DummyContentThree = () => {
  return (
    <img
      src={img3}
      alt='dummy image'
      width='1000'
      height='1000'
      className='object-cover object-left-top h-[85%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto'
    />
  );
};
const DummyContentFour = () => {
  return (
    <img
      src={img4}
      alt='dummy image'
      width='1000'
      height='1000'
      className='object-cover object-left-top h-[85%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto'
    />
  );
};

export function TabsDemo() {
  const tabs = [
    {
      title: 'Product',
      value: 'product',
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-gray-900 dark:text-white bg-gradient-to-br dark:from-gray-700 dark:to-black from-gray-300 to-gray-700'>
          <p>Product Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Services',
      value: 'services',
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-gray-900 dark:text-white bg-gradient-to-br dark:from-gray-700 dark:to-black from-gray-300 to-gray-700'>
          <p>Services tab</p>
          <DummyContentTwo />
        </div>
      ),
    },
    {
      title: 'Playground',
      value: 'playground',
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-gray-900 dark:text-white bg-gradient-to-br dark:from-gray-700 dark:to-black from-gray-300 to-gray-700'>
          <p>Playground tab</p>
          <DummyContentThree />
        </div>
      ),
    },
    {
      title: 'Content',
      value: 'content',
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-gray-900 dark:text-white bg-gradient-to-br dark:from-gray-700 dark:to-black from-gray-300 to-gray-700'>
          <p>Content tab</p>
          <DummyContentFour />
        </div>
      ),
    },
    {
      title: 'Random',
      value: 'random',
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-gray-900 dark:text-white bg-gradient-to-br dark:from-gray-700 dark:to-black from-gray-300 to-gray-700'>
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className='h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20'>
      <Tabs tabs={tabs} />
    </div>
  );
}

export default TabsDemo;
