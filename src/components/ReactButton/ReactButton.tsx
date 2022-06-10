import React from 'react';
import { IReactButton } from './model';
import { StyledButton } from './ReactButton.style';
import { ReactIcon } from '../../assets/icons';
import { useTranslation } from 'react-i18next';

export const ReactButton: React.FC<IReactButton> = ({ onClick, isClick }) => {
  const { t } = useTranslation();

  return (
    <StyledButton isClick={isClick} onClick={onClick}>
      <ReactIcon />
      <span>{t('main.click')}</span>
    </StyledButton>
  );
};
