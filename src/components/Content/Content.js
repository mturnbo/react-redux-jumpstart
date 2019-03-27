import React from 'react';
import PropTypes from 'prop-types';
import { getContent } from '../../utils';
import './Content.scss';

const Content = ({ title, text, sampleLength }) => (
  <div className="content">
    {title && <div className="title">{title}</div>}
    <div className="text">{text || getContent(sampleLength)}</div>
  </div>
);

Content.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  sampleLength: PropTypes.number
};

Content.defaultProps = {
  title: '[Content Title]',
  text: '',
  sampleLength: 2
};

export default Content;
