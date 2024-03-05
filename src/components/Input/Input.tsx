import { ChangeEvent } from "react";
import styles from "./Input.module.css";
interface InputProps {
  label: string;
  name: string;
  datePicker?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  invalidMessage?: string;
}

export const Input = ({
  label,
  name,
  datePicker,
  value,
  onChange,
  isValid,
  invalidMessage,
}: InputProps) => {
  return (
    <div className={styles.inputContainer}>
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
          {!isValid && (
            <span className={styles.errorMessage}>{invalidMessage}</span>
          )}
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
          {!isValid && (
            <span className={styles.errorMessage}>Pick a valid date</span>
          )}
        </>
      )}
    </div>
  );
};
