import React from 'react';
import { GithubIcon } from '../../assets/icons';
import {
  StyledListItem,
  StyleTitle,
  StyledText,
  StyledTagsContainer,
  StyledTagSpan,
  StyledButtonsContainer,
  StyledDemoLink,
} from './WorkItem.style';
import { WorkItemAnimation } from '../../commons/const';
import { theme } from '../../commons/theme';
import { IWorkItem } from './model';

export const WorkItem: React.FC<IWorkItem> = ({ name, description, tags, demo, github }) => {
  return (
    <StyledListItem variants={WorkItemAnimation}>
      <StyleTitle>{name}</StyleTitle>
      <StyledText>{description}</StyledText>
      <StyledTagsContainer>
        {tags.map((tag) => (
          <StyledTagSpan key={tag}>#{tag}</StyledTagSpan>
        ))}
      </StyledTagsContainer>
      <StyledButtonsContainer>
        <StyledDemoLink rel="noreferrer" target="_blank" href={demo}>
          Demo
        </StyledDemoLink>
        <a rel="noreferrer" target="_blank" href={github}>
          <GithubIcon width={'30px'} height={'30px'} color={theme.colors.black} />
        </a>
      </StyledButtonsContainer>
    </StyledListItem>
  );
};
