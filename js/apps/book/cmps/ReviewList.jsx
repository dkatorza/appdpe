import { ReviewPreview } from "./ReviewPreview.jsx";
import { Loader } from "../cmps/loader.jsx";

export class ReviewList extends React.Component {

  render() {
    const { book } = this.props;
    if (!book) return <Loader />
    return (
      <section className="review">
      {book.reviews && book.reviews.map((review) => {
        return <ReviewPreview key={review.id}  onRemoveReview={onRemoveReview} review={review} />;
      })}
    </section>
    )
  }
}


// export function ReviewList({ book , onRemoveReview }) {
 
//   return (
//     <section className="review">
//       {book.reviews && book.reviews.map((review) => {
//         return <ReviewPreview key={review.id}  onRemoveReview={onRemoveReview} review={review} />;
//       })}
//     </section>
//   );
// }

