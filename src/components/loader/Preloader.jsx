'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from '../../utils/anim';

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"];

const Preloader = () => {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimension = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight });
        };
        updateDimension();
        window.addEventListener('resize', updateDimension);
        return () => window.removeEventListener('resize', updateDimension);
    }, []);

    useEffect(() => {
        if (index === words.length - 1) return;
        const timeout = setTimeout(() => {
            setIndex(index + 1);
        }, index === 0 ? 1000 : 150);

        return () => clearTimeout(timeout);
    }, [index]);

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className="h-screen w-screen flex items-center justify-center fixed z-50 bg-white dark:bg-black">
            {dimension.width > 0 &&
                <>
                    <motion.p variants={opacity} initial="initial" animate="enter" className="absolute z-10 text-black dark:text-white text-4xl flex items-center">
                        <span className="block w-2.5 h-2.5 bg-black dark:bg-white rounded-full mr-2"></span>{words[index]}
                    </motion.p>
                    <svg className="absolute top-0 w-full h-[calc(100%+300px)]">
                        <motion.path 
                            initial={{ d: `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0` }} 
                            animate={{ d: `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0` }} 
                            className="fill-white dark:fill-black"></motion.path>
                    </svg>
                </>
            }
        </motion.div>
    );
};

export default Preloader;
