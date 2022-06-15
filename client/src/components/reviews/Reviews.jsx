import { ReviewList } from './ReviewList'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './reviews.scss'

const Reviews = () => {
  const settings = {
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    easing: 'ease',
    speed: 750,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 300000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <section className='reviews' id="reviews">
      <div className="container">
        <div className="reviews__inner">
          <h1 className="reviews-subtitle global-subtitle">Отзывы о моих последних работах</h1>
          <h1 className="reviews-title global-title" >Отзывы</h1>
          <Slider {...settings} className="reviews__list">
            {ReviewList.map(({ img, name, date, text }, index) => {
              return(
                <li className="reviews__item" key={index}>
                  <img className="reviews__item-img" src={img} alt="FaxWeb faxweb" ></img>
                  <div className="reviews__item-name">{name}</div>
                  <div className="reviews__item-date">{date}</div>
                  <div className="reviews__item-text">{text}</div>
                </li>
              )
            })}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Reviews