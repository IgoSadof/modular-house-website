import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import StaticPanel from "./StaticPanel";
import Form from './Form';
import MyCalendar from './MyCalendar';
import HouseFotosSlider from './sliders/HouseFotosSlider';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import getHouses from '../utils/getHouses';
import getImg from '../utils/getImg';
import { GatsbyImage } from 'gatsby-plugin-image';
import { SwiperSlide } from 'swiper/react';
import TitleWithLine from '../components/TitleWithLine';
import FullScreenHouseSlider from './sliders/FullScreenHouseSlider';

const useStyles = makeStyles((theme) => ({
  BlockFullscreen: {
    position: 'relative',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#D1D1D1',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      '& $titleBox': {
        marginTop: '100px',
        right: '0',
        position: 'relative',
      },
    },
  },
  imageSlider: {
    position: 'relative',
    height: '100vh',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  excursion: {
    display: 'flex',
    justifyContent: 'space-between',
    // height: "50vh",
    padding: '6vh 10% 8vh 18%',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 10%',
      height: 'auto',
      gap: '30px',
    },
  },
  excursionText: {
    width: '90%',
    marginRight: 'auto',
  },

  excursionSend: {
    position: 'relative',
    width: '60%',
    display: 'flex',
    gap: '30%',

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      gap: '30px',
      order: '2',
    },
  },
  formBox: {
    marginLeft: 'auto',
    [theme.breakpoints.down('md')]: {
      marginLeft: '0',
    },
  },
  calendar: {
    width: '260px',
    height: '240px',
    marginTop: 'auto',
    marginBottom: 'auto',
    [theme.breakpoints.up('xl')]: {
      width: '18vw',
      height: 'fit-content',
    },
    [theme.breakpoints.down('md')]: {
      order: '1',
    },
  },
}));

const Watch = ({ data }) => {
  const breakpoints = useBreakpoint();
  const param = {};
  const classes = useStyles(param);
  const dataHouses = useMemo(() => getHouses(data), [data]);

  return (
    <Box components='main' className={classes.BlockFullscreen}>

      <FullScreenHouseSlider
        title={'ПРИГЛАШАЕМ'}
        arr={dataHouses[0].ext_gallery}
        data={data}
        mouseIcon={true}
        pagination={true}
      ></FullScreenHouseSlider>

      <Box components='section' className={classes.excursion}>
        {breakpoints.md ? (
          <TitleWithLine
            title={'Оставьте заявку и наш менеджер свяжеться с вами'}
          ></TitleWithLine>
        ) : null}
        <Box className={classes.excursionSend}>
          {breakpoints.md ? null : (
            <Typography variant='h5'>На экскурсию</Typography>
          )}
          <Box className={classes.formBox}>
            {!breakpoints.md ? (
              <Form
                title='Оставьте заявку и наш менеджер свяжеться с вами'
                buttonAbs={true}
              />
            ) : (
              <Form />
            )}
          </Box>
        </Box>

        <Box className={classes.calendar}>
          <MyCalendar />
        </Box>
      </Box>
    </Box>
  );
};
export default Watch;
