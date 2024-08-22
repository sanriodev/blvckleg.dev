import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  visible: boolean;
  buttons?: { href: string; label: string }[];
}

export function ProjectCard({
  img,
  title,
  desc,
  visible,
  buttons,
}: ProjectCardProps) {
  return (
    <Card
      color='transparent'
      shadow={false}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardHeader
        floated={false}
        className='mx-0 mt-0 mb-6 h-48'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className='h-full w-full object-cover'
        />
      </CardHeader>
      <CardBody
        className='p-0'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <a
          href='#'
          className='text-blue-gray-900 transition-colors hover:text-gray-800'
        >
          <Typography
            variant='h5'
            className='mb-2'
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {title}
          </Typography>
        </a>
        <Typography
          className='mb-6 font-normal !text-gray-500'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {desc}
        </Typography>
        {visible ? (
          <>
            {buttons?.map((button, index) => (
              <a href={button.href} target='_blank' key={index}>
                <Button
                  color='gray'
                  size='sm'
                  className='mr-2'
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {button.label}
                </Button>
              </a>
            ))}
          </>
        ) : null}
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
