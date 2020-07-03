import React, { useState } from "react";

//--------------------------------import the styles
import { Container } from "./styles";

//--------------------------------import the store
// import { Context } from '../store/context';
// import { tomadaDecisao, estadoInicial } from '../store/reducer/reducer';

//--------------------------------import the components
import Routes from "../routes/routes";
import SideBar from "./sidebar";
import Content from "./content";

function Layout() {
   const [isOpen, setOpen] = useState(false);
   return (
      <>
         <Container>
            <SideBar close={() => setOpen(false)} open={() => setOpen(true)} />
            <Content isOpen={isOpen}>
               <Routes />
            </Content>
         </Container>
      </>
   );
}

export default Layout;
