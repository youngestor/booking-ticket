import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { path } from '../utils'

import AdminLayouts from '../admin/layouts'
import AdminHome from '../admin/home'

import AdminMovieCreate from '../admin/movies/movieCreate'
import AdminMovieRead from '../admin/movies/movieRead'
import AdminMovieUpdate from '../admin/movies/movieUpdate'

import AdminCinemaCreate from '../admin/cinemas/cinemaCreate'
import AdminCinemaRead from '../admin/cinemas/cinemaRead'
import AdminCinemaUpdate from '../admin/cinemas/cinemaUpdate'

import AdminAccountCreate from '../admin/accounts/accountCreate'
import AdminAccountRead from '../admin/accounts/accountRead'
import AdminAccountUpdate from '../admin/accounts/accountUpdate'

import AdminScheduleCreate from '../admin/schedules/scheduleCreate'
import AdminScheduleRead from '../admin/schedules/scheduleRead'
import AdminScheduleUpdate from '../admin/schedules/scheduleUpdate'

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

export default function App() {
    return (
        <Routes>
            <Route path={path.ALL_HOME} element={
                <Layouts>
                    <Routes>
                        <Route path={path.LOGIN} element={<Login />} />
                        <Route path={path.REGISTER} element={<Register />} />

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
            } />

            <Route path={path.ALL_ADMIN} element={
                <AdminLayouts>
                    <Routes>
                        <Route path={path.HOME} element={<AdminHome />} >
                            <Route index element={<Navigate to={path.MOVIES} />} />
                            <Route path={path.MOVIES} element={<AdminMovieRead />} />
                            <Route path={path.CINEMAS} element={<AdminCinemaRead />} />
                            <Route path={path.ACCOUNTS} element={<AdminAccountRead />} />
                            <Route path={path.SCHEDULES} element={<AdminScheduleRead />} />
                        </Route>

                        <Route path={path.CREATE_MOVIE} element={<AdminMovieCreate />} />
                        <Route path={path.READ_MOVIE} element={<AdminMovieRead />} />
                        <Route path={path.UPDATE_MOVIE} element={<AdminMovieUpdate />} />

                        <Route path={path.CREATE_CINEMA} element={<AdminCinemaCreate />} />
                        <Route path={path.READ_CINEMA} element={<AdminCinemaRead />} />
                        <Route path={path.UPDATE_CINEMA} element={<AdminCinemaUpdate />} />

                        <Route path={path.CREATE_ACCOUNT} element={<AdminAccountCreate />} />
                        <Route path={path.READ_ACCOUNT} element={<AdminAccountRead />} />
                        <Route path={path.UPDATE_ACCOUNT} element={<AdminAccountUpdate />} />

                        <Route path={path.CREATE_SCHEDULE} element={<AdminScheduleCreate />} />
                        <Route path={path.READ_SCHEDULE} element={<AdminScheduleRead />} />
                        <Route path={path.UPDATE_SCHEDULE} element={<AdminScheduleUpdate />} />

                        <Route path={path.ALL} element={<Error />} />
                    </Routes>
                </AdminLayouts>
            } />
        </Routes>
    )
}
