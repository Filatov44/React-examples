import { Children, useState } from "react";
import { StyledModal, StyledModalWrapper, StyledOverlay } from "./Modal.styled";
import ModalBtnClose from "./ModalBtn/ModalBtnClose";
import ModalBtnOpen from "./ModalBtn/ModalBtnOpen";
export default function Modal () {

	const[open, setOpen] = useState(false);

return(<StyledModalWrapper>
	<ModalBtnOpen btnTitle = 'open modal' onClick={() => setOpen(true) }/>
	{open && <StyledOverlay>
		<StyledModal>
		<ModalBtnClose/>
		<img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        
		</StyledModal>
	</StyledOverlay>}
	
</StyledModalWrapper>
)
	
}