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
import Instagram from './svg/icons/Instagram';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import playButton from '../assets/images/icons/playButton.svg';

const useStyles = makeStyles((theme) => ({
  BlockFullscreen: {
    position: 'relative',
    // marginBottom: '120px',
    '@media (min-width:1921px)': {
      // marginBottom: '8.3vw',
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
      //marginTop: '4.2vw',
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
  h2_gap: {
    marginBottom: '40px',
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
    width: '100%',
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
  calendarDesc: {
    width: '100%',
    marginBottom: '10px',
  },
  calendarFormBox: {
    width: '100%',
    marginTop: '90px',
    display: 'flex',
    '& > * + * ': {
      marginLeft: '100px',
    },
    '@media (min-width:1921px)': {
      marginTop: '4.7vw',
      '& > * + * ': {
        marginLeft: '5.2vw',
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
      // padding: '0 10%',
    },
  },
  imgBox: {
    width: '100%',
    objectFit: 'cover',
    height: '460px',
    '@media (min-width:1921px)': {
      height: '24vw',
    },
  },
  sliderBox: {
    height: '460px',
    '@media (min-width:1921px)': {
      height: '24vw',
    },
    '& .swiper-slide':{
      cursor:'pointer',
    },
  },
  mapBox: {
    width: '100%',
    height: '560px',
    marginTop: '100px',
    marginBottom: '100px',
    borderTop: '1px solid #bdbdbd',
    borderBottom: '1px solid #bdbdbd',
    '&>div': {
      marginTop: '0',
      height:'100%',
      position:'relative',
     
    },
    '&>div>div':{
      paddingTop: '60px',
      position:'relative',
      '@media (min-width:1921px)': {
        paddingTop: '3.1vw',
      },
    },
    '&>div:before':{
      content: `''`,
      position:'absolute',
      width:'31vw',
      height:'100%',
      background: '#d1d1d1',
      opacity: '0.6',
      [theme.breakpoints.down('md')]: {
        width:'100%',
      },
    },
    '@media (min-width:1921px)': {
      height: '29vw',
      //marginTop: '4.2vw',
    },
    [theme.breakpoints.down('md')]: {
      order: '1',
    },
  },
  mapTextBox: {
    display: 'flex',
    flexDirection: 'column',
    '':{

    },
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
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    // height:'100%',
    '& > * + * ': {
      marginTop: '1em',
    },
  },
  instaBox: {
    marginTop: 'auto',
  },
  instaContent: {
    display: 'flex',
    marginTop: '20px',
    '& a': {
      display: 'flex',
      textDecoration: 'none',
    },
    '& svg': {
      margin: 'auto',
    },
    '@media (min-width:1921px)': {
      marginTop: '1.04vw',
    },
  },
  instaText: {
    marginTop: '20px',
    '@media (min-width:1921px)': {
      marginTop: '1.04vw',
    },
  },
  instaName: {
    marginLeft: '16px',
    textTransform: 'uppercase',

    '@media (min-width:1921px)': {
      marginLeft: '0.8vw',
    },
  },
  optionsBox: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 50%)',
    width: '100%',
    gridColumnGap: '40px',
    gridRowGap: '20px',
    '@media (min-width:1921px)': {
      gridColumnGap: '2.1vw',
      gridRowGap: '1.1vw',
    },
    '@media (max-width:600px)': {
      padding: ' 0 10%',
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
  formBox: {
    width: '100%',
  },
  optionsName: {
    textTransform: 'none',
    whiteSpace: 'nowrap',
  },
  videoBox: {
    marginTop: '100px',
    position: 'relative',
    cursor: 'pointer',
    '@media (min-width:1921px)': {
      marginLeft: '4.2vw',
    },
    '@media (max-width:600px)': {
      marginTop: '40px',
    },
  },
  playButton: {
    width: '90px',
    height: '90px',
    cursor: 'pointer',
    position: 'absolute',
    zIndex: '2',
    top: '50%',
    left: '50%',
    transform:'translate(-50%,-50%)',
    '@media (min-width:1921px)': {
      width: '4.7vw',
      height: '4.7vw',
    },
  },
  playButtonActive: {
    transform:'translate(-50%,-50%)',
    '& img':{
      animation: 'play 0.3s ease-in-out',
      opacity: '0',
    },
    pointerEvents: 'none',
  },
}));

const Watch = ({ data }) => {
  const breakpoints = useBreakpoint();
  const [openModal, setOpenModal] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [selectDate, setSelectDate] = useState(null);
  const [unavailableDates, setUnavailableDates] = useState(null);
  const classes = useStyles();
  const pageData = useMemo(() => getData(data.allMysqlArenda.nodes), [data]);
  const getUnavailableDates = (dates) => {
    setUnavailableDates(dates);
  };
  const handleSliderClick = (e) => {
    if (e.target.dataset.number && !breakpoints.s) {
      setActiveImg(e.target.key);
      setOpenModal(true);
      setOpenPopup(true);
      setActiveImg(+e.target.dataset.number);
    }
  };
  const video = useRef(null);
  const handlePlayButton = () => {
    if (!isPlay) {
      video.current.play();
      setIsPlay(true);
    } else {
      video.current.pause();
      setIsPlay(false);
    }
  };
  console.log(pageData);

  return (
    <Box components='main' className={classes.BlockFullscreen}>
      <FullScreenHouseSlider
        title={pageData.arenda_title}
        arr={pageData.arenda_gallery.filter((item) => item.published)}
        data={data}
        middleIcon={true}
        pagination={true}
        enabled={false}
        oneButton={true}
      ></FullScreenHouseSlider>

      <Box className={classes.descBlock}>
        <Box className={classes.descBlockContent}>
          <Typography className={classes.h2_gap} variant='h2'>
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
              openModal={openModal}
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
              setOpenModal={setOpenModal}
            >
              <FullScreenHouseSlider
                arr={pageData.arenda_mini_gallery.filter(
                  (item) => item.published
                )}
                data={data}
                fullHeight={false}
                autoSlidesPerView={false}
                mobileButtons={false}
                sidesDesctopButtons={true}
                initialSlide={activeImg}
              ></FullScreenHouseSlider>
            </ModalScreen>
            <FullScreenHouseSlider
              arr={pageData.arenda_mini_gallery.filter(
                (item) => item.published
              )}
              data={data}
              fullHeight={false}
              autoSlidesPerView={true}
              mobileButtons={true}
              sidesDesctopButtons={true}
              outSideButtons={true}
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
                {pageData.arenda_icon_text
                  ? splitText(pageData.arenda_icon_text)
                  : null}
              </Box>
            ) : null}

            {pageData?.arenda_price ? (
              <Box className={classes.priceBlock}>
                <Typography className={classes.priceBlockText} variant='body1'>
                  <strong>{pageData.arenda_price}</strong> / 1 сутки
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
          title={pageData.arenda_map_title}
          leftColumnContent={
            <Box className={classes.mapTextBox}>
              {pageData.arenda_map_text1 ? (
                <Box className={classes.textBlock}>
                  <Typography variant='body1'>
                    {pageData.arenda_map_text1}
                  </Typography>
                </Box>
              ) : null}

              {pageData.arenda_map_coordinate ? (
                <Box className={classes.mapCoordinates}>
                  <Typography variant='body1'>
                    <img
                      className={classes.locationIcon}
                      src={location}
                      alt='location'
                    ></img>{' '}
                    {pageData.arenda_map_coordinate}
                  </Typography>
                </Box>
              ) : null}

              {pageData.arenda_map_text2 ? (
                <Box className={classes.textBlock}>
                  <Typography variant='body1'>
                    {pageData.arenda_map_text2}
                  </Typography>
                </Box>
              ) : null}
            </Box>
          }
          rightColumnContent={<></>}
        ></ContentBlock>
      </Box>

      <ContentBlock
        mb={pageData.arenda_video?'0px':breakpoints.xxl?'4.2vw':'100px'}
        title={pageData.arenda_invite_title}
        leftColumnContent={
          <>
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
            <Box className={classes.instaBox}>
              <Typography variant='body1' className={classes.instaText}>
                Больше про нашу локацию в сети Instagram:
              </Typography>
              <Box className={classes.instaContent}>
                <a
                  target='_blank'
                  rel='noreferrer'
                  className={classes.Link}
                  href={pageData.arenda_insta_url}
                >
                  <Instagram
                    width={breakpoints.xxl ? '0.9vw' : 14}
                    height={breakpoints.xxl ? '0.9vw' : 14}
                  />
                  <Typography variant='body1' className={classes.instaName}>
                    {pageData.arenda_insta_title}
                  </Typography>
                </a>
              </Box>
            </Box>
          </>
        }
        rightColumnContent={
          <Box className={classes.calendarFormBox}>
            <Box className={classes.calendar}>
              <Typography
                className={classes.calendarDesc}
                component='p'
                variant='body1'
              >
                Выберите планируемые и свободные для проживания даты
              </Typography>
              <MyCalendar
                unavailableDates={unavailableDates}
                getUnavailableDates={getUnavailableDates}
                setSelectDate={(date) => {
                  setSelectDate(date);
                }}
              />
            </Box>
            <Box className={classes.formBox}>
              <Box className={classes.optionsBox}>
                {pageData.arenda_options
                  .filter((item) => item.published)
                  .map((item, index) =>
                    item.active ? (
                      <FormControlLabel
                        key={index}
                        value={1}
                        control={<Checkbox color='primary' />}
                        labelPlacement='end'
                        label={
                          <Typography
                            className={classes.optionsName}
                            component='p'
                            variant='subtitle1'
                          >
                            + {item.name}
                          </Typography>
                        }
                      />
                    ) : (
                      <FormControlLabel
                        key={index}
                        disabled
                        value={1}
                        control={<Checkbox color='primary' />}
                        labelPlacement='end'
                        label={
                          <Typography
                            className={classes.optionsName}
                            component='p'
                            variant='subtitle1'
                          >
                            + {item.name}
                          </Typography>
                        }
                      />
                    )
                  )}
              </Box>
              <Form
                endpoint={'https://formspree.io/f/mzbokwwy'}
                extraFormFields={{ date: selectDate }}
                arenda={true}
                sendDate={selectDate}
                buttonText='бронировать'
              />
            </Box>
          </Box>
        }
      ></ContentBlock>
      {pageData.arenda_video ? (
        <Box
          component='section'
          className={classes.videoBox}
          onClick={handlePlayButton}
        >
          <Box
            className={
              isPlay
                ? `${classes.playButton} ${classes.playButtonActive}`
                : classes.playButton
            }
            onClick={handlePlayButton}
          >
            <img src={playButton} alt='play button' />
          </Box>
          <video width='100%' height='100%' muted loop ref={video}>
            <source
              src={getPublicPath(data, pageData.arenda_video)}
              type='video/mp4'
            />
          </video>
        </Box>
      ) : null}
    </Box>
  );
};
export default Watch;
