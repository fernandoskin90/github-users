// @Vendors
import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

// @context
import { ReposContextProvider } from 'context'

// hooks
import useRepos from 'hooks/useRepos'

// @Components
import { Header } from 'components/header'
import { UserRegister } from 'components/register'
import { ReposTable } from 'components/table'

function App () {
    const userRepos = useRepos()
    return (
        <Router basename="/">
            <ReposContextProvider value={userRepos}>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <UserRegister />
                        </Route>
                        <Route exact path="/search">
                            <ReposTable />
                        </Route>
                    </Switch>
                </div>
            </ReposContextProvider>
        </Router>
    )
}

export default App
