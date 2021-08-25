const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { AppHome } from './js/pages/app-home.jsx';


export function App() {
    return (
        <Router>
            <header >
                {/* <NavBar /> */}
            </header>
            <main className="container">
                <section >
                    <Switch>
                        <Route path="/" Component={AppHome} />
                    </Switch>
                </section>
            </main>
        </Router>
    )
}


