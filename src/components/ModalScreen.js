import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: 'radial-gradient(#E2E2E2,rgba(232, 232, 232, 0.12))',
    backdropFilter: 'blur(10px)',
    boxShadow: theme.shadows[5],
    width: '60vw',
    height: '40vw',
    '& img': {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
    },
    [theme.breakpoints.down('md')]: {
      width: '90%',
      height: '54%',
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
}));

const ModalScreen = ({
  image,
  openModal,
  setOpenModal,
  setOpenPopup,
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
        <div className={classes.paper} onClick={handleClose}>
          <img src={image} alt='image' />
        </div>
    </Modal>
  );
};
export default ModalScreen;
