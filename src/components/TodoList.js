import React from "react";
import Todo from '../components/Todo';

export default function TodoList({todoList, onCheck}){
    return (
        <>
        {
            todoList.map(todo => <Todo key={todo.id} todo = {todo} onCheck = {onCheck}/>)
        }
        </>
    );
}