import './footer.scss'
import {FooterListMenu} from './FooterListMenu'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__inner">
          <h1 className="footer-title">FaxWeb</h1>
          <ul className="footer__menu-list">
            {FooterListMenu.map(({ title, link }, index) => {
              return(
                <li className="footer__menu-item" key={index}>
                  <a href={link}>{title}</a>
                </li>
              )
            })}
          </ul>
          <ul className="footer__link-list">
            <li className="footer__link-item"><a href="mailto:faxweb7@gmail.com"><MdOutlineEmail /></a></li>
            <li className="footer__link-item"><a href="https://api.whatsapp.com/send/?phone=79260534553"><BsWhatsapp /></a></li>
            <li className="footer__link-item"><a href="tg://resolve?domain=faxweb_w"><FaTelegramPlane /></a></li>
          </ul>
        </div>
      </div>
    </footer> 
  )
}

export default Footer