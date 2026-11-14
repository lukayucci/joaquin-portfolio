import type { ImageMetadata } from 'astro';
import type { Localized } from './types';

import nexorCover from '../assets/projects/nexor-cover.png';
import nexorServices from '../assets/projects/nexor-services.png';
import nexorProjects from '../assets/projects/nexor-projects.png';
import barberCover from '../assets/projects/barber-cover.png';
import barberRegister from '../assets/projects/barber-register.png';
import barberMobile from '../assets/projects/barber-mobile.png';

export interface ProjectImage {
  src: ImageMetadata;
  alt: Localized;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: Localized;
  summary: Localized;
  context: Localized;
  role: Localized;
  year: number;
  status: 'production' | 'public';
  stack: string[];
  highlights: Localized<string[]>;
  result: Localized;
  cover: ProjectImage;
  gallery: ProjectImage[];
  repoUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    slug: 'nexor',
    title: 'Nexor',
    subtitle: {
      es: 'Web de la agencia',
      en: 'The agency’s website',
    },
    summary: {
      es: 'La web de Nexor, la agencia que co-fundé. Arranca con el logotipo que se arma cuadro a cuadro mientras bajás, montado sobre una red de partículas y un portal violeta.',
      en: 'The Nexor website, the agency I co-founded. It opens with the logo assembling frame by frame as you scroll, mounted over a particle network and a violet portal.',
    },
    context: {
      es: 'Nexor necesitaba una presencia a la altura de su trabajo, lejos de la plantilla de siempre. La idea era una pieza de marca que se viera tan trabajada como el software que la agencia entrega.',
      en: 'Nexor needed a presence on par with its work, far from the usual template. The idea was a brand piece that looked as crafted as the software the agency delivers.',
    },
    role: {
      es: 'Co-fundador · Diseño y front-end',
      en: 'Co-founder · Design and front-end',
    },
    year: 2026,
    status: 'public',
    stack: ['HTML', 'CSS', 'JavaScript', 'Canvas API', 'Font Awesome', 'SEO'],
    highlights: {
      es: [
        'La portada se abre con una secuencia de 100 cuadros del logo atada al scroll, dibujada en canvas.',
        'Una red de partículas en vivo que enlaza los nodos cercanos y le da profundidad al inicio.',
        'Un portal violeta con partículas en túnel y un haz de luz que crece a medida que bajás.',
        'Tarjetas con glassmorphism y un brillo que sigue al cursor para marcar dónde estás.',
        'Sección de proyectos con tarjetas en perspectiva 3D y páginas legales completas.',
        'Mobile-first, con apoyos de accesibilidad y SEO (Open Graph, HTML semántico).',
      ],
      en: [
        'The opening plays a 100-frame logo sequence tied to scroll, drawn on canvas.',
        'A live particle network that links nearby nodes and adds depth to the intro.',
        'A violet portal with tunnel particles and a light beam that grows as you scroll down.',
        'Glassmorphism cards with a glint that follows the cursor to mark where you are.',
        'Projects section with 3D-perspective cards and complete legal pages.',
        'Mobile-first, with accessibility and SEO support (Open Graph, semantic HTML).',
      ],
    },
    result: {
      es: 'Una marca que se siente tan técnica como el trabajo que representa y que funciona como carta de presentación de la agencia.',
      en: 'A brand that feels as technical as the work it represents and works as the agency’s calling card.',
    },
    cover: {
      src: nexorCover,
      alt: {
        es: 'Portada de Nexor con el logotipo revelándose sobre una red de partículas',
        en: 'Nexor hero with the logo revealing over a particle network',
      },
    },
    gallery: [
      {
        src: nexorServices,
        alt: {
          es: 'Sección de servicios de Nexor con cards glassmorphism',
          en: 'Nexor services section with glassmorphism cards',
        },
      },
      {
        src: nexorProjects,
        alt: {
          es: 'Sección de proyectos de Nexor con tarjetas en perspectiva',
          en: 'Nexor projects section with perspective cards',
        },
      },
    ],
    demoUrl: 'https://pxp2p.github.io/nexor/',
    repoUrl: 'https://github.com/pxp2p/nexor',
  },
  {
    slug: 'barber-app',
    title: 'Barber App',
    subtitle: {
      es: 'Turnos para una barbería',
      en: 'Booking for a barbershop',
    },
    summary: {
      es: 'Un sistema de reservas de punta a punta: login por roles, agenda de turnos, alta y baja de reservas y avisos push al celular. Backend en Node/Express con MongoDB y un cliente PWA que se instala.',
      en: 'An end-to-end booking system: role-based login, a schedule of slots, booking and cancellation, and push alerts to the phone. Node/Express backend with MongoDB and an installable PWA client.',
    },
    context: {
      es: 'La barbería manejaba todo a mano, entre planillas y mensajes. La idea fue un solo lugar donde el barbero publica sus franjas y el cliente reserva y recibe el aviso, sin vueltas.',
      en: 'The shop ran everything by hand, between spreadsheets and messages. The idea was a single place where the barber posts slots and the client books and gets the alert, with no detours.',
    },
    role: {
      es: 'Full-stack · API, datos y autenticación',
      en: 'Full-stack · API, data and authentication',
    },
    year: 2026,
    status: 'production',
    stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt', 'Web Push', 'PWA'],
    highlights: {
      es: [
        'API REST organizada en MVC: controladores, modelos, rutas y middlewares por separado.',
        'Login con JWT y contraseñas hasheadas con bcrypt; dos roles, barbero y cliente.',
        'Modelo de turnos: el barbero abre franjas y el cliente reserva o cancela, con populate por referencia.',
        'Notificaciones push (Web Push) que avisan al celular cuando cambia un turno.',
        'Cliente PWA instalable, mobile-first, con ícono y manifest propios.',
        'Front y back desplegados por separado, conectados a MongoDB Atlas en la nube.',
      ],
      en: [
        'REST API organized as MVC: controllers, models, routes and middlewares kept separate.',
        'Login with JWT and bcrypt-hashed passwords; two roles, barber and client.',
        'Appointment model: the barber opens slots and the client books or cancels, with referenced populate.',
        'Push notifications (Web Push) that alert the phone when an appointment changes.',
        'Installable mobile-first PWA client, with its own icon and manifest.',
        'Front and back deployed separately, connected to MongoDB Atlas in the cloud.',
      ],
    },
    result: {
      es: 'La agenda y los avisos quedaron en un mismo lugar: se acabaron los mensajes a mano y la operación se sostiene sola.',
      en: 'Schedule and alerts now live in one place: no more manual messages and an operation that holds itself up.',
    },
    cover: {
      src: barberCover,
      alt: {
        es: 'Pantalla de inicio de sesión de Barber App',
        en: 'Barber App sign-in screen',
      },
    },
    gallery: [
      {
        src: barberRegister,
        alt: {
          es: 'Pantalla de registro de Barber App',
          en: 'Barber App registration screen',
        },
      },
      {
        src: barberMobile,
        alt: {
          es: 'Barber App en vista móvil',
          en: 'Barber App in mobile view',
        },
      },
    ],
    demoUrl: 'https://nexorbarber.vercel.app/',
    repoUrl: 'https://github.com/pxp2p/barberia-backend',
  },
];
