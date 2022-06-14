const PortfolioItem = ({ src, title, gitLink, webLink }) => {
  return (
    <li className="portfolio__item" data-aos="zoom-in-up" data-aos-duration="1000">
      <img className="portfolio__item-img" src={src} alt="FaxWeb faxweb"></img>
      <div className="portfolio__item-title">{title}</div>
      <div className="portfolio__item-links">
        <a className="portfolio__item-link" href={gitLink} target="_blank" rel="noreferrer">GitHub</a>
        <a className="portfolio__item-link" href={webLink} target="_blank" rel="noreferrer">Посмотреть сайт</a>
      </div>
    </li>
  )
}

export default PortfolioItem; 