import { initState } from "../initState";

export const questReducer = ( state = initState, action) => {
  const { type, payload} = action;

  switch (type) {
    case 'SET_ALL_QUESTS':
      return payload;

    default:
      return state;
  }
}
