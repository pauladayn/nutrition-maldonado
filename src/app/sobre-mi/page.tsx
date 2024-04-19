'use client'; // Error components must be Client Components

import { poppins, dmSans } from '../fonts';
import Image from 'next/image';
import profilePhoto from '../../../public/assets/consul02.jpeg';
import consul from '../../../public/assets/consul.jpeg';
import { especialidades } from '@/constants';

export default function About() {
  return (
    <div className="min-h-2 pb-20 lg:pb-12 px-6 lg:px-16 pt-24 max-w-full">
      <div className="mt-3 md:mt-6 flex flex-col lg:gap-10 items-center">
        <h1 className={`${poppins.className} text-4xl lg:text-6xl line-height-lg text-center text-primary font-black  lg:pb-8 uppercase`}>
          Sobre mí
        </h1>
        <div className="flex flex-col gap-8 lg:gap-12 max-w-6xl mb-4 lg:mb-12">
          <div className="flex lg:gap-8">
            <Image src={profilePhoto} alt="profile-photo-consultory" className="rounded-2xl hidden lg:block object-cover" width={420} />
            <div className="flex flex-col gap-4">
              <h4 className={`${dmSans.className} text-center font-medium text-2xl md:text-4xl lg:text-left leading-10`}>
                ¡Hola! Soy Daiana Maldonado
              </h4>
              <div className="flex flex-col gap-1 md:gap-8 px-10 md:px-0">
                <h4 className={`${dmSans.className} text-start md:text-center font-medium text-lg md:text-xl lg:text-left leading-10`}>
                  Me egrése de Licenciatura en Nutrición egresada de la Universidad Católica de La Plata en Marzo del 2014. Al finalizar mis estudios,
                  descubrí que mi pasión es la educación nutricional y nutrición deportiva.
                </h4>
                <h4 className={`${dmSans.className} text-start md:text-center font-medium text-lg md:text-xl lg:text-left leading-10`}>
                  Me especialicé en Nutrición Clínica, Nutrición Deportiva con Francis Holway y Nutrición para vegetarianos/veganos con el Dr. Toto
                  Vivianni Rossi, además de muchas otras capacitaciones y congresos.
                </h4>
                <h4 className={`${dmSans.className} text-start md:text-center font-medium text-lg md:text-xl lg:text-left leading-10`}>
                  Desde que me recibí hasta el día de hoy, atiendo en consultorio particular aplicando empatia, educación alimentaria nutricional,
                  antropometrías, asesoramiento por planes personales, deportivos adecuándolos a cada persona. Trabajo con asesorías personalizadas,
                  online para todas las edades para aquellos que no disponen de tiempo para trasladarse o están lejos. También brindo charlas para
                  empresas, escuelas o otras instituciones que lo requieran.
                </h4>
                <h4 className={`${dmSans.className} text-start md:text-center font-medium text-lg md:text-xl lg:text-left leading-10`}>
                  Me apasiona brindar información y transmitir conocimientos de la nutrición desde una perspectiva mas criolla y simple para
                  comprender. Mi objetivo está orientado a motivar a que las personas logren un cambio sostenible en el estilo de vida,
                  mejorar/potenciar el rendimiento deportivo/recreativo.
                </h4>
              </div>
            </div>
          </div>
          <div className="my-8 flex flex-col gap-8 ">
            <p className={`${poppins.className} text-olive md:text-6xl text-4xl text-center`}>Especialidades</p>
            <div className="flex px-4 md:px-0 lg:gap-8">
              <ul className="p-8 rounded-xl bg-skyBlue shadow-xl flex flex-col list-disc justify-center">
                {especialidades.map(({ id, item }) => (
                  <li key={id} className={`${poppins.className} my-4`}>
                    <p className="text-xl font-medium">{item}</p>
                  </li>
                ))}
              </ul>
              <Image
                src={consul}
                alt="profile-photo-consultory"
                className="rounded-2xl hidden lg:block object-cover blur-mds"
                width={420}
                placeholder="blur"
                loading="lazy"
                onLoad={(e: React.SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.classList.remove('blur-md')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

