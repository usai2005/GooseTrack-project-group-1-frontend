import React from 'react';
import { useEffect, useState } from 'react';
import { Btn, Icon } from './BackToTop.styled';

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      {backToTopButton && (
        <Btn onClick={scrollUp}>
          <Icon />
        </Btn>
      )}
    </div>
  );
};

export default BackToTopButton;
