import React from "react";
import classes from "./Modal.module.css";

export default function Modal() {
  return (
    <div className={classes.modal}>
      <div className={classes.modalcontent}>
        <div className={classes.modalheader}>
          <span className={classes.close}>&times;</span>
          <h2>Invalid Input</h2>
        </div>
        <div className={classes.modalbody}>
          <p>Please enter a valid name and age (Non-empty values)</p>
        </div>
        <div className={classes.modalfooter}>
          <button className={classes.modalbtn}>Okay</button>
        </div>
      </div>
    </div>
  );
}
