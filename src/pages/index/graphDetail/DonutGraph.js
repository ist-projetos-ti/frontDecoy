import React from "react";
import moment from "moment";
import { ResponsivePie } from "@nivo/pie";

import { Container } from "./styles";

export default function GraficoOee({ dado }) {
   let values = 0;
   const idealTime = 450;

   if (dado.length !== 0) {
      const start = moment(dado[0].timestamp).format("YYYY-MM-DD HH:mm:ss");
      const diference = moment(dado[dado.length - 1].timestamp).diff(start, "seconds");
      values = ((dado.length * idealTime) / diference) * 100;
   }

   const color = values < 70 ? "#D26561" : "#B4DFD5";

   return (
      <Container color={color}>
         <p className="valores">{Math.round(values) + "%"}</p>

         <ResponsivePie
            data={[
               {
                  id: "Parado",
                  label: "Parado",
                  value: Math.round(values),
               },
               {
                  id: "Disponivel",
                  label: "Disponivel",
                  value: 100 - Math.round(values),
               },
            ]}
            colors={[color, "#f2f2f2"]}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            innerRadius={0.9}
            enableRadialLabels={false}
            // cornerRadius={5}
            startAngle={-140}
            endAngle={140}
            // borderColor="#f2f2f2"
            animate={true}
            enableSlicesLabels={false}
            isInteractive={true}
         />
      </Container>
   );
}
