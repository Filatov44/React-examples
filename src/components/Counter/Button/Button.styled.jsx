import styled from 'styled-components';

export const StyledButton = styled.button`
background: transparent;
background-color: ${props => props.bgc};
color: #fff;
box-shadow: 0 4px 0 ${props => props.boxShadow};
border: 1px solid ${props => props.border};
text-align: center;
font-size: 22px;
border-radius: 15px;
padding: 10px 25px;
cursor: pointer;
margin: 0 10px;
transition: all 0.05s ease-in-out;
 &:disabled{
	background-color: #A9A9A9;
	box-shadow: 0 4px 0 #A9A9A9;
	border: 1px solid #A9A9A9;
	&:hover {
		transform: none;
	 }
	
	 &:active {
		transform: none;
		box-shadow:  0 4px 0 #A9A9A9;
	 }
 }
 &:hover {
	transform: translateY(-2px);
 }

 &:active {
	transform: translateY(2px);
	box-shadow: none;
 }
`;