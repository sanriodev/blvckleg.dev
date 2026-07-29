'use client';

import { ProjectCard } from '@/components';
import { Typography } from '@material-tailwind/react';

const PROJECTS = [
  {
    img: '/image/ticktrack.svg',
    title: 'TickTrack | open source',
    desc: 'The app for your shared flat. Shared task lists, notes and an activity overview of who did what - synced with your group. Ad-free, free of charge and open source, for iOS and Android.',
    visible: true,
    buttons: [
      {
        href: 'https://tick-track.app',
        label: 'Website',
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
    img: '/image/zakb.png',
    title: 'Wiegon/Zakb Bürgerportal (coming soon)',
    desc: 'WebSite for citizens to manage every piece of content available in the Mein Wiegon/Mein Zakb mobile App - in the web.',
    visible: true,
    buttons: [
      {
        href: 'https://zakb.wiegon.eu/overview',
        label: 'Overview',
      },
      {
        href: 'https://zakb.wiegon.eu',
        label: 'Demo Instance',
      },
    ],
  },
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
    img: '/image/ADLER.svg',
    title: 'Client-/Server-side and App | closed source',
    desc: 'Full web-application. Backend with Microservice Architecture, Frontend with Angular, Android native App written in Kotlin.',
    visible: true,
    buttons: [
      {
        href: 'https://xpand.tirol/use-cases/adler-lacke-produktionsdigitalisierung',
        label: 'case study',
      },
    ],
  },
  {
    img: '/image/handl-use-case-1.png',
    title: 'Handl Tyrol | Lagerverwaltung',
    desc: 'Digital production solution bridging the gap between ERP and the shop floor.',
    visible: true,
    buttons: [
      {
        href: 'https://xpand.tirol/use-cases/handl-tyrol-lagerverwaltung',
        label: 'case study',
      },
    ],
  },
  {
    img: '/image/motorenhersteller-use-case-1.jpg',
    title: 'Roboter-Scannerkabine | Automotive',
    desc: 'Centralized automation and control platform for an automotive manufacturer, unifying robots with production management, real-time monitoring and failure diagnostics.',
    visible: true,
    buttons: [
      {
        href: 'https://xpand.tirol/use-cases/roboter-scannerkabine',
        label: 'case study',
      },
    ],
  },
  {
    img: '/image/grissemann-use-case-1.png',
    title: 'Eurogast | MES',
    desc: 'A customized process interface that simplifies complex ERP workflows for Eurogast Österreich.',
    visible: true,
    buttons: [
      {
        href: 'https://xpand.tirol/use-cases/eurogast-mes',
        label: 'case study',
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
          Some of the amazing projects I have worked on in my free time or at my
          job, from scalable backend codebases, to beautiful client side apps or
          Websites.
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
