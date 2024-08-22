'use client';

import { Typography } from '@material-tailwind/react';
import {
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  AcademicCapIcon,
  DocumentIcon,
} from '@heroicons/react/24/solid';
import { ResumeItem } from '@/components';

const RESUME_ITEMS = [
  {
    icon: DocumentIcon,
    children: 'austrian Volksschule 2008 - 2012',
  },
  {
    icon: PuzzlePieceIcon,
    children: 'private high school Collegium Bernardi 2012 - 2016',
  },
  {
    icon: AcademicCapIcon,
    children:
      'higher technical college for Software engineering and project management 2016 - 2021',
  },
  {
    icon: CursorArrowRaysIcon,
    children: 'Full-time developer at ematric GmbH Jan. 2023 - now',
  },
];

export function Resume() {
  return (
    <section className='px-8 py-24'>
      <div className='container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2'>
        <div className='col-span-1'>
          <Typography
            variant='h2'
            color='blue-gray'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            My Resume
          </Typography>
          <Typography
            className='mb-4 mt-3 w-9/12 font-normal !text-gray-500'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Highly motivated and creative Full-stack Developer with experience
            in crafting functional and robust web applications, mobile
            applications, IIot and more.
          </Typography>
          {/*      <Button
            variant="text"
            color="gray"
            className="flex items-center gap-2"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            view more
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </Button> */}
        </div>
        <div className='col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32'>
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
