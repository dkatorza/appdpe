
const { NavLink, withRouter } = ReactRouterDOM

function _NavBar(props) {
    function goBack() {
        props.history.goBack()
    }



    return (
        <section className="main-nav">
            <div className="logo">AppSus </div>
            <div className="nav-links">

                <NavLink activeClassName='my-active' exact to="/">Home</NavLink>
                <NavLink to="/keep"> Keep </NavLink>
                <NavLink to="/mail">Mail</NavLink>
                <NavLink to="/book">Book</NavLink>
            </div>
        </section>
    )
}

export const NavBar = withRouter(_NavBar)