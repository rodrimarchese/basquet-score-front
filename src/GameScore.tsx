import React from "react";

interface GameScoreProps {
  scoreHome: number;
  scoreAway: number;
}

export const GameScore = ({ scoreHome, scoreAway }: GameScoreProps) => {
  return (
    <>
      {" "}
      <div style={{ flex: 1, textAlign: "center", fontSize: "35px" }}>
        <h4>{scoreHome}</h4>
      </div>
      <div style={{ flex: 1, textAlign: "center", fontSize: "35px" }}>
        <h4>{scoreAway}</h4>
      </div>
    </>
  );
};
