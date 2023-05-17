import React, {useEffect, useState} from 'react'

import {Button, Card, CardContent, Grid, TextField, Autocomplete} from '@mui/material';
import {useNavigate} from "react-router-dom";
import {Simulate} from "react-dom/test-utils";
import play = Simulate.play;
import DropdownSelectTeams from "./DropdownSelectTeams";
interface CreatePlayerProps {
    teams: { id: string; name: string; createdAt: string }[]
}
type player = {
    firstName: string,
    lastName: string
}

function CreatePlayer({ teams }: CreatePlayerProps) {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [team, setTeam] = useState("");
    const [surname, setSurname] = useState('');
    const [position, setPosition] = useState('');
    const [shirtNum, setShirtNum] = useState(0);
    const [players , setPlayers] = useState<player[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

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

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchData(searchTerm);
        }, 800);
        return () => clearTimeout(delayDebounceFn);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm]);

    async function postPlayer() {
        const url = 'http://localhost:8080/Player';

        const data = { "name": name, "surname":surname,"position": position,"shirtNum":shirtNum, "teamId": team}
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
        value: player | null
    ) => {
        if (value) {
            setName(value.firstName);
            setSurname(value.lastName);
        } else {
            setName('');
            setSurname('');
        }
    };

    const fetchData = async (searchTerm: string) => {
        try {
            let url = 'http://localhost:8080/Player/player_names'
            if(searchTerm !== "") {
                url = 'http://localhost:8080/Player/player_names' + '?contains=' + searchTerm;
            }
            const response = await fetch(url, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            setPlayers(responseData.players);
        } catch (error) {
            console.error('Error fetching options:', error);
        }
    }
    const setValueName = () => {
        const player = players.find((x) => x.firstName === name);
        if(player){
            return player
        }else{
            return {firstName: searchTerm, lastName: ""}
        }
    }

    const setValueSurname = () => {
        const player = players.find((x) => x.lastName === surname);
        if(player){
            return player
        }else{
            return {firstName: "", lastName: ""}
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
                            <Autocomplete
                                options={players}
                                getOptionLabel={(option:{firstName: string, lastName: string}) => option.firstName}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Name"
                                        onChange={e => setSearchTerm(e.target.value)}
                                    />
                                )}
                                onChange={handleOptionSelect}
                                value={setValueName()}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label="Surname" variant="outlined" value={surname} onChange={(event) => setSurname(event.target.value)}/>
                        </Grid>
                        <Grid item xs={12}>
                            <DropdownSelectTeams  teams={teams} selectedTeam={team} setSelectedTeam={setTeam}/>
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

            <Button color="secondary"  onClick={() => navigate('/')}>Back</Button>
        </div>


    )
}

export default CreatePlayer