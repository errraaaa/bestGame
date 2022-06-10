import React from 'react'
import {Link} from "react-router-dom";
import {getAllThemes} from "../../redux/actions/questAC";
import {useDispatch} from "react-redux";

function MainPage() {

  const dispatch = useDispatch();

  const themesHandler = () => {
    dispatch(getAllThemes())
  }

  return (
    <div>
      <div>Hello!</div>
      <Link to={'/game'}>
      <button onClick={themesHandler}>Start Game</button>
      </Link>
    </div>
  )
}

export default MainPage
