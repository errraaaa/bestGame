import React from "react";
import QuestList from "../QuestList/QuestList";
import {useSelector} from "react-redux";

const GamePage = () => {

const score = useSelector(state => state.score)
  console.log(score)

  return (
    <div>
      <div>Очки: {score.score}</div>
      <div>
        <QuestList />
      </div>
    </div>
  );
};

export default GamePage;
