import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { path } from './utils'

import Admin from './admin'
import Page from './components'

function App({ isLoggedIn }) {
    return (
        <Routes>
            <Route path={path.ALL_HOME} element={
                <Page />
            } />
            {isLoggedIn ? <Route path={path.ALL_ADMIN} element={
                <Admin />
            } /> : <Route path={path.ALL_ADMIN} element={<Navigate to={path.LOGIN} />} />}
        </Routes>
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.user.isLoggedIn
})

export default connect(mapStateToProps)(App)
