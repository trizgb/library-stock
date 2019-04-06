import React, { Component } from 'react';
import BooksList from './BooksList';
import PropTypes from 'prop-types';


class Main extends Component {
  render() {
    const { booksList, getSearch, getDiscount, applyDiscount } = this.props;

    return (
      <main className="app__main">
        <div className="main__wrapper">
          <BooksList 
          booksList={booksList}/>
          <div className="filters__container">
            <div className="filters__wrapper">
              <div className="search__title-container">
                <label htmlFor="" className="search__title-label">Search book<i className="fas fa-search"></i></label>
                <input type="text" className="search__field" onKeyUp={getSearch} />
              </div>
              <div className="filter__discount-container">
                <form action="" className="filter__discount">
                  <label htmlFor="" className="filter__discount-label">Apply Discount</label>
                  <input type="number" className="discount__field" onKeyUp={getDiscount} />
                  <button type="button" className="button discount__button" onClick={applyDiscount}><i className="fas fa-percentage"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

Main.propTypes = {
  booksList: PropTypes.arrayOf(PropTypes.object),
  getSearch: PropTypes.func.isRequired,
  getDiscount: PropTypes.func.isRequired,
  applyDiscount: PropTypes.func.isRequired
};

export default Main;