import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SearchTitle extends Component {
  render() {
    const { getSearch } = this.props;
    return (
      <div className="search__title-container">
        <label htmlFor="" className="search__title-label">Search book<i className="fas fa-search"></i></label>
        <input type="text" className="search__field" placeholder={"Title"} onKeyUp={getSearch} />
      </div>
    );
  }
}

SearchTitle.propTypes = {
  getSearch: PropTypes.func.isRequired
};

export default SearchTitle;