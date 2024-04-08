import { plans, followUpPlanInformation, whatsapp } from '@/constants';
import { poppins, montserrat, dmSans } from '@/app/fonts';
import Link from 'next/link';
import Image from 'next/image';
import handsIcon from '../../../../public/assets/icons/hands.svg';
import sproutIcon from '../../../../public/assets/icons/sprout.svg';
import hero from '../../../../public/assets/avocadoToast.jpg';

const FoodPlanPage = ({ params }: { params: { plan: number } }) => {
  const { plan } = params;
  return (
    <div className="soft-gradient">
      <div className="px-16 pt-24 pb-12 max-w-full">
        <div className="mt-6 flex flex-col gap-10 items-center">
          <h1 className={`${poppins.className} text-6xl text-black line-height-lg text-center text-olive font-black`}>{plans[plan].title}</h1>
          <h4 className={`${dmSans.className} text-center text-accent font-bold text-4xl leading-10`}>{plans[params.plan].subtitle}</h4>
        </div>
      </div>
      <div className="relative min-h-2 flex flex-col items-center justify-center py-12">
        <Image src={plans[plan].img} alt="background-image" className="background-img" fill={true} />
        {plans[plan].mainInfo && (
          <div className="flex max-w-6xl relative bg-neutral p-8 rounded-xl">
            <h3 className={`${montserrat.className} text-3xl font-bold text-center text-accent`}>{plans[plan].mainInfo}</h3>
          </div>
        )}
      </div>
      <div className="my-20 flex flex-col gap-8">
        <h4 className={`${dmSans.className} text-center text-5xl leading-10 font-bold text-olive`}>Que encontrarás en este plan</h4>
        <div className="rounded-xl p-8 shadow-xl max-w-2xl mx-auto sky-gradient">
          <div className="mt-4">
            {plans[plan].info.map(info => (
              <div className="my-3">
                <div className="flex items-center gap-3">
                  <span>
                    <Image src={handsIcon} alt="hands-icon" width={18} height={18} />
                  </span>
                  <p className={`${poppins.className} text-xl font-bold uppercase`}>{info.title}</p>
                </div>
                <p className={`${montserrat.className} my-4 text-xl`}>{info.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-primary py-8">
        <h3
          className={`${poppins.className} text-4xl text-neutral line-height-lg text-center font-black uppercase`}>{`Accedé al plan ${plans[plan].title} `}</h3>
        <h3 className={`${poppins.className} text-4xl text-black line-height-lg text-center text-neutral font-black uppercase`}>
          {`por ${plans[plan].price}`}
        </h3>
        <Link
          href="#"
          className={`${poppins.className} flex items-center justify-center btn-padding-xl text-xl font-bold rounded-full px-2 py-1 bg-accent text-neutral self-end shadow-lg hover:accent hover:scale-110 mt-3 self-center`}>
          ¡Lo quiero!
        </Link>
      </div>
      <div className="px-16 pt-8 pb-12 max-w-full">
        <div className="my-8 flex flex-col gap-8 items-center">
          <div className="max-w-6xl">
            <h4 className={`${dmSans.className} text-center text-accent font-bold text-5xl my-8`} style={{ lineHeight: '2.8rem' }}>
              Complementá tu plan con un seguimiento personalizado
            </h4>
          </div>
          <div className="max-w-7xl">
            <div className="flex max-w-full gap-4">
              <div className="flex-1 bg-paleGreen rounded-xl">
                <ul className="flex flex-col gap-8 max-w-3xl p-8">
                  {followUpPlanInformation.map((infoItem, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span>
                        <Image src={sproutIcon} alt="sprout-icon" width={18} height={18} />
                      </span>
                      <p className={`${poppins.className} text-lg text-accent font-bold uppercase`}>{infoItem}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 flex">
                {plans[plan].infoImage && (
                  <Image src={plans[plan].infoImage} alt="card-image" className="object-cover rounded-xl" placeholder="blur" />
                )}
              </div>
            </div>
          </div>
          <Link
            href="#"
            className={`${poppins.className} flex items-center justify-center btn-padding-xl text-xl font-bold rounded-full px-2 py-1 bg-primary text-neutral self-end shadow-lg  shadow-paleGreen hover:accent hover:scale-110 mt-3 self-center`}>
            ¡Lo quiero!
          </Link>
        </div>
      </div>
      <div className="relative my-8">
        <Image src={hero} alt="hero-background-img" className="background-img shadow-xl" fill={true} />
        <div className="relative z-30 py-12">
          <h4 className={`${dmSans.className} text-center font-black text-2xl md:text-5xl leading-10 bg-white`}>{plans[plan].motivationalPhrase}</h4>
        </div>
      </div>
    </div>
  );
};

export default FoodPlanPage;

