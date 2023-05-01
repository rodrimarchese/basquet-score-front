import React, {useState} from 'react'

import {Button, Card, CardContent, Grid, TextField} from '@mui/material';


function CreatePlayer() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [position, setPosition] = useState('');
    const [shirtNum, setShirtNum] = useState(0);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(name, surname, position, shirtNum);
        postPlayer()

        // Clear the form values
        setName('');
        setSurname('');
        setPosition('');
        setShirtNum(0);
    };


    async function postPlayer() {
        const url = 'http://localhost:8080/Player';
        const data = { "name": name, "surname":surname,"position": position,"shirtNum":shirtNum}
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
            <h1>Create Player</h1>
            <Card sx={{ width: 500 }}>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField fullWidth  label="Name" variant="outlined" value={name} onChange={(event) => setName(event.target.value)}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth  label="Surname" variant="outlined" value={surname} onChange={(event) => setSurname(event.target.value)}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Position" variant="outlined" value={position} onChange={(event) => setPosition(event.target.value)}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth  label="Shirt Number" variant="outlined" value={shirtNum} onChange={(event) => setShirtNum(Number(event.target.value))}/>
                        </Grid>
                        <Grid item xs={12}>
                        <Button  fullWidth variant="contained" type="submit">Submit Player</Button>
                        </Grid>
                    </Grid>
                    </form>

                </CardContent>
            </Card>
        </div>


    )
}

export default CreatePlayer