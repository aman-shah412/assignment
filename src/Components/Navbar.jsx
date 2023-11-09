import React from 'react'
import { BiSolidChevronDown } from "react-icons/bi"
function Navbar() {
    return (
        <nav className='d-flex justify-content-between align-items-center'>
            <h3>Forms</h3>
            <BiSolidChevronDown cursor="pointer" size={40} color='aqua' />
        </nav>
    )
}

export default Navbar
