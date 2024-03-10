import instagramSVG from './assets/icons/instagram.svg';
import messengerSVG from './assets/icons/messenger.svg';
import whatsappSVG from './assets/icons/whatsapp.svg';
import gmailSVG from './assets/icons/gmail.svg';
import img01 from './assets/hero.jpg';
import img02 from './assets/hero02.jpg';
import img03 from './assets/hero03.jpg';

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

export const plans = [
    {
        title: 'Inicial para cambiar de habitos y perder grasa',
        info: 'Este plan es perfecto para principiantes sin experiencia previa de asesoría nutricional. Recomendamos seguirlo durante al menos 4 semanas para familiarizarse antes de considerar el paso siguiente hacia un plan personalizado',
        path: '/plan/inicial',
        src: {
            href: img01,
            alt: 'img'
        }
    },
    {
        title: 'Personalizado con kcal, porciones de comida calculadas.',
        info: 'Obtén un plan alimenticio adaptado a tus gustos y necesidades, junto con recomendaciones sobre porciones para alcanzar tus objetivos.',
        path: '/plan/personalizado',
        src: {
            href: img02,
            alt: 'img'
        }
    },
    {
        title: 'Plan patología clínica para un cambio de hábitos y acompañar una enfermedad/patología',
        info: 'Este plan es perfecto si nunca has tenido asesoría nutricional y prefieres evitar consultas presenciales. Se recomienda seguirlo por al menos 4 semanas antes de optar por un turno de seguimiento para monitorear progresos y mejorar síntomas clínicos.',
        path: '/plan/patologia-clinica',
        src: {
            href: img03,
            alt: 'img'
        }
    },
    {
        title: 'Sos vegetariano/vegano y no sabes por donde empezar?',
        info: 'Perfecto para aquellos que desean adoptar una dieta basada en plantas de manera consciente y bien informada. Aprende todo lo necesario para seguir este estilo de alimentación de forma segura y saludable.',
        path: '/plan/vegetariano-vegano',
        src: {
            href: img01,
            alt: 'img'
        }
    },
]
