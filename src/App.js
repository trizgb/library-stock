import React, { Component } from 'react';
import { dataBooks } from './services/DataBooks';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
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
                {dataBooks.map(item => {
                  return (
                    <li className="books__list-item">
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
                <label htmlFor="" className="search__title-label"></label>
                <input type="text" className="search__field"/>
                </div>
                <div className="filter__discount-container">
                  <form action="" className="filter__discount">
                  <label htmlFor="" className="filter__discount-label"></label>
                  <input type="number" className="discount__field"/>
                  </form>
                  <button className="discount__button">Apply</button>
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
