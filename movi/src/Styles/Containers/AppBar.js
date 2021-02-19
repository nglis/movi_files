import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root : {
        backgroundColor: 'black',
        fontSize: '70px',
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
      fontSize: '60px'
    }
  })
);
