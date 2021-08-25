const { Link } = ReactRouterDOM

export function AppHome() {

    console.log('test');
    return (
        <div className="main-home">
            <div className="title-home">Welcome To AppSus</div>
            <section className="logo-imgs">
                <Link to={`/mail`}>
                    <div className="logo-container">
                        <img className="logo-img" src="" alt="mail" />
                    </div>
                </Link>
                <Link to={`/keep`}>
                    <div className="logo-container">
                        <img className="logo-img" src="" alt="keep" />
                    </div>
                </Link>

                <Link to={`/book`}>
                    <div className="logo-container">
                        <img className="logo-img" src="" alt="book" />
                    </div>
                </Link>

            </section>
        </div>
    )
}
