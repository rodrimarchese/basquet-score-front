import {Box, Button, Card, CardContent, Grid, Tab, Tabs} from "@mui/material";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import TeamList from "../TeamList";
import PlayerList from "../PlayerList";
import GamesList from "../GamesList";
import basketballBackground from '/src/wallpaperflare.com_wallpaper.jpg';

function Home() {
    const [value, setValue] = useState(0);
    const [teams, setTeams] = useState<{ id: string; name: string; createdAt: string }[]>([]);
    const [players, setPlayers] = useState<{ id: string; name: string; surname: string; position:string;shirtNum:number; createdAt: string }[]>([]);
    const [games, setGames] = useState<{ id: string; homeTeamId: string; awayTeamId: string;  homeScore:number;  awayScore:number; date: Date }[]>([]);

        useEffect(() => {
          getTeams()
          getPlayers()
          getGames()

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

    async function getGames() {
        const url = 'http://localhost:8080/game';
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            setGames(responseData);
        } catch (error) {
            console.error(error);
        }
    }
    const navigate = useNavigate();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div className="App" >
            <h1>Basketball Scoreboard App</h1>
            <Box sx={{ width: '100%'}}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Games" />
                    <Tab label="Players" />
                    <Tab label="Teams" />
                </Tabs>
            </Box >

            {value === 0 && (
                <>
                <Grid container  direction="column"spacing={2}>
                    <Grid item xs={6}>
                    <Card>
                        <CardContent>
                            <h4> Current Games</h4>
                    <GamesList games={games} teams={teams} />
                        </CardContent>
                    </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Button
                            fullWidth
                            color="info"
                            variant="contained"
                            onClick={() => navigate('/start-game')}
                        >
                            Start Game
                        </Button>
                    </Grid>
                </Grid>
                </>
            )}
            {value === 1 && (
                <>
                <Box sx={{ paddingTop: '16px' }}>
                    <Grid container  direction="column"spacing={2}>

                        <Grid item xs={6}>
                    <Card>
                        <CardContent>
                            <h4> Current Players</h4>
                    <PlayerList players={players} />
                        </CardContent>
                    </Card>
                        </Grid>
                            <Grid item xs={6}>
                                <Button
                                    fullWidth
                                    color="secondary"
                                    variant="contained"
                                    onClick={() => navigate('/create-player')}
                                >
                                    Create Player
                                </Button>
                            </Grid>
                        </Grid>
                </Box>
                </>
            )}
            {value === 2 && (
                <>
                <Box sx={{ paddingTop: '16px' }}>
                    <Grid container  direction="column"spacing={2}>
                        <Grid item xs={6}>
                            <Card>
                                <CardContent>
                                    <h4> Current Teams</h4>
                                    <TeamList teams={teams} />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                    <Button
                        fullWidth
                        color="primary"
                        variant="contained"
                        onClick={() => navigate('/create-team')}
                    >
                        Create Team
                    </Button>
                        </Grid>

                    </Grid>
                </Box>
                </>
            )}
        </div>

    )
}

export default Home