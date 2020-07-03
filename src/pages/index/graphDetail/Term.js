import React from "react";
//import moment from 'moment';

import { Container } from "./styles";

import img from "../../../assets/term2.png";

export default function GraficoOee({ value, ideal }) {
   const values = value ? value : 0;
   const color = values >= ideal ? "#D26561" : "#B4DFD5";
   const heigth = Math.round((50 * value) / ideal);

   return (
      <Container color={color} heigth={`${heigth}%`}>
         <p className="valores term">{Math.round(values)}°C</p>

         <div className="Term">
            <span className="termGround" />
            <img src={img} alt="termometer" />
            <div className="linebreak">
               <span /> <p>{ideal}</p>
            </div>
         </div>
      </Container>
   );
}
