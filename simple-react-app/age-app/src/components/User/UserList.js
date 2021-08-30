import React from "react";
import Card from "../UI/Card";
import UserItem from "./UserItem";

export default function UserList(props) {
  return (
    <Card>
        {props.userItems.map((userItem) => (
          <UserItem
            key={userItem.key}
            id={userItem.key}
            username={userItem.userName}
            age={userItem.age}
          ></UserItem>
        ))}
    </Card>
  );
}
