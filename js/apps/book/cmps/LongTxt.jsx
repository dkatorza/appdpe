export function LongTxt({desc, isLongTxtShown,seeMore}) {
    return(
        <div className="longtext-container">
            <p className="longtext">
            {!isLongTxtShown ? desc.substring(0, 50)+'...' :desc}
            </p>
            <h3 className="see-more" onClick={seeMore}>{!isLongTxtShown ? 'See more': 'See less'}</h3>
        </div>
    )
}

