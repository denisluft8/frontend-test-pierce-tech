import { fetchData } from "../../api/api";
import { mockedData } from "../../mockData";
import { Dispatch } from "redux";

export const SET_DATA = "SET_DATA";

export const setData = async (dispatch: Dispatch) => {
  try {
    const data = await fetchData(mockedData);
    dispatch({
      type: SET_DATA,
      payload: data,
    });
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};

export const DELETE_EVENT = "DELETE_EVENT";

export const deleteEvent = (eventId: number) => ({
  type: DELETE_EVENT,
  payload: eventId,
});