import { AiOutlineHome } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { BiCodeAlt } from 'react-icons/bi';
import './navbar.scss'
import { useEffect } from 'react';
// import './main'

const NavBar = () => {
  useEffect(() => {
    const Icons = document.querySelectorAll('.navigation .navbar__icon')
    Icons.forEach((icon) => {
      icon.addEventListener('click', () => {
        changeActive();
        icon.classList.add('active-nav')
      })
    })

    function changeActive() {
      Icons.forEach((icon) => {
        icon.classList.remove('active-nav')
      })
    }
  }, [])
  
  return (
    <div className='navbar'>
      <div className="container">
        <div className="navbar__inner">
          <ul className="navbar__list navigation">
            <li>
              <a href="/#home" className="navbar__list-item">
                <AiOutlineHome className='navbar__icon active-nav'/>
              </a>
            </li>
            <li>
              <a href="/#skills" id='skill' className="navbar__list-item">
                <BiCodeAlt className='navbar__icon' />
              </a>
            </li>
            <li>
              <a href="/#portfolio" className="navbar__list-item">
                <BiBook className='navbar__icon' />
              </a>
            </li>
            <li>
              <a href="/#reviews" className="navbar__list-item">
                <RiServiceLine className='navbar__icon' />
              </a>
            </li>
            <li>
              <a href="/#contacts" className="navbar__list-item">
                <BiMessageSquareDetail className='navbar__icon' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}


export default NavBar;