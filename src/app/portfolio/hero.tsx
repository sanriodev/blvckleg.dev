'use client';

import Image from 'next/image';
import { Button, Carousel, Typography } from '@material-tailwind/react';
import React from 'react';

function Hero() {
  const [active, setActive] = React.useState(1);
  return (
    <header className='bg-white p-8'>
      <div className='container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2'>
        <div className='row-start-2 lg:row-auto'>
          <Typography
            variant='h1'
            color='blue-gray'
            className='mb-4 lg:text-5xl !leading-tight text-3xl'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Welcome to my <br /> <strong>Website!</strong>
          </Typography>
          <Typography
            variant='lead'
            className='mb-4 !text-gray-500 md:pr-16 xl:pr-28'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            I&apos;m Matteo, a passionate full-stack developer based in Austria.
            Here, you&apos;ll get a glimpse of my journey in the world of
            mobile, web and IoT development, where creativity meets
            functionality.
          </Typography>
          <div className='mb-2 flex'>
            <a href='https://discord.gg/bBYjdwq3Aw' target='_blank'>
              <Button
                color='gray'
                className='w-full px-4 md:w-[12rem]'
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Join my Discord Server
              </Button>
            </a>
          </div>
        </div>
        <Carousel
          className='rounded-xl'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Image
            width={1024}
            height={1024}
            alt='team work'
            src={`/image/avatar1.svg`}
            className='h-[36rem] w-full rounded-xl object-cover'
          />
          <Image
            width={1024}
            height={1024}
            alt='team work'
            src={`/image/avatar2.svg`}
            className='h-[36rem] w-full rounded-xl object-cover'
          />
          <Image
            width={1024}
            height={1024}
            alt='team work'
            src={`/image/avatar3.svg`}
            className='h-[36rem] w-full rounded-xl object-cover'
          />
        </Carousel>
        {/* <Image
          width={1024}
          height={1024}
          alt='team work'
          src={`/image/avatar${active}.svg`}
          className='h-[36rem] w-full rounded-xl object-cover'
          /> */}
        {/* <div className='flex items-center gap-4'></div>
        <div className='flex items-center gap-5'>
          <Avatar
            variant='rounded'
            src='/image/avatar1.svg'
            alt='1'
            size='sm'
            className={`cursor-pointer ${
              active === 1 ? 'opacity-100' : 'opacity-50'
            }`}
            onClick={() => setActive(1)}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
          <div className='w-[1px] h-[36px] bg-blue-gray-100 '></div>
          <Avatar
            variant='rounded'
            src='/image/avatar2.svg'
            alt='2'
            size='sm'
            className={`cursor-pointer ${
              active === 2 ? 'opacity-100' : 'opacity-50'
            }`}
            onClick={() => setActive(2)}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
          <div className='w-[1px] h-[36px] bg-blue-gray-100' />
          <Avatar
            variant='rounded'
            src='/image/avatar3.svg'
            alt='3'
            size='sm'
            className={`cursor-pointer ${
              active === 3 ? 'opacity-100' : 'opacity-50'
            }`}
            onClick={() => setActive(3)}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        </div> */}
      </div>
    </header>
  );
}

export default Hero;
