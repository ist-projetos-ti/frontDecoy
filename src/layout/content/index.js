import React from "react";

import { Container, MainContainer } from "./styles";

function Content({ children, isOpen }) {
   // const x = document.documentElement.clientWidth;

   return (
      <Container isOpen={isOpen}>
         <MainContainer>
            <div className="contentt">{children}</div>
         </MainContainer>
      </Container>
   );
}

export default Content;
