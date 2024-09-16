import { Typography, Card, CardBody } from '@material-tailwind/react';
import { BlogPostsType } from './blogs/blog-posts';
import Link from 'next/link';

export function BlogContentCard({ img, title, desc, blogId }: BlogPostsType) {
  return (
    <Card
      className='relative grid min-h-[30rem] items-end overflow-hidden rounded-xl'
      color='transparent'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <Link href={`/blog?blogId=${blogId}`}>
        <img
          src={img}
          alt='bg'
          className='absolute inset-0 h-full w-full object-cover object-center'
        />
        <div className='absolute inset-0 bg-black/70' />
        <CardBody
          className='relative flex flex-col justify-end'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Typography
            variant='h4'
            color='white'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {title}
          </Typography>
          <Typography
            variant='paragraph'
            color='white'
            className='my-2 font-normal'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {desc}
          </Typography>
        </CardBody>
      </Link>
    </Card>
  );
}
