import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { mount } from 'auth/AuthApp'

export default () => {
    const ref = useRef(null)
    const history = useHistory()

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname }) => {

                const currentPathname = history.location.pathname

                if (currentPathname !== pathname) {
                    history.push(pathname)
                }
            }
        })

        history.listen(onParentNavigate)
    }, [])

    return <div ref={ref} />
}