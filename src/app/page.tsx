import CardsContainer from '@/components/CardsContainer/CardsContainer';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-secondary'>
      <div className='hero min-h-2'></div>
      <CardsContainer />
    </main>
  );
}
