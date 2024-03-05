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
        data: action.payload.sort((a, b) => {
          const dateA = new Date(a.eventDate).getTime();
          const dateB = new Date(b.eventDate).getTime();
          return dateA - dateB;
        }),
      };
    case DELETE_EVENT:
      return {
        ...state,
        data: state.data.filter((event) => event.id !== action.payload),
      };
    case UPDATE_EVENT: {
      const updatedEvent = action.payload;
      const updatedData = state.data.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      );
      return {
        ...state,
        data: updatedData.sort((a, b) => {
          const dateA = new Date(a.eventDate).getTime();
          const dateB = new Date(b.eventDate).getTime();
          return dateA - dateB;
        }),
      };
    }
    case ADD_EVENT:
      return {
        ...state,
        data: [...state.data, action.payload as EventType].sort((a, b) => {
          const dateA = new Date(a.eventDate).getTime();
          const dateB = new Date(b.eventDate).getTime();
          return dateA - dateB;
        }),
      };
    default:
      return state;
  }
};

export default eventReducer;
