import { mockedData } from "../../mockData";

export const SET_DATA = "SET_DATA";

export const setData = () => ({
  type: SET_DATA,
  payload: mockedData,
});
