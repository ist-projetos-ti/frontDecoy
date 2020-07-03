import styled from "styled-components";

export const Container = styled.div`
   width: 130px;
   height: 130px;
   padding: 10px 10px 22px 10px;
   border-radius: 65px;
   position: relative;
   background-color: #fcfcfc;
   box-shadow: 0px 0px 20px 1px #efefef;
   margin: 0 auto;
   p.valores {
      position: absolute;
      top: 40%;
      left: 60%;
      margin-left: -30px;
      font-size: 1.5rem;
      color: ${(props) => props.color};
   }
   p.valores.term {
      top: unset;
      bottom: 8%;
   }
   div.Term {
      width: 40px;
      margin: 0 auto;
      position: relative;
      height: 85px;
      span.termGround {
         position: absolute;
         width: 80%;
         margin-left: 5px;
         z-index: 85;
         background-color: ${(props) => props.color};
         bottom: 0;
         height: ${(props) => props.heigth};
      }
      img {
         position: absolute;
         width: 100%;
         z-index: 90;
      }
      div.linebreak {
         position: absolute;
         top: 38%;
         width: 55px;
         left: 3px;
         z-index: 95;
         display: flex;
         align-items: center;
         justify-content: space-between;
         span {
            width: 60%;
            height: 2px;
            background-color: #ddd;
         }
         p {
            font-size: 1em;
            color: #ddd;
         }
      }
   }
`;
