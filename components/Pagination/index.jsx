import React from "react";

import styles from "./pagination.module.css";
import { LeftIcon, RightIcon } from "../../assets/images";
import _ from "../../utils/custom-lodash";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  let listClass = (page) => (page == currentPage ? styles["active"] : "");

  if (pagesCount === 1) return null;
  if (itemsCount == 0) return null;
  const pages = _.range(1, pagesCount);

  return (
    <nav aria-label="Page navigation" className={`${styles["container"]}`}>
      <ul className="flex items-center md:gap-5">
        <button
          aria-label="Previous"
          onClick={() => onPageChange(currentPage - 1)}
          className={
            currentPage === 1 ? "hidden" : `${styles["svg-container"]}`
          }
        >
          <LeftIcon />
        </button>
        {pages.map((page) => (
          <li
            key={`${page}/${pagesCount}`}
            className={`${listClass(page)} text-2xl`}
          >
            <button onClick={() => onPageChange(page)} className="">
              {page}
            </button>
          </li>
        ))}
        <button
          aria-label="Next"
          onClick={() => onPageChange(currentPage + 1)}
          className={
            currentPage == pagesCount ? "hidden" : `${styles["svg-container"]}`
          }
        >
          <RightIcon />
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
