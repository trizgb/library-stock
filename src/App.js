import React, { Component } from 'react';
import { dataBooks } from './services/DataBooks';
import Main from './components/Main';
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
    this.getSearchBook();
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

  getSearchBook() {
    const { books, searchBook } = this.state;

    const searchedBooks = books.filter(item => {
      const title = item.title;

      return (title.toUpperCase().includes(searchBook.toUpperCase()));

    });
    return searchedBooks;
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

      this.setState({
        books: discountedPrice
      });

      return discountedPrice;
    }
  }

  render() {
    const booksList = this.getSearchBook();

    return (
      <div className="app">
        <header className="app__header">
          <div className="header__wrapper">
            <div className="logo__container"></div>
          </div>
        </header>
        <Main
          booksList={booksList}
          getSearch={this.getSearch}
          getDiscount={this.getDiscount}
          applyDiscount={this.applyDiscount}
        />
        <footer className="app__footer">
          <div className="footer__wrapper"></div>
        </footer>
      </div>
    );
  }
}

export default App;
