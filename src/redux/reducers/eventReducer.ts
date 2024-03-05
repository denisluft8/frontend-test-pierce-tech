import { EventType } from "../../types";
import {
  DELETE_EVENT,
  SET_DATA,
  UPDATE_EVENT,
  ADD_EVENT,
} from "../actions/eventActions";

const initialState = {
  data: [] as EventType[],
};

interface SetDataAction {
  type: typeof SET_DATA;
  payload: EventType[];
}

interface DeleteEventAction {
  type: typeof DELETE_EVENT;
  payload: number;
}

interface UpdateEventAction {
  type: typeof UPDATE_EVENT;
  payload: EventType;
}

interface AddDataAction {
  type: typeof ADD_EVENT;
  payload: EventType;
}

type EventAction =
  | SetDataAction
  | DeleteEventAction
  | UpdateEventAction
  | AddDataAction;

interface EventState {
  data: EventType[];
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
    case UPDATE_EVENT:
      return {
        ...state,
        data: state.data.map((event) =>
          event.id === action.payload.id ? action.payload : event
        ),
      };
    case ADD_EVENT:
      return {
        ...state,
        data: [...state.data, action.payload as EventType],
      };
    default:
      return state;
  }
};

export default eventReducer;
