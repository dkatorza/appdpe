const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { NavBar } from './assets/cmps/NavBar.jsx';
import { MailApp } from './js/apps/mail/pages/MailApp.jsx';
import { MailDetails } from './js/apps/mail/pages/mail-details.jsx'
import { KeepApp } from './js/apps/keep/pages/KeepApp.jsx';
import { BookApp } from './js/apps/book/pages/BookApp.jsx'
import { AppHome } from './js/pages/app-home.jsx';



export function App() {
    return (
        <Router>
            <header >
            <NavBar />
            </header>
            <main className="container">
                <section >
                    <Switch>
                    <Route path="/mail/:mailId" component={MailDetails} />   
                    <Route path="/mail" component={MailApp} />    
                    <Route path="/keep" component={KeepApp} />    
                    <Route path="/book" component={BookApp} />    
                    <Route path="/" component={AppHome} /> 
                    </Switch>
                </section>
            </main>
        </Router>
    )
}

