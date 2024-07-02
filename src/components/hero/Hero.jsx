import React, { useEffect, useRef, useState } from 'react';
import Section from '@/components/section/Section';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { FlipWords } from '@/utils/FlipWords';
import { TypewriterEffectSmooth } from '@/utils/typewriter-effect';
import { FaArrowRight } from 'react-icons/fa';
import Parallax from 'parallax-js';
import { MouseParallax } from 'react-just-parallax';
import { Link } from 'react-router-dom';

const Spotlight = ({ className, fill }) => {
  return (
    <svg
      className={cn(
        'animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0',
        className
      )}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 3787 2842'
      fill='none'
    >
      <g filter='url(#filter)'>
        <ellipse
          cx='1924.71'
          cy='273.501'
          rx='1924.71'
          ry='273.501'
          transform='matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)'
          fill={fill || 'white'}
          fillOpacity='0.21'
        ></ellipse>
      </g>
      <defs>
        <filter
          id='filter'
          x='0.860352'
          y='0.838989'
          width='3785.16'
          height='2840.26'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          ></feBlend>
          <feGaussianBlur
            stdDeviation='151'
            result='effect1_foregroundBlur_1065_8'
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className='absolute top-1/2 left-1/2 w-[78rem] dark:border-white/40 aspect-square border border-n-2/5 rounded-full -translate-x-1/2 -translate-y-1/2 mx-auto overflow-hidden'>
      <Rings />

      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className='absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]'>
          <div
            className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#656464] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          />
        </div>

        <div className='absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]'>
          <div
            className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#bdbcbb] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          />
        </div>

        <div className='absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]'>
          <div
            className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          />
        </div>

        <div className='absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]'>
          <div
            className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          />
        </div>

        <div className='absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]'>
          <div
            className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#959696] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          />
        </div>

        <div className='absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]'>
          <div
            className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#0a0a0a] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          />
        </div>
      </MouseParallax>
    </div>
  );
};

export const Hero = () => {
  const words = [
    { text: 'Master', className: 'text-3xl sm:text-6xl' },
    { text: 'Your', className: 'text-3xl sm:text-6xl' },
    {
      text: 'Finances',
      className:
        'text-3xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-neutral-500 to-gray-500',
    },
  ];

  const parallaxContainer = useRef(null);

  useEffect(() => {
    if (parallaxContainer.current) {
      const parallaxInstance = new Parallax(parallaxContainer.current);
      return () => parallaxInstance.destroy();
    }
  }, []);

  return (
    <Section
      customPaddings='py-[50%] md:py-[25%]'
      className='h-[40rem] w-full rounded-md flex md:items-center md:justify-center dark:bg-black/[0.96] antialiased dark:bg-grid-white/[0.05] bg-grid-black/[0.05] relative overflow-hidden'
    >
      <Spotlight
        className='-top-25 sm:-top-40 left-0 md:left-60 md:-top-20'
        fill='white'
      />
      <div className='p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 '>
        <div className='hidden group sm:flex cursor-pointer gap-2 items-center border border-black/20 dark:border-white/50 rounded-full p-0.5 sm:p-1 w-fit mx-auto hover:bg-neutral-950 transition-colors duration-300'>
          <Badge className='dark:bg-black dark:text-white/80 dark:border-1 dark:border-white/50 bg-black text-white text-[8px] sm:text-xs group-hover:bg-white group-hover:text-black transition-colors duration-300'>
            NEW
          </Badge>
          <p className='text-[8px] sm:text-sm dark:text-neutral-300 group-hover:text-white transition-colors duration-300'>
            Quicker Easier transaction and review, and more
          </p>
          <FaArrowRight
            size={10}
            className='mx-1 sm:mx-2 group-hover:text-white transition-colors duration-300'
          />
        </div>

        <TypewriterEffectSmooth
          words={words}
          className='text-5xl sm:text-7xl flex justify-center'
        />
        <p className='font-semibold text-[14px] md:text-xl dark:text-neutral-400 text-neutral-600 max-w-lg text-center mx-auto'>
          Achieve financial independence and manage your finances effortlessly
          with FnPersona.
        </p>

        <div className='flex justify-center mt-4'>
          <HeroButton />
        </div>
      </div>
      <div
        ref={parallaxContainer}
        className='parallax-container absolute inset-0 z-0 pointer-events-none hidden sm:block '
      >
        <BackgroundCircles parallaxRef={parallaxContainer} />
      </div>
    </Section>
  );
};

const words = ['Get\u00A0Started', 'Join\u00A0us\u00A0Now', 'Try\u00A0Now'];

export const HeroButton = () => {
  return (
    <Link to='signup'>
      <button className='inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-neutral-600 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-50'>
        <FlipWords words={words} />
      </button>
    </Link>
  );
};

const Rings = () => {
  const circles = [
    { size: '65.875rem', border: 'border-black/40 dark:border-white/30' },
    { size: '51.375rem', border: 'border-black/30 dark:border-white/20' },
    { size: '36.125rem', border: 'border-black/20 dark:border-white/10' },
    { size: '23.125rem', border: 'border-black/10 dark:border-white/5' },
  ];

  return (
    <>
      {circles.map((circle, index) => (
        <div
          key={index}
          className={`absolute top-1/2 left-1/2 aspect-square ${circle.border} ${circle.bg} border rounded-full -translate-x-1/2 -translate-y-1/2`}
          style={{ width: circle.size }}
        />
      ))}
    </>
  );
};
