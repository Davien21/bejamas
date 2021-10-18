import { useState } from "react";
import { CheckboxIcon } from "../../../assets/images";
import styles from "./multiple-input.module.css";

function MultipleInput({ filter, allFilters, onFilter, label, filterIndex }) {
  const isChecked = filter[label];

  const toggleIsChecked = () => {
    const updatedFilters = [...allFilters];
    updatedFilters[filterIndex][label] = !isChecked;
    onFilter(updatedFilters);
  };

  return (
    <div className={`${styles.container} flex items-center mb-5`}>
      <button
        aria-label={`Filter by ${label}`}
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
          name={label}
          id={label}
          value={isChecked}
          checked={isChecked}
          onChange={() => toggleIsChecked()}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}

export default MultipleInput;
