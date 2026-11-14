import type { Localized } from './types';

export interface StackGroup {
  title: Localized;
  note: Localized;
  items: string[];
}

export const stackGroups: StackGroup[] = [
  {
    title: { es: 'Front-end', en: 'Front-end' },
    note: {
      es: 'Front-ends ágiles, con animación justa y cuidado por la tipografía.',
      en: 'Agile front-ends, with just-enough motion and care for typography.',
    },
    items: ['HTML', 'CSS', 'JavaScript', 'Canvas API', 'Astro', 'Responsive'],
  },
  {
    title: { es: 'Back-end', en: 'Back-end' },
    note: {
      es: 'APIs REST claras, autenticación firme y lógica fácil de testear.',
      en: 'Clear REST APIs, firm auth and logic that is easy to test.',
    },
    items: ['Node.js', 'Express', 'REST', 'JWT', 'bcrypt', 'Web Push'],
  },
  {
    title: { es: 'Base de datos', en: 'Database' },
    note: {
      es: 'Documentos bien modelados, referencias entre colecciones y consultas ordenadas.',
      en: 'Well-modeled documents, cross-collection references and tidy queries.',
    },
    items: ['MongoDB', 'Mongoose', 'MongoDB Atlas', 'Schemas', 'Índices', 'Populate'],
  },
  {
    title: { es: 'Infra y flujo', en: 'Infra & workflow' },
    note: {
      es: 'Deploys repetibles, PWA que se instala y control de versiones prolijo.',
      en: 'Repeatable deploys, an installable PWA and tidy version control.',
    },
    items: ['Vercel', 'Render', 'PWA', 'Git', 'GitHub', 'Networking'],
  },
];
