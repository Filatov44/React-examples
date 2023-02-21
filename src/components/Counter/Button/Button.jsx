import { StyledButton } from "./Button.styled";

export default function ButtonCounter ({btnTitle, ...props }) {
	return (
		<StyledButton {...props} >{btnTitle}</StyledButton>
	);
};