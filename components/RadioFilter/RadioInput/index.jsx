import React from "react";
import { CheckboxIcon } from "../../../assets/images";
import styles from "./radio-input.module.css";

function RadioInput({ filter, activeFilter, onFilter, filterIndex }) {
  const isChecked = filter == activeFilter;

  const toggleIsChecked = () => {
    if (filter == activeFilter) return onFilter("all");
    onFilter(filter);
  };

  return (
    <div
      className={`${styles.container} cursor-pointer flex items-center mb-5`}
    >
      <CheckboxIcon
        className={`${styles["checkbox"]} ${styles[isChecked]}`}
        onClick={() => toggleIsChecked()}
      />
      <input
        type="checkbox"
        name={filter}
        id={filter}
        value={isChecked}
        checked={isChecked}
        onChange={() => {}}
      />
      <label
        className="capitalize cursor-pointer"
        onClick={() => toggleIsChecked()}
      >
        {filter}
      </label>
    </div>
  );
}

export default RadioInput;
