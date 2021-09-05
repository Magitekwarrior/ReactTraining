import React from "react";
import Card from "../UI/Card";
import UserItem from "./UserItem";

export default function UserList(props) {
  return (
    <Card>
        {props.userItems.map((userItem) => (
          <UserItem
            key={userItem.id}
            id={userItem.id}
            username={userItem.userName}
            age={userItem.age}
          ></UserItem>
        ))}
    </Card>
  );
}
