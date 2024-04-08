import { poppins, dmSans } from '../fonts';
import Image from 'next/image';
import heartSVG from '../../../public/assets/icons/heart.svg';
export default function About() {
  const especialidades = [
    'Nutrición Deportiva',
    'Antropometrías ISAK II',
    'Nutrición vegetarianos y veganos',
    'Nutrición para pacientes con enfermedades de riesgo cardiovascular (Sobrepeso, Obesidad, Hipercolesterolemia, Diabetes II, HTA)',
    'Nutrición para embarazo Nutrición en Gastroenterología',
    'Nutrición para descenso de peso',
    'Cambios de hábitos',
  ];
  return (
    <>
      <div className="min-h-2 pb-20 lg:pb-12 px-6 lg:px-16 pt-24 max-w-full">
        <div className="mt-3 md:mt-6 flex flex-col lg:gap-10 items-center">
          <h1 className={`${poppins.className} text-4xl lg:text-6xl line-height-lg text-center text-primary font-black  lg:pb-8 uppercase`}>
            Sobre mí
          </h1>
          <div className="flex flex-col gap-8 max-w-7xl mb-4 lg:mb-12">
            <h4 className={`${dmSans.className} text-center font-medium text-2xl md:text-4xl leading-10`}>¡Hola! Soy Daiana Maldonado</h4>
            <h4 className={`${dmSans.className} text-center font-medium text-lg md:text-xl leading-10`}>
              Me egrése de Licenciatura en Nutrición egresada de la Universidad Católica de La Plata en Marzo del 2014. Al finalizar mis estudios,
              descubrí que mi pasión es la educación nutricional y nutrición deportiva. Me especialicé en Nutrición Clínica, Nutrición Deportiva con
              Francis Holway y Nutrición para vegetarianos/veganos con el Dr. Toto Vivianni Rossi, además de muchas otras capacitaciones y congresos.
              Desde que me recibí hasta el día de hoy, atiendo en consultorio particular aplicando empatia, educación alimentaria nutricional,
              antropometrías, asesoramiento por planes personales, deportivos adecuándolos a cada persona. Trabajo con asesorías personalizadas,
              online para todas las edades para aquellos que no disponen de tiempo para trasladarse o están lejos. También brindo charlas para
              empresas, escuelas o otras instituciones que lo requieran. Me apasiona brindar información y transmitir conocimientos de la nutrición
              desde una perspectiva mas criolla y simple para comprender. Objetivo Orientado a motivar a que las personas logren un cambio sostenible
              en el estilo de vida, mejorar/potenciar el rendimiento deportivo/recreativo.
            </h4>
            <div className='my-4 flex flex-col gap-8'>
              <p className={`${poppins.className} text-olive text-4xl`}>Especialidades</p>
              <ul className="p-8 rounded-xl bg-skyBlue shadow-xl flex flex-col">
                {especialidades.map((item, index) => (
                  <li key={index} className={`${poppins.className} my-4 flex items-center gap-3`}>
                    <span>
                      <Image src={heartSVG} width={18} height={18} alt="icon" />
                    </span>
                    <p className="text-lg font-medium">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

