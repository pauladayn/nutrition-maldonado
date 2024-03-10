import Card from "@/components/Card/Card";

import { plans } from '@/constants';
export default function Planes() {
  return (
    <>
      <div className='flex flex-col items-center p-10'>
        <h1 className="text-3xl">Nuestros Planes</h1>
        <p className="text-xl text-gray-900 dark:text-white p-4">Elegí el plan que mas te guste</p>
        {/* <p className="text-3xl text-gray-900 dark:text-white p-4">Elegi el plan que mas te guste</p> */}
        <div className='flex justify-evenly flex-wrap w-3/4 p-3'>
          {plans.map((plan) => <Card title={plan.title} info={plan.info} path={plan.path} src={plan.src}/>)}
        </div>
      </div>
    </>
  );
}
