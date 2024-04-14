'use client';
import { montserrat, poppins } from '@/app/fonts';
import Link from 'next/link';
import Image from 'next/image';
import { CardDetail } from '@/app/types/CardType';

const CardsSection = ({ cardDetails }: { cardDetails: Array<CardDetail> }) => {
  return (
    <div className="flex max-w-full gap-4 flex-wrap md:mt-6 md:justify-center">
      {cardDetails.map(({ title, subtitle, path, img, btnText }: CardDetail, index: number) => (
        <div className="md:max-w-xs flex flex-col my-4 md:my-0" key={index}>
          <Image
            src={img}
            alt="card-image"
            placeholder="blur"
            className="rounded-2xl object-cover w-full h-52 shadow-lg blur-md"
            loading="lazy"
            onLoad={(e: React.SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.classList.remove('blur-md')}
          />
          <div className="mt-3 md:mt-6 flex flex-col gap-4 flex-1 rounded-2xl p-4 pb-8 bg-paleGreen shadow-xl">
            <h4 className={`${poppins.className} uppercase text-xl font-bold `}>{title}</h4>
            <p className={`${montserrat.className} text-lg mt-2 mb-6`}>{subtitle}</p>
            <div className="mt-auto">
              <Link
                href={`${path}/${index}`}
                className={`${poppins.className} self-start bg-primary text-neutral hover:text-accent text-lg py-2 px-3 rounded-full shadow-lg`}>
                {btnText}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsSection;

