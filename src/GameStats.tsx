import React, {useEffect, useState} from 'react';
import {Card, CardContent, Grid, List,ListItemText } from '@mui/material';
import {useParams} from "react-router-dom";
import PlayerStats from "./PlayerStats";

function GameStats() {
    const { gameId } = useParams();
    const [loading, setLoading] = useState(true);
    const [game, setGame] = useState<{ id: string; homeTeam:{id:string; name:string;createdAt:string; updatedAt:string; deletedAt:string}; awayTeam:{id:string; name:string;createdAt:string; updatedAt:string; deletedAt:string};  homeScore:number;  awayScore:number; date: Date,
        playersAwayTeamWithInfo:{player_id:string; game_id:string; fouls:string; points:string; position:string;player_surname:string;player_name:string}[];playersHomeTeamWithInfo:{player_id:string; game_id:string; fouls:string; points:string; position:string;player_surname:string;player_name:string}[] }>();


    useEffect(() => {
        getGame(gameId)
    }, []);

    async function getGame(gameId: string | undefined) {
        const url = 'http://localhost:8080/game/get_all_info/'+gameId;
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            setGame(responseData)
            setLoading(false)

        } catch (error) {
            console.error(error);
        }
    }



    if (loading) {
        return <div>Loading...</div>;
    }


    // @ts-ignore
    return (
        <List>


            <h4>Game Stats Screen</h4>
            <h2>ScoreBoard</h2>
            <Grid container  direction="row"spacing={2}>
                <Grid item xs={3}>
                    <h4>Home Team</h4>
                </Grid>
                <Grid item xs={3}>
            <ListItemText primary={game.homeScore} />
                </Grid>
                <Grid item xs={3}>
                    <h4>Away Team</h4>
                </Grid>
                <Grid item xs={3}>
            <ListItemText primary={game.awayScore} />
                </Grid>
            </Grid>
            <Grid container  direction="column"spacing={2}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
            <h4>Away Team Players</h4>
            <PlayerStats players={game.playersAwayTeamWithInfo}/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                <Card>
                    <CardContent>
            <h4>Home Team Players</h4>
            <PlayerStats players={game.playersHomeTeamWithInfo}/>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>

        </List>
    );
}

export default GameStats