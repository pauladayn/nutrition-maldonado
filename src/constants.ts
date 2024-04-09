import instagramSVG from '../public/assets/icons/instagram.svg';
import whatsappSVG from '../public/assets/icons/whatsapp.svg';
import gmailSVG from '../public/assets/icons/gmail.svg';
import facebookSVG from '../public/assets/icons/facebook.svg';
import card01 from '../public/assets/mealplan.jpg';
import card02 from '../public/assets/matcha.jpg';
import card03 from '../public/assets/pathology.jpg';
import card04 from '../public/assets/vegan.jpg';
import card06 from '../public/assets/hero.jpg';
import card09 from '../public/assets/antropometria.jpg';
import card10 from '../public/assets/onlineMeeting.jpg';
import card11 from '../public/assets/consulting.jpg';
import sectionImg from '../public/assets/weightLifting.jpg';

const testPhone = '5492974223518';
const welcomeMessage = '?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20asesor%C3%ADas%20y%20planes';
export const whatsapp = `https://wa.me/${testPhone}${welcomeMessage}`;

const email = 'paudayup@gmail.com';
const facebook = 'https://www.facebook.com/nutriyvita';

export const socialMediaItems = [
  {
    id: 'instagram',
    href: 'https://www.instagram.com/nutriyvita/',
    icon: instagramSVG,
    alt: 'instagram-icon',
  },

  {
    id: 'whatsapp',
    href: whatsapp,
    icon: whatsappSVG,
    alt: 'whatsapp-icon',
  },
  {
    id: 'email',
    href: `mailto:${email}`,
    icon: gmailSVG,
    alt: 'email-icon',
  },
  {
    id: 'facebook',
    href: facebook,
    icon: facebookSVG,
    alt: 'facebook-icon',
  },
];

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
    href: '/sobre-mi',
  },
  {
    title: 'Contacto',
    href: '/contacto',
  },
];

export const services = [
  {
    title: 'Asesoría presencial',
    subtitle: 'Consulta inicial para diseñar un plan nutricional a tu medida. Seguimiento posterior para alcanzar tus objetivos.',
    btnText: 'Quiero empezar',
    path: '/asesorias',
    img: card11,
    bg: 'peach',
    wspMsg: `https://wa.me/${testPhone}?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20asesor%C3%ADa%20presencial`,
  },
  {
    title: 'Antropometría',
    subtitle:
      'La antropometría es un análisis de tu composición corporal, con el objetivo de reunir un conjunto de medidas para tener una referencia precisa a la hora de realizar el diseño de un plan de alimentación.',
    mainInfo: '¿Por qué es necesaria?',
    infoImage: sectionImg,
    info: [
      {
        title: 'La balanza es una medida inexacta',
        text: 'Por lo cual al realizar este conjunto de mediciones nos ayudará a comprender como está distribuido nuestro peso corporal y sacar ventaja para un body recomposition, mejorar/potenciar el rendimiento deportivo, entre otros.',
      },
      {
        title: 'En los deportistas es fundamental',
        text: 'Una vez obtenido los resultados podemos modificar la alimentación para mejorar el rendimiento.',
      },
    ],
    btnText: 'Quiero empezar',
    path: '/asesorias',
    img: card09,
    bg: 'skyBlue',
    wspMsg: `https://wa.me/${testPhone}?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20antropometr%C3%ADa`,
  },
  {
    title: 'Asesoría online',
    subtitle: 'Esta consulta a distancia, es completamente personalizada e individual.',
    btnText: 'Quiero empezar',
    path: '/asesorias',
    img: card10,
    bg: 'paleYellow',
    wspMsg: `https://wa.me/${testPhone}?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20asesor%C3%ADa%20online`,
    mainInfo:
      'Tanto la entrevista inicial como el seguimiento posterior se adaptan al formato virtual y contas con soporte por Whatsapp o email para resolver dudas o plantear reformulaciones en tus objetivos.',
  },
  {
    title: 'Controles',
    subtitle:
      'Seguimiento offline para chequear dudas, medidas, control de peso corporal, consultas. También contas con un acompañamiento a través de email o Whatsapp.',
    btnText: 'Quiero empezar',
    path: '/asesorias',
    img: card06,
    bg: 'lilac',
    wspMsg: `https://wa.me/${testPhone}?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20controles`,
    mainInfo:
      'Accedé a ajustes de menú quincenales, recetarios para acompañarte en tu ciclo de comidas diarias. Es ideal si desde que arrancaste una asesoría conmigo, pasaron mas de 4 semanas.',
  },
];

export const plans = [
  {
    title: 'Quiero bajar de peso',
    subtitle: 'El plan inicial para aprender paso a paso a generar un cambio de hábitos sostenible y perder grasa.',
    price: '$14999',
    btnText: 'Conocer más',
    infoImage: card01,
    motivationalPhrase: 'Es un proceso lento. No te detengas',
    info: [
      {
        title: 'Listado de alimentos',
        text: 'Cuáles son los carbohidratos, proteínas y grasas ideales para tu objetivo',
      },
      {
        title: 'Cómo armar cada comida',
        text: 'Ejemplos concretos de desayunos, meriendas, almuerzos y cenas',
      },
      {
        title: 'Tips para tu objetivo',
        text: 'Contacto directo conmigo por Whatsapp para sacarte cualquier duda que te vaya surgiendo',
      },
    ],
    mainInfo:
      'Este plan es ideal para comenzar un cambio de hábitos. Está pensado para que lo hagas al menos durante 4 semanas y cuando te sientas seguro puedas avanzar un paso más y adquirir el plan Personalizado.',
    path: '/planes',
    bg: 'peach',
    img: card04,
  },
  {
    title: 'Personalizado',
    subtitle: 'Ideal para los cancheros. Con kilo calorías y porciones de comida calculadas.',
    price: '$19999',
    btnText: 'Conocer más',
    infoImage: card11,
    motivationalPhrase: 'La disciplina te lleva donde la motivación no alcanza',
    info: [
      {
        title: 'Diseño y armado de cada una de las comidas',
        text: 'Cálculo de porciones personalizadas para vos según tu objetivo y entrenamiento',
      },
      {
        title: 'Ideas de menú',
        text: 'Listado de colaciones y snacks. Listado de compras para un stock y planificación exitosa',
      },
      {
        title: 'Recomendaciones para lograr tu objetivo',
        text: 'Asesoramiento en suplementación según el caso',
      },
      {
        title: 'Asesoría personalizada',
        text: 'Contacto directo por Whatsapp para resolver dudas',
      },
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
    infoImage: card01,
    motivationalPhrase: 'Come bien, vive bien',
    info: [
      {
        title: 'Listado de alimentos',
        text: 'Cuáles son los carbohidratos, proteínas y grasas',
      },
      {
        title: 'Cómo armar cada comida',
        text: 'Ejemplos concretos de desayunos, meriendas, almuerzos y cenas',
      },

      {
        title: 'Pautas higiénico dietéticas y de conducta alimentaria',
        text: 'Recomendaciones para mejor adherencia al plan',
      },
      {
        title: 'Asesoría personalizada',
        text: 'Contacto directo por Whatsapp para resolver dudas',
      },
    ],
    mainInfo:
      'Este plan es ideal para comenzar si nunca hiciste una asesoría conmigo. Está pensado para que lo hagas al menos durante 4 semanas y cuando te sientas seguro puedas avanzar un paso más y adquirir el plan Personalizado.',
    path: '/planes',
    bg: 'paleYellow',
    img: card03,
  },
  {
    title: 'Vegetariano - vegano',
    subtitle: 'Guía de alimentación que te dará un pantallazo en este estilo de vida y un menú simple.',
    price: '$18999',
    btnText: 'Conocer más',
    infoImage: card11,
    motivationalPhrase: 'Comer es una necesidad, pero comer de forma inteligente es un arte',
    info: [
      {
        title: 'Nutrientes críticos',
        text: 'Cuáles son y cómo podemos cubrir su requerimiento',
      },
      {
        title: 'Vitamina b12',
        text: 'TODO lo que tenes que saber: valores normales, suplementación y más',
      },
      {
        title: 'Grupos de alimentos',
        text: 'Cuáles serán los alimentos fuentes de proteinas, carbohidratos y grasas',
      },
      {
        title: 'Tips de cocción y preparación',
        text: 'Cómo hacer que se absorban mejor los nutrientes provenientes de alimentos vegetales',
      },
      {
        title: 'Listado de alimentos que no pueden faltar en tu dieta plant based',
        text: 'Suplementos que pueden ser útiles',
      },
      {
        title: 'SEMANA de menú',
        text: 'Ejemplos de desayunos, almuerzos, meriendas y cenas mega nutritivas',
      },
    ],
    mainInfo:
      'Ideal para quienes están buscando llevar una alimentación basada en plantas, de forma consciente e informados. TODO lo que necesitas aprender para llevar adelante este estilo de alimentación, sin riesgos y sumando salud.',
    path: '/planes',
    bg: 'lilac',
    img: card02,
  },
];

export const especialidades = [
  { id: 1, item: 'Nutrición Deportiva' },
  { id: 2, item: 'Antropometrías ISAK II' },
  { id: 3, item: 'Nutrición vegetarianos y veganos' },
  {
    id: 4,
    item: 'Nutrición para pacientes con enfermedades de riesgo cardiovascular (Sobrepeso, Obesidad, Hipercolesterolemia, Diabetes II, HTA)',
  },
  { id: 5, item: 'Nutrición para embarazo Nutrición en Gastroenterología' },
  { id: 6, item: 'Nutrición para descenso de peso' },
  { id: 7, item: 'Cambios de hábitos' },
];

export const followUpPlanInformation = [
  'Controles offline: Es ideal si desde que arrancaste una asesoría conmigo, pasaron mas de 4 semanas.',
  'Chequeo de dudas, medidas, controles de peso corporal.',
  'Menú quincenal con desayuno, merienda, almuerzo y cena.',
  'Opciones de colaciones: dulces - saladas.',
  /*   'Recetarios Sopas y platos calientes $5000 PRECIO REGULAR, POR TODO MARZO OFERTA 50% OFF $2599',
      'Entrenamiento $4999 Ricas en carbos $4999',
      'Acompañamiento a través de email o Whatsapp' */
];
/* TEXTO ADICIONAL */
/* Para comenzar un cambio que perdure en el tiempo, necesitamos arrancar con lo básico. Lo descargarás en formato pdf, listo para que puedas leerlo con comodidad y cuando desees desde tu celu o computadora. */

