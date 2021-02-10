import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    fullPageSpinnerContainer : {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
  })
);
