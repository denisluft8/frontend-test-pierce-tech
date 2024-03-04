import { Event } from "../../types";
import { DELETE_EVENT, SET_DATA } from "../actions/eventActions";

const initialState = {
  data: [] as Event[],
};

interface SetDataAction {
  type: typeof SET_DATA;
  payload: Event[];
}

interface DeleteEventAction {
  type: typeof DELETE_EVENT;
  payload: number;
}

type EventAction = SetDataAction | DeleteEventAction;

interface EventState {
  data: Event[];
}

const eventReducer = (
  state: EventState = initialState,
  action: EventAction
): EventState => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case DELETE_EVENT:
      return {
        ...state,
        data: state.data.filter((event) => event.id !== action.payload),
      };
    default:
      return state;
  }
};

export default eventReducer;
