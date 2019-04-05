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
  }


  render() {
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
                {dataBooks.map((item, index) => {
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
                  <input type="text" className="search__field" />
                  <button className="button search__button"><i className="fas fa-search"></i></button>
                </div>
                <div className="filter__discount-container">
                  <form action="" className="filter__discount">
                    <label htmlFor="" className="filter__discount-label">Apply Discount</label>
                    <input type="number" className="discount__field" />
                    <button type="submit" className="button discount__button"><i className="fas fa-percentage"></i></button>
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
