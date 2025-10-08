'use client';

import { Typography } from '@material-tailwind/react';
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  DocumentTextIcon,
  CheckIcon,
} from '@heroicons/react/24/solid';
import { SkillCard } from '@/components';

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: 'Full-Stack Development:',
    children:
      "Creating robust, reliable and performant API's and user friendly frontend UI's is my forte. Using the latest technologies and best practices, I structure, design and build codebases that are made to last.",
  },
  {
    icon: FingerPrintIcon,
    title: 'Mobile App Development',
    children:
      ' I love creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.',
  },
  {
    icon: SwatchIcon,
    title: 'Technology Stack',
    children:
      "I'm well-versed in the industry's most popular frontend, backend and Full-Stack technologies and I am comfortable working with databases like MySQL, OracleDB, MariaDB and various other NoSQL solutions",
  },
  {
    icon: HashtagIcon,
    title: 'Optimizations',
    children:
      'Performance matters. I optimize web and mobile applications for speed, ensuring your users enjoy a fast and responsive experience.',
  },
  {
    icon: CheckIcon,
    title: 'Testing and Quality Assurance',
    children:
      'I maintain, test and debug applications to deliver a secure environment for users.',
  },
  {
    icon: DocumentTextIcon,
    title: 'DevOps',
    children:
      'I streamline development and deployment workflows using modern DevOps practices. With experience in GitLab CI, GitHub Actions, Docker, Kubernetes, and Terraform, I build reliable pipelines for automation. I also handle mobile CI/CD, including Android builds and iOS builds via Xcode Cloud or manual pipelines, ensuring smooth delivery across platforms. From testing, security scanning, building and deploying to any environment, wether self-hosted or cloud, wether staging or production.',
}
];

export function Skills() {
  return (
    <section className='px-8'>
      <div className='container mx-auto mb-20 text-center'>
        <Typography
          color='blue-gray'
          className='mb-2 font-bold uppercase'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          my skills
        </Typography>
        <Typography
          variant='h1'
          color='blue-gray'
          className='mb-4'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          What I do
        </Typography>
        <Typography
          variant='lead'
          className='mx-auto w-full !text-gray-500 lg:w-10/12'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          I&apos;m a developer. Crafting functional online experiences and
          reliable server side codebases is my job!
        </Typography>
      </div>
      <div className='container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3'>
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
