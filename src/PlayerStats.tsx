import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';


interface PlayerStatsProps {
    players: {player_id:string; game_id:string; fouls:string; points:string; position:string;player_surname:string;player_name:string}[];
}

function PlayerStats({ players }: PlayerStatsProps) {

    return (
        <List>
            {players.map((player) => (
                <ListItem key={player.player_id}>
                    <ListItemAvatar>
                        <Avatar>
                            {player.player_name.charAt(0)}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText  style={{marginLeft:"10px",marginRight:"10px"}} primary={player.player_name} />
                    <ListItemText style={{marginLeft:"10px",marginRight:"10px"}} primary={player.player_surname} />
                    <h4>Points</h4>
                    <ListItemText style={{marginLeft:"10px",marginRight:"10px"}} primary={player.points} />
                    <h4>Fouls</h4>
                    <ListItemText style={{marginLeft:"10px",marginRight:"10px"}} primary={player.fouls} />
                </ListItem>
            ))}
        </List>
    );
}

export default PlayerStats