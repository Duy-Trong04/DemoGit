import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import { useCallback, useEffect, useState } from 'react';
import {v4} from 'uuid';

const TODO_APP_KEY = 'TODO_APP';

function App() {
  //state, props
  const [todoList, setTodoList] = useState([]);//array
  const [textInput, setTextInput] = useState([]);//array

  useEffect(()=>{
    const storagedTodoList = localStorage.getItem(TODO_APP_KEY)
    if(storagedTodoList){
      setTodoList(JSON.parse(storagedTodoList));
    }
  }, []);
  useEffect(()=>{
    localStorage.setItem(TODO_APP_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const onTextInputChange = useCallback((e) =>{
    setTextInput(e.target.value);
  }, []);

  const onAdd = useCallback((e) =>{
    //Them
    setTodoList([{id: v4(), name: textInput, isComleted: false}, ...todoList ]);

    setTextInput("");
  }, [textInput, todoList]);

  const onCheck = useCallback((id) =>{
    setTodoList(prevState => prevState.map(todo => todo.id === id ? {...todo, isComleted: true} : todo))
  })

  return (
    <>
    <h3>Danh sách cần làm</h3>
    <Textfield 
    name='add-todo' 
    placeholder='Thêm việc cần làm...' 
    elemAfterInput ={
      <Button isDisabled = {!textInput} appearance='primary' onClick={onAdd}>
        Thêm
      </Button>
    }
    css = {{padding: "2px 4px 2px" }}
    value={textInput}
    onChange={onTextInputChange}
    ></Textfield>
    <TodoList todoList={todoList} onCheck={onCheck}/>
    </>
  );
}

export default App;
