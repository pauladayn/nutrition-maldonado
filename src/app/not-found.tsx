'use client'; // Error components must be Client Components

import Link from 'next/link';
import { poppins, montserrat, dmSans } from './fonts';

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-900">
      <h1 className={`${poppins.className} text-4xl lg:text-6xl line-height-lg text-center text-primary font-black  lg:pb-8 uppercase`}>
        Algo salió mal!
      </h1>
      <h4 className={`${montserrat.className} text-center text-2xl md:text-4xl leading-10 text-olive font-extrabold`}>
        <span>Lo sentimos, parece que la página que estás buscando no existe.</span>
      </h4>
      <Link href="/">
        <h4 className={`${dmSans.className} text-accent underline text-center font-medium mt-5 text-2xl md:text-4xl leading-10`}>Volver al Home</h4>
      </Link>
    </div>
  );
}

