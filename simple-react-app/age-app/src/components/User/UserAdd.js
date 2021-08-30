import React, { useState } from "react";
import classes from "./UserAdd.module.css";
import Card from "../UI/Card";

function UserAdd(props) {
  const [enteredUsername, setUsername] = useState('');
  const [enteredAge, setAge] = useState('');

  function formSubmitHandler(event){
    event.preventDefault();

    if ((enteredUsername.trim().length === 0 ) || (enteredUsername.trim().length === 0 )) {
      return;
    }

    if (+enteredAge < 1){
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    console.log('enteredUsername', enteredUsername);
    console.log('enteredAge', enteredAge);

    setUsername('');
    setAge('');
  }

  function usernameChangeHandler(event){
    setUsername(event.target.value);
  }

  function ageChangeHandler(event){
    setAge(event.target.value);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div className={classes.formcontent}>
          <div className={classes.formheader}>___</div>
          <div className={classes.formbody}>
            <label htmlFor="userName">Username</label>
            <input type="text" id="userName" placeholder="Username.." value={enteredUsername} onChange={usernameChangeHandler}/>

            <label htmlFor="age">Age (Years)</label>
            <input type="text" id="age" placeholder="Age.." value={enteredAge} onChange={ageChangeHandler}/>
          </div>
          <div className={classes.formfooter}>
            <button className={classes.formbtn}> Add User</button>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default UserAdd;
