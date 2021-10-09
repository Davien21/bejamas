import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import styles from "./pagination.module.css";
import { LeftIcon, RightIcon } from "../../assets/images";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  let listClass = (page) => (page == currentPage ? styles["active"] : "");

  if (pagesCount === 1) return null;
  // if (itemsCount == 0) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="Page navigation" className={`${styles["container"]}`}>
      <ul className="flex items-center md:gap-5">
        <div
          onClick={() => onPageChange(currentPage - 1)}
          className={
            currentPage === 1 ? "hidden" : `${styles["svg-container"]}`
          }
        >
          <LeftIcon />
        </div>
        {pages.map((page) => (
          <li
            key={page}
            className={`${listClass(page)} text-2xl`}
            onClick={() => onPageChange(page)}
          >
            <a className="page-link">{page}</a>
          </li>
        ))}
        <div
          onClick={() => onPageChange(currentPage + 1)}
          className={
            currentPage == pagesCount ? "hidden" : `${styles["svg-container"]}`
          }
        >
          <RightIcon />
        </div>
      </ul>
    </nav>
  );
};

export default Pagination;
