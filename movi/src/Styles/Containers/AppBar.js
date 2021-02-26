import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root : {
        backgroundColor: 'black',
        fontSize: 'calc(30px + 5vmin)',
        fontWeight: '850',
        color: 'silver',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    title: {
      marginLeft: '30px'
    },

    navButtons: {
      marginRight: '30px',
      display: 'flex',
      alignItems: 'center',
      fontSize: 'calc(30px + 3vmin)'
    }
  })
);
