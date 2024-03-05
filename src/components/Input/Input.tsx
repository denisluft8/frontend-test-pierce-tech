import { ChangeEvent } from "react";
import styles from "./Input.module.css";
interface InputProps {
  label: string;
  name: string;
  datePicker?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
}

export const Input = ({
  label,
  name,
  datePicker,
  value,
  onChange,
  isValid,
}: InputProps) => {
  return (
    <>
      <div>
        <label className={styles.label} htmlFor={name}>
          {label}:
        </label>
        {!datePicker ? (
          <>
            <input
              type="text"
              value={value}
              className={styles.input}
              id={name}
              name={name}
              onChange={onChange}
              style={{
                border: isValid ? "1px solid #30cf5c" : "1px solid #d1332e",
              }}
            />
          </>
        ) : (
          <>
            <input
              type="datetime-local"
              value={value}
              className={styles.input}
              id={name}
              name={name}
              onChange={onChange}
              style={{
                border: isValid ? "1px solid #30cf5c" : "1px solid #d1332e",
              }}
            />
          </>
        )}
      </div>
    </>
  );
};
