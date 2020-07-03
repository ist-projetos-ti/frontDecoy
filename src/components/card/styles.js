import styled from "styled-components";

export const MainContainer = styled.div`
   width: 100%;
   padding: 14px;
   display: flex;
   background-color: #fcfcfc;
   box-shadow: ${(props) => (props.selected ? "inset 0px 0px 10px 1px #c5c5c7" : "0px 8px 10px 1px #c5c5c7")};
   border-radius: 20px;
   flex-direction: column;
   cursor: pointer;
   h2 {
      color: #c5c5c7;
      font-size: 1rem;
      padding: 0px 0px 10px 10px;
   }
`;
