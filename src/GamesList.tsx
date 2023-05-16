import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';


interface GamesListProps {
    games: { id: string; homeTeamId: string; awayTeamId: string;  homeScore:number;  awayScore:number; date: Date }[];
    teams: { id: string; name: string; createdAt: string }[];
}

function GamesList({ games, teams }: GamesListProps) {

    return (
        <List>
            {games.map((game) => (
                <ListItem key={game.id}>
                    <ListItemText primary={game.homeScore} />
                    <ListItemText primary={game.awayScore} />
                    <ListItemText primary={game.date.toString()} />
                </ListItem>
            ))}
        </List>
    );
}

export default GamesList