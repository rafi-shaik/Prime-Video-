// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MovieSlider = props => {
  const {details} = props

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  const thumbnailSlides = item => (
    <MovieItem key={item.id} movieDetails={item} />
  )

  return (
    <>
      <Slider {...settings}>
        {details.map(each => thumbnailSlides(each))}
      </Slider>
    </>
  )
}

export default MovieSlider
