
import React from 'react';
import './SingleContent.css'
import { img_300, unavailable, img_500, unavailableLandscape } from '../../config/config'
import { Badge } from '@material-ui/core'
import ContentModal from '../ContentModal/ContentModal';





export default function SingleContent(props) {

  const {id, poster, title, date, media_type, vote_average} = props;

  console.log(id)
  return (
    <ContentModal media_type={media_type} id={id}>
        <Badge badgeContent={vote_average} 
        color={vote_average > 6 ? 'primary' : 'secondary' }/>
        <img src={ poster ? `${img_300}${poster}` : unavailable } alt={title} className='poster'/>
        <b className='title'> {title} </b>
        <span className='subtitle'>
        <span className='type'> {media_type === 'movie' ? 'Movie' : 'TV Series'} </span>
        <span className='date'> {date} </span>
      </span>
    </ContentModal>
  )
}
