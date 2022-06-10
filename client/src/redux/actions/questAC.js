import axios from "axios"

export const setAllThemes = (value) => {
  return {
    type: 'SET_ALL_QUESTS',
    payload: value
  }
}
export const getAllThemes = () => async (dispatch) => {
  const res = await axios(`/themes`);
  dispatch(setAllThemes(res.data.themes))
}

export const checkAnswer = (value) => {
  return {
    type: 'CHECK_ANSWER',
    payload: value
  }
}
export const getAnswer = (id, answer) => async (dispatch) => {
  const res = await axios(`/checkAnswer/${id}`);
  console.log(res.data.answer.price)
  if (answer == res.data.answer.answer) {dispatch(checkAnswer(res.data.answer.price))}
}
