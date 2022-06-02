import { IPageRoutes, ISocialsLinks } from './model';

export const PageRoutes: IPageRoutes = {
  main: '/',
  skills: '/skills',
  about: '/about',
  work: 'work',
};

export const SocialsLinks: ISocialsLinks = {
  GitHub: 'https://github.com/Fumieizu',
  Gmail: 'suvernevdima@gmail.com',
  Telegram: 'https://t.me/Kuroeizu',
};

export const introAnimation = {
  initial: {
    height: 0,
  },
  animate: (custom: string) => ({
    height: custom,
  }),
  transition: {
    type: 'spring',
    duration: 2,
    delay: 1,
  },
};

export const introImageAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    type: 'default',
    duration: 2,
    delay: 1,
  },
};

export const mainLinkAnimation = {
  initial: (custom: number) => ({
    y: custom,
  }),
  animate: {
    y: 0,
  },
  transition: {
    type: 'spring',
    duration: 1.5,
    delay: 1,
  },
};

export const socialsIconAnimation = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: [0, 1, 1.5, 1],
  },
  transition: (custom: number) => ({
    type: 'default',
    duration: 2,
    delay: custom,
  }),
};

export const socialsDecorateSpanAnimation = {
  initial: {
    height: 0,
  },
  animate: {
    height: '8rem',
  },
  transition: {
    type: 'spring',
    duration: 1,
    delay: 0.8,
  },
};

export const WorkItemAnimation = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
};

export const WorkListAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

export const routeAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const aboutRouteAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const mainRouteAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const aboutImageAnimation = {
  initial: {
    right: '-20%',
    top: '100%',
  },
  animate: {
    right: '5%',
    top: '10%',
    transition: { duration: 2, delay: 0.5 },
  },
};
