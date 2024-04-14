import instagramSVG from '../public/assets/icons/instagram.svg';
import whatsappSVG from '../public/assets/icons/whatsapp.svg';
import gmailSVG from '../public/assets/icons/gmail.svg';
import facebookSVG from '../public/assets/icons/facebook.svg';
import card01 from '../public/assets/mealplan.jpg';
import card02 from '../public/assets/matcha.jpg';
import card03 from '../public/assets/pathology.jpg';
import card04 from '../public/assets/vegan.jpg';
import card06 from '../public/assets/hero03.jpg';
import card09 from '../public/assets/antropometria.jpg';
import card10 from '../public/assets/onlineMeeting.jpg';
import card11 from '../public/assets/consulting.jpg';
import sectionImg from '../public/assets/weightLifting.jpg';
import { title } from 'process';
import { info } from 'console';

const testPhone = '5492974223518';
const welcomeMessage = '?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20asesor%C3%ADas%20y%20planes';
export const whatsapp = `https://wa.me/${testPhone}${welcomeMessage}`;

const email = 'dai.mmaldonado@hotmail.com';
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
    title: 'Asesoría presencial personalizada',
    subtitle:
      'A través de una entrevista acerca de tus hábitos y estilo de vida, se evaluará si necesitas un plan de alimentación cualitativo o cuantitativo.',
    btnText: 'Quiero empezar',
    path: '/asesorias',
    img: card11,
    mainInfo: '¿Por qué es necesaria?',
    infoImage: card03,
    info: [
      {
        title: 'Para evaluar tu composición corporal',
        text: 'Y así poder realizar un plan de alimentación acorde a tus necesidades y objetivos.',
      },
      {
        title: 'Para evaluar tu estado nutricional',
        text: 'Y así poder realizar un plan de alimentación acorde a tus necesidades y objetivos.',
      },
      {
        title: 'Educacion Nutricional',
        text: 'Además sumaremos educación nutricional a través de ejemplos con imágenes didácticas. Al momento de tomar tus datos antropométricos como peso y talla, podes sumar una antropometria (esto tiene un costo extra)',
      },
    ],
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
    subtitle:
      'A través de una entrevista acerca de tus hábitos y estilo de vida, se evaluará si necesitas un plan de alimentación cualitativo o cuantitativo.',
    btnText: 'Quiero empezar',
    path: '/asesorias',
    img: card10,
    infoImage: card10,
    info: [
      {
        title: 'Entrevista inicial',
        text: 'Necesitas tener balanza o un cm para medirte vos (si no sabes, no te preocupes, te aportamos una guía para que puedas medirte!) O bien, podes buscar una nutri antropometrista  en tu zona y conseguir el informe . Me lo envías y lo revisamos juntos!',
      },
      {
        title: 'Seguimiento posterior',
        text: 'Adaptado al formato virtual y contas con soporte por Whatsapp o email para resolver dudas o plantear reformulaciones en tus objetivos.',
      },
    ],
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
    title: 'QUIERO BAJAR DE PESO',
    subtitle: 'El plan inicial para aprender paso a paso a generar un cambio de habitos sostenible y perder grasa.',
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
      'Este plan es para vos si querés comenzar un cambio de hábitos. Está pensado para que lo realices al menos 4 semanas y cuando te sientas seguro, puedas lanzarte al próximo desafío de elegir entre un control check o adquirir el plan personalizado.',
    path: '/planes',
    bg: 'peach',
    img: card04,
    wspMsg: `https://wa.me/${testPhone}?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20plan%20para%20bajar%20de%20peso`,
  },
  {
    title: 'PLAN 100% PERSONALIZADO',
    subtitle: 'Ideal para cancheros, para que alcances tus resultados soñados.',
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
    mainInfo:
      'Es una guía ideal y completa que te ayudará a contar calorías según tus objetivos o entrenamiento. Está pensada para que la realices al menos 4 semanas y cuando te sientas seguro, hacemos un control check.',
    path: '/planes',
    bg: 'skyBlue',
    img: card01,
    wspMsg: `https://wa.me/${testPhone}?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20plan%20personalizado`,
  },
  {
    title: 'ASESORÍA SOS: APTO PATOLOGIAS',
    subtitle: 'Es ideal si estás cursando alguna enfermedad crónica (con o sin síntomas) y querés acompañar con el cambio de hábitos y ganar salud.',
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
      'Este plan está pensado para que disminuyas la sintomatología o mejores tu salud a largo plazo, acompañado con un cambio de hábitos sostenible en el tiempo. Pasadas las 4 semanas, si te sentís preparado, podés sacar un turno control para chequear avances y la adherencia. Y por qué no, nuevos objetivos!',
    path: '/planes',
    bg: 'paleYellow',
    img: card03,
    wspMsg: `https://wa.me/${testPhone}?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20asesor%C3%ADa%20apto%20patologias`,
  },
  {
    title: 'VEGETARIANO - VEGANO',
    subtitle:
      'Estás en una transición de alimentación y tenes dudas? Esta guía es ideal para vos, te dará un pantallazo de que deberías saber al adoptar este estilo de vida.',
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
      'Es ideal para quienes estén buscando llevar una alimentación vegetariana/vegana/plant based de forma consciente. En esta guía encontraras TODO lo que necesitas aprender si elegís esta alimentación para evitar riesgos y ganar salud.',
    path: '/planes',
    bg: 'lilac',
    img: card02,
    wspMsg: `https://wa.me/${testPhone}?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20plan%20vegano`,
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

