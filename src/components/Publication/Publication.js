import React from 'react';
import PropTypes from 'prop-types';
import styled3 from './Publication.module.css';

const Publication = ({ publication }) => (
  <article key={publication.id} className={styled3.publication}>
    <h2 className={styled3.title}>{publication.title}</h2>
    <p className={styled3.text}>{publication.text}</p>
  </article>
);

Publication.propTypes = {
  publication: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
