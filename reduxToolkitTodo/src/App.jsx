import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [editingTodo, setEditingTodo] = useState({id: null, text: ''})
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo editingTodo={editingTodo} setEditingTodo={setEditingTodo}/>
      <Todos setEditingTodo={setEditingTodo}/>
    </>
  )
}

export default App
