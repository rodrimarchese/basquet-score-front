import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';


interface TeamListProps {
    teams: { id: string; name: string; createdAt: string }[];
}

function TeamList({ teams }: TeamListProps) {

    return (
        <List>
            {teams.map((team) => (
                <ListItem key={team.id}>
                    <ListItemAvatar>
                        <Avatar>
                            {team.name.charAt(0)}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={team.name} />
                </ListItem>
            ))}
        </List>
    );
}

export default TeamList