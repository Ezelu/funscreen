// import * as React from 'react';
// import Box from '@mui/material/Box';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { makeStyles } from '@material-ui/core/styles';
// import { useTheme } from '@mui/material/styles';



// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// const useStyles = makeStyles(() => ({
//   root: {
//     width: '100%',
//     position: 'fixed',
//     bottom: 0,
//     left: 0
//   }
// }))



// export default function MainNav() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const theme = useTheme();
//   const colorMode = React.useContext(ColorModeContext);

//   return (
//     <Box sx={{
//         bgcolor: 'background.default',
//         color: 'text.primary',
//       }} className={classes.root}>

//       <BottomNavigation
//         showLabels
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//       >
//         <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
//         <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
//         <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
//       </BottomNavigation>
//     </Box>
//   );
// }




























import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot'
import MovieIcon from '@mui/icons-material/Movie'
import TvIcon from '@mui/icons-material/Tv'
import SearchIcon from '@mui/icons-material/Search'
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';







const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    // backgroundColor: '#2d313a',
    zIndex: 100,
  }
}))



export default function MainNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const navigate = useNavigate()


  React.useEffect(() => {
    switch(value){
      case 0:
        navigate("/");
        break;
      case 1:
        navigate('/movies');
        break;
      case 2:
        navigate('/series');
        break;
      case 3:
        navigate('/search');
        break;
    }
  }, [value])














  return (
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          background: '#2d313a'
        }}
        className={classes.root}
      >
        <BottomNavigationAction style={{color: 'white'}} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{color: 'white'}} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{color: 'white'}} label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction style={{color: 'white'}} label="Search" icon={<SearchIcon />} />

      </BottomNavigation>
  );
}