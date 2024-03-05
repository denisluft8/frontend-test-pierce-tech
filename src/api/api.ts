import { EventType } from "../types";

export const fetchData = (data: EventType[]) => {
  return Promise.resolve(data);
};

export const addData = (newEvent: EventType, data: EventType[]) => {
  const updatedData = [...data, newEvent];
  return Promise.resolve(updatedData);
};

export const updateData = (updatedEvent: EventType, data: EventType[]) => {
  const updatedData = data.map((event) =>
    event.id === updatedEvent.id ? updatedEvent : event
  );
  return Promise.resolve(updatedData);
};
