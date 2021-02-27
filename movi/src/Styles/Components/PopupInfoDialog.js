import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    dialogContainer: {
      position: 'fixed',
      top: '50%',
      left: '50%',
    },

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
      width: '20em',
      height: 'auto',
      position: 'absolute',
      background: '#1c1c1c', 
      top: '50%',
      left: '50%',
      margin: 0,
      paddingTop: '10px',
      paddingBottom: '10px',
      paddingRight: '30px',
      paddingLeft: '30px',
      zIndex: 10,
      transform: 'translate(-50%, -50%)',
      border: 'none',
      display: 'flex',
      borderRadius: '10px'
    },
    
    infoContainer: {
      display: 'flex',
      flexDirection: 'column'
    },

    title: {
      fontSize: 'calc(20px + 2vmin)',
      fontWeight: '600',
      textAlign: 'left'
    },

    other: {
      fontSize: 'calc(10px + 1vmin)',
      fontWeight: '300',
      marginTop: '20px',
      textAlign: 'left'
    },

    description: {
      fontSize: 'calc(10px + 1vmin)',
      fontWeight: '300',
      marginTop: '15px',
      marginRight: '15px',
      textAlign: 'left'
    },

    additionalInfo: {
      fontSize: 'calc(10px + 1vmin)',
      marginTop: '15px',
      marginBottom: '15px',
      textAlign: 'left'
    },

    buttons: {
      display: 'flex',
      margin: 'auto',
      marginBottom: '30px'
    },
    
    button: {
      cursor: 'pointer',
      border: 'none',
      outline: 'none',
      borderRadius: '4px',
      color: 'white',
      backgroundColor: 'red',
      fontWeight: '600',
      width: '120px',
      height: '40px',
      '&:hover': {
        opacity: '0.8'
      }
    },

    disabledButton: {
      border: 'solid',
      outline: 'none',
      borderRadius: '4px',
      borderWidth: 'thin',
      color: 'white',
      backgroundColor: 'inherit',
      fontWeight: '600',
      width: '120px',
      height: '40px',
      marginLeft: '16px'
    },

    flexRowCentered: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    playTextMargins: {
      marginLeft: '8px',
      marginRight: '8px'
    },

    img: {
      marginTop: '50px',
      marginLeft: '15px',
      width: '8em'
    },

    imdbContainer: {
      textAlign: 'left'
    },

    imdb: {
      height: '30px',
      width: 'auto',
      marginTop: '5px',
      marginLeft: '15px'
    }
  }
  ));
