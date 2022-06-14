export const ReviewItem = ({ img, name, date, text, index }) => {
  return (
    <li className="reviews__item" key={index}>
      <img className="reviews__item-img" src={img} alt="FaxWeb faxweb" ></img>
      <div className="reviews__item-name">{name}</div>
      <div className="reviews__item-date">{date}</div>
      <div className="reviews__item-text">{text}</div>
    </li>
  )
}
