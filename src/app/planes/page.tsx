import { poppins, montserrat, dmSans } from '../fonts';
import PlansSectionCards from '@/components/PlansSection/PlansSectionCards';
import { plans } from '@/constants';
import Image from 'next/image';
import hero from '../../../public/assets/veggies.jpg';

export default function PlansPage() {
  return (
    <>
      <div className="min-h-2 pb-20 lg:pb-12 px-6 lg:px-16 pt-24 max-w-full">
        <div className="mt-3 md:mt-6 flex flex-col lg:gap-10 items-center">
          <h1 className={`${poppins.className} text-4xl lg:text-6xl line-height-lg text-center text-primary font-black  lg:pb-8 uppercase`}>
            Planes
          </h1>
          <div className="flex flex-col gap-8 max-w-7xl mb-4 lg:mb-12">
            <h4 className={`${dmSans.className} text-center font-medium text-2xl md:text-4xl leading-10`}>
              Cada uno de los planes te ayudará a lograr el cambio en el estilo de vida y el cuerpo soñado. Siempre trabajamos desde el enfoque de{' '}
              <span className="font-black">cambio de hábitos</span>.
            </h4>
            <h4 className={`${montserrat.className} text-center text-2xl md:text-4xl leading-10 text-olive font-extrabold`}>
              <span className="italic">Come saludable, se razonable.</span>
            </h4>
          </div>
        </div>
        <PlansSectionCards cardDetails={plans} />
      </div>
      <div className="relative my-12">
        <Image src={hero} alt="hero-background-img" className="background-img shadow-xl" fill={true} />
        <div className='relative z-30 py-12'>
          <h4 className={`${dmSans.className} text-center font-black text-2xl md:text-5xl leading-10 bg-white`}>
            ¡Elegí el plan que necesites!
          </h4>
        </div>
      </div>
    </>
  );
}

