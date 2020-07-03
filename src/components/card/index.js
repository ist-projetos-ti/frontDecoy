//--------------------------------import the dependences
import React from 'react';

//--------------------------------import the styles
import { MainContainer } from './styles';

function Card({ children, selected, onClick }) {
  return (
    <MainContainer selected={selected} onClick={onClick}>
      {children}
    </MainContainer>
  );
}

export default Card;
