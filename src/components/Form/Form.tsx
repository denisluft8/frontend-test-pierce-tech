import { useState } from "react";
import { Input } from "..";
import { EventType } from "../../types";

interface FormProps {
  initialValues: EventType;
  onSubmit: (updatedValues: EventType) => void;
}

export const Form: React.FC<FormProps> = ({ initialValues, onSubmit }) => {
  const [formData, setFormData] = useState<EventType>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label={"Event Name"}
        name={"name"}
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        label={"Event Date"}
        name={"eventDate"}
        datePicker
        value={formData.eventDate}
        onChange={handleChange}
      />
      <Input
        label={"Event Description"}
        name={"description"}
        value={formData.description}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
