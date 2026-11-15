// Zentrale Inhalte des Portfolios. Texte, Links und Bilder werden NUR hier gepflegt.
// Leere Strings ('') = noch nicht vorhanden. Es werden nur echte, geprüfte URLs eingetragen.

export interface NavItem {
  label: string;
}

export interface Skill {
  label: string;
  short: string; // Kürzel, bis echte SVG-Icons eingebaut sind
}

export interface Project {
  title: string;
  description: string;
  image: string; // z. B. 'images/join.webp' (Datei liegt in public/images)
  githubUrl: string;
  liveUrl: string;
}

export type IntroKind = 'about' | 'skills' | 'projects' | 'contact';

export const PORTFOLIO = {
  name: 'Marcel Schmitz',
  firstName: 'Marcel',
  lastName: 'Schmitz',
  role: 'Fullstack Web Developer in Weiterbildung',
  greeting: 'Hallo, ich bin',
  tagline: 'Lernen. Entwickeln. Wachsen.',
  welcome: 'Welcome to my Portfolio',
  // PLATZHALTER: bitte mit eigenen Worten anpassen, nur echten Kenntnisstand beschreiben
  intro:
    'Ich entwickle Web-Anwendungen mit Angular, TypeScript und SCSS und setze das Gelernte in eigenen Projekten um.',

  // Bilder liegen in public/images und können dort einzeln ausgetauscht werden
  bookImage: 'images/book.webp', // das aufgeschlagene Buch (Rahmen, Nebel links, Schreibtisch rechts)
  // Ein Hintergrundbild pro Doppelseite, das über beide Seiten läuft (Reihenfolge wie die Navigation,
  // danach die Abschlussseite). Die Startseite nutzt das Buchbild. Ideales Format: 1,734 : 1 (z. B. 1734 x 1000 px).
  spreadImages: [
    '',
    'images/spread-contact.webp', // About
    'images/spread-contact.webp', // Skills
    'images/spread-contact.webp', // Projects
    'images/spread-contact.webp', // Contact
    'images/spread-thanks.webp', // Danke
  ],
  portrait: 'images/profil.webp', // alternativ: 'images/profil-2.webp'
  portraitAlt: 'Portrait von Marcel Schmitz',

  thanks: {
    title: 'Danke fürs Besuchen!',
    text: "Let's build something awesome together.",
  },

  // Reihenfolge = Reihenfolge der Buchseiten (Doppelseiten)
  nav: [
    { label: 'Home' },
    { label: 'About' },
    { label: 'Skills' },
    { label: 'Projects' },
    { label: 'Contact' },
  ] as NavItem[],

  intros: {
    about: {
      title: 'Über mich',
      text: 'Ich absolviere eine Weiterbildung zum Fullstack-Webentwickler. Hier steht später deine persönliche Geschichte.',
    },
    skills: {
      title: 'Meine Skills',
      text: 'Mit diesen Technologien arbeite ich in meiner Weiterbildung und in meinen Projekten.',
    },
    projects: {
      title: 'Meine Projekte',
      text: 'Zwei Projekte aus meiner Weiterbildung. Weitere folgen.',
    },
    contact: {
      title: 'Kontakt',
      text: 'Du hast ein Projekt, eine Idee oder eine Frage? Schreib mir, ich freue mich auf deine Nachricht.',
    },
  } as Record<IntroKind, { title: string; text: string }>,

  // PLATZHALTER: bitte prüfen und anpassen
  aboutFacts: [
    { label: 'Weiterbildung', value: 'Fullstack-Webentwicklung, seit Mai 2026' },
    { label: 'Frontend', value: 'Angular, TypeScript, SCSS' },
    { label: 'Backend', value: 'Supabase' },
  ],

  skills: [
    { label: 'Angular', short: 'NG' },
    { label: 'TypeScript', short: 'TS' },
    { label: 'SCSS', short: 'Sass' },
    { label: 'GitHub', short: 'GH' },
    { label: 'Supabase', short: 'SB' },
    { label: 'Java', short: 'Jv' },
    { label: 'Python', short: 'Py' },
  ] as Skill[],

  projects: [
    {
      title: 'El Pollo Loco (Klon)',
      description: 'Ein 2D-Jump-&-Run-Spiel im Retro-Stil, inspiriert vom Klassiker.',
      image: '',
      githubUrl: '',
      liveUrl: '',
    },
    {
      title: 'Join (Kanban Board)',
      description: 'Ein Kanban-Board für bessere Teamarbeit, als Gruppenprojekt der Weiterbildung umgesetzt.',
      image: '',
      githubUrl: '',
      liveUrl: '',
    },
  ] as Project[],

  contact: {
    email: '', // z. B. 'name@example.de'
    github: 'https://github.com/marcel-schmitz-dev',
    linkedin: '',
  },
};
