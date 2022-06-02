import React, { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { lightConfig, darkConfig } from '../../commons/particles-confogs/particles-confogs';
import { StyledContainer } from './Particle.style.';
import { IParticle } from './model';
import { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

export const Particle: React.FC<IParticle> = ({ mode }) => {
  const options = useMemo(() => (mode === 'light' ? lightConfig : darkConfig), [mode]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <StyledContainer>
      <Particles id="tsparticles" init={particlesInit} params={options} />
    </StyledContainer>
  );
};
