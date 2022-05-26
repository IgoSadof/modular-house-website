import React, { useMemo, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Form from './Form';
import MyCalendar from './MyCalendar';
import getData from '../utils/getData';
import FullScreenHouseSlider from './sliders/FullScreenHouseSlider';
import ContentBlock from './ContentBlock';
import getPublicPath from '../utils/getPublicPath';
import splitText from '../utils/splitText';
import ModalScreen from '../components/ModalScreen';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import location from '../assets/images/icons/location.svg';
import validateText from '../utils/validateText';

const useStyles = makeStyles((theme) => ({
  BlockFullscreen: {
    position: 'relative',
    marginBottom: '120px',
    '@media (min-width:1921px)': {
      marginBottom: '8.3vw',
    },
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
  descBlock: {
    width: '100%',
    padding: '0 10%',
    marginTop: '80px',
    pointerEvents: 'none',
    [theme.breakpoints.down('md')]: {
      marginTop: '40px',
      marginLeft: '0',
    },
    '@media (min-width:1921px)': {
      marginTop: '4.2vw',
    },
  },
  descBlockContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingLeft: '100px',
    '& > * + * ': {
      marginTop: '1em',
    },
    [theme.breakpoints.down('md')]: {
      paddingLeft: '0',
    },
    '@media (min-width:1921px)': {
      paddingLeft: '5.2vw',
      '& > * + * ': {
        marginTop: '32px',
      },
    },
  },
  descTitle: {
    fontSize: '38px',
    fontWeight: '600',
    textTransform: 'none',
    '@media (min-width:1921px)': {
      fontSize: '2vw',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
    },
  },

  inviteTitleBox: {
    marginTop: '30px',
    width: '70%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  subtitleBox: {
    width: '200px',
    marginTop: '30px',
    '@media (min-width:1921px)': {
      width: '10.4vw',
    },
  },
  priceBlock: {
    display: 'flex',
    marginTop: '40px',
    '@media (min-width:1921px)': {
      marginTop: '2.1vw',
    },
  },
  priceBlockText: {
    fontSize: '48px',
    '@media (min-width:1921px)': {
      marginTop: '2.5vw',
    },
  },
  iconsBlockConteiner: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(3, 33%)',
    rowGap: '30px',
    columnGap: '20px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)',
    },
  },
  iconBox: {
    display: 'flex',
    flexDirection: 'column',
    '& p>span': {
      fontSize: '14px',
      display: 'block',
      '@media (min-width:1921px)': {
        fontSize: '0.73vw',
      },
    },
    '& > * + * ': {
      marginTop: '10px',
      lineHeight: '1.3',
      fontWeight: '600',
      '& > span': {
        fontWeight: '400',
      },
    },
    '@media (min-width:1921px)': {
      '& > * + * ': {
        marginTop: '0.83vw',
      },
    },
  },
  icon: {
    width: '60px',
    height: '60px',
    '@media (min-width:1921px)': {
      width: '3.2vw',
      height: '3.2vw',
    },
  },
  calendar: {
    width: '14vw',
    minWidth: '240px',
    marginTop: 'auto',
    marginBottom: 'auto',
    flexShrink: '0',
    '@media (min-width:1921px)': {
      width: '18vw',
      '& abbr': {
        fontSize: '1.02vw',
      },
      height: 'fit-content',
    },
    [theme.breakpoints.down('md')]: {
      order: '1',
    },
  },
  calendarFormBox: {
    width: '100%',
    marginTop: '90px',
    display: 'flex',
    '& > * + * ': {
      marginLeft: '150px',
    },
    '@media (min-width:1921px)': {
      marginTop: '4.7vw',
      '& > * + * ': {
        marginLeft: '7.8vw',
      },
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
      alignItems: 'center',
      marginTop: '40px',
      '& > * + * ': {
        marginLeft: '0',
        marginTop: '60px',
      },
      padding: '0 10%',
    },
  },
  imgBox: {
    width: '100%',
    objectFit: 'cover',
    height: '360px',
    '@media (min-width:1921px)': {
      height: '18vw',
    },
  },
  sliderBox: {
    height: '360px',
    '@media (min-width:1921px)': {
      height: '18vw',
    },
  },
  mapBox: {
    width: '100%',
    height: '560px',
    marginTop: '80px',
    borderTop: '1px solid #bdbdbd',
    borderBottom: '1px solid #bdbdbd',
    '&>div': {
      marginTop: '0',
      paddingTop: '60px',
      '@media (min-width:1921px)': {
        paddingTop: '3.1vw',
      },
    },
    '@media (min-width:1921px)': {
      height: '29vw',
      marginTop: '4.2vw',
    },
    [theme.breakpoints.down('md')]: {
      order: '1',
    },
  },
  mapTextBox: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + * ': {
      marginTop: '20px',
    },
  },
  mapCoordinates: {
    '& p': {
      fontWeight: '700',
    },
  },
  locationIcon: {
    width: '16px',
    marginBottom: '-1px',
    marginRight: '4px',
    '@media (min-width:1921px)': {
      width: '0.7vw',
    },
  },
}));

const Watch = ({ data }) => {
  const breakpoints = useBreakpoint();
  const [openModal, setOpenModal] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [activeImg, setActiveImg] = useState(true);
  const [selectDate, setSelectDate] = useState(null);
  const [unavailableDates, setUnavailableDates] = useState(null);
  const classes = useStyles();
  const pageData = useMemo(() => getData(data.allMysqlArenda.nodes), [data]);
  const getUnavailableDates = (dates) => {
    setUnavailableDates(dates);
  };
  const handleSliderClick = (e) => {
    if (e.target.dataset.path && !breakpoints.s) {
      setActiveImg(e.target.key);
      setOpenModal(true);
      setOpenPopup(true);
    }
  };
  const greteRef = useRef(null);

  return (
    <Box components='main' className={classes.BlockFullscreen}>
      <FullScreenHouseSlider
        title={pageData.arenda_title}
        arr={pageData.arenda_gallery.filter((item) => item.published)}
        data={data}
        middleIcon={true}
        pagination={true}
      ></FullScreenHouseSlider>

      <Box className={classes.descBlock}>
        <Box className={classes.descBlockContent}>
          <Typography variant='h2'>
            {pageData.arenda_subtitle}
          </Typography>
          {pageData.arenda_text ? splitText(pageData.arenda_text) : null}
        </Box>
      </Box>

      <ContentBlock
        mobileFullScreen={true}
        leftColumnContent={
          <Box className={classes.sliderBox} onClick={handleSliderClick}>
            <ModalScreen
              image={activeImg}
              openModal={openModal}
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
              setOpenModal={setOpenModal}
              arr={pageData.arenda_mini_gallery.filter(
                (item) => item.published
              )}
              data={data}
              sliderRef={greteRef}
            ></ModalScreen>
            <FullScreenHouseSlider
              arr={pageData.arenda_mini_gallery.filter(
                (item) => item.published
              )}
              data={data}
              fullHeight={false}
              autoSlidesPerView={true}
              mobileButtons={true}
              sidesDesctopButtons={true}
            ></FullScreenHouseSlider>
          </Box>
        }
      ></ContentBlock>

      <ContentBlock
        title={pageData.arenda_icon_title}
        leftColumnContent={
          <>
            {pageData.arenda_icon_text ? (
              <Box className={classes.textBlock}>
                <Typography
                  variant='body1'
                  dangerouslySetInnerHTML={{
                    __html: `${validateText(pageData.arenda_icon_text)}`,
                  }}
                ></Typography>
              </Box>
            ) : null}

            {pageData?.arenda_price ? (
              <Box className={classes.priceBlock}>
                <Typography className={classes.priceBlockText} variant='body1'>
                  <strong>{pageData.arenda_price}</strong> / 1 день
                </Typography>
              </Box>
            ) : null}
          </>
        }
        rightColumnContent={
          <Box className={classes.iconsBlockConteiner}>
            {pageData.arenda_icon_gallery.map((item, index) => (
              <Box className={classes.iconBox} key={index}>
                <img
                  className={classes.icon}
                  src={getPublicPath(data, item.image)}
                  alt='icon'
                />
                <Typography
                  variant='body1'
                  dangerouslySetInnerHTML={{
                    __html: `${validateText(item.name)}`,
                  }}
                ></Typography>
              </Box>
            ))}
          </Box>
        }
      ></ContentBlock>

      <Box
        component='section'
        className={classes.mapBox}
        style={{
          background: `no-repeat url(${getPublicPath(
            data,
            pageData.arenda_map
          )})`,
          backgroundSize: `cover`,
        }}
      >
        <ContentBlock
          component='div'
          title={pageData.arenda_icon_title}
          leftColumnContent={
            <Box className={classes.mapTextBox}>
              <Box className={classes.textBlock}>
                <Typography variant='body1'>
                  Наша локация расположена всего в паре километров от города
                  Браслав. Тем не менее, это тихое и уединенное место, без
                  большого количества туристов, но с удобной равноудаленностью
                  от всех основных озер.
                </Typography>
              </Box>

              <Box className={classes.mapCoordinates}>
                <Typography variant='body1'>
                  <img
                    className={classes.locationIcon}
                    src={location}
                    alt='location'
                  ></img>{' '}
                  55.650538, 26.995473
                </Typography>
              </Box>

              <Box className={classes.textBlock}>
                <Typography variant='body1'>
                  Для разнообразия Вашего отдыха, мы подготовили карту с
                  персональными рекомендациями уникальных для Беларуси мест в
                  окрестностях Браславского района.
                </Typography>
              </Box>
            </Box>
          }
          rightColumnContent={<></>}
        ></ContentBlock>
      </Box>

      <ContentBlock
        title={pageData.arenda_invite_title}
        leftColumnContent={
          <Box className={classes.textBlock}>
            <Box className={classes.inviteTitleBox}>
              <Typography variant='h4'>
                <span>{pageData.arenda_invite_subtitle}</span>
              </Typography>
            </Box>

            <Box className={classes.subtitleBox}>
              <Typography variant='body1'>
                {pageData.arenda_invite_text}
              </Typography>
            </Box>
          </Box>
        }
        rightColumnContent={
          <Box className={classes.calendarFormBox}>
            <Box className={classes.calendar}>
              <MyCalendar
                unavailableDates={unavailableDates}
                getUnavailableDates={getUnavailableDates}
                setSelectDate={(date) => {
                  setSelectDate(date);
                }}
              />
            </Box>
            <Form
              endpoint={'https://formspree.io/f/mzbokwwy'}
              extraFormFields={{ date: selectDate }}
              arenda={true}
              sendDate={selectDate}
            />
          </Box>
        }
      ></ContentBlock>
    </Box>
  );
};
export default Watch;
