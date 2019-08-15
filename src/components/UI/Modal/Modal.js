import React, { useEffect } from 'react';

import Backdrop from '../BackDrop/BackDrop';
import classes from './Modal.module.css';

const Modal = (props) => {
  const modalDiv = React.createRef();
  useEffect(() => {
    modalDiv.current.scrollTo(0, 0);
  });

  const hideModalOnClick = () => {
    props.setShowModal(false);
  };

  const attachedClasses = [classes.Modal, classes.HideModal];
  if(props.show) {
    attachedClasses[1] = classes.ShowModal;
  }

  return (
    <>
      <Backdrop show={props.show} clicked={hideModalOnClick}/>
      <div className={attachedClasses.join(' ')} ref={modalDiv}>
        <button className={classes.ModalCloseButton} onClick={hideModalOnClick}>x</button>
        {props.children}
      </div>
    </>
  );
};

export default Modal;
