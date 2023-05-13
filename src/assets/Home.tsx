import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import TeamList from "../TeamList";

function Home() {
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

    const navigate = useNavigate();
    return (
        <div className="App">
            <div className="App">
                <div>
                    <h1>Basquet Scoreboard App</h1>
                </div>
                <Button color="secondary"  onClick={() => navigate('/create-player')}>Create Player</Button>
                <Button color="primary"  onClick={() => navigate('/create-team')}>Create Team</Button>
            </div>
            <TeamList teams={teams}/>
        </div>
    )
}

export default Home