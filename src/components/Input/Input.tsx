import styles from "./Input.module.css";
interface InputProps {
  label: string;
  name: string;
  datePicker?: boolean;
}

export const Input = ({ label, name, datePicker }: InputProps) => {
  return (
    <>
      <div>
        <label className={styles.label} htmlFor={name}>
          {label}:
        </label>
        {!datePicker ? (
          <input type="text" className={styles.input} id={name} name={name} />
        ) : (
          <input type="date" className={styles.input} id={name} name={name} />
        )}
      </div>
    </>
  );
};
