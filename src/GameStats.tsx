import React, {useEffect, useState} from 'react';
import { List,ListItemText } from '@mui/material';
import {useParams} from "react-router-dom";

function GameStats() {
    const { gameId } = useParams();
    const [loading, setLoading] = useState(true);
    const awayTeamPlayers= useState<{ id: string; name: string; surname: string; position:string; shirtNum:number; createdAt: string }[]>([]);
    const [homeTeamPlayers, setHomeTeamPlayers]= useState<{ id: string; name: string; surname: string; position:string; shirtNum:number; createdAt: string }[]>([]);
    const [game, setGame] = useState<{ id: string; homeTeamId: string; awayTeamId: string;  homeScore:number;  awayScore:number; date: Date }>();
    const homeTeam =useState<{ id: string; name: string; createdAt: string }>();
    const awayTeam = useState<{ id: string; name: string; createdAt: string}>();

    useEffect(() => {
        getGame(gameId)
    }, []);

    async function getGame(gameId: string | undefined) {
        const url = 'http://localhost:8080/game/'+gameId;
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
            <ListItemText primary={game.homeScore} />
            <ListItemText primary={game.awayScore} />

        </List>
    );
}

export default GameStats