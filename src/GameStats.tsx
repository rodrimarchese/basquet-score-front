import React, {useState} from 'react';
import { List,ListItemText } from '@mui/material';
import {useParams} from "react-router-dom";

function GameStats() {
    const { gameId } = useParams();

    const awayTeamPlayers= useState<{ id: string; name: string; surname: string; position:string; shirtNum:number; createdAt: string }[]>([]);
    const homeTeamPlayers= useState<{ id: string; name: string; surname: string; position:string; shirtNum:number; createdAt: string }[]>([]);
    const game = useState<{ id: string; homeTeamId: string; awayTeamId: string;  homeScore:number;  awayScore:number; date: Date }>();
    const homeTeam =useState<{ id: string; name: string; createdAt: string }>();
    const awayTeam=useState<{ id: string; name: string; createdAt: string}>();



    return (
        <List>
            <h4>Game Stats Screen</h4>
            <h4> {gameId}</h4>
        </List>
    );
}

export default GameStats