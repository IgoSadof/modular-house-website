import React, { useMemo, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import HousesGroup from './HousesGroup';
import getData from '../utils/getData';
import FullScreenHouseSlider from './sliders/FullScreenHouseSlider';
import ContentBlock from './ContentBlock';
import getPublicPath from '../utils/getPublicPath';
import splitText from '../utils/splitText';
import ModalScreen from '../components/ModalScreen';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import location from '../assets/images/icons/location.svg';
import validateText from '../utils/validateText';
import playButton from '../assets/images/icons/playButton.svg';
import { Fragment } from 'react';
import Instagram from './svg/icons/Instagram';
import Phone from './svg/icons/Phone';

const useStyles = makeStyles((theme) => ({
  BlockFullscreen: {
    position: 'relative',
    // marginBottom: '120px',
    '@media (min-width:1921px)': {
      // marginBottom: '8.3vw',
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '0',
    },
    '& h1': {
      '@media (min-width:1280px) and (max-width:1564px)': {
        width: '34vw',
      },
    },
  },
  herobox: {
    '& .sliderWrapper + div > div:first-child': {
      '@media (min-width:1280px)': {
        position: 'absolute',
        top: 'calc(-100vh + 80px + 54px + 50px)',
        bottom: '0',
        right: '0',
        textAlign: 'right',
        paddingRight: '10vw',
        paddingTop: '0!important',
        margin: '0!important',
        height: '1px',
        '& h1': {
          textAlign: 'right',
          position: 'absolute',
          top: '100%',
          right: '10vw',
          float: 'right',
          fontSize: '2.6vw',
          width: '27vw',
        },
      },
      '@media (min-width:1921px)': {
        top: 'calc(-100vh + 3.5vw + 4.2vw + 2.6vw)',
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
  descBlock: {
    width: '100%',
    padding: '0 10%',
    marginTop: '80px',
    pointerEvents: 'none',
    [theme.breakpoints.down('md')]: {
      marginTop: '30px',
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
    [theme.breakpoints.down('md')]: {
      marginBottom: '20px',
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
    width: '100%',
    [theme.breakpoints.down('md')]: {
      marginTop: '0',
    },
    '& h4': {
      marginBottom: '1em',
      fontWeight: '600',
      color: '#454545',
    },
  },
  subtitleBox: {
    width: '100%',
    marginTop: '30px',
    '& p': {
      fontSize: '14px',
    },
    '@media (min-width:1921px)': {
      width: '100%',
      '& p': {
        fontSize: '0.72vw',
      },
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
      marginTop: '0',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '42px',
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
      marginTop: '40px',
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
        marginTop: '0.72vw',
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

  imgBox: {
    width: '100%',
    objectFit: 'cover',
    height: '520px',
    '@media (min-width:1921px)': {
      height: '24vw',
    },
  },
  sliderBox: {
    height: '520px',
    width: '100%',
    '@media (min-width:1921px)': {
      height: '24vw',
    },
    '& .swiper-slide': {
      cursor: 'pointer',
    },
    '& img': {
      pointerEvents: 'visible',
    },
  },
  mapBox: {
    width: '100%',
    height: '560px',
    marginTop: '100px',
    borderTop: '1px solid #bdbdbd',
    borderBottom: '1px solid #bdbdbd',
    backgroundPosition: '40% 0%!important',
    '&>div': {
      marginTop: '0',
      height: '100%',
      position: 'relative',
      [theme.breakpoints.down('md')]: {
        backgroundImage: 'none',
        // top: 'calc(50vw - 150vh)',
      },
    },
    '&>div>div': {
      paddingTop: '60px',
      position: 'relative',
      '@media (min-width:1921px)': {
        paddingTop: '3.1vw',
      },
    },
    '&>div>div>div': {
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column',
      },
    },
    '&>div:before': {
      /*content: `''`,
      position: 'absolute',
      width: '31vw',
      height: '100%',
      background: '#E6E6E6',
      opacity: '0.6',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },*/
    },
    '@media (min-width:1921px)': {
      height: '29vw',
      marginTop: '4.2vw',
    },
    // marginTop: 'calc(-50vw + 150vh)',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      marginTop: '20px',
      marginBottom: '0',
      order: '1',
      backgroundPosition: '50%!important',
      borderTop: 'none',
      borderBottom: 'none',
      // height:'100vw',
    },
  },
  mapTextBox: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& > * + * ': {
      marginTop: '20px',
    },
  },
  mapImg: {
    height: '40vh',
    margin: '0 -10vw',
    marginTop: '40px',
    objectFit: 'cover',
    objectPosition: '64%',
    borderTop: '1px solid #bdbdbd',
    borderBottom: '1px solid #bdbdbd',
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
    '& > *': {
      [theme.breakpoints.down('md')]: {
        /*display: 'none',*/
      },
    },
    '& > div': {
      [theme.breakpoints.down('md')]: {
        /*display: 'none',*/
      },
    },
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
    width: '250px',
    fontSize: '14px',
    '@media (min-width:1921px)': {
      marginTop: '1.04vw',
      width: '14vw',
      fontSize: '0.72vw',
    },
  },
  instaName: {
    marginLeft: '16px',
    fontWeight: '700',
    textTransform: 'uppercase',
    '@media (min-width:1921px)': {
      marginLeft: '0.8vw',
    },
  },

  videoBox: {
    marginTop: '0',
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
    transform: 'translate(-50%,-50%)',
    '@media (min-width:1921px)': {
      width: '4.7vw',
      height: '4.7vw',
    },
  },
  playButtonActive: {
    transform: 'translate(-50%,-50%)',
    '& img': {
      animation: 'play 0.3s ease-in-out',
      opacity: '0',
    },
    pointerEvents: 'none',
  },
  instaBox2: {
    marginBottom: '60px',
    marginTop: 'auto',
    '@media (min-width:1280px)': {
      // display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: '0',
      '& > div > *': {
        // display: 'block!important',
      },
      '& > div > div': {
        // display: 'block!important',
      },
      '& svg': {
        margin: '4px 0',
      },
    },
  },
  housesBox: {
    width: '100%',
    '&>div>div': {
      marginTop: '15px',
      '@media (min-width:1921px)': {
        marginTop: '1vw',
      },
    },
  },
  formSection: {
    '& > section > div': {},
  },
  houeseGroupsConteiner: {
    //width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginLeft: '-25px',
    marginRight: '-25px',
    //gridTemplateColumns: '1fr 1fr',
    //columnGap: 'max(50px,0.2vw)',
    [theme.breakpoints.down('md')]: {
      //gridTemplateColumns: '1fr',
      //rowGap: 'max(50px,0.2vw)',
      flexDirection: 'column',
      marginLeft: '-2vw',
      marginRight: '-2vw',
      '&>div': {
        paddingLeft: '2vw',
        paddingRight: '2vw',
      },
    },
    '&>div': {
      paddingLeft: '25px',
      paddingRight: '25px',
    },
    '&>div>div': {
      [theme.breakpoints.down('md')]: {
        padding:'0 10%',
      },
      '@media (max-width:450px)': {
        padding:'0 5%',
      },
    },
    '&>div>div>h2+img': {
      '@media (max-width:960px)': {
        maxWidth: '120%',
        marginLeft: '-10%',
        marginRight: '-10%',
        width: '120%',
      },
    },
  },
  contactConteiner: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '6vh',
  },
  contactText: {
    fontWeight: '600',
    marginLeft: '1.5vh',
    color: '#4f4f4f',
  },
}));

const Watch = ({ data, lang }) => {
  const breakpoints = useBreakpoint();
  const [openModal, setOpenModal] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const classes = useStyles();
  let pageDataObj = useMemo(
    () => ({
      EN: getData(data.allMysqlArendaEn.nodes),
      RU: getData(data.allMysqlArenda.nodes),
    }),
    [data]
  );
  const pageData = lang === 'EN' ? pageDataObj['EN'] : pageDataObj['RU'];
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
  const ancorLink = useRef(null);

  return (
    <Box components='main' className={classes.BlockFullscreen}>
      <Box className={classes.herobox}>
        <FullScreenHouseSlider
          title={pageData.arenda_title}
          arr={pageData.arenda_gallery.filter((item) => item.published)}
          data={data}
          middleIcon={true}
          pagination={true}
          enabled={false}
          oneButton={true}
          ancorLink={ancorLink}
          lang={lang}
        ></FullScreenHouseSlider>
      </Box>

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
                lang={lang}
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
              lang={lang}
            ></FullScreenHouseSlider>
          </Box>
        }
      ></ContentBlock>

      <ContentBlock
        onlyLine={true}
        mobileFullScreen={true}
        leftColumnContent={
          <Box className={classes.houeseGroupsConteiner}>
            {pageData?.arenda_houses_group?.map((group) => {
              return (
                <Box ref={ancorLink} key={group.MIGX_id}>
                  <HousesGroup
                    lang={lang}
                    data={data}
                    groupName={group?.houses_group_name}
                    groupImage={group?.houses_group_image}
                    houses={group?.houses_group_list.filter(
                      (house) => house.published
                    )}
                    calendar={pageData.arenda_houses}
                  ></HousesGroup>
                </Box>
              );
            })}
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

            <Box className={classes.contactConteiner}>
              <Phone />
              <Typography
                className={classes.contactText}
                variant='h4'
                component='p'
              >
                +375 33 914 79 48
              </Typography>
            </Box>
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
        style={
          breakpoints.md
            ? null
            : {
                background: `no-repeat url(${getPublicPath(
                  data,
                  pageData.arenda_map
                )})`,
                backgroundSize: `cover`,
              }
        }
      >
        <ContentBlock
          component='div'
          title={pageData.arenda_map_title}
          leftColumnContent={
            <>
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

                <Box component='div' className={classes.instaBox2}>
                  <Box className={classes.instaBox}>
                    <Typography variant='body1' className={classes.instaText}>
                      {lang === 'EN'
                        ? 'More about our location on Instagram:'
                        : 'Больше про нашу локацию в сети Instagram:'}
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
                        <Typography
                          variant='body1'
                          className={classes.instaName}
                        >
                          {pageData.arenda_insta_title}
                        </Typography>
                      </a>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {breakpoints.md ? (
                <img
                  className={classes.mapImg}
                  src={getPublicPath(data, pageData.arenda_map)}
                  alt='map'
                />
              ) : null}
            </>
          }
          rightColumnContent={breakpoints.md ? null : <></>}
        ></ContentBlock>
      </Box>

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
