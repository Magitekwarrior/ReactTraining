import React, { useState } from "react";
import classes from "./UserAdd.module.css";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

function UserAdd(props) {
  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setAge] = useState("");

  const [modalInfo, setmodalInfo] = useState();

  function formSubmitHandler(event) {
    event.preventDefault();

    if (
      enteredUsername.trim().length === 0 ||
      enteredUsername.trim().length === 0
    ) {
      setmodalInfo({
        title: "Invalid Input",
        message: "Username is blank"
      })
      return;
    }

    if (+enteredAge < 1) {
      setmodalInfo({
        title: "Invalid Input",
        message: "Incorrect age. Must > 0."
      })      
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    console.log("enteredUsername", enteredUsername);
    console.log("enteredAge", enteredAge);

    setUsername("");
    setAge("");
  }

  const errorHandler = () => {
    setmodalInfo(null);
  }

  function usernameChangeHandler(event) {
    setUsername(event.target.value);
  }

  function ageChangeHandler(event) {
    setAge(event.target.value);
  }

  return (
    <div>
      {modalInfo && <Modal title={modalInfo.title} message={modalInfo.message} onConfirm={errorHandler} />}
      
      <Card>
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <div className={classes.formcontent}>
            <div className={classes.formheader}>___</div>
            <div className={classes.formbody}>
              <label htmlFor="userName">Username</label>
              <input
                type="text"
                id="userName"
                placeholder="Username.."
                value={enteredUsername}
                onChange={usernameChangeHandler}
              />

              <label htmlFor="age">Age (Years)</label>
              <input
                type="text"
                id="age"
                placeholder="Age.."
                value={enteredAge}
                onChange={ageChangeHandler}
              />
            </div>
            <div className={classes.formfooter}>
              <button className={classes.formbtn}> Add User</button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default UserAdd;
