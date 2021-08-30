import React from "react";
import classes from "./UserItem.module.css";

export default function UserItem(props) {
  const userDisplayData = props.username + " (" + props.age + ") years old";

  return (
      <div className={classes.list}>
        <div className={classes.listcontent}>
          <div className={classes.listheader}></div>
          <div className={classes.listbody}>
            <p id="userId">{userDisplayData}</p>
          </div>
        </div>
      </div>
  );
}
