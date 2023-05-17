import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import {useNavigate} from "react-router-dom";


interface GamesListProps {
    lineup: { id: string; name: string; surname: string; position:string; shirtNum:number; createdAt: string }[];
    teams: { id: string; name: string; createdAt: string }[];
}

function GameStats({ lineup, teams }: GamesListProps) {

    return (
        <List>
            {lineup.map((player) => (
                <ListItem key={player.id} >
                    <ListItemText primary={player.name} />
                    <ListItemText primary={player.position} />
                    <ListItemText primary={player.shirtNum} />
                </ListItem>
            ))}
        </List>
    );
}

export default GameStats