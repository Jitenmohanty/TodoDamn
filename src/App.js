import { useState,useEffect } from "react";

function App() {
    const [todos , setTodos] = useState([
        "Radhe",
        "Gopal",
        "Ranu"
    ])
    const [text , setText] = useState()

    function CreateTodo(){
       setTodos(oldTodos =>{
          setText('');
        return [ text , ...oldTodos ]
       })

    }
    return <div>
        <h1>Best ToDo By CoDeDaMn</h1>
        <input type="text" value={text} onChange={e =>{
          setText(e.target.value)
        }}/>
        <button onClick={CreateTodo}>CreateTodo</button>
          <ul>
            {todos.map(todo =>{
              return <li>{todo}</li>
            })}
          </ul>
    </div>
}

export default App;
