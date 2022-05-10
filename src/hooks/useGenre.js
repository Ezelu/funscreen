
const useGenres = (selected_genres) => {
  if(selected_genres.length < 1){
    return ""
  }

  const genre_ids = selected_genres.map(each => each.id);
  return genre_ids.reduce();
}