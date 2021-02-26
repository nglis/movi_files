import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    overflow: 'hidden'
  },
  scrollBox: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'flex-start',
    paddingLeft: '30px'
  },
  img: {
    cursor: 'pointer',
    maxHeight: '240px',
    height: '8em',
    paddingTop: '25px',
    paddingBottom: '25px',
    marginRight: '8px',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  },
  text: {
    marginLeft: '30px',
    textAlign: 'left'
  }
}));
