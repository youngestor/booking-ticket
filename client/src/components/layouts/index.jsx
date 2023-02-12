import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layouts({ children }) {
    return (
        <React.Fragment>
            <Header />
            <div className='app-wrapper'>
                {children}
            </div>
            <Footer />
        </React.Fragment>
    )
}
