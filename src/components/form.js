import React, { useState } from 'react'
import firebase from './firebase'
import '../App.css'
export default function Form(){
    const presskey=(event)=> {
        if (event.keyCode === 13) {
            createTodo();
              }
    }
        const [title,setTitle] =useState('');
        const handleOnChange = (e) =>{
            setTitle(e.target.value);
        }
        const createTodo = () =>{
            if(title===""){
                alert("enter valid task")
            }
            else{
            const todoRef = firebase.database().ref('Todo');
            const todo ={
                title,
                complete:false,
            };
            todoRef.push(todo);
            setTitle('');
        }
        };
        return (
            <div>
                <input type="text" placeholder="type todo...." onChange={handleOnChange} value={title} id="searchbar" onKeyDown={(e) => presskey(e)} required/>
                <button onClick={createTodo} className='btn'>Done</button>
            </div>
        );
    }

