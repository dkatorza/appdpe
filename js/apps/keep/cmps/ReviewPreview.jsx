
export function ReviewPreview({ review, onRemoveReview }) {
    return (
      <div className="card-review">
        <span onClick={() => {
            onRemoveReview(review.id);
          }}
          className="close-btn">X</span>
        
        <div className="review-info">
          <span className="review-name"> {review.name}</span>
          <small className="review-date"> {review.readat}</small>
        </div>
        <div>
          {review.rate >= 1 && <span className="star on">&#9733;</span>}
          {review.rate >= 2 && <span className="star on">&#9733;</span>}
          {review.rate >= 3 && <span className="star on">&#9733;</span>}
          {review.rate >= 4 && <span className="star on">&#9733;</span>}
          {review.rate >= 5 && <span className="star on">&#9733;</span>}
        </div>
        <div>{review.txt}</div>
      </div>
    );
  }
  