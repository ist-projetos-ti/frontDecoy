import React from "react";
import { ResponsiveLine } from "@nivo/line";

const CustomSymbol = () => {
   const size = 8;
   const color = "#B4DFD5";
   const borderWidth = 1;
   const borderColor = "#B4DFD5";

   return (
      <g>
         <circle fill="#fff" r={size / 2} strokeWidth={borderWidth} stroke={borderColor} />
         <circle r={size / 5} strokeWidth={borderWidth} stroke={borderColor} fill={color} fillOpacity={0.5} />
      </g>
   );
};

const LinearGraph = ({ dados, ideal }) => {
   const temp = ideal;
   const res = dados.map((iten, key) => {
      return { x: key + 1, y: parseFloat(iten.temperature) };
   });
   return (
      <>
         {false ? (
            <h2>nenhum dado disponivel</h2>
         ) : (
            <ResponsiveLine
               data={[{ id: "temperatura", data: res }]}
               margin={{ top: 15, right: 15, bottom: 15, left: 30 }}
               axisTop={null}
               axisRight={null}
               curve="cardinal"
               lineWidth={2}
               theme={{ textColor: "#c5c5c7" }}
               yScale={{
                  type: "linear",
                  min: temp - 10,
                  max: "auto",
                  stacked: false,
                  reverse: false,
               }}
               areaBaselineValue={temp - 10}
               axisBottom={{
                  orient: "left",
                  tickSize: 0,
                  legendOffset: 40,
                  legendPosition: "middle",
               }}
               axisLeft={{
                  orient: "left",
                  tickPadding: 12,
                  tickSize: 0,
                  legendPosition: "middle",
               }}
               markers={[
                  {
                     axis: "y",
                     value: temp,
                     lineStyle: { stroke: "#d265618c", strokeWidth: 2 },
                  },
               ]}
               colors={["#B4DFD5"]}
               enableSlices="x"
               enableArea={true}
               areaOpacity={0.2}
               useMesh={true}
               motionStiffness={100}
               enableGridY={false}
               enableGridX={false}
               enablePoints={true}
               pointSymbol={CustomSymbol}
            />
         )}
      </>
   );
};

export default LinearGraph;
