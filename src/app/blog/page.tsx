'use client';

import { motion } from 'framer-motion';
import { Footer } from '../../components';
import Blog from './blog-post';

export default function Portfolio() {
  return (
    <motion.div
      initial='initialState'
      animate='animateState'
      exit='exitState'
      transition={{ duration: 0.75 }}
      variants={{
        initialState: {
          y: 25,
          opacity: 0,
          clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
        },
        animateState: {
          y: 0,
          opacity: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        },
        exitState: {
          opacity: 0,
          clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
        },
      }}
      className='base-page-size'
    >
      <Blog />
      <Footer />
    </motion.div>
  );
}
