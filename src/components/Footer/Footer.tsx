import { socialMediaItems, navLinks } from "@/constants";
import Link from "next/link";
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row left-0 z-20 w-full p-4 bg-paleGreen border-t shadow sm:flex md:items-center md:justify-between md:p-4">
      <div className="order-2">
        <ul className="flex flex-wrap items-center md: mt-2 text-sm font-medium text-neutral dark:text-neutral justify-center md:justify-start">
          {
            navLinks.map(({ title, href }) => (
              <li>
                <Link href={href} className="hover:underline me-4 md:me-6 cursor-pointer dm-sans-links text-accent">{title}</Link>
              </li>
            ))
          }
        </ul>
        <p className="text-sm text-center text-olive md:text-start mt-3 dm-sans-links">
          © 2024{" "}
          Nutri&Vita | Daiana Maldonado - Nutricionista - MP 194
        </p>
      </div>
      <ul className="flex flex-wrap items-center text-sm font-medium text-neutral dark:text-neutral sm:mt-0 justify-center space-x-6 order-1 md:order-2 pe-4">
        {
          //hover:shadow-lg 
          //focus:shadow-lg
          //active:shadow-lg
          //shadow-md 
          socialMediaItems.map(({ id, href, icon, alt }) => (
            <Link href={href} key={id} className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out shadow-md cursor-pointer focus:ring-2 focus:ring-lime-200 hover:ring-2 hover:ring-lime-200">
              <Image alt={alt} src={icon} />
            </Link>

          ))
        }
      </ul>
    </footer>
  );
};

export default Footer;
