/* eslint-disable */

import React from "react";
import { useState, useEffect } from "react";

import Header from "./layout/Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

import {v4 as uuidv4} from "uuid"; 
import axios from "axios";

// class TodoApp extends React.Component{
function TodoApp() {
    // state = {
    //     todos: [
    //     ]
    // };
    const [state, setState] = useState({
        todos: []
    })

    // handleCheckboxChange = id => {
    //     //console.log("clicked"); 
    //     //console.log("clicked on checkbox with id = " + id);
    //     this.setState({
    //         todos: this.state.todos.map(todo => {
    //             if(todo.id === id){
    //                 todo.completed = !todo.completed; 
    //             }
    //             return todo; 
    //         })
    //     });
    // };
    const handleCheckboxChange = id => {
        //console.log("clicked"); 
        //console.log("clicked on checkbox with id = " + id);
        setState({
            todos: state.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed; 
                }
                return todo; 
            })
        });
    };

    // deleteTodo = id => {
    //     //console.log("deleted", id); 
    //     // this.setState({
    //     //     todos:[
    //     //         ...this.state.todos.filter(todo => {
    //     //             return todo.id !== id; 
    //     //         })
    //     //     ]
    //     // });
    //     axios.delete("https://jsonplaceholder.typicode.com/todos/${id}")
    //         .then(response => this.setState({
    //             todos:[
    //                 ...this.state.todos.filter(todo => {
    //                     return todo.id !== id; 
    //                 })
    //             ]
    //         }))
    // };
    const deleteTodo = id => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(reponse => setState({
        todos: [
            ...state.todos.filter(todo => {
                return todo.id !== id;
                })
            ]
        }))
    };

    // addTodo = title => {
    //     //console.log(title); 
    //     // const newTodo = {
    //     //     id: uuidv4(), 
    //     //     title: title, 
    //     //     completed: false
    //     // }; 
    //     // this.setState({
    //     //     todos:[...this.state.todos, newTodo]
    //     // }); 
    //     const todoData = {
    //         title: title, 
    //         completed: false
    //     }
    //     axios.post("https://jsonplaceholder.typicode.com/todos", todoData)
    //         .then(response => {
    //             console.log(response.data); 
    //             this.setState({
    //                 todos: [...this.state.todos, response.data]
    //             })
    //         })
    // };
    const addTodo = title => {
        const todoData = {
            title: title,
            completed: false
        }
        axios.post("https://jsonplaceholder.typicode.com/todos", todoData)
            .then(response => {
                console.log(response.data)
                setState({
                    todos: [...state.todos, response.data]
                    })
            });
    };

    // componentDidMount(){
    //     const config = {
    //         params: {
    //             _limit : 5
    //         }
    //     }
    //     axios.get("https://jsonplaceholder.typicode.com/todos", config)
    //          .then(response => this.setState({todos: response.data})); 
    // };
    useEffect(() => {
        const config = {
            params: {
                _limit : 5
            }
        }
        axios.get("https://jsonplaceholder.typicode.com/todos", config)
             .then(response => setState({todos: response.data})); 
    }, []);
    
    // render(){
    //     return(
    //         <div className="container">
    //             <Header/>
    //             <AddTodo addTodo={this.addTodo} />
    //             <Todos todos = {this.state.todos} 
    //                     handleChange={this.handleCheckboxChange}
    //                     deleteTodo={this.deleteTodo}
    //             />
    //         </div>
    //     ); 
    // }
    return(
        <div className="container">
            <Header/>
            <AddTodo addTodo={addTodo} />
            <Todos todos = {state.todos} 
                    handleChange={handleCheckboxChange}
                    deleteTodo={deleteTodo}
            />
        </div>
    ); 
        
}

export default TodoApp; 