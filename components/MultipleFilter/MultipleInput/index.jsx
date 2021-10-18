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
    <div
      className={`${styles.container} cursor-pointer flex items-center mb-5`}
    >
      <button
        aria-label={`Filter by ${filter}`}
        className="mr-5"
        onClick={() => toggleIsChecked()}
      >
        <CheckboxIcon
          className={`${styles["checkbox"]} ${styles[isChecked]}`}
        />
      </button>
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

export default MultipleInput;
