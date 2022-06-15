import './contacts.scss'
import { LinksList } from './LinksList'

const Contacts = () => {
  return (
    <section className='contacts' id="contacts">
      <div className="container">
        <div className="contacts__inner">
          <div className="contacts__subtitle global-subtitle">Как со мной можно связаться</div>
          <div className="contacts__title global-title">Мои контакты</div>
          <div className="contacts__content">
            <ul className="contacts__links" data-aos="zoom-in-up" data-aos-duration="1000">
              {LinksList.map(({ srcImg, title, text, link }, index) => {
                return(
                  <li className="contacts__links__item" key={index}>
                    <div className="contacts__links__item-img">{srcImg}</div>
                    <div className="contacts__links__item-content">
                      <h1 className="contacts__links__item-title">{title}</h1>
                      <a className="contacts__links__item-text" href={link} target="_blank" rel="noreferrer">{text}</a>
                    </div>
                    <a className="contacts__links__item-btn" href={link} target="_blank" rel="noreferrer">Отправить сообщение</a>
                  </li>
                )
              })}
            </ul>
            <form action="#" className="contacts__form" data-aos="zoom-in-up" data-aos-duration="1000">
              <input className='contacts__form-item input' type="text" name='name' placeholder='Имя *' required/>
              <input className='contacts__form-item input' type="text" name='email' placeholder='Адрес электронной почты *' required/>
              <input className='contacts__form-item input' type="phone" name='phone' placeholder='Телефон (необязательно)' required/>
              <textarea className='contacts__form-item input' rows='7' name='message' placeholder='Сообщение *' required/>
              <button className="contacts__form-btn" type='submit'>Отправить сообщение</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts