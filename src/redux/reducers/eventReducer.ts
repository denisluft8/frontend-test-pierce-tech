import { Event } from "../../types";
import { SET_DATA } from "../actions/eventActions";

const initialState = {
  data: [],
};

interface EventAction {
  type: typeof SET_DATA;
  payload: Event[];
}

interface EventState {
  data: Event[];
}

const eventReducer = (state: EventState = initialState, action: EventAction) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default eventReducer;
