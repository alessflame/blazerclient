import React from "react";
import UserRow from "../UserRow/UserRow";
import stile from "./sectionUsers.module.css";
import {useSelector} from "react-redux"

function SectionUsers() {

  const {users} = useSelector(state=>state)

  return (
    <div className={stile.container}>
      {users.data.map((user) => (
        <UserRow key={user._id} {...user} />
      ))}
    </div>
  );
}

export default SectionUsers;
