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
    set_selected_genres(prev => [...prev, genre]);
    set_genres(genres.filter((g) => g.id !== genre.id));
    set_page(1)
  }

  function handle_remove (genre) {
    set_selected_genres(
      selected_genres.filter((selected) => selected.id !== genre.id)
    );
    set_genres(prev => [...prev, genre]);
    set_page(1);
  }












  return (
    <div style={{paddingTop: '2%'}}>

      { loading ? 
        <LinearProgress /> :
        selected_genres.map(each => {
          return <Chip 
                    style={{margin: 2}} 
                    label={each.name} 
                    clickable 
                    color='primary'
                    size='small'
                    key={each.id}
                    onDelete ={() => handle_remove(each)} />
        })
      }
      
      { loading ? 
        <LinearProgress /> :
        genres.map(each => {
          return <Chip 
                    style={{margin: 2}} 
                    label={each.name} 
                    clickable 
                    size='small'
                    key={each.id}
                    onClick={() => handle_add(each)}/>
        })
      }
    </div>
  )
}