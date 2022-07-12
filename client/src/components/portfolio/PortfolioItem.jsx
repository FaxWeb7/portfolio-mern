const PortfolioItem = ({ src, title, gitLink, webLink }) => {
  return (
    <li className="portfolio__item" data-aos="zoom-in-up" data-aos-duration="1000">
      <img className="portfolio__item-img" src={src} alt="FaxWeb faxweb"></img>
      <div className="portfolio__item-title">{title}</div>
      <div className="portfolio__item-links" style={gitLink ? null : { marginLeft: 'auto', marginRight: 'auto' }}>
        {gitLink && (
          <a className="portfolio__item-link" href={gitLink} target="_blank" rel="noreferrer">GitHub</a>
        )}
        <a className={gitLink ? "portfolio__item-link" : "portfolio__item-link once"} href={webLink} target="_blank" rel="noreferrer">Посмотреть сайт</a>
      </div>
    </li>
  )
}

export default PortfolioItem; 