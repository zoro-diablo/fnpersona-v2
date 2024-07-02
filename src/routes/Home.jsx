import { BentoGridThirdDemo } from '@/components/grid-section/Bento';
import { InfiniteMovingCardsDemo } from '@/components/testimonial/InfiniteMovingCardsDemo';
import { Hero } from '@/components/hero/Hero';
import HeroHighlightDemo from '@/components/hero/HeroHighlightDemo';
import {TabsDemo} from '@/components/tabs/TabsDemo'
const Home = () => {
  return (
    <div className=''>
      <Hero />
      <BentoGridThirdDemo />
      <TabsDemo />
      <HeroHighlightDemo />
      <InfiniteMovingCardsDemo />
    </div>
  );
};
export default Home;
