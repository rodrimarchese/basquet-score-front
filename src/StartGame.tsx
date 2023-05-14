import React, {useState} from 'react'

import {Button, Card, CardContent, Grid, TextField} from '@mui/material';
import {useNavigate} from "react-router-dom";
import Dropdown from "./DropdownSelectTeams";
import DropdownSelectTeams from "./DropdownSelectTeams";
import DateSelector from "./DateSelector";
interface StartGameProps {
    teams: { id: string; name: string; createdAt: string }[];
}

function StartGame({teams}:StartGameProps) {
    const navigate = useNavigate();
    const [awayTeam, setAwayTeam] = useState('');
    const [homeTeam, setHomeTeam] = useState('');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(awayTeam,homeTeam,selectedDate);
        postGame()

        // Clear the form values
        setAwayTeam('');
        setHomeTeam('');
        setSelectedDate(null);

    };


    async function postGame() {
        const url = 'http://localhost:8080/game';
        const data = { "awayTeamId": awayTeam, "homeTeamId":homeTeam,"Date": selectedDate}
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
            <h1>Create Game</h1>
            <Card sx={{ width: 500 }}>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <h4> Select Home Team</h4>
                                <DropdownSelectTeams teams={teams} selectedTeam={homeTeam} setSelectedTeam={setHomeTeam}/>
                            </Grid>
                            <Grid item xs={12}>
                                <h4> Select Away Team</h4>
                                <DropdownSelectTeams teams={teams} selectedTeam={awayTeam} setSelectedTeam={setAwayTeam}/>
                            </Grid>
                            <Grid item xs={12}>
                                <h4> Select Date </h4>
                                <DateSelector selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Button  fullWidth variant="contained" type="submit">Start Game</Button>
                            </Grid>
                        </Grid>
                    </form>

                </CardContent>
            </Card>

            <Button color="secondary"  onClick={() => navigate('/')}>Back</Button>
        </div>


    )
}

export default StartGame