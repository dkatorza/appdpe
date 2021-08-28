
export function MailFilter(props) {
    return (
        <React.Fragment>
            <section className="mail-filter">
                <input type="search" name="searchfilter" id="search-filter" placeholder="🔍Serach mail" onChange={(ev) => {
                    props.onSetFilter(ev)
                }} />
                <div className="radio-sort">
                    <label htmlFor="all" className="label-all"> All <input type="radio"  name="radiofilters" value="all" onChange={(ev) => props.onSetFilter(ev)} defaultChecked/> </label>
                    <label htmlFor="read" className="label-read"> Read <input type="radio" name="radiofilters" value="read" onChange={(ev) => props.onSetFilter(ev)} /> </label>
                    <label htmlFor="unread"  className="label-unread"> Unread <input type="radio" name="radiofilters" value="unread" onChange={(ev) => props.onSetFilter(ev)} /> </label>
                    <label htmlFor="newdate"  className="label-date-new"> Recent Mails <input type="radio" name="radiofilters" value="newdate" onChange={(ev) => props.onSetFilter(ev)} /> </label>
                    <label htmlFor="olddate"  className="label-date-old"> Older Mails <input type="radio" name="radiofilters" value="olddate" onChange={(ev) => props.onSetFilter(ev)} /> </label>
                    <label htmlFor="subject"  className="label-sort-subject"> By Subject <input type="radio" name="radiofilters" value="subject" onChange={(ev) => props.onSetFilter(ev)} /> </label>
                </div>

            </section>
        </React.Fragment>
    )
}