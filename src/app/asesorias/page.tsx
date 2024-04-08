import { poppins, montserrat, dmSans } from '../fonts';
import CardsSection from '@/components/ServicesSection/ServicesSectionCards';
import { services } from '@/constants';
import Image from 'next/image';
import hero from '../../../public/assets/breakfast.jpg';
const Asesorias = () => {
  return (
    <>
      <div className="min-h-2 pb-8 lg:pb-20 px-6 lg:px-16 pt-24 max-w-full">
        <div className="mt-3 md:mt-6 flex flex-col lg:gap-10 items-center">
          <h1 className={`${poppins.className} text-4xl lg:text-6xl line-height-lg text-center text-primary font-black lg:pb-8 uppercase`}>
            Asesorías
          </h1>
          <div className="flex flex-col gap-8 max-w-7xl mb-4 lg:mb-12">
            <h4 className={`${dmSans.className} text-center font-medium text-2xl md:text-4xl leading-10`}>
              Nuestra metodología de trabajo es enseñarte paso a paso, para que aprendas lo que le estás dando a tu cuerpo, según los objetivos que
              tengas de forma económica y eficiente.
            </h4>
            <h4 className={`${montserrat.className} text-center text-2xl md:text-4xl leading-10 text-olive font-extrabold`}>
              <span className="italic">Hay una asesoría para vos</span>
            </h4>
          </div>
        </div>
        <CardsSection cardDetails={services} />
      </div>
      <div className="relative my-12">
        <Image src={hero} alt="hero-background-img" className="background-img shadow-xl" fill={true} />
        <div className="relative z-30 py-12">
          <h4 className={`${dmSans.className} text-center font-black text-2xl md:text-5xl leading-10 bg-white`}>
            Construye hábitos que te construyan a ti
          </h4>
        </div>
      </div>
    </>
  );
};

export default Asesorias;

