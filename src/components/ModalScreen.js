import React, { useEffect,useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { SwiperSlide } from 'swiper/react';
import getPublicPath from '../utils/getPublicPath';
import HouseFotosSlider from './sliders/HouseFotosSlider';
import Cross from '../components/svg/Cross';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '3%',
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
    '& img': {
      objectFit: 'cover',
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
  data,
  arr,
  // sliderRef,
}) => {
  const slidRef = useRef(null);
  const param = { image };
  const classes = useStyles(param);
  const handleClose = () => {
    setOpenModal(false);
    setOpenPopup(false);
  };

  const gallery = arr?.map((item, index) => {
    return (
      <SwiperSlide className={classes.mainImgItem} key={index}>
        <img
          className={classes.mainImgSlider}
          src={getPublicPath(data, item.image)}
          alt='img'
          data-path={getPublicPath(data, item.image)}
        />
      </SwiperSlide>
    );
  });
  console.log(slidRef);
  useEffect(() => {
  });

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
        <Box className={classes.crossBox} onClick={handleClose}>
          <Cross color='#d1d1d1' width='2.5vw' height='2.5vw' />
        </Box>
        {/* {arr ? ( */}
          <HouseFotosSlider
            houseRef={slidRef}
            listItem={gallery}
            navigation={true}
          />
        {/* ) : null} */}
      </div>
    </Modal>
  );
};
export default ModalScreen;
