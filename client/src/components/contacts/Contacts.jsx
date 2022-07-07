import { LinksList } from './LinksList'
import { useForm } from 'react-hook-form'
import './contacts.scss'
import {SERVER_URL} from '../../constants'

const Contacts = () => {
  const { register, formState: { errors, isValid },  handleSubmit, reset } = useForm({mode: "onBlur"});

  const onSubmit = ({name, email, mess, phone}) => {
    var dataToSend = {message: `Имя: ${name}\nЭл.почта: ${email}\nТелефон: ${phone[4] ? phone : 'не указан'}\nСообщение: ${mess}`};
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    fetch(`${SERVER_URL}/api/sendmail`, {
      method: "POST",
      body: formBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
    })
    reset();
  }

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
            <form onSubmit={handleSubmit(onSubmit)} className="contacts__form" data-aos="zoom-in-up" data-aos-duration="1000">
              <input className='contacts__form-item input' type="text" placeholder='Имя *' 
                {...register('name', {
                  required: "Поле обязательно к заполнению!"
                  })}/>
              {errors?.name && <p className='form-err-text'>{errors?.name?.message}</p>}
              <input className='contacts__form-item input' type="text" placeholder='Адрес электронной почты *' 
                {...register('email', {
                  required: "Поле обязательно к заполнению!",
                  pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Электронный адрес введён некорректно'
                    } 
                  })}/>
              {errors?.email && <p className='form-err-text'>{errors?.email?.message}</p>}
              <input className='contacts__form-item input' type="phone" placeholder='Номер телефона (необязательно)' {...register('phone')}/>
              <textarea className='contacts__form-item input' rows='7' placeholder='Сообщение *' 
                {...register('mess', {
                  required: "Поле обязательно к заполнению!"
                  })}/>
              {errors?.mess && <p className='form-err-text'>{errors?.mess?.message}</p>}
              <input className="contacts__form-btn" type='submit' value='Отправить сообщение' disabled={!isValid}/>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts