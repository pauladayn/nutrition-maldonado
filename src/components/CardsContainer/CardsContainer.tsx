import Cards from './Cards';
import { plans } from '@/constants';
const CardsContainer = () => {
  return (
    <div className='flex flex-col items-center p-10'>
      {/* <p className="text-3xl text-gray-900 dark:text-white p-4">Elegi el plan que mas te guste</p> */}
      <div className='flex justify-evenly flex-wrap w-3/4 p-3'>
       {plans.map((plan)=> <Cards title={plan.title} info={plan.info} path={plan.path}/>)}
      </div>
    </div>
  );
};

export default CardsContainer;
