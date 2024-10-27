import React, { useEffect } from 'react';
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const moveInCircle = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
  100% { transform: rotate(360deg); }
`;

const moveVertical = keyframes`
  0% { transform: translateY(-50%); }
  50% { transform: translateY(50%); }
  100% { transform: translateY(-50%); }
`;

const moveHorizontal = keyframes`
  0% { transform: translateX(-50%) translateY(-10%); }
  50% { transform: translateX(50%) translateY(10%); }
  100% { transform: translateX(-50%) translateY(-10%); }
`;

const GradientContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background: linear-gradient(40deg, #dff9fb, #ffffff);

  .gradients-container {
    filter: blur(40px);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .g1, .g2, .g3, .g4, .g5 {
    position: absolute;
    width: 200%;
    height: 200%;
    mix-blend-mode: hard-light;
  }

  .g1 {
    background: radial-gradient(circle at center, rgba(104, 109, 224, 0.8) 0, rgba(104, 109, 224, 0) 50%);
    animation: ${moveVertical} 30s ease infinite;
  }

  .g2 {
    background: radial-gradient(circle at center, rgba(126, 214, 223, 0.8) 0, rgba(126, 214, 223, 0) 50%);
    animation: ${moveInCircle} 20s reverse infinite;
  }

  .g3 {
    background: radial-gradient(circle at center, rgba(223, 249, 251, 0.8) 0, rgba(223, 249, 251, 0) 50%);
    animation: ${moveInCircle} 40s linear infinite;
  }

  .g4 {
    background: radial-gradient(circle at center, rgba(255, 121, 121, 0.8) 0, rgba(255, 121, 121, 0) 50%);
    animation: ${moveHorizontal} 40s ease infinite;
    opacity: 0.7;
  }

  .g5 {
    background: radial-gradient(circle at center, rgba(149, 175, 192, 0.8) 0, rgba(149, 175, 192, 0) 50%);
    animation: ${moveInCircle} 20s ease infinite;
  }
`;

const GradientBackground = ({ children }) => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Interactive gradient effect on mouse move
      const interBubble = document.querySelector('.interactive');
      if (interBubble) {
        const { clientX, clientY } = event;
        interBubble.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <GradientContainer>
      <div className="gradients-container">
        <div className="g1" />
        <div className="g2" />
        <div className="g3" />
        <div className="g4" />
        <div className="g5" />
        <div className="interactive" />
      </div>
      {children}
    </GradientContainer>
  );
};

export default GradientBackground;