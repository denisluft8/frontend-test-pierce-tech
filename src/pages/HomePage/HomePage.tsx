import { useDispatch } from "react-redux";
import styles from "./HomePage.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  deleteEvent,
  setData,
  updateEvent,
  addEvent,
} from "../../redux/actions/eventActions";
import { StateTypes, EventType } from "../../types";

import { EventCard, Form } from "../../components";

export const HomePage = () => {
  const dispatch = useDispatch();
  const [editingEventId, setEditingEventId] = useState<number | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);

  const data = useSelector((state: StateTypes) => state.events.data);
  const eventIds = data
    .map((event) => event.id)
    .filter((id): id is number => typeof id === "number");

  const handleDeleteEvent = (eventId: number) => {
    dispatch(deleteEvent(eventId));
  };

  const handleUpdateEvent = (eventId: number) => {
    setEditingEventId(eventId);
    setIsUpdateModalOpen(true);
  };

  const handleUpdateSubmit = (updatedValues: EventType) => {
    dispatch(updateEvent(updatedValues));
    setEditingEventId(null);
    setIsUpdateModalOpen(false);
  };

  const handleAddEvent = (newEvent: EventType) => {
    dispatch(addEvent(newEvent));
    setEditingEventId(null);
  };

  useEffect(() => {
    setData(dispatch);
  }, [dispatch]);

  return (
    <section className={styles.homepage}>
      <h1 className={styles.title}>Event Management</h1>
      <div className={styles.eventsContainer}>
        {data.map((event) => (
          <div key={event.id}>
            {editingEventId === event.id && isUpdateModalOpen ? (
              <Form
                initialValues={event}
                onSubmit={handleUpdateSubmit}
                isNewEvent={false}
                onClose={() => {
                  setIsUpdateModalOpen(false);
                }}
                highestId={0}
              />
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
      <button onClick={() => setIsAddModalOpen(!isAddModalOpen)}>
        Add Event
      </button>
      {isAddModalOpen && (
        <Form
          initialValues={{ name: "", eventDate: "", description: "" }}
          onSubmit={handleAddEvent}
          isNewEvent={true}
          onClose={() => setIsAddModalOpen(false)}
          highestId={Math.max(...eventIds, 0)}
        />
      )}
    </section>
  );
};
