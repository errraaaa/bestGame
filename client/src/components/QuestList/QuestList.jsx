import React from 'react'
import { useSelector } from 'react-redux'
import Theme from '../Theme/Theme'

const QuestList = () => {

  const themes = useSelector(state => state.themes)

  return (
    <div>
      {themes && themes.map(e => <Theme key={e.id} title={e.title} quests={e.quests} />)}
    </div>
  )
}

export default QuestList
