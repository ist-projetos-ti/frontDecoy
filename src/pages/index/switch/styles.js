import styled from "styled-components";

export const Content = styled.div`
   width: 100%;
   height: 40px;
   padding: 10px 0;
   display: flex;
   position: relative;
   z-index: 9998;
   cursor: pointer;
   div.background {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 30;
      background-color: ${(props) => (props.isActive ? "#B4DFD5" : "#D26561")};
      height: inherit;
      border-radius: 20px;
      display: flex;
      align-items: center;
      box-shadow: ${(props) => (props.isActive ? "0px 0px 10px 2px #b4dfd5" : "none")};
      p {
         display: block;
         width: 100%;
         color: white;
         font-size: 1.4rem;
         text-align: center;
      }
   }
   div.ball {
      position: absolute;
      top: 3px;
      z-index: 35;
      width: 46px;
      height: calc(100% - 6px);
      border-radius: 20px;
      background-color: white;
      border: 5px solid transparent;
      transition: 500ms;
      margin-left: ${(props) => (props.isActive ? "calc(100% - 49px)" : "3px")};
   }
`;
