import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import decode from 'jwt-decode'

import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import Avatar from '../Avtar/Avtar'
import './Navbar.css';
import { setCurrentUser } from '../../actions/currentUser'

const Navbar = () => {

  var dispatch = useDispatch()
  const navigate = useNavigate();
  var User = useSelector((state) => (state.currentUserReducer));

  useEffect(() => {
    const token = User?.token;

    if (token) {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) { // we are comparing the time in milliseconds
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  }, [dispatch])
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/'); // i.e., after logout we should navigate to the homepage
    dispatch(setCurrentUser(null)); // after logging out, setting the current user to null
  }

  return (
      <nav className='main-nav'>
          <div className='navbar'>
              <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt='logo' />
              </Link> 
              <Link to='/' className='nav-item nav-btn'>About</Link>
              <Link to='/' className='nav-item nav-btn'>Products</Link>
              <Link to='/' className='nav-item nav-btn'>For Teams</Link>
              <form>
                  <input type='text' placeholder='Search...' />
                      <img src={search} alt='search' width='18px' className='search-icon'/>
              </form>
              {User === null ? 
                  <Link to='/Auth' className='nav-item nav-links '>Log in</Link> :  // if user is null then re-route to login page
                  <>
              <Link to={`/Users/${User?.result?._id}`} style={{ textDecoration: 'none', color:"white"}}><Avatar backgroundColor='#009dff' px='5px' py='11px' borderRadius='50%' color='white' >{ User.result.name.charAt(0).toUpperCase()}</Avatar></Link>
                      <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
                  </>
               }
          </div>
    </nav>
  )
}

export default Navbar