import { Event } from "../../types";
import { formatDate, formatTime } from "../../utils";
import styles from "./EventCard.module.css";

interface EventCardProps {
  event: Event;
  onDelete: () => void;
}

export const EventCard = ({ event, onDelete }: EventCardProps) => {
  const isEventBeforeToday = new Date(event.eventDate) < new Date();

  return (
    <div
      className={styles.eventCard}
      style={{ opacity: isEventBeforeToday ? "0.4" : "1" }}
    >
      <h3>{event.name}</h3>
      <p>
        {formatDate(event.eventDate)} at {formatTime(event.eventDate)}
      </p>
      <p>{event.description}</p>
      <button className={styles.deleteButton} onClick={onDelete}>
        Delete Event
      </button>
    </div>
  );
};
