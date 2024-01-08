import Child from "./Child";
import React, { useState } from "react";

const Parent = () => {
  let [isLoggedIn, setisLoggedIn] = useState(false);

  function handleLogIn() {
    setisLoggedIn(true);
  }
  return (
    <div>
      <div>
        <h1> Parent Component</h1>
        {isLoggedIn && <p>You are logged in!</p>}
      </div>
      <Child onLogIn={handleLogIn} />
    </div>
  );
};

export default Parent;
