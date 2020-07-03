import React from "react";

import { Container } from "./styles";
import img from "../../assets/logo.png";
import Nav from "./nav";

function SideBar({ open, close }) {
   return (
      <>
         <Container>
            <div className="sidebarLogo">
               <img src={img} alt="logo" />
            </div>
            <Nav open={open} close={close} />
         </Container>
      </>
   );
}

export default SideBar;
