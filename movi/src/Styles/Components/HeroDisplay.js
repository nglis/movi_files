import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root : {
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'black',
        marginBottom: '30px',
        paddingTop: '30px',
        paddingBottom: '30px'
    },

    details: {
        margin: '30px',
        textAlign: 'left'
    },

    title: {
        fontSize: 'calc(20px + 4vmin)',
        fontWeight: '600',
        marginBottom: '20px'
    },

    other: {
        fontSize: 'calc(10px + 1vmin)',
        marginBottom: '20px'
    },

    episode: {
        fontSize: 'calc(14px + 1vmin)',
        fontWeight:' 500',
        marginBottom: '5px'
    },

    description: {
        fontSize: 'calc(12px + 1vmin)',
        fontWeight: '100',
        marginBottom: '20px'
    },

    additionalInfo: {
      fontSize: 'calc(12px + 1vmin)',
      fontWeight: '100',
      marginBottom: '30px'
    },

    heroActions: {
        display: 'flex'
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

    previewContainer: {
      margin: '30px',
      width: '100%',
      height: '15em'
    },
    
    previewVideo: {
      border: 'none',
      width: '100%',
      height: '100%',
      borderRadius: '10px'
    }
  }
  ));
