import React from 'react';
import PropTypes from 'prop-types';
import { getRandomSample } from "../../utils";
import content from "../../data/content";
import './SampleContent.scss';

const SampleContent = ({ numParagraphs, paragraphLength }) => (
	<div className="sample-content">
		{Array.from(Array(numParagraphs)).map(i => <p key={i}>{getRandomSample(content.text, paragraphLength).join(' ')}</p>)}
	</div>
);

SampleContent.propTypes = {
	numParagraphs: PropTypes.number,
	paragraphLength: PropTypes.number
};

SampleContent.defaultProps = {
	numParagraphs: 1,
	paragraphLength: 1
};

export default SampleContent;
