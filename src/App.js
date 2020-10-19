// @Vendors
import React from 'react'

// @context
import { ReposContextProvider } from 'context'

// hooks
import useRepos from 'hooks/useRepos'

// @Components
import { Header } from 'components/header'
// import { UserRegister } from 'components/register'
import { ReposTable } from 'components/table'

function App () {
    const userRepos = useRepos()
    return (
        <ReposContextProvider value={userRepos}>
            <div className="App">
                <Header />
                {/* <UserRegister /> */}
                <ReposTable />
            </div>
        </ReposContextProvider>
    )
}

export default App
