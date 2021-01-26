import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: '5px',
    padding: '25px',
    overflow: 'hidden'
  },
  scrollBox: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  img: {
    cursor: 'pointer',
    maxHeight: '240px',
    marginRight: '8px',
    '&:hover': {
      transform: 'scale(1.2)'
    },
  },
  text: {
    marginLeft: '30px',
    textAlign: 'left'
  }
}));
