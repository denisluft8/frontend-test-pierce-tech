import { EventType } from "../../types";
import { formatDate, formatTime } from "../../utils";
import styles from "./EventCard.module.css";

interface EventCardProps {
  event: EventType;
  onDelete: (eventId: number) => void;
  onUpdate: (eventId: number) => void;
}

export const EventCard = ({ event, onDelete, onUpdate }: EventCardProps) => {
  const isEventBeforeToday = new Date(event.eventDate) < new Date();

  const handleDelete = () => {
    event.id !== undefined && onDelete(event.id);
  };

  const handleUpdate = () => {
    event.id !== undefined && onUpdate(event.id);
  };

  return (
    <div
      className={styles.eventCard}
      style={{ backgroundColor: isEventBeforeToday ? "#837c7f" : "#28a769" }}
    >
      <h3>{event.name}</h3>
      <p>
        {formatDate(event.eventDate)} at {formatTime(event.eventDate)}
      </p>
      <p>{event.description}</p>
      <div>
        <button className={styles.button} onClick={handleUpdate}>
          Update
        </button>
        <button className={styles.button} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
