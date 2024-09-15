'use client';

import { ProjectCard } from '@/components';
import { Typography } from '@material-tailwind/react';

const PROJECTS = [
  {
    img: '/image/wiegonslogan.svg',
    title: 'Mobile App Development | closed source',
    desc: 'Mobile app designed to help local waste companies and recycling centers working with the Wiegon system to keep an eye on their trips, tours and weighings. Works with Wiegon integrated garbage trucks.',
    visible: true,
    buttons: [
      {
        href: 'https://apps.apple.com/at/app/wiegon-collect/id6476188167?l=en-GB',
        label: 'App Store',
      },
      {
        href: 'https://www.wiegon.at/de/aktuelles/digitale-verwiegung-restmuell/',
        label: 'Wiegon Blog',
      },
    ],
  },
  {
    img: '/image/bingus2.svg',
    title: 'Web service | open source',
    desc: 'Come and meet Bingusboingus. A functional and silly discord bot for fun built with Nestjs. Developed for friends and myself.',
    visible: true,
    buttons: [
      {
        href: 'https://github.com/BingusBoingus-Developer-Team/BingusBoingus',
        label: 'show on GitHub',
      },
      {
        href: 'https://discord.gg/GMEfWJxn4U',
        label: 'join Discord',
      },
    ],
  },
  {
    img: '/image/energy-householder-logo.png',
    title: 'Full web application | open source',
    desc: 'Nestjs backend, Angular frontend. Reads data from photovoltaic battery vie modbus RTU. Stores data in mongodb. Displays battery data and daily weather.',
    visible: true,
    buttons: [
      {
        href: 'https://github.com/sanriodev/energy-housholder',
        label: 'Backend',
      },
      {
        href: 'https://github.com/sanriodev/energy-householder-angular',
        label: 'Frontend',
      },
    ],
  },
  {
    img: '/image/blog3.svg',
    title: 'Mobile App Development | closed source',
    desc: 'Mobile app designed to control automated freezing rooms and refridgerators... Developed for a company in the food industry.',
    visible: false,
  },
];

export function Projects() {
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
          Projects I&apos;ve worked on
        </Typography>
        <Typography
          variant='lead'
          className='mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Whether you have a mobile app idea that needs to come to life, a
          scaleable backend codebase or a website that requires a facelift,
          I&apos;m here to turn your ideas into reality.
        </Typography>
      </div>
      <div className='container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4'>
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
