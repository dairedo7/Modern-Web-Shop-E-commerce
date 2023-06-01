import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  cart: {
    paddingBottom: '2rem',
  },
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '10px',
    },
    [theme.breakpoints.up('600')]: {
      marginBottom: '0',
    },
    [theme.breakpoints.up('600')]: {
      marginRight: '20px',
    },
  },
  cartTotal: {
    textAlign: 'center',
    [theme.breakpoints.up('600')]: {
      textAlign: 'left',
    },
  },
  buttons: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('600')]: {
      display: 'flex',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10%',
    gap: '2rem',
    [theme.breakpoints.up('600')]: {
      flexDirection: 'row',
    },
    width: '100%',
    justifyContent: 'space-between',
  },
  items: {
    marginBottom: '20px',
  },
}));
