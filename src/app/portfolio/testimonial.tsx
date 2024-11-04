'use client';

import React from 'react';
import Image from 'next/image';
import { Typography, Card, CardBody, Avatar } from '@material-tailwind/react';

export function Testimonial() {
  const [active, setActive] = React.useState(1);
  const testimonials = [
    {
      name: 'Alina',
      role: 'Girlfriend',
      avatar: '/image/testimonial/avatar1.jpg',
      content: 'he really likes caffeine.',
    },
    {
      name: 'Lukas',
      role: 'Colleague',
      avatar: '/image/testimonial/avatar2.jpg',
      content: 'typescript wizard.',
    },
    {
      name: 'Elijah',
      role: 'great friend & Developer',
      avatar: '/image/testimonial/avatar3.jpg',
      content:
        "Matteo... he's one of the rare people I can truly call family. Since we became friends, he's been by my side through everything—always there to lean on and to share the tough stuff with. He's just an amazing person! Goofy in the best way, and someone I can trust completely. I’m so lucky to have him as my brother.",
    },
  ];

  return (
    <section className='py-4 px-8 lg:py-24'>
      <div className='container max-w-screen-lg mx-auto'>
        <div className='container mx-auto mb-20 text-center'>
          <Typography
            variant='h2'
            color='blue-gray'
            className='mb-4'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            What Friends & Family Say
          </Typography>
          <Typography
            variant='lead'
            className='mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Discover what my friends have to say about me!
          </Typography>
        </div>
        <Card
          color='transparent'
          shadow={false}
          className='py-8 lg:flex-row'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <CardBody
            className='w-full lg:gap-10 h-full lg:!flex justify-between '
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <div className='w-full mb-10 lg:mb-0'>
              <Typography
                variant='h3'
                color='blue-gray'
                className='mb-4 font-bold lg:max-w-xs'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Banger
              </Typography>
              <Typography
                className='mb-3 w-full lg:w-8/12 font-normal !text-gray-500'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {testimonials[active - 1].content}
              </Typography>
              <Typography
                variant='h6'
                color='blue-gray'
                className='mb-0.5'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {testimonials[active - 1].name}
              </Typography>
              <Typography
                variant='small'
                className='font-normal mb-5 !text-gray-500'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {testimonials[active - 1].role}
              </Typography>
              <div className='flex items-center gap-4'>
                {testimonials.map((testimonial, index) => (
                  <Avatar
                    key={index}
                    variant='rounded'
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    size='sm'
                    className={`cursor-pointer ${
                      active === index + 1 ? 'opacity-100' : 'opacity-50'
                    }`}
                    onClick={() => setActive(index + 1)}
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  />
                ))}
              </div>
            </div>
            <div className='h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0'>
              <Image
                width={768}
                height={768}
                alt='testimonial image'
                src={testimonials[active - 1].avatar}
                className='h-full rounded-lg w-full object-cover'
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
