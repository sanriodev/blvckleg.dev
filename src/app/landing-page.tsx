import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <motion.div     initial={{ y: 25, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 0.75,
    }}
    className="flex flex-col justify-center items-center h-screen" style={{ backgroundImage: `url('./image/backgr.jpg')`, backgroundSize: 'cover' }}>
      <h1 className="text-4xl font-bold mb-8">blvckleg.dev</h1>
      <Link href="/portfolio" className='text-2xl enter-button'>
          enter
      </Link>
    </motion.div>
  );
}
