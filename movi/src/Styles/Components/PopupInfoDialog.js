import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    background : {
      opacity: 0.5,
      background: '#000', 
      width: '100%',
      height: '100%', 
      zIndex: 5,
      top: 0,
      left: 0, 
      position: 'fixed'
    },
    container: {
      width: '200px',
      height: '200px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: '-100px',
      marginLeft: '-100px',
      zIndex: 10
    }
  }
  ));
