import { useState, useEffect } from 'react';
import styled from 'styled-components';

interface ButtonContainerProps {
  isScrollButtonVisible: boolean;
}

const ButtonContainer = styled.span<ButtonContainerProps>`
  position: fixed;
  bottom: 32px;
  right: 32px;
  align-items: center;
  height: 42px;
  width: 42px;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  opacity: 0.5;
  background: #ef4444;
  border-radius: 4px;
  transition: opacity 0.4s, color ease-in-out 0.2s, background ease-in-out 0.2s;
  display: ${({ isScrollButtonVisible }) =>
    isScrollButtonVisible ? 'flex' : 'none'};

  &:hover {
    opacity: 1;
  }
`;

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      if (!showButton && window.pageYOffset > 100) {
        setShowButton(true);
      } else if (showButton && window.pageYOffset <= 100) {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', checkScrollHeight);
    return () => {
      window.removeEventListener('scroll', checkScrollHeight);
    };
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ButtonContainer isScrollButtonVisible={showButton} onClick={scrollToTop}>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </ButtonContainer>
  );
};

export default BackToTopButton;