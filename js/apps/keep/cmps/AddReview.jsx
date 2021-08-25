import { keepService } from "../services/keep.service.js";
import { StarReviewRating } from "../cmps/ReviewStars.jsx";
import { eventBusService } from "../services/event-bus-service.js";
import { utilService } from "../services/util.service.js";
import { ReviewList } from "../cmps/ReviewList.jsx";

import { Loader } from "../cmps/loader.jsx";

export class AddReview extends React.Component {

    state = {
        review: {
            txt: null,
            rate: null,
            name: 'Keeps Reader',
            readat: new Date().toDateString(),
            id: utilService.makeId(),
        },
    }


    componentDidMount() {
        this.removeEventBus = eventBusService.on("rating", (starsCount) => {
            this.setState((prevState) => ({
                review: { ...prevState.review, rate: starsCount }
            }));
        });
    }

    componentWillUnmount() {
        this.removeEventBus()
    }



    onSaveReview = (ev) => {
        ev.preventDefault();
        keepService.addReview(this.props.keep.id, this.state.review)
    };



    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({ review: { ...prevState.review, [field]: value } }))
    };


    render() {
        const { keep } = this.props;
        if (!keep) return <Loader />;
        return (
            <React.Fragment>
                <form className="add-review-container" onSubmit={this.onSaveReview}>
                    <div className="reviews-add-title">
                        <h2>Review this keep:</h2>
                        <span>{keep.title}</span>
                        <p>Share your thoughts with other customers</p>
                    </div>
                    <StarReviewRating />
                    <div className="add-review-date">
                        <span>Read At: <input type="date" name="readat" id="review-date" required="required" onChange={this.handleChange} /> </span>
                    </div>
                    <textarea onChange={this.handleChange}
                        name="txt"
                        className="textarea"
                        id="review-content"
                        placeholder="Enter your review here"
                        required="required"
                        rows="8">
                    </textarea>
                    <button className="add-review-btn">Submit</button>
                </form>
                return (
                <section className="review">
                    {keep.reviews && keep.reviews.map((review) => {
                         <ReviewPreview key={review.id}  review={review} />;
                    })}
                </section>
            </React.Fragment>

        );

    }


}