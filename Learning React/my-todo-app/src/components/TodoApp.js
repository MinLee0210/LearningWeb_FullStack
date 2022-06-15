/* eslint-disable */

import React from "react";
import Header from "./layout/Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

import {v4 as uuidv4} from "uuid"; 

class TodoApp extends React.Component{
    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            },
                {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    };

    handleCheckboxChange = id => {
        //console.log("clicked"); 
        //console.log("clicked on checkbox with id = " + id);
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed; 
                }
                return todo; 
            })
        });
    };

    deleteTodo = id => {
        //console.log("deleted", id); 
        this.setState({
            todos:[
                ...this.state.todos.filter(todo => {
                    return todo.id !== id; 
                })
            ]
        });
    };

    addTodo = title => {
        //console.log(title); 
        const newTodo = {
            id: uuidv4(), 
            title: title, 
            completed: false
        }; 
        this.setState({
            todos:[...this.state.todos, newTodo]
        }); 
    }

    render(){
        return(
            <div className="container">
                <Header/>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos = {this.state.todos} 
                        handleChange={this.handleCheckboxChange}
                        deleteTodo={this.deleteTodo}
                />
            </div>
        ); 
    }
}

export default TodoApp; 