import React, {useEffect, useState} from 'react'

import {Autocomplete, Button, Card, CardContent, Grid, TextField} from '@mui/material';
import {useNavigate} from "react-router-dom";

type team = {
    teamName:string
}
function CreateTeam() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [teams , setTeams] = useState<team[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchData(searchTerm);
        }, 800);
        return () => clearTimeout(delayDebounceFn);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm]);

    const fetchData = async (searchTerm: string) => {
        try {
            let url = 'http://localhost:8080/team/team_names'
            if(searchTerm !== "") {
                url = 'http://localhost:8080/team/team_names' + '?contains=' + searchTerm;
            }
            const response = await fetch(url, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            setTeams(responseData.teams);
        } catch (error) {
            console.error('Error fetching options:', error);
        }
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(name);
        postTeam()

        // Clear the form values
        setName('');
    };


    async function postTeam() {
        const url = 'http://localhost:8080/Team';
        const data = { "name": name}
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error(error);
        }
    }

    const handleOptionSelect = (
        event: React.ChangeEvent<{}>,
        value: team | null
    ) => {
        if (value) {
            setName(value.teamName);
        } else {
            setName('');
        }
    };

    return (

        <div>
            <h1>Create Team</h1>
            <Card sx={{ width: 500 }}>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Autocomplete
                                    options={teams}
                                    getOptionLabel={(option:{teamName: string}) => option.teamName}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Name"
                                            onChange={e => setSearchTerm(e.target.value)}
                                        />
                                    )}
                                    onChange={handleOptionSelect}
                                    value={teams.find((x) => x.teamName === name)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button  fullWidth variant="contained" type="submit">Submit Team</Button>
                            </Grid>
                        </Grid>
                    </form>

                </CardContent>
            </Card>
            <Button color="secondary"  onClick={() => navigate('/')}>Back</Button>
        </div>


    )
}

export default CreateTeam