import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { path } from '../utils'

import AdminLayouts from './layouts'
import AdminHome from './home'

import AdminMovieCreate from './movies/movieCreate'
import AdminMovieRead from './movies/movieRead'
import AdminMovieUpdate from './movies/movieUpdate'

import AdminCinemaCreate from './cinemas/cinemaCreate'
import AdminCinemaRead from './cinemas/cinemaRead'
import AdminCinemaUpdate from './cinemas/cinemaUpdate'

import AdminAccountCreate from './accounts/accountCreate'
import AdminAccountRead from './accounts/accountRead'
import AdminAccountUpdate from './accounts/accountUpdate'

import AdminScheduleCreate from './schedules/scheduleCreate'
import AdminScheduleRead from './schedules/scheduleRead'
import AdminScheduleUpdate from './schedules/scheduleUpdate'

import Error from '../components/error'

export default function Admin() {
    return (
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
    )
}
