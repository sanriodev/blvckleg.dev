import { Typography } from '@material-tailwind/react';
import Link from 'next/link';

export const Blog3 = (
  <div>
    <Typography
      variant='paragraph'
      className='font-normal !text-gray-500 m-2'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      I am bringing my future blogs onto their own domain. I used hugo to create
      my blog site in a cool github-profile theme. &nbsp;I am excited to share
      my thoughts and experiences with you all over at{' '}
      <Link href={'https://blog.blvckleg.dev'}></Link>
    </Typography>
  </div>
);
