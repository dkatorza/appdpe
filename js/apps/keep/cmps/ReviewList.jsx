import { ReviewPreview } from "./ReviewPreview.jsx";
import { Loader } from "../cmps/loader.jsx";

export class ReviewList extends React.Component {

  render() {
    const { keep } = this.props;
    if (!keep) return <Loader />
    return (
      <section className="review">
      {keep.reviews && keep.reviews.map((review) => {
        return <ReviewPreview key={review.id}  onRemoveReview={onRemoveReview} review={review} />;
      })}
    </section>
    )
  }
}


// export function ReviewList({ keep , onRemoveReview }) {
 
//   return (
//     <section className="review">
//       {keep.reviews && keep.reviews.map((review) => {
//         return <ReviewPreview key={review.id}  onRemoveReview={onRemoveReview} review={review} />;
//       })}
//     </section>
//   );
// }

