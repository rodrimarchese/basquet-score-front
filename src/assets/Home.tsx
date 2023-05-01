import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <div className="App">
            <div className="App">
                <div>
                    <h1>Basquet Scoreboard App</h1>
                </div>
                <Button color="secondary"  onClick={() => navigate('/create-player')}>Create Player</Button>

            </div>

        </div>
    )
}

export default Home