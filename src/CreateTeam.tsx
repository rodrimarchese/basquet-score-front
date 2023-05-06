import React, {useState} from 'react'

import {Button, Card, CardContent, Grid, TextField} from '@mui/material';


function CreateTeam() {
    const [name, setName] = useState('');

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
    return (

        <div>
            <h1>Create Team</h1>
            <Card sx={{ width: 500 }}>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField fullWidth  label="Name" variant="outlined" value={name} onChange={(event) => setName(event.target.value)}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Button  fullWidth variant="contained" type="submit">Submit Team</Button>
                            </Grid>
                        </Grid>
                    </form>

                </CardContent>
            </Card>
        </div>


    )
}

export default CreateTeam