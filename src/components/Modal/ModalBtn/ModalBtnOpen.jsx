import { StyledModalBtnOpen } from "./ModalBtnOpen.styled";

export default function ModalBtnOpen ({btnTitle, onClick}) {

	return (
		<StyledModalBtnOpen onClick={onClick} >
			{btnTitle}
		</StyledModalBtnOpen>
	)
}