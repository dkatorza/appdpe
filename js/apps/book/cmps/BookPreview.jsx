const { Link } = ReactRouterDOM


export function BookPreview({book}) {
    return (
        <article className="book-preview">
            <img src={book.thumbnail} alt="" />
            <h4>Title - {book.title}</h4>
            <h4>Price - {book.listPrice.amount}{book.listPrice.currencyCode}</h4>
            <Link to={`/book/${book.id}`} >Book details</Link>
        </article>
    )
}

