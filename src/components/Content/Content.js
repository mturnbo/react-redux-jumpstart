import React from 'react';
import PropTypes from 'prop-types';
import { getContent } from '../../utils';
import './Content.scss';

const Content = ({ title, text, sampleLength }) => (
  <div className="content">
    {title && <h1 className="uk-heading-divider">{title}</h1>}
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
