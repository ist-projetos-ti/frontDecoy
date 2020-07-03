import styled from "styled-components";

export const HeaderContent = styled.div`
   width: 100%;
   height: 100%;
   padding: 0;
   display: flex;
   hr {
      width: 90%;
      padding: 5px;
   }
   h1 {
      color: #292b37;
      font-size: 1.5rem;
      padding-top: 30px;
      padding-bottom: 30px;
      padding-left: 40px;
      text-transform: uppercase;
      font-weight: 600;
   }
   input {
      width: 90%;
      margin-top: 20px;
      padding: 7px;
      font-size: 1.2rem;
      margin-bottom: 30px;
      border-bottom: 1px solid #c5c5c7;
      background-color: #fcfcfc;
      transition: 500ms;
      color: #8e8f95;
      ::placeholder {
         color: #c5c5c7;
      }
      :focus {
         border-bottom: 2px solid #8e8f95;
      }
   }
   svg.searchIcon {
      color: #c5c5c7;
      margin-left: -30px;
   }

   /********************content***********************/
`;

export const BodyContent = styled.div`
   width: 100%;
   font-size: 1em;
   padding: 20px 35px;
   display: flex;
   max-height: calc(100% - 125px);
   overflow: auto;
   color: #8e8f95;
   ::-webkit-scrollbar {
      width: 5px;
   }
   ::-webkit-scrollbar-button {
      height: 1px;
   }
   ::-webkit-scrollbar-track {
      background: #f1f1f1;
   }
   ::-webkit-scrollbar-thumb {
      background: #d7d7d7;
   }
   h2 {
      font-size: 1.2rem;
      text-align: center;
      padding: 20px 0;
      width: 100%;
   }
   img.imgFetchResult {
      display: block;
      margin: 0 auto;
      width: 250px;
   }
`;

export const Details = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   box-shadow: inset -4px 0px 10px 0px #c5c5c7;
   padding: 20px;
   h1 {
      font-size: 1.5rem;
      text-align: center;
      padding: 10px 0;
      text-transform: uppercase;
   }
   h2 {
      font-size: 1.2rem;
      text-align: center;
      padding: 20px 0;
      width: 100%;
      color: #8e8f95;
   }
   p {
      font-size: 1rem;
      color: #8e8f95;
      padding: 10px 0;
      span {
         font-size: 1rem;
         color: #8e8f95;
         padding-left: 5px;
         font-weight: 600;
      }
   }
   p.orderDetails {
      border: 1px solid #8e8f95;
      border-radius: 10px;
      margin-top: 40px;
      text-align: center;
      cursor: pointer;
   }
`;

export const ProductivityContainer = styled.div.attrs((props) => ({
   color: props.color,
   w: props.w,
}))`
   position: relative;
   height: 30px;
   div {
      position: absolute;
      height: 30px;
      border-radius: 15px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fcfcfc;
   }
   div.background {
      background-color: #dedede;
      width: 100%;
   }
   div.colorful {
      background-color: ${(props) => props.color};
      width: ${(props) => props.w};
   }
`;

export const CardContainer = styled.div`
   width: 100%;
   height: 100%;
   p {
      color: #8e8f95;
      font-size: 1rem;
      padding: 3px 0;
      span {
         font-weight: 700;
         font-size: inherit;
      }
   }
   p.order {
      font-size: 1.5rem;
   }

   p.orderNumber {
      font-size: 2.5rem;
      text-align: center;
   }
`;
