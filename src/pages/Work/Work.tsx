import React, { useState, useRef, useEffect } from 'react';
import { StyledList, StyledMainContainer } from './Work.style';
import { Title } from '../../components/Title';
import { Socials } from '../../components/Socials';
import { ProjectsMap } from '../../commons/projectsMap';
import { ComebackButton } from '../../components/ComebackButton';
import { theme } from '../../commons/theme';
import { WorkItem } from '../../components/WorkItem';
import { WorkListAnimation, routeAnimation } from '../../commons/const';

export const Work: React.FC = () => {
  const [width, setWidth] = useState<number>(0);
  const slider = useRef<HTMLElement>(null);

  useEffect(() => {
    if (slider && slider.current !== null) {
      setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
    }
  }, []);

  return (
    <StyledMainContainer
      variants={routeAnimation}
      initial={'initial'}
      animate={'animate'}
      exit={'exit'}
      ref={slider}
    >
      <Title color={theme.colors.white} text={'WORK'} top={'10%'} right={'20%'} />
      <ComebackButton />
      <Socials />
      <StyledList
        variants={WorkListAnimation}
        initial={'initial'}
        animate={'animate'}
        drag={'x'}
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: 'grabbing' }}
      >
        {ProjectsMap.map(({ name, description, tags, demo, github }) => (
          <WorkItem
            key={name}
            name={name}
            description={description}
            tags={tags}
            demo={demo}
            github={github}
          />
        ))}
      </StyledList>
    </StyledMainContainer>
  );
};
