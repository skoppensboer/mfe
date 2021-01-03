import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App'

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    })

    if (onNavigate) {
        history.listen(onNavigate)
    }

    ReactDOM.render(<App history={history} />, el)

    return {
        onParentNavigate(pathname) {
            const currentPathname = history.location.pathname

            if (currentPathname !== pathname) {
                history.push(pathname)
            }
        }
    }
}

if (process.env.NODE_ENV === 'development') {
    
    const devRoot = document.querySelector('#_auth-dev-root')

    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() })
    }
}

export { mount }