import { Typography } from '@material-tailwind/react';
import { BlogContentCard } from '../../components/blog-card';

export function BlogSection() {
  const contents = [
    {
      img: '/blog-card/building-RESTful-API-with-nest.png',
      title: 'Building a RESTful API with NestJS',
      desc: 'NestJS is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).',
    },
    {
      img: 'https://www.material-tailwind.com/image/blog-10.jpeg',
      title: 'Last visits in US',
      desc: 'Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status.',
    },
    {
      img: 'https://demos.creative-tim.com/material-kit-pro/assets/img/examples/card-blog2.jpg',
      title: 'Grow in a beautiful area',
      desc: "Free people make free choices. Free choices mean you get unequal outcomes. You can have freedom, or you can have equal outcomes. You can't have both.",
    },
  ];

  return (
    <section className='py-28 px-8'>
      <div className='container mx-auto mb-20 text-center'>
        <Typography
          variant='h2'
          color='blue-gray'
          className='mb-4'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Build something great
        </Typography>
        <Typography
          variant='lead'
          className='mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          I&apos;re constantly trying to express myself and actualize my dreams.
          If you have the opportunity to play this game of life you need to
          appreciate every moment.
        </Typography>
      </div>

      <div className='mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3'>
        {contents.map(({ img, title, desc }) => (
          <BlogContentCard key={title} img={img} title={title} desc={desc} />
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
