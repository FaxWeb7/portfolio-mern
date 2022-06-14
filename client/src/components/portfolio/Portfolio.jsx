import './portfolio.scss'
import PortfolioItem from './PortfolioItem'
import crypto from '../../assets/portfolio/crypto.jpg'

const Portfolio = () => {
  return (
    <section className='portfolio' id='portfolio'>
      <div className="container">
        <div className="portfolio__inner">
          <h3 className="portfolio__subtitle global-subtitle">Мои последние работы</h3>
          <h2 className="portfolio__title global-title">Портфолио</h2>
          <ul className="portfolio__list">
            <div className="portfolio__list-anim" data-aos="zoom-in-up" data-aos-duration="1000"><PortfolioItem src={crypto} title="Crypto currency dashboard & Financial Visualisation" gitLink="https://github.com/Artemka0-7/senatmed" webLink="https://senatmed.herokuapp.com/" /></div> 
            <div className="portfolio__list-anim" data-aos="zoom-in-up" data-aos-duration="1000"><PortfolioItem src={crypto} title="Crypto currency dashboard & Financial Visualisation" gitLink="https://github.com/Artemka0-7/senatmed" webLink="https://senatmed.herokuapp.com/" /></div> 
            <div className="portfolio__list-anim" data-aos="zoom-in-up" data-aos-duration="1000"><PortfolioItem src={crypto} title="Crypto currency dashboard & Financial Visualisation" gitLink="https://github.com/Artemka0-7/senatmed" webLink="https://senatmed.herokuapp.com/" /></div> 
            <div className="portfolio__list-anim" data-aos="zoom-in-up" data-aos-duration="1000"><PortfolioItem src={crypto} title="Crypto currency dashboard & Financial Visualisation" gitLink="https://github.com/Artemka0-7/senatmed" webLink="https://senatmed.herokuapp.com/" /></div> 
            <div className="portfolio__list-anim" data-aos="zoom-in-up" data-aos-duration="1000"><PortfolioItem src={crypto} title="Crypto currency dashboard & Financial Visualisation" gitLink="https://github.com/Artemka0-7/senatmed" webLink="https://senatmed.herokuapp.com/" /></div> 
            <div className="portfolio__list-anim" data-aos="zoom-in-up" data-aos-duration="1000"><PortfolioItem src={crypto} title="Crypto currency dashboard & Financial Visualisation" gitLink="https://github.com/Artemka0-7/senatmed" webLink="https://senatmed.herokuapp.com/" /></div> 
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Portfolio