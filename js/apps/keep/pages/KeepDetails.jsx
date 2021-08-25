const { Link } = ReactRouterDOM

import { keepService } from '../services/keep.service.js'
import { LongTxt } from '../cmps/LongTxt.jsx'
import { AddReview } from '../cmps/AddReview.jsx'
import { ReviewList } from "../cmps/ReviewList.jsx";
import { Loader } from "../cmps/loader.jsx";


export class KeepDetails extends React.Component {

  state = {
    keep: null,
    isLongTxtShown: false,
  }

  componentDidMount() {
    this.loadKeep()

  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.keepId !== this.props.match.params.keepId) {
      this.loadKeep()
    }
  }


  loadKeep = () => {
    const id = this.props.match.params.keepId
    keepService.getKeepById(id)
      .then(keep => {
        if (!keep) this.props.history.push('/')
        this.setState({ keep })
      })
  }

  onBack = () => {
    this.props.history.push('/keep')
  }

  seeMore = () => {
    this.setState({ isLongTxtShown: !this.state.isLongTxtShown })
  }

  render() {
    const { keep } = this.state;


    let color = 'black';
    if (keep) {
      if (keep.listPrice.amount > 150) color = "red";
      if (keep.listPrice.amount < 20) color = "green";
    }


    let keepPageCount;
    if (keep) {
      if (keep.pageCount > 500) keepPageCount = 'Long Reading';
      if (keep.pageCount > 200 && keep.pageCount < 500) keepPageCount = 'Decent Reading';
      if (keep.pageCount < 100) keepPageCount = 'Light Reading';
    }


    let keepPublishing;
    if (keep) {
      if (new Date().getFullYear() - keep.publishedDate > 10) {
        keepPublishing = 'Veteran Keep'
      } else if (new Date().getFullYear() - keep.publishedDate < 1) {
        keepPublishing = 'New!'
      }
    }

    if (!keep) return <Loader />

    return (
      <div className="keep-details">
        <h2>Title: {keep.title}</h2>

        {<h4 className={color}>{keep.listPrice.amount} {keep.listPrice.currencyCode}</h4>}
        <img src={keep.thumbnail} alt="" />
        <LongTxt desc={keep.description} isLongTxtShown={this.state.isLongTxtShown} seeMore={this.seeMore} />

        <p>{keepPageCount} {keepPublishing}</p>
        <p>Written By: {keep.authors}</p>

        <AddReview keep={keep} />

        {/* <ReviewList keep={keep} onRemoveReview={this.onRemoveReview} /> */}


        <section className="btn-actions">
          <button className='back-btn' onClick={this.onBack}>Go Back</button>
          <Link to={`/keep/${keepService.getNextKeepId(keep.id)}`}>Next</Link>
        </section>
      </div>
    )
  }
}

