import React, { Component } from 'react';
import BooksList from './BooksList';
import SearchTitle from './SearchTitle';
import Discount from './Discount';
import PropTypes from 'prop-types';


class Main extends Component {
  render() {
    const { booksList, getSearch, getDiscount, applyDiscount, getInfoBook, handleDelete, colorDiscount, priceDiscount } = this.props;

    return (
      <main className="app__main">
        <div className="main__wrapper">
          <BooksList
            booksList={booksList}
            getInfoBook={getInfoBook}
            handleDelete={handleDelete}
            colorDiscount={colorDiscount}
          />
          <div className="filters__container">
            <div className="filters__wrapper">
              <SearchTitle
                getSearch={getSearch}
              />
              <Discount
                getDiscount={getDiscount}
                applyDiscount={applyDiscount}
                priceDiscount={priceDiscount}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  booksList: PropTypes.arrayOf(PropTypes.object),
  getSearch: PropTypes.func.isRequired,
  getDiscount: PropTypes.func.isRequired,
  applyDiscount: PropTypes.func.isRequired,
  getInfoBook: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  colorDiscount: PropTypes.string.isRequired
};

export default Main;