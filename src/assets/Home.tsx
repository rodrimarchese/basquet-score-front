import {Button, Card, CardContent, Grid} from "@mui/material";
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
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                        <h4>Actions</h4>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                        <Button fullWidth color="secondary" variant="contained"  onClick={() => navigate('/create-player')}>Create Player</Button>
                            </Grid>
                            <Grid item xs={12}>
                        <Button fullWidth color="primary" variant="contained"  onClick={() => navigate('/create-team')}>Create Team</Button>
                            </Grid>
                        </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                        <h4> Current Teams</h4>
                        <TeamList teams={teams}/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </div>

        </div>
    )
}

export default Home