import { Chip, LinearProgress } from '@material-ui/core';
import axios from 'axios';
import React from 'react';

export default function Genres(props){


  const [loading, set_loading] = React.useState(false)
  const { type, selected_genres, genres, set_selected_genres, set_genres, set_page } = props;

  const fetchGenres = async () => {
    set_loading(true);

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=e002f08f46e0049891b3812857957fab&language=en-US`);

    set_loading(false);
    set_genres(data.genres)
  };



  React.useEffect(() => {
    fetchGenres();
    return () => {
      set_genres([])
    }
  }, [])


  function handle_add (genre) {
    set_selected_genres(prev => [...prev, genre])
  }











  return (
    <div style={{paddingTop: '2%'}}>
      { loading ? 
        <LinearProgress /> :
        genres.map(each => {
          return <Chip 
                    style={{margin: 2}} 
                    label={each.name} 
                    clickable 
                    size='small'
                    key={each.id} />
        })
      }
    </div>
  )
}