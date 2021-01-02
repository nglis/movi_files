import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: '30px',
    overflow: 'hidden',
  },
  scrollBox: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  imgDimensions: {
    height: '233px',
    width: '166px',
    marginRight: '8px'
  },
  text: {
    marginLeft: '30px',
    textAlign: 'left'
  }
}));
