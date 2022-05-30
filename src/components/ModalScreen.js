import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Cross from '../components/svg/Cross';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '3% 10%',
  },
  paper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: 'radial-gradient(#E2E2E2,rgba(232, 232, 232, 0.12))',
    backdropFilter: 'blur(10px)',
    boxShadow: theme.shadows[5],
    width: '100%',
    height: '100%',
    padding:'3% 0',
    '& img': {
      objectFit: 'contain',
      width: '100%',
      height: '100%',
    },
  },
  buttonBox: {
    display: 'inline-block',
    marginLeft: 'auto',
  },
  buttonBoxLeft: {
    display: 'inline-block',
    marginRight: 'auto',
  },
  crossBox: {
    position: 'absolute',
    cursor: 'pointer',
    top: '3vw',
    right: '3vw',

    zIndex: '2',
  },
}));

const ModalScreen = ({
  image,
  openModal,
  setOpenModal,
  setOpenPopup,
  children,
}) => {
  const param = { image };
  const classes = useStyles(param);
  const handleClose = () => {
    setOpenModal(false);
    setOpenPopup(false);
  };

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      className={classes.modal}
      open={openModal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModal}>
      <div className={classes.paper}>
        <Box className={classes.crossBox} onClick={handleClose}>
          <Cross color='#d1d1d1' width='2.5vw' height='2.5vw' />
        </Box>
          {children}
      </div>
      </Fade>
    </Modal>
  );
};
export default ModalScreen;
