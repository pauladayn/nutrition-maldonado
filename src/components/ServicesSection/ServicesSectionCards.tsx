'use client';
import { poppins, montserrat } from '@/app/fonts';
import Link from 'next/link';
import Image from 'next/image';
import type { CardDetail } from '@/app/types/CardType';

const CardsSection = ({ cardDetails }: { cardDetails: Array<CardDetail> }) => {
  return (
    <div>
      <div className="flex max-w-full lg:max-w-6xl lg:mx-auto gap-4 flex-wrap md:mt-6 justify-center">
        {cardDetails.map(({ title, subtitle, path, img, btnText, bg }: CardDetail, index: number) => (
          <div className="max-w-sm rounded-2xl flex flex-col my-4 md:my-0" key={index}>
            <Image
              src={img}
              alt="card-image"
              className="rounded-2xl object-cover w-full h-52 blur-md"
              placeholder="blur"
              loading="lazy"
              onLoad={(e: React.SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.classList.remove('blur-md')}
            />
            <div className={`pt-4 px-4 pb-8 flex flex-col rounded-2xl shadow-2xl gap-4 mt-3 flex-1 ${bg}`} key={index}>
              <h4 className={`${poppins.className} uppercase text-xl font-bold`}>{title}</h4>
              <p className={`${montserrat.className} text-lg mt-2 mb-6`}>{subtitle}</p>
              <div className="mt-auto">
                <Link href={`${path}/${index}`} className={`${poppins.className} self-start card-blured text-lg py-2 px-3 rounded-full shadow-lg`}>
                  {btnText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;

