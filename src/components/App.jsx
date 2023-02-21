import { useState } from "react";
import Counter from "./Counter/Counter";
import Modal from "./Modal/Modal";
import { StyledModalWrapper } from "./Modal/Modal.styled";
import ModalBtnOpen from "./Modal/ModalBtn/ModalBtnOpen";

export const App = () => {

	const[open, setOpen] = useState(false);

	
	const openModal =() => {
		setOpen(true)
	};

	const closeModal =() => {
		setOpen(false)
	};

  return (
  <>
  <Counter/>
  <StyledModalWrapper>
  <ModalBtnOpen btnTitle='open modal' onClick={openModal}/>
  { open && <Modal  onClose= {closeModal}>
	{/* <h1>Hello</h1> */}
	<img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
	</Modal>}
	</StyledModalWrapper>
  </>
  );
};
