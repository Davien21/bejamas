import React from "react";
import { CheckboxIcon } from "../../../assets/images";
import styles from "./radio-input.module.css";

function RadioInput({ filter, allFilters, onFilter, label, filterIndex }) {
  const isChecked = filter[label];

  const toggleIsChecked = () => {
    let updatedFilters = [...allFilters];
    updatedFilters.forEach((filter, index) => {
      const name = Object.keys(filter)[0];
      if (label === name) filter[name] = true;
      if (label !== name) filter[name] = false;
    });
    onFilter(updatedFilters);
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
        {label}
      </label>
    </div>
  );
}

export default RadioInput;
