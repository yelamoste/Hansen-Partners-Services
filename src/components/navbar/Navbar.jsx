import React from 'react'
import '../navbar/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-cont'>
        <Link to="/" className='dir'>Home</Link>
        <Link to="/meet-the-team" className='dir'>Meet the Team</Link>
        <Link to="/search-for-homes" className='dir'>Search For Homes</Link>
        <Link to="/our-communities" className='dir'>Our Communities</Link>
        <Link to="/home-valuation" className='dir'>Home Valuation</Link>
        <Link to="/services" className='dir'>Services</Link>
        <Link to="/home-across-america" className='dir'>Home Across America</Link>
        <Link to="/testimonials" className='dir'>Testimonials</Link>
        <Link to="/contact-us" className='dir'>Contact Us</Link>

    </div>
  )
}

export default Navbar