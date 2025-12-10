'use client';

import { ProjectCard } from '@/components';
import { Typography } from '@material-tailwind/react';

const PROJECTS = [
  {
    img: '/image/wiegonslogan.svg',
    title: 'Wiegon Collect | mobile App',
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
    img: '/image/wiegon-app-new.jpg',
    title: 'Mein Wiegon | mobile App',
    desc: 'Digital waste management with Wiegon. Add your Wiegon-Cards to use them on your phone, License Plates for automatic recognition, Connect to your Terminals and vending machines with Bluetooth low energy and keep an eye on your orders and monthly statistics.',
    visible: true,
    buttons: [
      {
        href: 'https://play.google.com/store/apps/details?id=com.wiegon.mywiegon&hl=de',
        label: 'Play Store',
      },
      {
        href: 'https://apps.apple.com/at/app/mein-wiegon/id6739279255',
        label: 'App Store',
      },
      // {
      //   href: 'https://www.wiegon.at/de/aktuelles/digitale-verwiegung-restmuell/',
      //   label: 'Wiegon Blog',
      // },
    ],
  },
  {
    img: '/image/ADLER.svg',
    title: 'Client-/Server-side and App | closed source',
    desc: 'Full web-application. Backend with Microservice Architecture, Frontend with Angular, Android native App written in Kotlin.',
    visible: true,
    buttons: [
      {
        href: 'https://www.isafe-mobile.com/en/solutions/succses-stories/use-cases/adler-efficient-digital-data-acquisition-in-explosion-hazardous-areas',
        label: 'show me more',
      },
    ],
  },
  {
    img: '/image/bingus2.png',
    title: 'BingusBoingus | Discord Bot',
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
  // {
  //   img: '/image/energy-householder-logo.png',
  //   title: 'Full web application | open source',
  //   desc: 'Nestjs backend, Angular frontend. Reads data from photovoltaic battery vie modbus RTU. Stores data in mongodb. Displays battery data and daily weather. Running on my raspberry pi.',
  //   visible: true,
  //   buttons: [
  //     {
  //       href: 'https://github.com/sanriodev/energy-housholder',
  //       label: 'Backend',
  //     },
  //     {
  //       href: 'https://github.com/sanriodev/energy-householder-angular',
  //       label: 'Frontend',
  //     },
  //   ],
  // },
  {
    img: '/image/tirolnettv.png',
    title: 'tirolnet.tv | AndroidTv App',
    desc: 'Experience Tyrol like never before - with Tirolnet.tv, the official Android TV app for regional events, news, and entertainment!',
    visible: true,
    buttons: [
      {
        href: 'https://play.google.com/store/apps/details?id=com.tirolnet.tirolnettv',
        label: 'Play Store',
      },
    ],
  },
  {
    img: '/image/goji.png',
    title: 'Goji | open source',
    desc: 'A CLI to generate emojis, save your favorites and more.... simply put: oji, written in go!',
    visible: true,
    buttons: [
      {
        href: 'https://github.com/sanriodev/goji',
        label: 'show on GitHub',
      },
      {
        href: 'https://deps.dev/go/github.com%2Fsanriodev%2Fgoji/',
        label: 'Go Package',
      },
    ],
  },
];

export function Projects() {
  return (
    <section className='py-4 px-8'>
      <div className='container mx-auto mb-20 text-center'>
        <Typography
          variant='h2'
          color='blue-gray'
          className='mb-4'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Some projects I&apos;ve worked on
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
      <div className='container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-3'>
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
