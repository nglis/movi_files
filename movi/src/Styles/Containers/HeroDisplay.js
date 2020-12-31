import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    details: {
        width: '100vw',
        margin: '30px',
        textAlign: 'left'
    },

    title: {
      fontSize: 'calc(20px + 4vmin)',
      fontWeightt: '600'
    },

    other: {
        fontSize: 'calc(10px + 1vmin)',
        marginLeft: '10px',
        marginBottom: '15px'
    },

    episode: {
        fontSize: 'calc(14px + 1vmin)',
        fontWeight:' 500',
        marginBottom: '5px'
    },

    description: {
        fontSize: 'calc(12px + 1vmin)',
        fontWeight: '100',
        maxWidth: '33vw'
    },

    heroActions: {
        display: 'flex'
    },

    button: {
      cursor: 'pointer',
      border: 'none',
      borderRadius: '4px',
      color: 'white',
      backgroundColor: 'red',
      fontWeight: '600',
      width: '120px',
      height: '40px',
      marginTop: '16px',
      '&:hover': {
        opacity: '0.8'
      }
    },

    disabledButton: {
      border: 'solid',
      borderRadius: '4px',
      borderWidth: 'thin',
      color: 'white',
      backgroundColor: 'inherit',
      fontWeight: '600',
      width: '120px',
      height: '40px',
      marginTop: '16px',
      marginLeft: '16px'
    },

    flexRow: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    playTextMargins: {
      marginLeft: '8px',
      marginRight: '8px'
    }

  }
  ));
