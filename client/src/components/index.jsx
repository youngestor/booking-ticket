import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { path } from '../utils'

import Layouts from './layouts'
import Home from './home'
import Schedules from './schedules'
import Movies from './movies'
import MoviesDetail from './moviesDetail'
import Cinemas from './cinemas'
import CinemasDetail from './cinemasDetail'
import Intro from './intro'

import Login from './login'
import Register from './register'

import Error from './error'

function Page({ isLoggedIn }) {
    return (
        <Layouts>
            <Routes>
                <Route path={path.LOGIN} element={!isLoggedIn ?
                    <Login /> : <Navigate to={path.HOME} />} />
                <Route path={path.REGISTER} element={!isLoggedIn ?
                    <Register /> : <Navigate to={path.HOME} />} />

                <Route index element={<Home />} />
                <Route path={path.SCHEDULES} element={<Schedules />} />
                <Route path={path.MOVIES} element={<Movies />} />
                <Route path={path.MOVIES + '/:id'} element={<MoviesDetail />} />
                <Route path={path.CINEMAS} element={<Cinemas />} />
                <Route path={path.CINEMAS + '/:id'} element={<CinemasDetail />} />
                <Route path={path.INTRO} element={<Intro />} />

                <Route path={path.ALL} element={<Error />} />
            </Routes>
        </Layouts>
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.user.isLoggedIn
})

export default connect(mapStateToProps)(Page)
