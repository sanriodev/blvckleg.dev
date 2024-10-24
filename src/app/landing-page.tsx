import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const TYPING_SPEED = 150;
const DELETING_SPEED = 100;
const PAUSE_DURATION = 800;

const useTypingEffect = (texts: string[]) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === texts.length) {
      setIndex(0);
    }

    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), PAUSE_DURATION);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev >= 2 ? 0 : prev + 1));
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? DELETING_SPEED : TYPING_SPEED
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts]);
  return texts[index].substring(0, subIndex);
};

const TypingText = () => {
  const text = useTypingEffect(['blvckleg.dev', 'World!', 'you!']);

  return text;
};
export default function LandingPage() {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.75,
      }}
      className='flex flex-col justify-center items-center h-screen'
      style={{
        backgroundImage: `url('./image/backgr.jpg')`,
        backgroundSize: 'cover',
      }}
    >
      <h1 className='text-4xl font-bold mb-8'>Hello&nbsp;{TypingText()}</h1>
      <Link href='/portfolio' className='text-2xl enter-button'>
        enter
      </Link>
    </motion.div>
  );
}
