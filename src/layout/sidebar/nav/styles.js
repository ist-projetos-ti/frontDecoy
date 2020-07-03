import styled from "styled-components";

export const Container = styled.ul`
   padding-left: 30px;
   a {
      flex-direction: row;
      display: flex;
      align-items: center;
      li {
         padding: 25px 0;
         display: flex;
         justify-content: center;
         position: relative;

         div {
            position: absolute;
            background-color: #fcfcfc;
            width: 45px;
            height: 0px;
            border-radius: 25px;
            z-index: 10;
            top: 50px;
         }
         .divIconContainer-enter-active,
         .divIconContainer-enter-done {
            top: -10px;
            height: 90px;
            transition: 400ms;
         }
         .divIconContainer-exit {
            top: -10px;
            height: 90px;
         }
         .divIconContainer-exit-active,
         .divIconContainer-exit-done {
            height: 00px;
            top: 50px;
            transition: 300ms;
         }
         svg {
            color: #8e8f95;
            font-size: 2.2em;
            z-index: 15;
         }
         svg.active {
            color: #292b37;
         }
      }
      p {
         color: #8e8f95;
         font-size: 1.3em;
         padding-left: 45px;
      }
      p.active {
         color: #fcfcfc;
      }

      :hover {
         cursor: pointer;
         li {
            svg {
               color: #fcfcfc;
            }
            svg.active {
               color: #292b37;
            }
         }
         p {
            color: #fcfcfc;
         }
      }
   }
   @media (max-width: 1365px) {
      /* padding-left: 30px;

      a {
         li {
            padding: 25px 0;
            div {
               width: 50px;
               border-radius: 25px;
               z-index: 10;
               top: 50px;
            }
            .divIconContainer-enter-active,
            .divIconContainer-enter-done {
               top: -10px;
               height: 100px;
            }
            .divIconContainer-exit {
               top: -10px;
               height: 115px;
            }
            .divIconContainer-exit-active,
            .divIconContainer-exit-done {
               height: 00px;
               top: 50px;
               transition: 300ms;
            }
            svg {
               font-size: 2em;
            }
         }
         p {
            font-size: 1.2em;
            padding-left: 45px;
         }
      } */
   }
`;
