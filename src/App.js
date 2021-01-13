import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header"
import { Pane } from "evergreen-ui"
import Input from './components/Input';
import ListTodo from './components/ListTodo';

function App() {

  const getList = () => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    return todos ? todos : []
  }

  const [list, setList] = useState(getList())

  const addElement = (e) => {
    const tempList = list
    tempList.push(e)
    localStorage.setItem("todos", JSON.stringify(tempList))
    setList(getList())
  }

  const removeElement = (e) => {
    const tempList = list.filter(elt => elt !== e)
    localStorage.setItem("todos", JSON.stringify(tempList))
    setList(getList())
  }

    return (
        <Pane 
          height="100%"
          width="100%"
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          backgroundColor="#F5F6F7"
          flexDirection="column"
        >
          <Header />
          <Input addElement={addElement} />
          <ListTodo list={list} removeElement={removeElement}/>
        </Pane>
    )
}

export default App