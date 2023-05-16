import {Button, Card, CardContent, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import TeamList from "../TeamList";
import PlayerList from "../PlayerList";

function Home() {
    const [teams, setTeams] = useState<{ id: string; name: string; createdAt: string }[]>([]);
    const [players, setPlayers] = useState<{ id: string; name: string; surname: string; position:string;shirtNum:number; createdAt: string }[]>([]);

        useEffect(() => {
          getTeams()
          getPlayers()
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

    async function getPlayers() {
        const url = 'http://localhost:8080/Player';
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            setPlayers(responseData);
        } catch (error) {
            console.error(error);
        }
    }
    const navigate = useNavigate();
    return (
        <div className="App">
            <div className="App">
                <div>
                    <h1>Basketball Scoreboard App</h1>
                </div>
                <Grid container  direction="column" spacing={2}>
                    <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <Button  data-test="create-player" fullWidth color="secondary" variant="contained"  onClick={() => navigate('/create-player')}>Create Player</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth color="primary" variant="contained"  onClick={() => navigate('/create-team')}>Create Team</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth color="info" variant="contained"  onClick={() => navigate('/start-game')}>Start Game</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                    </Grid>
                    <Grid item xs={12}>
                <Grid container  direction="row"spacing={2}>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                        <h4> Current Teams</h4>
                        <TeamList teams={teams}/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                <h4> Current Players</h4>
                                <PlayerList players={players}/>
                            </CardContent>
                        </Card>

                    </Grid>
                </Grid>
                    </Grid>
                </Grid>

            </div>

        </div>
    )
}

export default Home