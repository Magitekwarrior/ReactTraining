import "./App.css";
import UserAdd from "./components/User/UserAdd";
import UserList from "./components/User/UserList";

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [allUsersData, setAllUsersData] = useState([]);

  const addUserHandler = (uName, uAge) => {
    // const userDataList = [...allUsersData];
    // const userItem = {
    //   key: uuidv4(),
    //  ...userFormData
    // }
    // userDataList.push(userItem);
    // console.log("userItem:", userItem);
    // console.log("userDataList:", userDataList);

    setAllUsersData((prevUsersList) => {
      return [...prevUsersList, {key:uuidv4(), userName: uName, age: uAge}];
    })
  }

  if (!allUsersData){
    return (
        <UserAdd onAddUser={addUserHandler}></UserAdd>
    );    
  }

  return (
    <div>
      Learn React: APP EXAMPLE
      <UserAdd onAddUser={addUserHandler}></UserAdd>
      <UserList userItems={allUsersData}></UserList>
    </div>
  );
}

export default App;
