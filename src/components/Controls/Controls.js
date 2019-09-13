import React from 'react';
import PropTypes from 'prop-types';
import styled1 from './Controls.module.css';

const Controls = ({ butPrev, butNext, handlPrevArticle, handlNextArticle }) => {
  const butPrevClass = butPrev ? styled1.disabled : styled1.button;
  const butNextClass = butNext ? styled1.disabled : styled1.button;
  return (
    <section className={styled1.controls}>
      <button
        type="button"
        disabled={butPrev}
        onClick={handlPrevArticle}
        className={butPrevClass}
      >
        BACK
      </button>
      <button
        type="button"
        disabled={butNext}
        onClick={handlNextArticle}
        className={butNextClass}
      >
        NEXT
      </button>
    </section>
  );
};

Controls.propTypes = {
  butPrev: PropTypes.bool.isRequired,
  butNext: PropTypes.bool.isRequired,
  handlPrevArticle: PropTypes.func.isRequired,
  handlNextArticle: PropTypes.func.isRequired,
};

export default Controls;
