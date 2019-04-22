import React from 'react';
import { Column, Table } from 'react-virtualized';
import { generatePeopleList } from '../../utils';
import 'react-virtualized/styles.css';
import './BigTable.scss';

const BigTable = () => {
  const bigList = generatePeopleList(1000);
  const tableHeight = 400;
  const tableWidth = 700;
  const rowHeight = 75;

  return (
    <Table
      width={tableWidth}
      height={tableHeight}
      headerHeight={50}
      headerClassName="big-table-header"
      rowHeight={rowHeight}
      rowGetter={({ index }) => bigList[index]}
      rowCount={bigList.length}
    >
      <Column label="Name" dataKey="name" width={200} />
      <Column label="Birth Date" dataKey="birthDate" width={200} />
      <Column label="About" dataKey="bio" width={350} />
    </Table>
  );
};

export default BigTable;
