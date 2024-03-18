import { services } from '@/constants';
import { poppins, montserrat, dmSans } from '@/app/fonts';
import Link from 'next/link';
import Image from 'next/image';

const AsesoryPage = ({ params }: { params: { service: number } }) => {
  return (
    <div className="soft-gradient">
      <div className="relative">
        <div className="min-h-2 pb-12 px-16 pt-24 max-w-6xl relative z-30 mx-auto">
          <div className="mt-8 flex flex-col gap-10 items-center rounded-xl bg-white p-8">
            <h1 className={`${poppins.className} text-6xl line-height-lg text-center text-primary font-black`}>{services[params.service].title}</h1>
            <h4 className={`${dmSans.className} text-center text-olive font-bold text-4xl leading-10`}>{services[params.service].subtitle}</h4>
          </div>
        </div>
        <Image src={services[params.service].img} alt="section-hero-image" className="background-img" fill={true} />
      </div>
      <div className="pb-20 px-16 pt-16 max-w-7xl mx-auto flex flex-col gap-8">
        {services[params.service].info && (
          <div className={`my-8 rounded-xl p-8 shadow-xl max-w-2xl mx-auto ${services[params.service].bg}`}>
            <div className="mt-8">
              {services[params.service].info.map(info => (
                <div className="my-3">
                  <p className={`${montserrat.className} text-xl`}>{info.title}</p>
                  <p className={`${montserrat.className} my-4 text-lg`}>{info.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="relative">
        {/*   <Image scr={} /> */}
          <div className="shadow-2xl p-8 rounded-xl bg-olive">
            {services[params.service].mainInfo && (
              <h3 className={`${montserrat.className} text-center text-3xl leading-10 font-bold text-neutral`}>
                {services[params.service].mainInfo}
              </h3>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 my-8">
          <div className="bg-white rounded-full">
            <h3 className={`${poppins.className} text-4xl text-black line-height-lg text-center text-primary font-black`}>
              Estás a un paso de comenzar a cumplir tus objetivos
            </h3>
          </div>

          <Link
            href="#"
            className={`${poppins.className} flex items-center justify-center btn-padding-xl text-lg rounded-full px-2 py-1 bg-primary text-neutral self-end shadow-lg  shadow-paleGreen hover:accent hover:scale-110 my-8 self-center`}>
            Solicitar asesoría personalizada
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AsesoryPage;

