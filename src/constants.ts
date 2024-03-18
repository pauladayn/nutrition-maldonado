import instagramSVG from '../public/assets/icons/instagram.svg';
import messengerSVG from '../public/assets/icons/messenger.svg';
import whatsappSVG from '../public/assets/icons/whatsapp.svg';
import gmailSVG from '../public/assets/icons/gmail.svg';
import card01 from '../public/assets/mealplan.jpg';
import card02 from '../public/assets/matcha.jpg';
import card03 from '../public/assets/pathology.jpg';
import card04 from '../public/assets/vegan.jpg';
import card06 from '../public/assets/hero.jpg';
import card09 from '../public/assets/antropometria.jpg';
import card10 from '../public/assets/onlineMeeting.jpg';
import card11 from '../public/assets/consulting.jpg';


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

export const services = [
    {
        title: 'Asesoría presencial',
        subtitle: 'Consulta inicial para diseñar un plan nutricional a tu medida. Seguimiento posterior para alcanzar tus objetivos.',
        btnText: 'Quiero empezar',
        path: '/asesorias',
        img: card11,
        bg: 'peach',
    },
    {
        title: 'Antropometría',
        subtitle: 'La antropometría es un análisis de tu composición corporal, con el objetivo de reunir un conjunto de medidas para tener una referencia precisa a la hora de realizar el diseño de un plan de alimentación.',
        mainInfo: '¿Por qué es necesaria?',
        info: [
            {
                title: 'La balanza es una medida inexacta',
                text: 'por lo cual al realizar este conjunto de mediciones nos ayudará a comprender como está distribuido nuestro peso corporal y sacar ventaja para un body recomposition, mejorar/potenciar el rendimiento deportivo, entre otros.'
            },
            {
                title: 'En los deportistas es fundamental.',
                text: 'Una vez obtenido los resultados podemos modificar la alimentación para mejorar el rendimiento.'
            },
            {
                title: 'Por ejemplo',
                text: 'en el caso de un futbolista va ser beneficioso tener un % de grasa bajo, si en la antropometría vimos que ese % es elevado le aplicaremos una alimentación para conseguir bajar ese % para aumentar su rendimiento físico. Podemos evaluar su desarrollo físico haciéndole antropometrías de forma periódica. Por ejemplo, podemos ver cuanto a aumentado su circunferencia del brazo contraído desde al cabo de un mes de haberle aplicado cambios es su entrenamiento y dieta.'
            }
        ],
        btnText: 'Quiero empezar',
        path: '/asesorias',
        img: card09,
        bg: 'skyBlue',
    },
    {
        title: 'Asesoría online',
        subtitle: 'Esta consulta a distancia, es completamente personalizada e individual.',
        btnText: 'Quiero empezar',
        path: '/asesorias',
        img: card10,
        bg: 'paleYellow',
        mainInfo: 'Tanto la entrevista inicial como el seguimiento posterior se adaptan al formato virtual y contas con soporte por Whatsapp o email para resolver dudas o plantear reformulaciones en tus objetivos.'
    },
    {
        title: 'Controles',
        subtitle: 'Seguimiento offline para chequear dudas, medidas, control de peso corporal, consultas. También contas con un acompañamiento a través de email o Whatsapp.',
        btnText: 'Quiero empezar',
        path: '/asesorias',
        img: card06,
        bg: 'lilac',
        mainInfo: 'Accedé a ajustes de menú quincenales, recetarios para acompañarte en tu ciclo de comidas diarias. Es ideal si desde que arrancaste una asesoría conmigo, pasaron mas de 4 semanas.'
    }

]

export const plans = [
    {
        title: 'Quiero bajar de peso',
        subtitle: 'El plan inicial para aprender paso a paso a generar un cambio de hábitos sostenible y perder grasa.',
        price: '$14999',
        btnText: 'Conocer más',
        info: [
            {
                title: 'Listado de alimentos',
                text: 'Cuáles son los carbohidratos, proteínas y grasas ideales para tu objetivo'
            },
            {
                title: 'Cómo armar cada comida',
                text: 'Ejemplos concretos de desayunos, meriendas, almuerzos y cenas'
            },
            {
                title: 'Tips para tu objetivo',
                text: 'Contacto directo conmigo por Whatsapp para sacarte cualquier duda que te vaya surgiendo'
            }],
        mainInfo: 'Este plan es ideal para comenzar si nunca hiciste una asesoría conmigo. Está pensado para que lo hagas al menos durante 4 semanas y cuando te sientas seguro puedas avanzar un paso más y adquirir el plan Personalizado. Para comenzar un cambio que perdure en el tiempo, necesitamos arrancar con lo básico. Lo descargarás en formato pdf, listo para que puedas leerlo con comodidad y cuando desees desde tu celu o computadora.',
        path: '/planes',
        bg: 'peach',
        img: card04,
    },
    {
        title: 'Personalizado',
        subtitle: 'Ideal para los cancheros. Con kilo calorías y porciones de comida calculadas.',
        price: '$19999',
        btnText: 'Conocer más',
        info: [
            {
                title: 'Diseño y armado de cada una de las comidas',
                text: 'Calculo exacto de porciones adecuadas para vos según tu objetivo y entrenamiento'
            },
            {
                title: 'Ideas de menú',
                text: 'Listado de colaciones y snacks saludables. Listado de compras para un stock y planificación exitosa'
            },
            {
                title: 'Recomendaciones para lograr tu objetivo',
                text: 'Asesoramiento en suplementación según el caso'
            },
            {
                title: 'Tips para tu objetivo',
                text: 'Contacto directo conmigo por Whatsapp para sacarte cualquier duda que te vaya surgiendo'
            }
        ],
        path: '/planes',
        bg: 'skyBlue',
        img: card01,
    },
    {
        title: 'Patología clínica',
        subtitle: 'Inicial para un cambio de hábitos y acompañar una enfermedad o patología.',
        price: '$14999',
        btnText: 'Conocer más',
        info: [
            {
                title: 'Listado de alimentos',
                text: 'Cuáles son los carbohidratos, proteínas y grasas'
            },
            {
                title: 'Cómo armar cada comida',
                text: 'Ejemplos concretos de desayunos, meriendas, almuerzos y cenas'
            },
            {
                title: 'Pautas higiénico dietéticas y de conducta alimentaria',
                text: 'Contacto directo conmigo por Whatsapp para sacarte cualquier duda que te vaya surgiendo'
            },

        ],
        mainInfo: 'Este plan es ideal para comenzar si nunca hiciste una asesoría conmigo. Está pensado para que lo hagas al menos durante 4 semanas y cuando te sientas seguro puedas avanzar un paso más y adquirir el plan Personalizado. Para comenzar un cambio que perdure en el tiempo, necesitamos arrancar con lo básico. Lo descargarás en formato pdf, listo para que puedas leerlo con comodidad y cuando desees desde tu celu o computadora.',
        path: '/planes',
        bg: 'paleYellow',
        img: card03,

    },
    {
        title: 'Vegetariano - vegano',
        subtitle: 'Guía de alimentación que te dará un pantallazo en este estilo de vida y un menú simple.',
        price: '$18999',
        btnText: 'Conocer más',
        info: [
            {
                title: 'Nutrientes críticos',
                text: 'Cuáles son, y cómo podemos cubrir su requerimiento'
            },
            {
                title: 'Vitamina b12',
                text: 'TODO lo que tenes que saber: valores normales, suplementación y más'
            },
            {
                title: 'Grupos de alimentos',
                text: 'Cuáles serán los alimentos fuentes de proteinas, carbohidratos y grasas'
            },
            {
                title: 'Tips de cocción y preparación',
                text: 'Cómo hacer que se absorban mejor los nutrientes provenientes de alimentos vegetales'
            },
            {
                title: 'Listado de alimentos que no pueden faltar en tu dieta plant based',
                text: 'Suplementos que pueden ser útiles'
            },
            {
                title: 'SEMANA de menú',
                text: 'Ejemplos de desayunos, almuerzos, meriendas y cenas mega nutritivas'
            }
        ],
        mainInfo: 'Ideal para quienes están buscando llevar una alimentación basada en plantas, de forma consciente e informados. TODO lo que necesitas aprender para llevar adelante este estilo de alimentación, sin riesgos y sumando salud.',
        path: '/planes',
        bg: 'lilac',
        img: card02

    },
]

export const followUpPlanInformation = [
    'Controles offline: Es ideal si desde que arrancaste una asesoría conmigo, pasaron mas de 4 semanas.',
    'Es offline para chequear dudas, medida, control de peso corporal, consultas, $12999.99',
    'Menú quincenal con desayuno, merienda, almuerzo y cena',
    'Opciones de colaciones Se podrán establecer metas/objetivos nuevos',
    'Recetarios Sopas y platos calientes $5000 PRECIO REGULAR, POR TODO MARZO OFERTA 50% OFF $2599.99',
    'Entrenamiento $4999 Ricas en carbos $4999',
    'Acompañamiento a través de email o Whatsapp'

]