import styled from 'styled-components';

export const StyledModalWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;

text-align: center;
`;

export const StyledOverlay = styled.div`
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.8);
transition: all 0.5s ease-in-out;
`;

export const StyledModal = styled.div`
background-color: #fff;
width: 70%;
max-width: 800px;
padding: 40px 30px;
border-radius: 10px;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
transition: all 0.5s ease-in-out;
`;
