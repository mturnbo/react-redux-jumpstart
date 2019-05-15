/* eslint-disable class-methods-use-this */
import React from 'react';
import { List } from 'react-virtualized';
import { generatePeopleList } from '../../utils';
import './BigList.scss';

const bigList = generatePeopleList(1000);
const listHeight = 600;
const rowHeight = 75;
const rowWidth = 650;

class BigListPage extends React.Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(index, key, style) {
    return (
      <div key={key} style={style} className="row">
        <div className="image">
          <img src={bigList[index].avatar} alt="" />
        </div>
        <div className="jumpstart-content">
          <div className="name">{bigList[index].name}</div>
          <div className="birth-date">{bigList[index].birthDate}</div>
          <div className="bio">{bigList[index].bio}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="jumpstart-big-list">
        <List
          width={rowWidth}
          height={listHeight}
          rowHeight={rowHeight}
          rowRenderer={this.renderRow}
          rowCount={bigList.length}
        />
      </div>
    );
  }
}

export default BigListPage;
