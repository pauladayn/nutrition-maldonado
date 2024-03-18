import Image from 'next/image';
import heroPhoto from '../../public/assets/profile.jpg';
import arrowIcon from '../../public/assets/icons/arrow.svg';
import { plans, services } from '@/constants';
import Link from 'next/link';
import { dmSans, poppins } from './fonts';
import PlansSectionCards from '@/components/PlansSection/PlansSectionCards';
import ServicesSection from '@/components/ServicesSection/ServicesSectionCards';

export default function Home() {
  return (
    <>
    {/* bg-pattern */}
      <div className="min-h-2 bg-paleGreen pt-24 pb-20 px-6 lg:px-16 max-w-full">
        <div className="flex mt-3 md:mt-6 justify-evenly">
          <div className="flex flex-col space-y-8  max-w-full md:max-w-4xl gap-8 self-center">
            <h1
              className={`${poppins.className} text-center md:text-start text-5xl md:text-6xl lg:text-7xl text-accent line-height-lg md:line-height-xl font-extrabold`}>
              Se razonable, mantenete saludable
            </h1>
            <h4 className={`${dmSans.className} text-center md:text-start text-2xl md:text-4xl text-accent leading-10`}>
              El camino hacia una vida saludable a través de una buena alimentación es posible
            </h4>
            <Link
              href="/planes"
              className={`${poppins.className} flex items-center justify-center gap-2 btn-padding-lg text-lg rounded-full px-2 py-1 bg-primary text-neutral md:self-start mx-auto md:mx-0 hover:shadow-lg hover-shadow-paleGreen hover:secondary hover:scale-110`}>
              <span>Comenzá hoy</span>
              <Image src={arrowIcon} alt="arrow-icon" width={24} height={24} className="self-center ms-1" />
            </Link>
          </div>
          <Image src={heroPhoto} alt="hero-profile-photo" width={370} className="rounded-2xl ms-auto me-16 hidden lg:inline-block w-auto h-auto" />
        </div>
      </div>
      {/* planes */}
      <div className="flex flex-col max-w-full px-6 lg:px-16 py-6 lg:py-12 gap-8 soft-gradient">
        <div className="flex align-center flex-col md:flex-row">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className={`${poppins.className} text-4xl lg:text-6xl text-olive font-bold`}>Planes</h1>
            <h4 className={`${dmSans.className} text-2xl lg:text-4xl text-accent`}>Elegí el plan que se ajuste a tus objetivos</h4>
          </div>
          <Link
            href="/planes"
            className={`${poppins.className} flex items-center justify-center gap-2 btn-padding-lg text-lg rounded-full px-2 py-1 bg-olive text-neutral  self-start md:self-end hover:shadow-lg hover-shadow-paleGreen hover:accent hover:scale-110 md:mx-auto mt-4 md:mt-0`}>
            <span>Ver más</span>
            <Image src={arrowIcon} alt="arrow-icon" width={24} height={24} className="self-center ms-1" />
          </Link>
        </div>
        <PlansSectionCards cardDetails={plans} />
      </div>
      {/* banner frase motivacional */}

      {/* asesorias */}
      <div className="flex flex-col max-w-full px-6 lg:px-16 py-6 lg:py-12 gap-8 soft-gradient">
        <div className="flex align-center flex-col md:flex-row">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className={`${poppins.className} text-4xl lg:text-6xl text-primary font-bold`}>Asesorías</h1>
            <h4 className={`${dmSans.className} text-2xl lg:text-4xl text-accent`}>Conocé todas las modalidades de consulta y asesoramiento</h4>
          </div>
          <Link
            href="/asesorias"
            className={`${poppins.className} flex items-center justify-center gap-2 btn-padding-lg text-lg rounded-full px-2 py-1 bg-primary text-neutral self-start md:self-end hover:shadow-lg hover-shadow-paleGreen hover:secondary hover:scale-110 md:mx-auto mt-4 md:mt-0`}>
            <span>Más información</span>
            <Image src={arrowIcon} alt="arrow-icon" width={24} height={24} className="self-center ms-1" />
          </Link>
        </div>
        <ServicesSection cardDetails={services} />
      </div>
    </>
  );
}

