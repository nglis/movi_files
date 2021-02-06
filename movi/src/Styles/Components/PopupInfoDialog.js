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
      borderRadius: '10px'
    },
    
    infoContainer: {
      display: 'flex',
      flexDirection: 'column'
    },

    title: {
      fontSize: 'calc(20px + 4vmin)',
      fontWeight: '600',
      marginTop: '10px',
      marginLeft: '30px',
      textAlign: 'left'
    },

    other: {
      fontSize: 'calc(10px + 1vmin)',
      fontWeight: '300',
      marginTop: '20px',
      marginLeft: '30px',
      textAlign: 'left'
    },

    description: {
      fontSize: 'calc(10px + 1vmin)',
      fontWeight: '300',
      marginTop: '15px',
      marginLeft: '30px',
      marginRight: '15px',
      textAlign: 'left'
    },

    additionalInfo: {
      marginTop: '15px',
      marginLeft: '30px',
      textAlign: 'left'
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
      margin: 'auto',
      marginTop: '30px',
      marginLeft: '15px',
      marginRight: '30px'
    }
  }
  ));
