import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  z-index: 5;

  div.sidebarLogo {
    position: absolute;
    top: 40px;
    left: 5px;
    width: 100px;
    padding: 8px;
    img {
      width: 100%;
    }
  }
  @media (max-width: 1365px) {
    div.sidebarLogo {
      width: 80px;
    }
  }
`;
