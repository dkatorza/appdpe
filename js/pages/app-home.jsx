const { Link } = ReactRouterDOM

export function AppHome() {

    return (
        <div className="main-home">
            <div className="title-home"><img src="assets\img\appsus-full-logo.png" alt="APPSUS" /></div>
            <section className="logo-imgs">
                <Link to={`/mail`}>
                    <div className="logo-container">
                        <img className="logo-img" src="./assets/img/mail.png" alt="mail" />
                    </div>
                </Link>
                <Link to={`/keep`}>
                    <div className="logo-container">
                        <img className="logo-img" src="./assets/img/keep.png" alt="keep" />
                    </div>
                </Link>

                <Link to={`/book`}>
                    <div className="logo-container">
                        <img className="logo-img" src="./assets/img/books.png" alt="book" />
                    </div>
                </Link>

            </section>
        </div>
    )
}
