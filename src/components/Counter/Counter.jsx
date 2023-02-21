import { StyledContainer, StyledBtnWrapper } from "./Counter.styled"
import Title from "./Title/Title";
import ButtonCounter from "./Button/Button";
import { useState } from "react";
export default function Counter () {

	const [count, setCount] = useState(0);

	const isDes = count <= 0;

	return (
		<StyledContainer>
			<Title count={count}/>
			<StyledBtnWrapper>
			<ButtonCounter disabled={isDes} btnTitle='- Минус' bgc="#e63946" boxShadow='#e63946' border="#e63946" onClick= {() => setCount(count => count-1)}/>
			<ButtonCounter btnTitle='Плюс +' bgc="#2a9d8f" boxShadow='#2a9d8f' border="#2a9d8f" onClick= {() => setCount(count => count+1)}/>
			</StyledBtnWrapper>
		</StyledContainer>
	)

};