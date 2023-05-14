import React, { useState } from 'react';
import {MenuItem, Select} from "@mui/material";

interface DropdownProps {
    players: { id: string; name: string; surname: string; position:string; shirtNum:number; createdAt: string }[];
}

const DropdownSelectPlayer: React.FC<DropdownProps> = ({ players }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedOption(event.target.value as string);
    };

    return (
        <Select value={selectedOption} onChange={()=>handleChange}>
            {players.map((player) => (
                <MenuItem key={player.id} value={player.name}>
                    {player.name}
                </MenuItem>
            ))}
        </Select>
    );
};

export default DropdownSelectPlayer;