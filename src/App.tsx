import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from "@mui/material";
import {Routes, Route, useNavigate} from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)
    const navigate = useNavigate();
    function handleClick() {
        //navigate('/createPlayer');
    }
  return (
    <div className="App">
      <div>
      <h1>Basquet Scoreboard App</h1>
      </div>
        <Button color="secondary" onClick={handleClick} >Create Player</Button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>

    </div>
  )
}

export default App
