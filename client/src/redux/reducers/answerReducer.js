import { initState } from "../initState";

export const answerReducer = ( state = initState, action) => {
  const { type, payload} = action;

  switch (type) {

    case 'CHECK_ANSWER':

      return {...state, score: payload}

    default:
      return state;
  }
}
