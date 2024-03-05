import { useState, useEffect } from "react";
import { Input } from "..";
import { EventType } from "../../types";
import styles from "./Form.module.css";

interface FormProps {
  initialValues: EventType;
  onSubmit: (updatedValues: EventType) => void;
  isNewEvent?: boolean;
  highestId: number;
  onClose: () => void;
}

export const Form = ({
  initialValues,
  onSubmit,
  isNewEvent,
  highestId,
  onClose,
}: FormProps) => {
  const [formData, setFormData] = useState<EventType>({
    ...initialValues,
    id: isNewEvent ? highestId + 1 : initialValues.id,
  });

  const [nameValid, setNameValid] = useState<boolean>(false);
  const [dateValid, setDateValid] = useState<boolean>(false);
  const [descriptionValid, setDescriptionValid] = useState<boolean>(false);

  useEffect(() => {
    setNameValid(initialValues.name.length >= 5);
    setDateValid(initialValues.eventDate.trim() !== "");
    setDescriptionValid(initialValues.description.split(" ").length > 1);
  }, [initialValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === "name") {
      setNameValid(value.length >= 5);
    } else if (name === "eventDate") {
      setDateValid(value.trim() !== "");
    } else if (name === "description") {
      setDescriptionValid(value.split(" ").length > 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isNewEvent) {
      onSubmit({
        ...formData,
        id: highestId + 1,
      });
    } else {
      onSubmit(formData);
    }
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        label={"Event Name"}
        name={"name"}
        value={formData.name}
        onChange={handleChange}
        isValid={nameValid}
        invalidMessage="Name field must consist of a minimum of 5 characters."
      />
      <Input
        label={"Event Date"}
        name={"eventDate"}
        datePicker
        value={formData.eventDate}
        onChange={handleChange}
        isValid={dateValid}
      />
      <Input
        label={"Event Description"}
        name={"description"}
        value={formData.description}
        onChange={handleChange}
        isValid={descriptionValid}
        invalidMessage="Description field must consist of a minimum of 2 words."
      />
      <button
        type="submit"
        disabled={!nameValid || !dateValid || !descriptionValid}
      >
        Submit
      </button>
      <button
        type="button"
        className={styles.closeButton}
        onClick={handleClose}
      >
        x
      </button>
    </form>
  );
};
