import React from "react";
//--------------------------------import the styles
import { Content } from "./styles";

function Energizer({ status, onClick }) {
   return (
      <Content isActive={status} onClick={onClick}>
         <div className="background">
            <p>{status ? "Ligado" : "Desligado"}</p>
         </div>
         <div className="ball" />
      </Content>
   );
}

export default Energizer;
