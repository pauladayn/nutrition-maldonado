import {plans, followUpPlanInformation} from "@/constants";
import {poppins, montserrat, dmSans} from "@/app/fonts";
import Link from "next/link";

const FoodPlanPage = ({params}: {params: {plan: number}}) => {
  return (
    <div className='soft-gradient'>
      <div className="min-h-2 pb-20 px-16 pt-24 max-w-full">
        <div className="mt-6 flex flex-col gap-10 items-center">
          <h1 className={`${poppins.className} text-6xl text-black line-height-lg text-center text-olive font-black pb-8`}>
            {plans[params.plan].title}
          </h1>
          <div className="flex flex-col gap-8 max-w-3xl">
            <h4 className={`${dmSans.className} text-center text-accent font-bold text-4xl leading-10`}>{plans[params.plan].subtitle}</h4>
            {plans[params.plan].mainInfo && (
              <h3 className={`${montserrat.className} text-xl font-medium text-center`}>{plans[params.plan].mainInfo}</h3>
            )}
          </div>
          <div className="my-8 rounded-xl border-olive border-2 p-8 shadow-xl max-w-2xl mx-auto card-blured">
            <h4 className={`${dmSans.className} text-center text-4xl leading-10 font-bold text-olive`}>Que encontrarás en este plan</h4>
            <div className="mt-8">
              {plans[params.plan].info.map((info) => (
                <div className="my-3">
                  <p className={`${montserrat.className} text-xl`}>{info.title}</p>
                  <p className={`${montserrat.className} my-4 text-lg`}>{info.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3
              className={`${poppins.className} text-4xl text-black line-height-lg text-center text-primary font-black uppercase`}
            >{`Accedé al plan ${plans[params.plan].title} `}</h3>
            <h3 className={`${poppins.className} text-4xl text-black line-height-lg text-center text-primary font-black uppercase`}>
              {`por ${plans[params.plan].price}`}
            </h3>
            <Link
              href="#"
              className={`${poppins.className} flex items-center justify-center btn-padding-xl text-lg rounded-full px-2 py-1 bg-primary text-neutral self-end shadow-lg  shadow-paleGreen hover:accent hover:scale-110 mt-3 self-center`}
            >
              ¡Lo quiero!
            </Link>
          </div>
          <div className="my-8 flex flex-col gap-8">
            <h4 className={`${dmSans.className} text-center text-accent font-bold text-4xl leading-10`}>Cada plan también cuenta con</h4>
            <ul className="flex flex-col gap-8 max-w-3xl">
              {followUpPlanInformation.map((infoItem, index) => (
                <li key={index}>
                  <p className={`${montserrat.className} text-lg`}>{infoItem}</p>
                </li>
              ))}
            </ul>
            <Link
              href="#"
              className={`${poppins.className} flex items-center justify-center btn-padding-xl text-lg rounded-full px-2 py-1 bg-primary text-neutral self-end shadow-lg  shadow-paleGreen hover:accent hover:scale-110 mt-3 self-center`}
            >
              ¡Lo quiero!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPlanPage;
