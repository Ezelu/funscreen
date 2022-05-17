import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css';
import axios from 'axios';
import { img_300, noPicture } from '../../config/config';




const handleDragStart = (e) => e.preventDefault();





const Carousel = ({media_type, id}) => {

  const [credits, set_credits] = React.useState();

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=e002f08f46e0049891b3812857957fab&language=en-US`
    );

    set_credits(data.cast)
  }

  const items = credits?.map(each => {
    console.log(each);
    return (
      <div className="carousel_item">
        <img
          src = {each.profile_path ? `${img_300}/${each.profile_path}` : noPicture}
          alt = {each.name}
          onDragStart={handleDragStart}
          className='carousel_img'
        />
        <p align="center" className="carousel_text"> <small>  {each?.name} </small>  </p>
        <span align='center' style={{color: 'grey'}}> <small> { each.character } </small></span>
    </div>
    )
  })

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 3,
    },
    1024: {
      items: 5,
    }
  }


  React.useEffect(() => {
    fetchCredits()
  }, [])



  return (
    <AliceCarousel 
      mouseTracking
      autoPlay
      disableButtonsControls
      disableDotsControls
      responsive = {responsive}
      infinite
      items={items}/>
  );
}


export default Carousel