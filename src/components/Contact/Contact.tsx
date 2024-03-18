import Link from 'next/link';
import Image from 'next/image'
import { socialMediaItems } from '@/constants';

export default function Contact() {
  return (
    <div className='hidden md:flex flex flex-col flex-wrap content-end p-8 fixed right-0 top-1/4 z-50'>
      {socialMediaItems.map(({ id, href, icon, alt }) => (
        <Link target='_blank' href={href} key={id} className='mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-lg transition duration-150 ease-in-out hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-0 active:shadow-lg cursor-pointer'
        >
          <Image alt={alt} src={icon} />
        </Link>
      ))}
    </div>
  );
}
