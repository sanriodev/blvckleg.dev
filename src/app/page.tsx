'use client';
import { AnimatePresence, motion } from 'framer-motion';
import LandingPage from './landing-page';

export default function Portfolio() {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial='initialState'
        animate='animateState'
        exit='exitState'
        transition={{ duration: 0.75 }}
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {
            opacity: 0,
          },
        }}
        className='base-page-size'
      >
        <LandingPage />
      </motion.div>
    </AnimatePresence>
  );
}
