interface IPageRoutes {
  main: string;
  skills: string;
  about: string;
  work: string;
}

interface ISocialsLinks {
  GitHub: string;
  Gmail: string;
  Telegram: string;
}

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
  initial: (os: number) => ({
    y: os,
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
