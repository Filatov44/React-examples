
import { StyledModal, StyledModalWrapper, StyledOverlay } from "./Modal.styled";
import ModalBtnClose from "./ModalBtn/ModalBtnClose";

export default function Modal ({onClose,onCloseBD, children}) {



return(
<StyledModalWrapper>
	 <StyledOverlay onClick={onCloseBD}>
		<StyledModal>
		<ModalBtnClose onClick={onClose}/>
		{children}
		</StyledModal>
	</StyledOverlay>	
</StyledModalWrapper>
)
	
}
