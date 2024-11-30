import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'


const Layout = (props) => {

    return (
        <>
            <div>
                <Navbar />
                <div className='relative sm:z-[-1] md:z-auto lg:z-auto'>{props.children}</div>
                <Footer />
            </div>
        </>
    )
}

export default Layout