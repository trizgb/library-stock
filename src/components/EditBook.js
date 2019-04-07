import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';


class EditBook extends Component {
  render() {
    const { booksListState, handleEdit, updateBook } = this.props;
    const bookId = this.props.match.params.id;

    if (booksListState.length > 0 && bookId <= booksListState.length) {
      const selectedBook = booksListState[bookId];
      const { title, author, price } = selectedBook;

      return (
        <div className="app__form">
          <div className="form__wrapper">
            <div className="features__container">
              <Link to="/">
                <i className="fas fa-times"></i>
              </Link>
            </div>
            <h1 className="form__heading">Edit the book</h1>
            <form action="" className="form__container">
              <div className="form__title-container">
                <label htmlFor="form-title" className="form__title-label">title</label>
                <input type="text" id="form-title" className="form__title" data-field="title" defaultValue={title} onKeyUp={handleEdit} />
              </div>
              <div className="form__author-container">
                <label htmlFor="form-author" className="form__author-label">author</label>
                <input type="text" id="form-author" className="form__author" data-field="author" defaultValue={author} onKeyUp={handleEdit} />
              </div>
              <div className="form__price-container">
                <label htmlFor="form-price" className="form__price-label">price</label>
                <input type="number" id="form-price" className="form__price" data-field="price" defaultValue={price} onKeyUp={handleEdit} />
              </div>
            </form>
            <Link to="/"><input className="form__submit-edit" type="submit" value="Edit" onClick={updateBook} /></Link>
          </div>
        </div>
      );
    } else {
      return (
        <Fragment>
          <p>No data</p>
          <Link to="/">
            <i className="fas fa-times"></i>
          </Link>
        </Fragment>
      );
    }
  }
}

// EditBook.propTypes = {

// };

export default EditBook;