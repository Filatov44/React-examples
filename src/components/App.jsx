import { useState, useEffect } from "react";
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

	const onBackdropClose = e => {
		if (e.currentTarget === e.target) setOpen(false);
	};

	useEffect(() => {
		if(open){
		const onEsc = e => {
		  if (e.code === 'Escape') setOpen(false);
		};
		document.addEventListener('keydown', onEsc);
		console.log(1);
  
		return () => {
		  document.removeEventListener('keydown', onEsc);
		  console.log(2);
		};
		}
	 }, [open]);

  return (
  <>
  {/* <Counter/> */}
  <StyledModalWrapper>
  <ModalBtnOpen btnTitle='open Counter' onClick={openModal}/>
  { open && <Modal  onClose= {closeModal} onCloseBD={onBackdropClose}>
	{/* <h1>Hello</h1> */}
	{/* <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" /> */}
	<Counter/>
	</Modal>}
	</StyledModalWrapper>
  </>
  );
};
