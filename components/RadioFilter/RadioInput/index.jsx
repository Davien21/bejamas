import { CheckboxIcon } from "../../../assets/images";
import styles from "./radio-input.module.css";

function RadioInput({ filter, activeFilter, onFilter, filterIndex }) {
  const isChecked = filter == activeFilter;

  const toggleIsChecked = () => {
    if (filter == activeFilter) return onFilter("all");
    onFilter(filter);
  };

  return (
    <div className={`${styles.container} flex items-center mb-5`}>
      <button
        aria-label={`Filter by ${filter}`}
        className="mr-5"
        onClick={() => toggleIsChecked()}
      >
        <CheckboxIcon
          className={`${styles["checkbox"]} ${styles[isChecked]}`}
        />
      </button>
      <label className="capitalize cursor-pointer">
        <input
          type="checkbox"
          name={filter}
          id={filter}
          value={isChecked}
          checked={isChecked}
          onChange={() => toggleIsChecked()}
        />
        <span>{filter}</span>
      </label>
    </div>
  );
}

export default RadioInput;
