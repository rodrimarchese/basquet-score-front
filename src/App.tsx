
import './App.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from "./assets/Home";
import ErrorPage from "./ErrorPage";
import CreatePlayer from "./CreatePlayer";
import CreateTeam from "./CreateTeam";
import StartGame from "./StartGame";
import {useEffect, useState} from "react";
import GameStats from "./GameStats";


function App() {
    const [teams, setTeams] = useState<{ id: string; name: string; createdAt: string }[]>([]);
    useEffect(() => {
        getTeams()
    }, []);

    async function getTeams() {
        const url = 'http://localhost:8080/Team';
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            setTeams(responseData);
        } catch (error) {
            console.error(error);
        }
    }

  return (
      <Router>
          <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/create-player" element={<CreatePlayer teams={teams}/>} />
           <Route path="/create-team" element={<CreateTeam/>} />
           <Route path="/start-game" element={<StartGame teams={teams}/>} />
           <Route path="/gameStats/:gameId"  element={<GameStats/>}/>

            <Route path="*" element={<ErrorPage/>}/>
          </Routes>

      </Router>

  )
}

export default App
