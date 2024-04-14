'use client';
import { plans, followUpPlanInformation } from '@/constants';
import { poppins, montserrat, dmSans } from '@/app/fonts';
import Link from 'next/link';
import Image from 'next/image';
import handsIcon from '../../../../public/assets/icons/hands.svg';
import hero from '../../../../public/assets/avocadoToast.jpg';

const FoodPlanPage = ({ params }: { params: { plan: number } }) => {
  const { plan } = params;
  return (
    <div className="soft-gradient">
      <div className="px-4 md:px-16 pt-24 pb-12 max-w-full">
        <div className="mt-6 flex flex-col gap-10 items-center">
          <h1 className={`${poppins.className} text-4xl md:text-6xl md:line-height-lg text-center text-olive font-black`}>{plans[plan].title}</h1>
          <h4 className={`${dmSans.className} text-center text-accent text-balance font-bold text-2xl md:text-4xl md:leading-10`}>
            {plans[params.plan].subtitle}
          </h4>
        </div>
      </div>
      <div className="relative min-h-2 flex flex-col items-center justify-center py-12">
        <Image
          src={plans[plan].img}
          alt="background-image"
          className="background-img blur-md"
          fill={true}
          loading="lazy"
          onLoad={(e: React.SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.classList.remove('blur-md')}
          placeholder="blur"
        />
        {plans[plan].mainInfo && (
          <div className="flex max-w-6xl relative bg-neutral w-4/5 h-3/4 md:w-3/4 p-4 md:p-8 rounded-xl">
            <h3 className={`${montserrat.className} text-xl md:text-3xl font-bold text-center text-accent`}>{plans[plan].mainInfo}</h3>
          </div>
        )}
      </div>
      <div className="my-20 flex flex-col gap-8 p-4">
        <h4 className={`${dmSans.className} text-center text-2xl md:text-5xl md:leading-10 font-bold text-olive`}>Que encontrarás en este plan</h4>
        <div className="rounded-xl p-8 shadow-xl max-w-2xl mx-auto sky-gradient">
          <div className="mt-4">
            {plans[plan].info.map((info, index) => (
              <div className="my-3" key={index}>
                <div className="flex items-center gap-3">
                  <span className="hidden md:flex">
                    <Image src={handsIcon} alt="hands-icon" width={18} height={18} />
                  </span>
                  <p className={`${poppins.className} text-lg md:text-xl font-bold uppercase`}>{info.title}</p>
                </div>
                <p className={`${montserrat.className} my-2 md:my-4 text-base md:text-xl`}>{info.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-primary py-8 px-4">
        <h3
          className={`${poppins.className} text-lg md:text-4xl text-neutral md:line-height-lg text-center font-semibold md:font-black uppercase`}>{`Accedé al plan ${plans[plan].title} `}</h3>
        <h3
          className={`${poppins.className} text-xl md:text-4xl md:line-height-lg text-center text-neutral font-semibold md:font-black uppercase`}>{`por ${plans[plan].price}`}</h3>
        <Link
          target="_blank"
          href={plans[plan].wspMsg}
          className={`${poppins.className} flex items-center justify-center btn-padding-xl text-xl font-bold rounded-full px-2 py-1 bg-accent text-neutral shadow-lg hover:accent hover:scale-110 mt-3 self-center`}>
          ¡Lo quiero!
        </Link>
      </div>
      <div className="px-4 md:px-16 pt-8 md:pb-12 max-w-full">
        <div className="my-8 flex flex-col gap-8 items-center">
          <div className="md:max-w-6xl">
            <h4 className={`${dmSans.className} text-center text-accent font-bold text-2xl md:text-5xl my-8 md:line-height-lg`}>
              Complementá tu plan con un seguimiento personalizado
            </h4>
          </div>
          <div className="max-w-7xl">
            <div className="flex max-w-full gap-4">
              <div className="flex-1 bg-paleGreen rounded-xl">
                <ul className="flex flex-col gap-8 max-w-3xl p-8 list-disc">
                  {followUpPlanInformation.map((infoItem, index) => (
                    <li key={index} className="md:my-2">
                      <p className={`${poppins.className} md:text-lg text-accent font-bold uppercase`}>{infoItem}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 md:flex hidden">
                {plans[plan].infoImage && (
                  <Image
                    src={plans[plan].infoImage}
                    alt="card-image"
                    className="object-cover rounded-xl blur-md"
                    placeholder="blur"
                    loading="lazy"
                    onLoad={(e: React.SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.classList.remove('blur-md')}
                  />
                )}
              </div>
            </div>
          </div>
          <Link
            target="_blank"
            href={plans[plan].wspMsg}
            className={`${poppins.className} flex items-center justify-center btn-padding-xl text-xl font-bold rounded-full px-2 py-1 bg-primary text-neutral  shadow-lg  shadow-paleGreen hover:accent hover:scale-110 mt-3 self-center`}>
            ¡Lo quiero!
          </Link>
        </div>
      </div>
      <div className="relative my-8">
        <Image
          src={hero}
          alt="hero-background-img"
          className="background-img shadow-xl blur-md"
          fill={true}
          placeholder="blur"
          loading="lazy"
          onLoad={(e: React.SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.classList.remove('blur-md')}
        />
        <div className="relative z-30 py-12">
          <h4 className={`${dmSans.className} text-center font-black text-2xl md:text-5xl leading-10 bg-white`}>{plans[plan].motivationalPhrase}</h4>
        </div>
      </div>
    </div>
  );
};

export default FoodPlanPage;

