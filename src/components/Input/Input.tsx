import { ChangeEvent } from "react";
import styles from "./Input.module.css";
interface InputProps {
  label: string;
  name: string;
  datePicker?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  label,
  name,
  datePicker,
  value,
  onChange,
}: InputProps) => {
  return (
    <>
      <div>
        <label className={styles.label} htmlFor={name}>
          {label}:
        </label>
        {!datePicker ? (
          <input
            type="text"
            value={value}
            className={styles.input}
            id={name}
            name={name}
            onChange={onChange}
          />
        ) : (
          <input
            type="date"
            value={value}
            className={styles.input}
            id={name}
            name={name}
            onChange={onChange}
          />
        )}
      </div>
    </>
  );
};
