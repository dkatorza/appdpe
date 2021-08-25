const { Link } = ReactRouterDOM

import { bookService } from '../services/book.service.js'
import { LongTxt } from '../cmps/LongTxt.jsx'
import { AddReview } from '../cmps/AddReview.jsx'
import { ReviewList } from "../cmps/ReviewList.jsx";
import { Loader } from "../cmps/loader.jsx";


export class BookDetails extends React.Component {

  state = {
    book: null,
    isLongTxtShown: false,
  }

  componentDidMount() {
    this.loadBook()

  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
      this.loadBook()
    }
  }


  loadBook = () => {
    const id = this.props.match.params.bookId
    bookService.getBookById(id)
      .then(book => {
        if (!book) this.props.history.push('/')
        this.setState({ book })
      })
  }

  onBack = () => {
    this.props.history.push('/book')
  }

  seeMore = () => {
    this.setState({ isLongTxtShown: !this.state.isLongTxtShown })
  }

  render() {
    const { book } = this.state;


    let color = 'black';
    if (book) {
      if (book.listPrice.amount > 150) color = "red";
      if (book.listPrice.amount < 20) color = "green";
    }


    let bookPageCount;
    if (book) {
      if (book.pageCount > 500) bookPageCount = 'Long Reading';
      if (book.pageCount > 200 && book.pageCount < 500) bookPageCount = 'Decent Reading';
      if (book.pageCount < 100) bookPageCount = 'Light Reading';
    }


    let bookPublishing;
    if (book) {
      if (new Date().getFullYear() - book.publishedDate > 10) {
        bookPublishing = 'Veteran Book'
      } else if (new Date().getFullYear() - book.publishedDate < 1) {
        bookPublishing = 'New!'
      }
    }

    if (!book) return <Loader />

    return (
      <div className="book-details">
        <h2>Title: {book.title}</h2>

        {<h4 className={color}>{book.listPrice.amount} {book.listPrice.currencyCode}</h4>}
        <img src={book.thumbnail} alt="" />
        <LongTxt desc={book.description} isLongTxtShown={this.state.isLongTxtShown} seeMore={this.seeMore} />

        <p>{bookPageCount} {bookPublishing}</p>
        <p>Written By: {book.authors}</p>

        <AddReview book={book} />

        {/* <ReviewList book={book} onRemoveReview={this.onRemoveReview} /> */}


        <section className="btn-actions">
          <button className='back-btn' onClick={this.onBack}>Go Back</button>
          <Link to={`/book/${bookService.getNextBookId(book.id)}`}>Next</Link>
        </section>
      </div>
    )
  }
}

