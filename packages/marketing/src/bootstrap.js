import React from 'react'
import ReacDOM from 'react-dom'
import App from './App'

const mount = (el) => {
    ReacDOM.render(<App />, el)
}

if (process.env.NODE_ENV === 'development') {
    console.log('Dev Mode...')
    const devRoot = document.querySelector('#_marketing-dev-root')

    if (devRoot) {
        mount(devRoot)
    }
}

export { mount }