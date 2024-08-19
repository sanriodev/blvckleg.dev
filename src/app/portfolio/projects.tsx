'use client';

import { ProjectCard } from '@/components';
import { Typography } from '@material-tailwind/react';

const PROJECTS = [
  {
    img: '/image/wiegonslogan.svg',
    title: 'Mobile App Development | closed source',
    desc: 'Mobile app designed to help local waste companies and recycling centers working with the Wiegon system to keep an eye on their trips, tours and weighings. Works with Wiegon integrated garbage trucks.',
    visible: true,
    href: 'https://apps.apple.com/at/app/wiegon-collect/id6476188167?l=en-GB',
  },
  {
    img: '/image/blog2.svg',
    title: 'Full web application | closed source',
    desc: 'Industrial web application for production order-, bucket- and storage-management, statistic evaluation and much more...',
    visible: false,
  },
  {
    img: '/image/blog3.svg',
    title: 'Mobile App Development | closed source',
    desc: 'Mobile app designed to control automated freezing rooms and refridgerators.',
    visible: false,
  },
  {
    img: '/image/bingus2.svg',
    title: 'Web service | open source',
    desc: 'Come and meet Bingusboingus. A functional and silly discord bot for fun built with Nestjs.',
    visible: true,
    href: 'https://github.com/BingusBoingus-Developer-Team/BingusBoingus',
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
          My Projects
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
