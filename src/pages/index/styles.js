import styled from "styled-components";
import { HeaderContent as Header } from "../history/styles";
import { Details as Detail } from "../history/styles";

export const HeaderContent = styled(Header)`
   h1 {
      color: #292b37;
      font-size: 1.5rem;
      padding-top: 30px;
      padding-bottom: 10px;
      padding-left: 40px;
      text-transform: uppercase;
      font-weight: 600;
   }
`;

export const Backdrop = styled.div`
   position: absolute;
   top: 14px;
   left: 84px;
   background-color: #8e8f95ba;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   z-index: 99;
   bottom: 14px;
   right: 14px;
   border-radius: 40px;
   h1 {
      color: white;
      font-size: 3rem;
   }
`;

export const BodyContent = styled.div`
   width: 100%;
   font-size: 1em;
   padding: 20px 35px;
   display: flex;
   color: #8e8f95;
   p {
      font-size: 1rem;
      font-weight: bold;
      padding: 3px 0px;
      span {
         font-weight: lighter;
      }
   }
`;

export const ConfirmCloseOrder = styled.div`position: absolute;
   width: 100%;
   height: ${props=> props.show?'100%':'0%'} ;
   z-index: 9998;
   background-color:#fcfcfc;
   top: 0;
   left: 0;
   align-items: center;
   justify-content:space-around;
   display:flex;
   transition: 0.5s;
   overflow:hidden;
   span {
      width:60%;
      padding-left:20px;
      font-size:1.5em;
   }
   p {
      box-shadow: 0px 0px 10px 1px #bfbfbf;
      padding:3px;
      border-radius: 50%;
      width:30px;
      height: 30px;
      align-items: center;
      justify-content:space-around;
      display:flex;
      :hover {
         box-shadow: 0px 0px 10px 3px #bfbfbf;
         cursor: pointer;
      }
      svg {
         font-size:20px;
      }
   }
`

export const Details = styled(Detail)`
   div.energizer {
      margin: 10px 0px;
      padding: 0px 20px;
      position: relative;
      
   }
   div.card {
      background-color: #dedede;
      border-radius: 20px;
      margin: 10px 0px;
      display: flex;
      padding: 25px;
      flex-direction: column;
      align-items: baseline;
      h2 {
         padding-top: 20px;
         padding-left: 15px;
         font-size: 1.2rem;
         color: #8e8f95;
      }
      p {
         font-size: 1.5rem;
         text-align: center;
         color: #8e8f95;
      }
      span {
         font-size: 2rem;
         text-align: center;
         color: #8e8f95;
      }
   }
   div.alarms {
      background-color: #292b37;
      border-radius: 25px;
      margin: 10px 0px;
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      font-size: 0.9rem;

      h2 {
         padding: 20px 0 15px 15px;
         font-size: 1.2rem;
         color: #fcfcfc;
      }
      div.alarmsContainer {
         width: 100%;
         height: 250px;
         overflow: auto;
         p {
            display: flex;
            width: 100%;
            padding: 5px 10px;
            justify-content: space-between;
            font-size: inherit;
            align-items: center;
            svg {
               color: #fcfcfc;
               /* padding: 50px 0px; */
               font-size: 1.8rem;
            }
            span {
               font-size: inherit;
               color: #fcfcfc;
            }
         }
      }
   }
`;
