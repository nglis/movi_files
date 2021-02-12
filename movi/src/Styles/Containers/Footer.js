import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    footerShare: {
      color: 'silver',
      padding: '60px'
    },

    footer : {
      color: 'black',
      backgroundColor: 'silver',
      padding: '15px'
    },

    footerShareTextUpper: { 
      fontSize: '15px',
      fontWeight: '700'
    },

    footerShareTextLower: {
      fontSize: '11px',
      fontWeight: '700',
      marginTop: '5px'
    }
  })
);
