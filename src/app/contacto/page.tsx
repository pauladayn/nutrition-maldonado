import Link from 'next/link';
import { poppins, dmSans } from '../fonts';
import { socialMediaItems } from '@/constants';
import Image from 'next/image';

export default function Contact() {
  return (
    <>
      <div className="min-h-2 pb-20 lg:pb-12 px-6 lg:px-16 pt-24 max-w-full sky-gradient">
        <div className="mt-3 md:mt-6 flex flex-col lg:gap-10 items-center">
          <h1 className={`${poppins.className} text-4xl lg:text-6xl line-height-lg text-center text-primary font-black lg:pb-8 uppercase`}>
            Contacto
          </h1>
          <div className="flex flex-col gap-8 max-w-7xl mb-4 lg:mb-12">
            <h4 className={`${dmSans.className} text-center font-medium text-2xl md:text-4xl leading-10 text-accent`}>Consultorio presencial</h4>
            <div className="flex flex-col bg-lilac card-blured p-8 shadow-lg rounded-xl">
              <p className={`${poppins.className} text-lg`}>El consultorio está ubicado en Comodoro Rivadavia.</p>
              <p className={`${poppins.className} text-lg`}>Avenida Rivadavia 845 - planta alta.</p>
              <p className={`${poppins.className} text-lg`}>Consultorio 5 - planta baja y consultorio 3.</p>
              <p className={`${poppins.className} text-lg`}>Zona centro</p>
            </div>
            <div className="my-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.4637348915403!2d-67.48935972380822!3d-45.862030971083286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbde45456ee6e20eb%3A0xe4bdf509b511471a!2sAv.%20Rivadavia%20845%2C%20U9000%20Comodoro%20Rivadavia%2C%20Chubut!5e0!3m2!1ses!2sar!4v1710984818407!5m2!1ses!2sar"
                width="600"
                height="450"
                style={{ border: 0 }}
                /*      allowfullscreen={true} */
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
              <h4 className={`${dmSans.className} text-center font-medium text-2xl md:text-4xl leading-10 text-accent mb-8`}>
                Redes sociales y medios de contacto
              </h4>
              <ul className="flex items-center text-neutral sm:mt-0 justify-center space-x-6 card-blured p-4 rounded-xl gap-4 shadow-xl">
                {socialMediaItems.map(({ id, href, icon, alt }) => (
                  <div className='flex flex-col items-center'>
                    <Link
                      href={href}
                      key={id}
                      className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:shadow-md cursor-pointer focus:ring-2 focus:ring-accent hover:ring-2 hover:ring-accent shadow-lg">
                      <Image alt={alt} src={icon} />
                    </Link>
                    <p className='text-accent'>{id}</p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

