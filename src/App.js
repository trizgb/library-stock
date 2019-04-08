import React, { Component } from 'react';
import { dataBooks } from './services/DataBooks';
import Main from './components/Main';
import EditBook from './components/EditBook';
import './App.scss';
import { Route, Switch } from 'react-router-dom';

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
      priceDiscount: '',
      colorDiscount: ''
    }

    this.getSearch = this.getSearch.bind(this);
    this.getDiscount = this.getDiscount.bind(this);
    this.applyDiscount = this.applyDiscount.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.getInfoBook = this.getInfoBook.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.getBooks();
  }

  componentDidUpdate() {
    this.getSearchBook();
  }

  // Recorre el array de libros y le da a cada uno un ID que se corresponde con el index
  getBooks() {
    const booksArr = dataBooks.map((item, index) => {
      return { ...item, id: index };
    });

    this.setState({
      books: booksArr
    });
  }

  // Recoge el valor del input del search field
  getSearch(e) {
    const querySearch = e.currentTarget.value;

    this.setState({
      searchBook: querySearch
    });
  }

  // Filtra la lista de libros según lo recogido en el search field
  getSearchBook() {
    const { books, searchBook } = this.state;

    const searchedBooks = books.filter(item => {
      const title = item.title;

      return (title.toUpperCase().includes(searchBook.toUpperCase()));

    });
    return searchedBooks;
  }

  // Recoge el valor del input del discount field
  getDiscount(e) {
    const queryDiscount = e.currentTarget.value;

    if (queryDiscount !== '') {
      this.setState({
        priceDiscount: parseInt(queryDiscount)
      });
    } else {
      this.setState({
        priceDiscount: ''
      });
    }
  }

  // Aplica el descuento que se ha escrito en el discount field a través de una operación y setea el estado
  applyDiscount() {
    const { priceDiscount } = this.state;

    if (priceDiscount === '') {
      const originalPrice = dataBooks.map((item, index) => {
        const price = item.price

        return { ...item, price: price, id: index }
      });

      this.setState({
        books: originalPrice,
        colorDiscount: ''
      });

    } else if (priceDiscount > 0 && priceDiscount <= 100) {
      const discountedPrice = dataBooks.map((item, index) => {
        const discountOperation = parseFloat(item.price) * priceDiscount / 100;
        const totalPrice = parseFloat(item.price) - discountOperation;
        const finalPrice = totalPrice.toFixed(2);

        return { ...item, price: finalPrice, id: index };
      });

      this.setState({
        books: discountedPrice,
        colorDiscount: 'red'
      });
    } else {
      return alert('Discount must be higher than 0 and same or lower than 100%')
    }
  }

  // Recoge de una el valor de los inputs que tienen el data-field y los guarda en el estado
  handleEdit(e) {
    const field = e.currentTarget.getAttribute('data-field'); //
    const currentValue = e.currentTarget.value;

    this.setState((prevState) => {
      const { editBook } = prevState;
      const updated = { ...editBook, [field]: currentValue };
      return { editBook: updated };
    });
  }

  // Recoge los atributos del libro seleccionado y sus valores y los añade al estado
  getInfoBook(e) {
    const bookId = parseInt(e.currentTarget.getAttribute('data-update'));
    const dataTitle = e.currentTarget.getAttribute('data-title');
    const dataAuthor = e.currentTarget.getAttribute('data-author');
    const dataPrice = e.currentTarget.getAttribute('data-price');

    this.setState((prevState) => {
      const { editBook } = prevState;
      const edited = { ...editBook, id: bookId, title: dataTitle, author: dataAuthor, price: dataPrice };
      return { editBook: edited };
    });
  }

  // 
  updateBook() {
    let books = this.state.books;
    for (let i = 0; i < books.length; i++) {
      if (books[i].id === this.state.editBook.id) {
        books[i] = this.state.editBook;
      }
    }

    this.setState({
      books: books,
      editBook: {
        "title": '',
        "author": '',
        "price": '',
        "id": 0
      },
      searchBook: ''
    });
  }

  handleDelete(e) {
    const bookId = parseInt(e.currentTarget.getAttribute('data-update'));

    this.setState((prevState) => {
      const { books } = prevState;
      const bookIndexInArray = books.findIndex(book => book.id === bookId);

      if (bookIndexInArray !== -1) {
        books.splice(bookIndexInArray, 1);
      }

      const booksArr = books.map((item, index) => {
        return { ...item, id: index };
      });

      return { books: booksArr };
    });
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
        <Switch>
          <Route exact path="/" render={() => (
            <Main
              booksList={booksList}
              getSearch={this.getSearch}
              getDiscount={this.getDiscount}
              applyDiscount={this.applyDiscount}
              getInfoBook={this.getInfoBook}
              handleDelete={this.handleDelete}
              colorDiscount={this.state.colorDiscount}
            />
          )} />
          <Route path="/edit/:id" render={props => (
            <EditBook
              match={props.match}
              booksListState={this.state.books}
              handleEdit={this.handleEdit}
              editBook={this.state.editBook}
              updateBook={this.updateBook}
            />
          )} />
        </Switch>
        <footer className="app__footer">
          <div className="footer__wrapper"></div>
        </footer>
      </div>
    );
  }
}

export default App;
