import React from 'react'

import {Button, Card, CardContent, Grid, TextField} from '@mui/material';


function CreatePlayer() {


    return (

        <div>
            <h1>Create Player</h1>
            <Card sx={{ width: 500 }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField fullWidth id="name" label="Name" variant="outlined"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth id="surname" label="Surname" variant="outlined"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth id="position" label="Position" variant="outlined"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth id="shirtNum" label="Shirt Number" variant="outlined"/>
                        </Grid>
                        <Grid item xs={12}>
                        <Button  fullWidth variant="contained">Submit Player</Button>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </div>


    )
}

export default CreatePlayer