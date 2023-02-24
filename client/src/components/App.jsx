import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { path } from '../utils'
import Layouts from './layouts'
import Home from './home'
import Movies from './movies'
import Cinemas from './cinemas'
import Intro from './intro'

import AdminLayouts from '../admin/layouts'
import AdminHome from '../admin/home'
import AdminMovieCreate from '../admin/movies/movieCreate'
import AdminMovieRead from '../admin/movies/movieRead'
import AdminMovieUpdate from '../admin/movies/movieUpdate'
import AdminCinemaCreate from '../admin/cinemas/cinemaCreate'
import AdminCinemaRead from '../admin/cinemas/cinemaRead'
import AdminCinemaUpdate from '../admin/cinemas/cinemaUpdate'

import Error from './error'

export default function App() {
    return (
        <Routes>
            <Route path={path.ALL_HOME} element={
                <Layouts>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path={path.MOVIES} element={<Movies />} />
                        <Route path={path.CINEMAS} element={<Cinemas />} />
                        <Route path={path.INTRO} element={<Intro />} />
                        <Route path={path.ALL} element={<Error />} />
                    </Routes>
                </Layouts>
            } />

            <Route path={path.ALL_ADMIN} element={
                <AdminLayouts>
                    <Routes>
                        <Route path={path.HOME} element={<AdminHome />} >
                            <Route index element={<Navigate to={path.MOVIES} />} />
                            <Route path={path.MOVIES} element={<AdminMovieRead />} />
                            <Route path={path.CINEMAS} element={<AdminCinemaRead />} />
                            <Route path={path.ACCOUNTS} element={<div>Accounts</div>} />
                        </Route>
                        <Route path={path.CREATE_MOVIE} element={<AdminMovieCreate />} />
                        <Route path={path.READ_MOVIE} element={<AdminMovieRead />} />
                        <Route path={path.UPDATE_MOVIE} element={<AdminMovieUpdate />} />
                        <Route path={path.CREATE_CINEMA} element={<AdminCinemaCreate />} />
                        <Route path={path.READ_CINEMA} element={<AdminCinemaRead />} />
                        <Route path={path.UPDATE_CINEMA} element={<AdminCinemaUpdate />} />
                        <Route path={path.ALL} element={<Error />} />
                    </Routes>
                </AdminLayouts>
            } />
        </Routes>
    )
}
