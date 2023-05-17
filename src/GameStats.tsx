import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  InputLabel,
  List,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import { useParams } from "react-router-dom";
import PlayerStats from "./PlayerStats";

interface Game {
  id: string;
  homeTeam: {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
  };
  awayTeam: {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
  };
  homeScore: number;
  awayScore: number;
  date: Date;
  playersAwayTeamWithInfo: {
    player_id: string;
    game_id: string;
    fouls: string;
    points: string;
    position: string;
    player_surname: string;
    player_name: string;
  }[];
  playersHomeTeamWithInfo: {
    player_id: string;
    game_id: string;
    fouls: string;
    points: string;
    position: string;
    player_surname: string;
    player_name: string;
  }[];
}

function GameStats() {
  const { gameId } = useParams();
  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState<Game>();

  const [selectedPlayerHomeId, setSelectedPlayerHomeId] = useState<string>("");
  const [selectedPlayerAwayId, setSelectedPlayerAwayId] = useState<string>("");

  console.log(selectedPlayerAwayId);

  useEffect(() => {
    getGame(gameId);
  }, []);

  async function getGame(gameId: string | undefined) {
    const url = "http://localhost:8080/game/get_all_info/" + gameId;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      setGame(responseData);
      console.log(responseData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  const handlePoints = async (playerId: string, points: number) => {
    const url = "http://localhost:8080/game/player_score";
    const data = {
      player_id: playerId,
      game_id: gameId,
      score: points.toString(),
    };

    console.log(data);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  // @ts-ignore
  return (
    <>
      {game && (
        <>
          <h4>Game Stats Screen</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div>
                <h4>{game?.homeTeam.name}</h4>
              </div>
              <div>
                <h4>{game?.awayTeam.name}</h4>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div>
                <InputLabel id="jugador-select-label">Jugador</InputLabel>
                <Select
                  label="Jugador"
                  labelId="jugador-select-label"
                  id="demo-simple-select"
                  style={{ width: "200px" }}
                  onChange={(event) => {
                    setSelectedPlayerHomeId(event.target.value as string);
                  }}
                >
                  {game?.playersHomeTeamWithInfo.map((player) => (
                    <MenuItem value={player.player_id}>
                      {player.player_name} {player.player_surname}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <div>
                <InputLabel id="jugador-select-label">Jugador</InputLabel>
                <Select
                  label="Jugador"
                  labelId="jugador-select-label"
                  id="demo-simple-select"
                  style={{ width: "200px" }}
                  onChange={(event) => {
                    setSelectedPlayerAwayId(event.target.value as string);
                  }}
                >
                  {game?.playersAwayTeamWithInfo.map((player) => (
                    <MenuItem value={player.player_id}>
                      {player.player_name} {player.player_surname}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: "5px",
                marginTop: "15px",
              }}
            >
              <button
                onClick={() => {
                  handlePoints(selectedPlayerHomeId, 1);
                }}
              >
                +1
              </button>
              |
              <button
                onClick={() => {
                  handlePoints(selectedPlayerAwayId, 1);
                }}
              >
                +1
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: "5px",
              }}
            >
              <button
                onClick={() => {
                  handlePoints(selectedPlayerHomeId, 2);
                }}
              >
                +2
              </button>
              |
              <button
                onClick={() => {
                  handlePoints(selectedPlayerAwayId, 2);
                }}
              >
                +2
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: "5px",
              }}
            >
              <button
                onClick={() => {
                  handlePoints(selectedPlayerHomeId, 3);
                }}
              >
                +3
              </button>
              |
              <button
                onClick={() => {
                  handlePoints(selectedPlayerAwayId, 3);
                }}
              >
                +3
              </button>
            </div>
          </div>

          <List style={{ width: "1080px" }}>
            <h2>ScoreBoard</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <div style={{ flex: 1, textAlign: "center" }}></div>
              <div style={{ flex: 1, textAlign: "center", fontSize: "35px" }}>
                <h4>{game?.homeScore}</h4>
              </div>
              <div style={{ flex: 1, textAlign: "center", fontSize: "35px" }}>
                <h4>{game?.awayScore}</h4>
              </div>
              <div style={{ flex: 1, textAlign: "center" }}></div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div>
                <Card>
                  <CardContent>
                    <h4>Away Team Players</h4>
                    <PlayerStats players={game?.playersAwayTeamWithInfo} />
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card>
                  <CardContent>
                    <h4>Home Team Players</h4>
                    <PlayerStats players={game?.playersHomeTeamWithInfo} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </List>
        </>
      )}
    </>
  );
}

export default GameStats;
