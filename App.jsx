const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { AppHome } from './pages/app-home.jsx'


export class App extends React.Component {
    render() {
        return (
            <Router>
                <main className="container">
                    <header >
                        <NavBar />
                    </header>
                    <section >
                        <Switch>
                            <Route path= "/" Component={AppHome} />
                        </Switch>
                    </section>
                </main>
            </Router>
        )
    }
}

