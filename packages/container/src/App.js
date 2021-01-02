import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header'
import MarketingApp from './Components/MarketingApp'

export default () => {
    return (
        <BrowserRouter>
        <div>
            <Header />
            <MarketingApp />
        </div>
        </BrowserRouter>
    )
}