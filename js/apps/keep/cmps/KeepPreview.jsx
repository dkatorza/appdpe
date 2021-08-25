const { Link } = ReactRouterDOM


export function KeepPreview({keep}) {
    return (
        <article className="keep-preview">
            <img src={keep.thumbnail} alt="" />
            {/* <h4>Title - {keep.title}</h4> */}
            <h4>Random text</h4>
            {/* <h4>Price - {keep.listPrice.amount}{keep.listPrice.currencyCode}</h4> */}
            {/* <Link to={`/keep/${keep.id}`} >Keep details</Link> */}
        </article>
    )
}

