import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className='flex flex-col justify-center items-center h-screen'
      style={{
        backgroundImage: `url('./image/backgr.jpg')`,
        backgroundSize: 'cover',
      }}
    >
      <h1 className='text-4xl font-bold mb-8'>404 | took a wrong turn?</h1>
      <Link href='/portfolio' className='text-2xl enter-button'>
        go home
      </Link>
    </div>
  );
}
