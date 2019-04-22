import React from 'react';
import { List } from 'react-virtualized';
import { generatePeopleList } from '../../utils';
import './BigList.scss';

const BigList = () => {
  const bigList = generatePeopleList(1000);
  const listHeight = 400;
  const rowHeight = 75;
  const rowWidth = 550;

  const renderRow = (index, key, style) => (
    <div key={key} style={style} className="row">
      <div className="image">
        <img src={bigList[index].image} alt="" />
      </div>
      <div className="jumpstart-content">
        <div className="name">{bigList[index].name}</div>
        <div className="birth-date">{bigList[index].birthDate}</div>
        <div className="bio">{bigList[index].bio}</div>
      </div>
    </div>
  );

  return (
    <div className="jumpstart-big-list">
      <List
        width={rowWidth}
        height={listHeight}
        rowHeight={rowHeight}
        rowRenderer={renderRow}
        rowCount={bigList.length}
      />
    </div>
  );
};

export default BigList;
