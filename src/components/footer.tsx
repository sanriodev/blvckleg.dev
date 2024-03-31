import { Typography } from "@material-tailwind/react";

const LINKS = [{name: "Home", link: '#'}, {name: "Twitter", link: 'https://twitter.com/blvckleg'}];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            &copy; {CURRENT_YEAR} {/* Made with{" "}
            <a href="https://www.material-tailwind.com" target="_blank">
              Material Tailwind
            </a> and built with{" "}
            <a href="https://nextjs.org/" target="_blank">
              Nextjs
            </a>{" "}
            by{" "} */}
            <a href="https://github.com/Blvckleg" target="_blank">
              Blvckleg
            </a>
            .
          </Typography>
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link.name}>
                <Typography
                  as="a"
                  href={link.link}
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  {link.name}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
