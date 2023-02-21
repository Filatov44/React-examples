import styled from 'styled-components';

export const StyledModalBtnOpen = styled.button`
background: #fff;
padding: 18px 25px;
border-radius: 20px;
font-weight: 500;
border: 0;
outline: none;
font-size: 22px;
cursor: pointer;
line-height: 23px;
box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
transition: all 0.1s ease-in-out;

&:hover {
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}

&:active {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
}
`;

export const StyledModalBtnClose = styled.button`
position: absolute;
    right: 10px;
    top: 10px;
    height: 24px;
    width: 24px;
    opacity: 0.3;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`;