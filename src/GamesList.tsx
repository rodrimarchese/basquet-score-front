import React from 'react';
import { List, ListItem,  ListItemText } from '@mui/material';
import {useNavigate} from "react-router-dom";



interface GamesListProps {
    games: { id: string; homeTeamId: string; awayTeamId: string;  homeScore:number;  awayScore:number; date: Date }[];
    teams: { id: string; name: string; createdAt: string }[];
}


function GamesList({ games, teams }: GamesListProps) {
    const navigate = useNavigate()



    const navigateToGameStats = (gameId: string) => {
       navigate(`/gameStats/${gameId}`)
    };

    return (
        <List>
            {games.map((game) => (
                <ListItem key={game.id} onClick={()=>navigateToGameStats(game.id)}>
                    <ListItemText primary={game.homeScore} />
                    <ListItemText primary={game.awayScore} />
                    <ListItemText primary={game.date.toString()} />
                </ListItem>
            ))}
        </List>
    );
}

export default GamesList