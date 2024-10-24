import React from 'react';
import { Progress } from "@nextui-org/react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const waveAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const StyledLogo = styled.img`
  animation: ${waveAnimation} 2s ease-in-out infinite;
  filter: ${props => props.isDark ? 'invert(1) brightness(2)' : 'none'};
`;

const LoadingScreen = () => {
  const isDark = document.documentElement.classList.contains('dark');

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-black z-50">
      <StyledLogo
        src="https://ata-it-th.com/wp-content/uploads/2023/03/cropped-ata_bnc.png"
        alt="ATA IT Logo"
        className="h-16 md:h-24 mb-8"
        isDark={isDark}
      />
      <div className="w-64 px-4">
        <Progress
          size="sm"
          isIndeterminate
          aria-label="Loading..."
          className="max-w-md"
          color="primary"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;