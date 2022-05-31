import React from 'react';
import { motion } from 'framer-motion';
import { socialsIconAnimation, socialsDecorateSpanAnimation } from '../../commons/const';
import { SocialsLinks } from '../../commons/const';
import { StyledContainer, StyledDecorateSpan } from './Socials.style';
import { GithubIcon, GmailIcon, TelegramIcon } from '../../assets/icons';

export const Socials: React.FC = () => {
  return (
    <StyledContainer>
      <motion.a
        rel="noreferrer"
        target="_blank"
        href={SocialsLinks.GitHub}
        aria-label="github link"
        variants={socialsIconAnimation}
        initial={'initial'}
        animate={'animate'}
        transition={socialsIconAnimation.transition(1)}
      >
        <GithubIcon />
      </motion.a>
      <motion.a
        rel="noreferrer"
        target="_blank"
        href={`mailto:${SocialsLinks.Gmail}`}
        aria-label="gmail link"
        variants={socialsIconAnimation}
        initial={'initial'}
        animate={'animate'}
        transition={socialsIconAnimation.transition(1.2)}
      >
        <GmailIcon />
      </motion.a>
      <motion.a
        rel="noreferrer"
        target="_blank"
        href={SocialsLinks.Telegram}
        aria-label="telegram link"
        variants={socialsIconAnimation}
        initial={'initial'}
        animate={'animate'}
        transition={socialsIconAnimation.transition(1.4)}
      >
        <TelegramIcon />
      </motion.a>
      <StyledDecorateSpan
        variants={socialsDecorateSpanAnimation}
        initial={'initial'}
        animate={'animate'}
        transition={socialsDecorateSpanAnimation.transition}
      />
    </StyledContainer>
  );
};
