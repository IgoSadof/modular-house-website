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
import houseplan from '../assets/images/icons/house_plan.svg';
// import houseplanpng from '../assets/images/icons/housepng.png';

const useStyles = makeStyles((theme) => ({
  BlockFullscreen: {
    position: 'relative',
    marginBottom: '120px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '40px',
    },
  },
  imageSlider: {
    position: 'relative',
    height: '100vh',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  descBlock:{
    width: '100%',
    padding: '0 10%',
    marginTop: '80px',
    [theme.breakpoints.down('md')]: {
      marginTop: '40px',
      marginLeft: '0',
    },
    '@media (min-width:1921px)': {
      marginTop: '4.2vw',
      gap: '1.7vw',
    },
  },
  descBlockContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingLeft: '100px',
    gap: '32px',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '0',
    },
    '@media (min-width:1921px)': {
      paddingLeft: '5.2vw',
      gap: '1.7vw',
    },
  },
  descTitle:{
    fontSize:'38px',
    fontWeight:'600',
    '@media (min-width:1921px)': {
      fontSize:'2vw',
    },
    [theme.breakpoints.down('md')]: {
      fontSize:'28px',
    },

  },

  inviteTitleBox: {
    marginTop: '30px',
    width:'70%',
    [theme.breakpoints.down('md')]: {
      width:'100%',
    },

  },
  subtitleBox: {
    width: '200px',
    marginTop: '30px',
    '@media (min-width:1921px)': {
      width: '10.4vw',
    },
  },
  iconsBlockConteiner:{
    display: 'grid',
    width:'100%',
    gridTemplateColumns: 'repeat(3, 33%)',
    rowGap: '28px',
    columnGap: '20px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)',
    },
  },
  iconBox:{
    display: 'flex',
    flexDirection:'column',
    gap:'16px',
  },
  icon:{
    width:'60px',
    height:'60px',
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
      padding: '0 10%',
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

      <Box className={classes.descBlock}>
        <Box className={classes.descBlockContent}>
          <Typography variant='h2' className={classes.descTitle}>
            Эстетика скандинавского минимализма на Браславских озерах
          </Typography>
          <Typography variant='body1'>
            Приглашаем гостей пожить/отдохнуть в наших арендных домиках формата
            Tiny house. Отбросить все лишнее и сконцентрироваться на главном -
            кроме знакомства с комфортом домиков разработаных нами по модульной
            технологии, насладиться красотой озер, заповедных лесов и простым но
            эстетическим образом жизни. Мы постарались собрать и передать нашим
            гостям ценности Браславского края и минималистичный образ жизни,
            который так любим. Наши домики расположены в национальном парке
            «Браславские озера», у векового хвойного леса с дикими животными, на
            берегу чистого озера, что очень дополняет эстетику нашей
            архитектуры. Мы понимаем, что основное время гости будут проводить
            вне дома, поэтому акцентировали внимание не на площади дома, а на
            впечатлениях и эмоциях, которые получат наши гости. Наша локация
            расположена всего в паре километров от города Браслав, тем не менее,
            это тихое и уединенное место, без большого количества туристов, но с
            удобной равноудаленностью от всех основных озер. Для разнообразия
            Вашего отдыха, мы подготовили карту с персональными рекомендациями
            уникальных для Беларуси мест в окрестностях Браславского района. А
            чтобы Вы могли в полной мере ощутить красоту этих мест, для наших
            гостей доступны велосипеды и лодки.
          </Typography>
        </Box>
      </Box>

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
        rightColumnContent={
          <Box className={classes.iconsBlockConteiner}>
            <Box className={classes.iconBox}>
              <img  className={classes.icon} src={houseplan}/>
              <Typography variant='body1'>Двуспальная кровать</Typography>
            </Box>
            <Box className={classes.iconBox}>
              <img  className={classes.icon} src={houseplan}/>
              <Typography variant='body1'>Двуспальная кровать</Typography>
            </Box>
            <Box className={classes.iconBox}>
              <img  className={classes.icon} src={houseplan}/>
              <Typography variant='body1'>Двуспальная кровать</Typography>
            </Box>
            <Box className={classes.iconBox}>
              <img  className={classes.icon} src={houseplan}/>
              <Typography variant='body1'>Двуспальная кровать</Typography>
            </Box>
            <Box className={classes.iconBox}>
              <img  className={classes.icon} src={houseplan}/>
              <Typography variant='body1'>Двуспальная кровать</Typography>
            </Box>

          </Box>
        }
      ></ContentBlock>

      <ContentBlock
        title={'Приглашаем'}
        leftColumnContent={
          <Box className={classes.textBlock}>
            <Box className={classes.inviteTitleBox}>
              <Typography variant='h4'>
                <span>
                  Живите сейчас, отдыхайте и
                  получайте вдохновение!
                </span>
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
    </Box>
  );
};
export default Watch;
