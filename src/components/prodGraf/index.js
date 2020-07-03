//--------------------------------import the modules
import React from 'react';

//--------------------------------import the styles
import { Svg } from './styles';
//--------------------------------import the components
import { Spring } from 'react-spring/renderprops';

const Circle = ({ off, str, cor }) => {
  const r = 60;
  return (
    <Svg>
      <circle
        cx="25px"
        cy="-95px"
        r={r}
        stroke={cor}
        strokeWidth={str}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={r * 2 * 3.1416}
        strokeDashoffset={off}
        color={cor}
      ></circle>
    </Svg>
  );
};

function ProdGraf({ IQtde, EQtde }) {
  return (
    <Spring from={{ number: 370, stroke: 60, color: 'red' }} to={{ number: 60, stroke: 15, color: '#FEC617' }}>
      {(props) => <Circle off={props.number} str={props.stroke} cor={props.color} />}
    </Spring>
  );
}

export default ProdGraf;
