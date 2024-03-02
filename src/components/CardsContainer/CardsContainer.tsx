import Cards from './Cards';

const CardsContainer = () => {
  return (
    <div className='flex justify-evenly p-8 flex-wrap'>
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
};

export default CardsContainer;
