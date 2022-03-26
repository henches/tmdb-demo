import * as React from 'react';
import './App.css';

const MAX_DISPLAYED_PAGES = 12;

type Props = {
  maxPages: number;
  totalPages: number,
  pageNumber: number
  goPageNumber: (page: number) => void
}

// TODO : design a pagination taking maxPages into account (so as to be able to select all the pages, not only the first ones)

export function Pagination(props: Props) { 
  const numbers = [];
  for (let i = 0; i < Math.min(props.totalPages, MAX_DISPLAYED_PAGES); i++) { // TODO : find more elegant than a for loop
    numbers.push(i+1);
  }

  return (
    <div className="pagination">
      <button className="button-pagination" disabled={props.pageNumber === 0} onClick={() => props.goPageNumber(props.pageNumber - 1)}><img alt="previous-arrow" src={require("./images/paginationpreviousarrow.svg").default}/></button>
      {numbers.map(number => <button key={number} className={"button-pagination " + (props.pageNumber === number ? "active" : "")} onClick={() => props.goPageNumber(number)}>{number}</button>)}
      <button className="button-pagination" disabled={props.pageNumber > props.totalPages} onClick={() => props.goPageNumber(props.pageNumber + 1)}><img alt="next-arrow" src={require("./images/paginationnextarrow.svg").default}/></button>
    </div>
  );
}

export default Pagination;
