import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.modalcontent}>
        <div className={classes.modalheader}>
          <span className={classes.close} onClick={props.onConfirm}>
            &times;
          </span>
          <h2>{props.title}</h2>
        </div>
        <div className={classes.modalbody}>
          <p>{props.message}</p>
        </div>
        <div className={classes.modalfooter}>
          <button className={classes.modalbtn} onClick={props.onConfirm}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm}></Backdrop>,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay
          onConfirm={props.onConfirm}
          title={props.title}
          message={props.message}
        ></ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
