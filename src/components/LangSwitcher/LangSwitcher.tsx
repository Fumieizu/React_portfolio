import React, { useState, useEffect } from 'react';
import { StyledButton, StyledMainContainer } from './LangSwitcher.style';
import { useTranslation } from 'react-i18next';
import { ILangSwitcher } from './model';

export const LangSwitcher: React.FC<ILangSwitcher> = ({ isMain = false }) => {
  const [isActive, setIsActive] = useState<'en' | 'ru'>('en');
  const { i18n } = useTranslation();

  useEffect(() => {
    setIsActive(i18n.language === 'en' ? 'en' : 'ru');
  }, [i18n]);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const handleEnButtonClick = () => {
    setIsActive('en');
    changeLanguage('en');
  };

  const handleRuButtonClick = () => {
    setIsActive('ru');
    changeLanguage('ru');
  };

  return (
    <StyledMainContainer isMain={isMain}>
      <StyledButton onClick={handleEnButtonClick} isActive={isActive === 'en'}>
        en
      </StyledButton>
      <StyledButton onClick={handleRuButtonClick} isActive={isActive === 'ru'}>
        ru
      </StyledButton>
    </StyledMainContainer>
  );
};
