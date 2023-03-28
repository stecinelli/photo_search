import React from 'react'
import PaginationBootstrap from 'react-bootstrap/Pagination';

interface IPaginationProps {
  pagActive: number,
  setPagActive: React.Dispatch<React.SetStateAction<number>>,
}

const Pagination = ({ pagActive, setPagActive }:IPaginationProps ) => {

  let active = pagActive;
  let items = [];

  for (let number = 1; number <= 5; number++) {
    items.push(
      <PaginationBootstrap.Item key={number} active={number === active} onClick={()=> setPagActive(number)}>
        {number}
      </PaginationBootstrap.Item>,
    );
  }

  return (
    <div>
      <PaginationBootstrap>{items}</PaginationBootstrap>
    </div>
  )
}

export default Pagination