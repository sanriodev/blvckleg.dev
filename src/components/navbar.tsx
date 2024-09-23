import React from 'react';
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import {
  CommandLineIcon,
  GlobeAltIcon,
  CodeBracketSquareIcon,
  XMarkIcon,
  Bars3Icon,
  PencilIcon,
} from '@heroicons/react/24/solid';

const NAV_MENU = [
  {
    name: 'Show me a joke',
    icon: GlobeAltIcon,
    href: '/joke',
    external: false,
  },
  {
    name: 'Github',
    icon: CodeBracketSquareIcon,
    href: 'https://www.github.com/sanriodev',
    external: true,
  },
  {
    name: 'Blog',
    icon: PencilIcon,
    href: 'https://blog.blvckleg.dev',
    external: true,
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
}

function NavItem({ children, href, external }: NavItemProps) {
  return (
    <li>
      <Typography
        as='a'
        href={href || '#'}
        target={external ? '_blank' : '_self'}
        variant='paragraph'
        color='gray'
        className='flex items-center gap-2 font-medium text-gray-900'
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      className='border-0 sticky top-0 z-50'
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className='container mx-auto flex items-center justify-between'>
        <Typography
          color='blue-gray'
          className='text-lg font-bold'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Blvckleg | Full-stack developer
        </Typography>
        <ul className='ml-10 hidden items-center gap-8 lg:flex'>
          {NAV_MENU.map(({ name, icon: Icon, href, external }) => (
            <NavItem key={name} href={href} external={external}>
              <Icon className='h-5 w-5' />
              {name}
            </NavItem>
          ))}
        </ul>
        <IconButton
          variant='text'
          color='gray'
          onClick={handleOpen}
          className='ml-auto inline-block lg:hidden'
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className='h-6 w-6' />
          ) : (
            <Bars3Icon strokeWidth={2} className='h-6 w-6' />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className='container mx-auto mt-3 border-t border-gray-200 px-2 pt-4'>
          {/* <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <NavItem key={name}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul> */}
          <div className='mt-6 mb-4 flex items-center gap-2'>
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <a href={href} key={name} target='_blank'>
                <Button
                  color='gray'
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {name}
                </Button>
              </a>
            ))}
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
