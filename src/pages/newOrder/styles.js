import styled from "styled-components";

export const Content = styled.div`
   width: 100%;
   font-size: 1em;
   display: flex;
   flex-direction: column;

   h1 {
      color: #292b37;
      font-size: 1.5rem;
      padding-top: 30px;
      padding-bottom: 30px;
      padding-left: 40px;
      text-transform: uppercase;
      font-weight: 600;
   }
   form {
      width: 60%;
      font-size: 1em;
      padding: 20px 20px 90px 20px;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      border-radius: 20px;
      box-shadow: 0px 0px 20px 1px #f1f1f1;
      position: relative;

      p {
         font-size: 1.5rem;
         color: #8e8f95;
         padding: 5px 0;
         width: 100%;
         display: block;
      }
      p.error {
         color: red;
         text-align: center;
         padding: 0;
      }
      input {
         width: 100%;
         margin-top: 10px;
         padding: 7px;
         font-size: 1rem;
         margin-bottom: 20px;
         border-bottom: 2px solid #c5c5c7;
         background-color: #fcfcfc;
         -webkit-transition: 500ms;
         transition: 500ms;
         color: #8e8f95;
         margin: 0 auto;
         display: block;

         :focus {
            border-bottom: 3px solid #8e8f95;
         }
         ::placeholder {
            color: #c5c5c7;
         }
      }
   }
`;
export const Button = styled.button`
   width: calc(100% - 40px);
   position: absolute;
   border: 2px solid #8e8f95;
   color: ${(props) => (props.isLoading ? "#fcfcfc" : "#8e8f95")};
   background-color: ${(props) => (props.isLoading ? "#8e8f95" : "#fcfcfc")};
   border-radius: 10px;
   cursor: pointer;
   font-size: 1.5rem;
   z-index: 30;
   bottom: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   transition: 1s;
   height: ${(props) => (props.isLoading ? "370px" : "50px")};
   svg {
      color: #fcfcfc;
   }
`;
