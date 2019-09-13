/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import styled4 from './Reader.module.css';
import queryString from 'query-string';

const getItemFromLocation = (location) =>
  queryString.parse(location.search).item;

const type = {
  TRUE: true,
  FALSE: false,
}

class Reader extends Component {
  constructor(props, items) {
    super(props, items);

    this.state = {
      // publication: this.props.items[0],
      total: this.props.items.length,
      values: 1,
      // butPrev: true,
      // butNext: false,
    };

  }

  componentDidMount() {
    const parse = Number(getItemFromLocation(this.props.location));
    this.setState({
      values: parse,
      // butPrev: parse === 1 ? type.TRUE : type.FALSE,
      // butNext: parse === 12 ? type.FALSE : type.TRUE,
    });

  }

  componentDidUpdate(prevProps, prevState) {
    const { values } = this.state;
    const { history, location } = this.props;
    if (prevState.values !== values) {
      history.push({ ...location, search: `item=${values}` })
    }
  }

  handlPrevArticle = () => {
    this.setState(prevState => ({
      values: prevState.values - 1,
      // butPrev: prevState.values === 2 ? type.TRUE : type.FALSE,
    }));
  };

  handlNextArticle = () => {
    this.setState(prevState => ({
      values: prevState.values + 1,
      // butNext:
      // prevState.values === this.props.items.length - 1 ? type.TRUE : type.FALSE,
    }));
  };

  render() {
    const { total, values } = this.state;
    const { items } = this.props;
    const publication = items[values - 1];

    const butNext = values === total ? type.TRUE : type.FALSE;
    const butPrev = values === 1 ? type.TRUE : type.FALSE;

    return (
      <div className={styled4.reader}>
        <Publication publication={publication} />
        <Counter values={values} total={total} />
        <Controls
          butPrev={butPrev}
          butNext={butNext}
          handlPrevArticle={this.handlPrevArticle}
          handlNextArticle={this.handlNextArticle}
        />
      </div>
    );
  }
}

Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Reader;
