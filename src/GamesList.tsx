import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';


interface GamesListProps {
    players: { id: string; name: string; surname: string; position:string; shirtNum:number; createdAt: string }[];
}

function GamesList({ players }: GamesListProps) {

    return (
        <List>
            {players.map((player) => (
                <ListItem key={player.id}>
                    <ListItemAvatar>
                        <Avatar>
                            {player.name.charAt(0)}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={player.name} />
                    <ListItemText primary={player.surname} />
                    <ListItemText primary={player.position} />
                    <ListItemText primary={player.shirtNum} />
                </ListItem>
            ))}
        </List>
    );
}

export default GamesList