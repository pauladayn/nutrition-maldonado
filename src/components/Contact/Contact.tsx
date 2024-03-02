import Instagram from './social-media-icons/Instagram';
import Facebook from './social-media-icons/Facebook';
import Whatsapp from './social-media-icons/Whatsapp';
import Messenger from './social-media-icons/Messenger';

export default function Contact() {
  return (
    <div className='flex flex-col flex-wrap content-end p-8 fixed right-0 top-1/4'>
      <Facebook />
      <Instagram />
      <Messenger />
      <Whatsapp />
    </div>
  );
}
