import { services } from '@/constants';
import { poppins, montserrat, dmSans } from '@/app/fonts';
import Link from 'next/link';
import Image from 'next/image';

const AsesoryPage = ({ params }: { params: { service: number } }) => {
  const { service } = params;
  return (
    <div className="soft-gradient">
      <div className="relative">
        <div className="min-h-2 pb-12 px-16 pt-24 max-w-6xl relative z-30 mx-auto">
          <div className="mt-8 flex flex-col gap-10 items-center rounded-xl bg-white p-8">
            <h1 className={`${poppins.className} text-6xl line-height-lg text-center text-primary font-black`}>{services[service].title}</h1>
            <h4 className={`${dmSans.className} text-center text-olive font-bold text-4xl leading-10`}>{services[service].subtitle}</h4>
          </div>
        </div>
        <Image src={services[service].img} alt="section-hero-image" className="background-img" fill={true} />
      </div>
      <div className="shadow-2xl p-8 bg-olive my-16">
        <div className="max-w-7xl mx-auto">
          {services[service].mainInfo && (
            <h3 className={`${montserrat.className} text-center text-3xl font-bold text-neutral`} style={{ lineHeight: '3rem' }}>
              {services[service].mainInfo}
            </h3>
          )}
        </div>
      </div>
      <div className="pb-20 px-16 max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex max-w-full gap-4 items-start">
          <div className="flex-1">
            {services[service].infoImage && (
              <Image src={services[service].infoImage!} alt="section-image" className="object-cover rounded-xl" placeholder="blur" />
            )}
          </div>
          <div className="flex-1">
            {services[service].info && (
              <div className={`rounded-xl flex flex-col ${services[service].bg}`}>
                <div className="py-4 px-8">
                  {services[service].info!.map((info, index) => (
                    <div className="my-2" key={index}>
                      <p className={`${montserrat.className} text-2xl font-bold`}>{info.title}</p>
                      <p className={`${montserrat.className} my-4 text-lg`}>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 my-8">
          <div className="bg-white rounded-full">
            <h3 className={`${poppins.className} text-4xl line-height-lg text-center text-primary font-black`}>
              Estás a un paso de comenzar a cumplir tus objetivos
            </h3>
          </div>
          <Link
            target="_blank"
            href={services[service].wspMsg}
            className={`${poppins.className} flex items-center justify-center btn-padding-xl text-xl rounded-full px-2 py-1 bg-primary text-neutral shadow-lg  shadow-paleGreen hover:accent hover:scale-110 my-8 self-center`}>
            Solicitar asesoría personalizada
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AsesoryPage;

