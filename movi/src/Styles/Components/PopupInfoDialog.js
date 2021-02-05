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
      width: '25em',
      height: '15em',
      position: 'absolute',
      background: '#1c1c1c', 
      top: '50%',
      left: '50%',
      margin: 0,
      zIndex: 10,
      transform: 'translate(-50%, -50%)',
      border: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '10px'
    },
    
    title: {
      fontSize: 'calc(20px + 4vmin)',
      fontWeight: '600',
      marginBottom: '20px'
    },

    description: {
      fontSize: 'calc(10px + 1vmin)',
      margin: '5px',
      marginTop: 0,
      textAlign: 'center'
    }
  }
  ));
