import { useState, createContext } from "react"
import Lesson18ComponentB from "./Lesson18ComponentB"

export const UserContext = createContext();

function Lesson18ComponentA(){

    const [user, setUser] = useState("Chen Tzer");

    return(
    <div className="box">
        <h1>Component A</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value ={user}>
            <Lesson18ComponentB></Lesson18ComponentB>
        </UserContext.Provider>
    </div>
    )
}

export default Lesson18ComponentA