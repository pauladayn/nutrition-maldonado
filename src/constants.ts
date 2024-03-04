import instagramSVG from './assets/icons/instagram.svg';
import messengerSVG from './assets/icons/messenger.svg';
import whatsappSVG from './assets/icons/whatsapp.svg';
import gmailSVG from './assets/icons/gmail.svg';

const testPhone = '5492974223518'
const welcomeMessage = '?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20asesor%C3%ADas%20y%20planes'
const whatsapp = `https://wa.me/${testPhone}${welcomeMessage}`
const email = 'paudayup@gmail.com'

export const socialMediaItems = [
    {
        id: 'instagram',
        href: 'https://www.instagram.com/nutriyvita/',
        icon: instagramSVG,
        alt: 'instagram-icon'
    },
    {
        id: 'messenger',
        href: '#',
        icon: messengerSVG,
        alt: 'messenger-icon'
    },
    {
        id: 'whatsapp',
        href: whatsapp,
        icon: whatsappSVG,
        alt: 'whatsapp-icon'
    },
    {
        id: 'email',
        href: `mailto:${email}`,
        icon: gmailSVG,
        alt: 'email-icon'
    }
]

export const navLinks = [
    {
        title: 'Planes',
        href: '/planes',
    },
    {
        title: 'Asesorías',
        href: '/asesorias',
    },
    {
        title: 'Sobre mí',
        href: 'sobre-mi',
    },
    {
        title: 'Contacto',
        href: '/contacto',
    },
]

