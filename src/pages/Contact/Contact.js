import React from 'react';
import {getRandomSample} from "../../utils";
import content from "../../data/content";

const ContactPage = () => (
  <div>
    <h2>Contact Us</h2>
		<p>{getRandomSample(content.text, 5).join(' ')}</p>
  </div>
);

export default ContactPage;
