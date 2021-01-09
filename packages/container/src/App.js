import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/styles'
import { createBrowserHistory } from 'history'
import Header from './Components/Header'
import Progress from './Components/Progress'

const MarketingAppLazy = lazy(() => import('./Components/MarketingApp'))
const AuthAppLazy = lazy(() => import('./Components/AuthApp'))
const DashboardAppLazy = lazy(() => import('./Components/DashboardApp'))

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

const history = createBrowserHistory()

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false)

    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard')
        }
    }, [isSignedIn])

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth">
                                <AuthAppLazy onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path="/dashboard">
                                {!isSignedIn && <Redirect to="/" />}
                                <DashboardAppLazy />
                            </Route>
                            <Route path="/" component={MarketingAppLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    )
}