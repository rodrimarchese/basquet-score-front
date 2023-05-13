import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

interface TeamListProps {
    teamNames: string[];
}

function TeamList({ teamNames }: TeamListProps) {

    return (
        <List>
            {teamNames.map((name, index) => (
                <ListItem key={index}>
                    <ListItemAvatar>
                        <Avatar>
                            {name.charAt(0)}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={name} />
                </ListItem>
            ))}
        </List>
    );
}