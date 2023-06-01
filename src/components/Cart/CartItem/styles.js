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
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));
