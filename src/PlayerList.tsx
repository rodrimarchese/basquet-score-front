import React, {useEffect, useState} from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';


interface PlayerListProps {
    players: { id: string; name: string; surname: string; position:string; shirtNum:number; createdAt: string, teamId: string | null; }[];
    teams : {id: string; name: string; createdAt: string}[]
}
type team = {
    id: string; name: string; createdAt: string
}
function PlayerList({ players, teams }: PlayerListProps) {
    const defineTeamName = (teamId: string): string => {
        const team = teams.find((team) => team.id === teamId);
        if(team){
            return team.name
        }
        return ""
    }

    return (
        <List>
            {players.map((player) => (
                <ListItem key={player.id}>
                    <ListItemAvatar>
                        <Avatar>
                            {player.name.charAt(0)}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primaryTypographyProps={{ style: {textAlign: 'left', width: '7em'}}} primary={player.name} />
                    <ListItemText primaryTypographyProps={{ style: {textAlign: 'left', width: '7em'}}} primary={player.surname} />
                    <ListItemText primaryTypographyProps={{ style: {textAlign: 'left', width: '7em'}}} primary={player.position} />
                    <ListItemText primaryTypographyProps={{ style: {textAlign: 'left', width: '7em'}}} primary={player.shirtNum} />
                    <ListItemText primaryTypographyProps={{ style: {textAlign: 'left', width: '7em'}}} primary={player.teamId ? defineTeamName(player.teamId) : 'N/A'} />
                </ListItem>
            ))}
        </List>
    );
}

export default PlayerList