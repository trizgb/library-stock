import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class BooksList extends Component {
  render() {
    const { booksList, getInfoBook, handleDelete } = this.props;

    if (booksList.length > 0) {
      return (
        <div className="books__container">
          <ul className="books__list">
            {booksList.map((item, index) => {
              return (
                <li className="books__list-item" key={index}>
                  <div className="features__container">
                    <Link to={`/edit/${item.id}`}>
                      <i className="fas fa-edit" data-update={item.id} data-title={item.title} data-author={item.author} data-price={item.price} onClick={getInfoBook}></i>
                    </Link>
                    <i className="fas fa-trash-alt" data-update={item.id} onClick={handleDelete}></i>
                  </div>
                  <div className="book__container">
                    <h2 className="book__title">{item.title}</h2>
                    <p className="book__author">{item.author}</p>
                    <p className="book__price">{item.price}€</p>
                  </div>
                </li>
              );
            }
            )}
          </ul>
        </div>
      );
    }
    else {
      return (
        <div className="books__list no-data"><p>No data</p></div>
      );
    }
  }
}

BooksList.propTypes = {
  booksList: PropTypes.arrayOf(PropTypes.object),
  getInfoBook: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default BooksList;