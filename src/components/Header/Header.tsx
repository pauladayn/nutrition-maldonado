'use client';
import Link from 'next/link';
import { navLinks } from '@/constants';
import logo from '../../../public/assets/logoFlat.png';
import Image from 'next/image';
import { poppins, montserrat } from '@/app/fonts';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <header>
      <Disclosure as="nav" className="bg:transparent fixed inset-x-0 top-0 h-1 z-50">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-screen px-2 sm:px-6 lg:px-8 card-blured py-2">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-accent hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                  <div className="flex flex-shrink-0 items-center">
                    <Link href="/" className="self-center">
                      <Image src={logo} alt="logo-nutrivita" priority className="h-12 w-auto" />
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Link href="/" className="self-center">
                      <p className={`${montserrat.className} text-primary md:text-2xl font-semibold whitespace-nowrap`}>Nutri&Vita</p>
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        {navLinks.map(({ title, href }, index) => (
                          <Link
                            href={href}
                            key={title}
                            className={`${poppins.className} block py-2 px-3 text-accent text-lg rounded md:bg-transparent md:p-0 font-bold hover:text-neutral`}>
                            <li className="rounded-full btn-padding hover:bg-primary focus:bg-primary" key={index}>
                              {title}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1">
                <ul className="flex flex-col font-medium md:p-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 card-blured-borderless items-start md:items-center">
                  {navLinks.map(({ title, href }, index) => (
                    <li className="rounded-full p-4 ps-3" key={index}>
                      <Disclosure.Button>
                        <Link
                          href={href}
                          key={title}
                          className={`${poppins.className} block py-2 text-accent text-lg rounded p-5 font-bold focus:bg-primary`}>
                          {title}
                        </Link>
                      </Disclosure.Button>
                    </li>
                  ))}
                </ul>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Navbar;

