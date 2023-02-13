import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { path } from '../utils'
import Layouts from './layouts'
import Home from './home'


import AdminLayouts from './admin/layouts'
import AdminHome from './admin/home'
import AdminMovieCreate from './admin/movieCreate'
import AdminMovieRead from './admin/movieRead'

import Error from './error'

export default function App() {
    return (
        <Routes>
            <Route path={path.ALL_HOME} element={
                <Layouts>
                    <Routes>
                        <Route path={path.HOME} element={<Home />} />
                        <Route path={path.ALL} element={<Error />} />
                    </Routes>
                </Layouts>
            } />

            <Route path={path.ALL_ADMIN} element={
                <AdminLayouts>
                    <Routes>
                        <Route path={path.HOME} element={<AdminHome />} />
                        <Route path={path.CREATE_MOVIE} element={<AdminMovieCreate />} />
                        <Route path={path.READ_MOVIE} element={<AdminMovieRead />} />
                        <Route path={path.ALL} element={<Error />} />
                    </Routes>
                </AdminLayouts>
            } />
        </Routes>
    )
}
