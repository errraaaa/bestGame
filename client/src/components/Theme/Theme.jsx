import React from 'react'
import {ListGroup, ListGroupItem} from "reactstrap";
import QuestItem from "../QuestItem.jsx/QuestItem";

const Theme = ({id, title, quests}) => {

  return (
    <ListGroup numbered>
      <ListGroupItem>
        {title}
        <ListGroup horizontal>{quests.map( el => <QuestItem key={el.id} id={el.id} text={el.text} price={el.price}/>)}</ListGroup>
      </ListGroupItem>

    </ListGroup>
  )
}

export default Theme
