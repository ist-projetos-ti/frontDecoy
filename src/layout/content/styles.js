import styled from "styled-components";

export const Container = styled.div`
  /* min-width: ${(props) => `calc(${props.wid}px - 100px)`}; */
  min-width: calc(100% - 100px);
  width: calc(100% - 100px);
  left: 300px;
  top: 0;
  height: 100%;
  transition: 500ms;
  z-index:20;
  display: flex;
  margin-left:${(props) => (props.isOpen ? "300px" : "100px")};
  @media (max-width: 1365px) {
  margin-left:${(props) => (props.isOpen ? "230px" : "70px")};

    width: calc(100% - 70px);
  }
`;
export const MainContainer = styled.div`
   width: 100%;
   height: 100%;
   padding: 14px;
   display: flex;
   div.contentt {
      width: 100%;
      display: flex;
      height: 100%;
      border-radius: 40px;
      background-color: #fcfcfc;
      align-items: start;
      justify-content: start;
      overflow: hidden;
      /* flex-grow: 1; */
      /* flex-direction: row; */
   }
`;
