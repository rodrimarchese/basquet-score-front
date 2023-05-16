import React from 'react';
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";

interface DropdownProps {
    teams: { id: string; name: string; createdAt: string }[];
    selectedTeam: string;
    setSelectedTeam: (option: string) => void;
}

const DropdownSelectTeams: React.FC<DropdownProps> = ({ teams,selectedTeam,setSelectedTeam }) => {

    const handleChange = (event: SelectChangeEvent<string>) => {
        setSelectedTeam(event.target.value);
    };

    return (
        <Select inputProps={{"data-cy":"team-dropdown" }} fullWidth value={selectedTeam} onChange={handleChange}>
            {teams.map((team) => (
                <MenuItem data-cy={`option-${team.id}`} key={team.id} value={team.id}>
                    {team.name}
                </MenuItem>
            ))}
        </Select>
    );
};

export default DropdownSelectTeams;