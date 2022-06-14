/* eslint-disable */

import React from "react";
import Header from "./layout/Header";
// import { render } from "react-dom";

class TodoApp extends React.Component{
    render(){
        return(
            <div>
                {/* <h1>Hello from Create React App</h1>
                <p>I am in a React Component!</p> */}
                <Header/>
            </div>
        ); 
    }
}

export default TodoApp; 