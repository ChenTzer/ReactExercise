import Lesson18ComponentD from "./Lesson18ComponentD"
import React, {useContext} from 'react';
import { UserContext } from './Lesson18ComponentA';

function Lesson18ComponentC(){

    const user = useContext(UserContext);

    return(<div className="box">
        <h1>Component C</h1>
        <h2>{`Hello again! ${user}`}</h2>
        <Lesson18ComponentD></Lesson18ComponentD>
    </div>)
}

export default Lesson18ComponentC