import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    cursor: 'pointer',
    transition: '.3s ease-in-out 0s',

    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.8)',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  content: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '320px',
    flexGrow: 1,
  },
  cardActions: {
    display: 'flex',
    position: 'absolute',
    bottom: '0',
    right: '1rem',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));
