import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Form from './Form';
import MyCalendar from './MyCalendar';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import getHouses from '../utils/getHouses';
import getImg from '../utils/getImg';
import { GatsbyImage } from 'gatsby-plugin-image';
import { SwiperSlide } from 'swiper/react';
import TitleWithLine from '../components/TitleWithLine';
import FullScreenHouseSlider from './sliders/FullScreenHouseSlider';
import ContentBlock from './ContentBlock';

const useStyles = makeStyles((theme) => ({
  BlockFullscreen: {
    position: 'relative',
    marginBottom: '120px',
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
  titleBox: {
    marginTop: '30px',
  },
  subtitleBox: {
    width: '200px',
    marginTop: '30px',
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
  calendarFormBox: {
    marginTop: '90px',
    display: 'flex',
    gap: '150px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
      alignItems: 'center',
      marginTop: '40px',
      gap: '60px',
      padding:'0 10%',

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
      <ContentBlock
        title={'Tiny house'}
        leftColumnContent={
          <Box className={classes.textBlock}>
            <Typography variant='body1'>
              Tiny house - новый для Беларуси формат. Это крошечные домики,
              площадью всего 12-16 м.кв, скомпанованные таким образом, что могут
              вмещать в себя необходимый городским жителям уровень комфорта:
            </Typography>
          </Box>
        }
        // rightColumnContent={'some text'}
      ></ContentBlock>

      <ContentBlock
        title={'Приглашаем'}
        leftColumnContent={
          <Box className={classes.textBlock}>
            <Box className={classes.titleBox}>
              <Typography variant='h4'>
                <span>Живите сейчас, отдыхайте и<br/>получайте вдохновение!</span>
              </Typography>
            </Box>

            <Box className={classes.subtitleBox}>
              <Typography variant='body1'>
                Выберите свободные удобные для заселения даты и отправьте заявку
                нашим менеджерам
              </Typography>
            </Box>
          </Box>
        }
        rightColumnContent={
          <Box className={classes.calendarFormBox}>
            <Box className={classes.calendar}>
              <MyCalendar />
            </Box>
            <Form />
          </Box>
        }
      ></ContentBlock>

      {/* <Box components='section' className={classes.excursion}>
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
      </Box> */}
    </Box>
  );
};
export default Watch;
