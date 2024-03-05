import { useDispatch } from "react-redux";
import styles from "./HomePage.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  deleteEvent,
  setData,
  updateEvent,
} from "../../redux/actions/eventActions";
import { StateTypes, EventType } from "../../types"; // Use alias here

import { EventCard, Form } from "../../components";

export const HomePage = () => {
  const dispatch = useDispatch();
  const [editingEventId, setEditingEventId] = useState<number | null>(null);

  const data = useSelector((state: StateTypes) => state.events.data);

  console.log(data);

  const handleDeleteEvent = (eventId: number) => {
    dispatch(deleteEvent(eventId));
  };

  const handleUpdateEvent = (eventId: number) => {
    setEditingEventId(eventId);
  };

  const handleUpdateSubmit = (updatedValues: EventType) => {
    dispatch(updateEvent(updatedValues));
    setEditingEventId(null);
  };

  useEffect(() => {
    setData(dispatch);
  }, [dispatch]);

  return (
    <section className={styles.homepage}>
      <h1>Event Management</h1>
      <div className={styles.eventsContainer}>
        {data.map((event) => (
          <div key={event.id}>
            {editingEventId === event.id ? (
              <Form initialValues={event} onSubmit={handleUpdateSubmit} />
            ) : (
              <EventCard
                event={event}
                onDelete={handleDeleteEvent}
                onUpdate={handleUpdateEvent}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
