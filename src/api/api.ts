import { Event } from "../types";

export const fetchData = (data: Event[]) => {
  return Promise.resolve(data);
};

export const addData = (newEvent: Event, data: Event[]) => {
  const updatedData = [...data, newEvent];
  return Promise.resolve(updatedData);
};

export const updateData = (updatedEvent: Event, data: Event[]) => {
  const updatedData = data.map((event) =>
    event.id === updatedEvent.id ? updatedEvent : event
  );
  return Promise.resolve(updatedData);
};
