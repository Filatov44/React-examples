import styled from 'styled-components';

export const StyledContainer = styled.div`
background-color: ${p => p.theme.colors.counter.backgroundColor};
display: flex;
flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30vh;
  text-align: center;
`;
export const StyledBtnWrapper = styled.div`
display:flex;
justify-content: space-between;
`