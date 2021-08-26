
export function MailFilter(props) {
    return (
        <React.Fragment>
            <section className="mail-filter">
                <input type="search" name="searchfilter" id="search-filter" placeholder="serach" onChange={(ev) => {
                    props.onSetFilter(ev)
                }} />
                <div className="radio-sort">
                    <label htmlFor="all" className="label-all"> All <input type="radio"  name="setReadDis" value="all" onChange={(ev) => props.onSetFilter(ev)} /> </label>
                    <label htmlFor="read" className="label-read"> Read <input type="radio" name="setReadDis" value="read" onChange={(ev) => props.onSetFilter(ev)} /> </label>
                    <label htmlFor="unread"  className="label-unread"> Unread <input type="radio" name="setReadDis" value="unread" onChange={(ev) => props.onSetFilter(ev)} /> </label>
                    <label htmlFor="newdate"  className="label-date-new"> Recent Mails <input type="radio" name="setReadDis" value="newdate" onChange={(ev) => props.onSetFilter(ev)} /> </label>
                    <label htmlFor="olddate"  className="label-date-old"> Older Mails <input type="radio" name="setReadDis" value="olddate" onChange={(ev) => props.onSetFilter(ev)} /> </label>
                    <label htmlFor="subject"  className="label-sort-subject"> By Subject <input type="radio" name="setReadDis" value="subject" onChange={(ev) => props.onSetFilter(ev)} /> </label>
                </div>

            </section>
        </React.Fragment>
    )
}