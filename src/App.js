import React, { Component } from 'react';
import { dataBooks } from './services/DataBooks';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      editBook: {
        "title": '',
        "author": '',
        "price": ''
      },
      searchBook: '',
      priceDiscount: ''
    }

    this.getSearch = this.getSearch.bind(this);
    this.getDiscount = this.getDiscount.bind(this);
    this.applyDiscount = this.applyDiscount.bind(this);
  }

  componentDidMount() {
    this.getBooks();
  }

  componentDidUpdate() {
    this.searchBook();
  }

  getBooks() {
    this.setState({
      books: dataBooks
    });
  }

  getSearch(e) {
    const querySearch = e.currentTarget.value;

    this.setState({
      searchBook: querySearch
    });
  }

  searchBook() {
    const { books, searchBook } = this.state;

    if (books === []) {
      return (
        <div><p>No data</p></div>
      );
    } else {
      const searchedBooks = books.filter(item => {
        const title = item.title;

        return (title.toUpperCase().includes(searchBook.toUpperCase()));
      });

      return searchedBooks;
    }
  }

  getDiscount(e) {
    const queryDiscount = e.currentTarget.value;

    this.setState({
      priceDiscount: parseInt(queryDiscount)
    });
  }

  applyDiscount() {
    const { books, priceDiscount } = this.state;

    if (priceDiscount === '') {
      const finalPrice = books.map(item => {

        return parseFloat(item.price);
      });

      return finalPrice;
    } else {
      const discountedPrice = books.map(item => {
        const discountOperation = parseFloat(item.price) * priceDiscount / 100;
        const totalPrice = parseFloat(item.price) - discountOperation;
        const finalPrice = totalPrice.toFixed(2);

        return { ...item, price: finalPrice };
      });
      console.log(discountedPrice);

      this.setState({
        books: discountedPrice
      });

      return discountedPrice;
    }
  }

  render() {
    const booksList = this.searchBook();

    return (
      <div className="app">
        <header className="app__header">
          <div className="header__wrapper">
            <div className="logo__container"></div>
          </div>
        </header>
        <main className="app__main">
          <div className="main__wrapper">
            <div className="books__container">
              <ul className="books__list">
                {booksList.map((item, index) => {
                  return (
                    <li className="books__list-item" key={index}>
                      <div className="features__container">
                        <i className="fas fa-trash-alt"></i>
                        <i className="fas fa-edit"></i>
                      </div>
                      <div className="book__container">
                        <h2 className="book__title">{item.title}</h2>
                        <p className="book__author">{item.author}</p>
                        <p className="book__price">{item.price}€</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="filters__container">
              <div className="filters__wrapper">
                <div className="search__title-container">
                  <label htmlFor="" className="search__title-label">Search book</label>
                  <input type="text" className="search__field" onKeyUp={this.getSearch} />
                  <button type="button" className="button search__button" onClick={this.getSearch}><i className="fas fa-search"></i></button>
                </div>
                <div className="filter__discount-container">
                  <form action="" className="filter__discount">
                    <label htmlFor="" className="filter__discount-label">Apply Discount</label>
                    <input type="number" className="discount__field" onKeyUp={this.getDiscount} />
                    <button type="button" className="button discount__button" onClick={this.applyDiscount}><i className="fas fa-percentage"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="app__footer">
          <div className="footer__wrapper"></div>
        </footer>
      </div>
    );
  }
}

export default App;
