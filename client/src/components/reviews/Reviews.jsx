import './reviews.scss'
import { ReviewList } from './ReviewList'
import  {ReviewItem}  from './ReviewItem'

const Reviews = () => {
  return (
    <section className='reviews' id="reviews">
      <div className="container">
        <div className="reviews__inner">
          <h1 className="reviews-subtitle global-subtitle">Отзывы о моих работах</h1>
          <h1 className="reviews-title global-title">Отзывы</h1>
          <ul className="reviews__list">
            {ReviewList.map(({ img, name, date, text }, index) => {
              return(<ReviewItem img={img} name={name} date={date} text={text} index={index}/>)
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Reviews