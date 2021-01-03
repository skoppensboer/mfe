import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/styles'
import Header from './Components/Header'
import Progress from './Components/Progress'


const MarketingAppLazy = lazy(() => import('./Components/MarketingApp'))
const AuthAppLazy = lazy(() => import('./Components/AuthApp'))

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth" component={AuthAppLazy} />
                        <Route path="/" component={MarketingAppLazy} />
                    </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}