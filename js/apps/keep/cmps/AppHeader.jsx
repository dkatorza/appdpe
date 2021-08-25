const { NavLink, withRouter } = ReactRouterDOM

class _AppHeader extends React.Component {
    render() {

        return (
            <section className="app-header">
                <h1 onClick={() => this.props.history.goBack()}>Mis Keep</h1>
               
                <nav>
                    <NavLink activeClassName="my-active" exact to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/keep" >Our Keeps</NavLink>
                </nav>
            </section>
        )
    }
}

export const AppHeader = withRouter(_AppHeader)