import React, { useState } from "react"

const Child = ({ onLogIn }) => {

    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");

    function implementSubit(event) {
        event.preventDefault();
        onLogIn()
        setUserName("");
        setPassword("")
    }

    return (
        <div>
            <form onSubmit={implementSubit}>

                <h1>Child Component</h1>
                <label>
                    Username:
                    <input type="text" value={userName}onChange={(e)=>setUserName(e.target.value)}></input>
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                </label>

                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Child