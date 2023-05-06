
import './App.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from "./assets/Home";
import ErrorPage from "./ErrorPage";
import CreatePlayer from "./CreatePlayer";
import CreateTeam from "./CreateTeam";


function App() {


  return (
      <Router>
          <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/create-player" element={<CreatePlayer/>} />
           <Route path="/create-team" element={<CreateTeam/>} />
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>

      </Router>

  )
}

export default App
