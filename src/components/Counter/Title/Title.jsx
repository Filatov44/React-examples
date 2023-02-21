import { StyledTitle,StyledTitleValue } from "./Title.styled";

export default function Title ({count}) {
	return (
		<div>
	<StyledTitle>Counter</StyledTitle>
	<StyledTitleValue>{count}</StyledTitleValue>
	</div>
	)
};