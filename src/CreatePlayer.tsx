import React, {useState} from 'react'

import {Button, Card, CardContent, Grid, TextField} from '@mui/material';


function CreatePlayer() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [position, setPosition] = useState('');
    const [shirtNum, setShirtNum] = useState('');


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Do something with the form values, e.g. send them to a server
        console.log(name, surname, position, shirtNum);

        // Clear the form values
        setName('');
        setSurname('');
        setPosition('');
        setShirtNum('');
    };
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
                            <TextField fullWidth  label="Shirt Number" variant="outlined" value={shirtNum} onChange={(event) => setShirtNum(event.target.value)}/>
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