import React from "react";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div className={classes.modalcontent}>
          <div className={classes.modalheader}>
            <span className={classes.close} onClick={props.onConfirm}>&times;</span>
            <h2>{props.title}</h2>
          </div>
          <div className={classes.modalbody}>
            <p>{props.message}</p>
          </div>
          <div className={classes.modalfooter}>
            <button className={classes.modalbtn} onClick={props.onConfirm}>Okay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
