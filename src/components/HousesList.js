import React, { useRef, useState, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';
import RegularButton from './buttons/RegularButton';
import ModelsSlider from './sliders/ModelsSlider';
import HouseMainImgSlider from './sliders/HouseMainImgSlider';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import getHouses from '../utils/getHouses';
import { SwiperSlide } from 'swiper/react';
import getPublicPath from '../utils/getPublicPath';
import numberWithSpace from '../utils/numberWithSpace';

const style = {
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& > * + * ': {
      marginLeft: '20px',
    },
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};
const useStyles = makeStyles((theme) => ({
  Block: {
    position: 'relative',
    display: 'flex',
    paddingLeft: '10%',
    backgroundColor: theme.palette.primary.fon,
    overflow: 'hidden',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      padding: '0 10%',
    },
  },
  button: {
    marginTop: '-10px',
    zIndex: '2',
    transition: '0.5s',
    [theme.breakpoints.down('md')]: {
      right: '0',
      opacity: '1',
    },
  },
  houseListBlock: {
    width: '10vw',
    borderRight: '1px solid',
    flexShrink: '0',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      borderRight: 'none',
      padding: '20px 10px',
      marginTop: 'auto',
      marginBottom: 'auto',
    },
  },
  houseList: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    padding: '0',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  houseListItem: {
    width: '100%',
    height: '9vw',
    minHeight: '135px',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex !important',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    border: 'none',
    background: 'none',
    outline: 'none',
    '& *': {
      outline: 'none',
    },
    [theme.breakpoints.down('md')]: {
      transform: 'scale(0.9)',
      width: '100%',
    },
    '@media (min-width:600px) and (max-width: 1000px)': {
      minHeight: '160px',
      transform: 'scale(1.2)',
    },
  },
  houseListItemActive: {
    [theme.breakpoints.down('md')]: {
      transform: 'scale(0.9)',
    },
    '@media (min-width:600px) and (max-width: 1000px)': {
      transform: 'scale(1)',
    },
  },
  houseListNumber: {
    position: 'absolute',
    zIndex: '0',
    top: '-20%',
    fontWeight: '600',
    fontSize: (param) => (param.breakpoints.xl ? '72px' : '64px'),
    margin: 'auto',
    color: '#E0E0E0',
    transition: '1s',
    '@media (min-width:1920px)': {
      fontSize: '5vw !important',
    },
  },
  houseListActiveNumber: {
    top: '0%',
    color: '#FFFFFF',
    transition: '1s',
    [theme.breakpoints.down('md')]: {
      opacity: '0',
    },
  },
  houseListImg: {
    position: 'absolute',
    top: '5%',
    zIndex: '2',
    width: '100%',
    transition: '0.5s',
    transform: 'scale(1)',
    [theme.breakpoints.down('md')]: {
      transition: '0.5s',
      maxWidth: '170px',
    },
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      transition: '0.5s',
      maxWidth: '150px',
      top: '20%',
      transform: 'scale(1.2)',
    },
  },
  houseListImgActive: {
    top: '0%',
    transform: 'scale(1.4)',
  },
  houseListName: {
    position: 'relative',
    top: '-0.7vw',
    marginBottom: '20px',
    zIndex: '2',
    '@media (min-width:1920px)': {
      marginBottom: '0.7vw',
      fontSize: '1vw',
    },
    [theme.breakpoints.down('md')]: {
      top: '0',
      marginBottom: '10px',
    },
    '@media (min-width:600px) and (max-width: 1000px)': {
      marginBottom: '20px',
    },
  },
  houseDesc: {
    display: 'flex',
    width: '42%',
    height: '100%',
    // maxWidth:'600px',
    minWidth: '490px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginTop: '20px',
      padding: '4% 10%',
      height: 'auto',
    },
    '@media (min-width:1921px)': {
      maxWidth: '30.7vw',
    },
  },
  houseDescContent: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    margin: '60px 0',
    width: '100%',
    padding: '0 60px',
    '& > * + * ': {
      marginTop: '20px',
    },
    '& h1': {
      color: '#4F4F4F',
    },
    '& p': {
      color: '#4F4F4F',
    },
    '& h5': {
      color: '#4F4F4F',
    },
    justifyContent: 'flex-end',
    '@media (max-width:1441px)': {
      padding: '0 40px',
    },
    '@media (min-width:1441px)': {
      '& > * + * ': {
        marginTop: '40px',
      },
    },
    '@media (min-width:1921px)': {
      padding: '0 4.2vw',
      '& > * + * ': {
        marginTop: '2.1vw',
      },
      margin: '3.1vw 0',
    },
    [theme.breakpoints.down('md')]: {
      '&:first-of-type': {
        marginTop: '50px',
      },
      '& > * + * ': {
        marginTop: '16px',
      },
      padding: '0',
      order: '2',
      margin: '0 0 50px 0',
    },
  },
  houseDescImgBox: {
    position: 'relative',
    width: '100%',
    height: '28vh',
    margin: 'auto 0',
    '& picture img': {
      objectFit: 'contain !important',
    },
    [theme.breakpoints.down('md')]: {
      height: '50vw',
    },
  },
  houseDescImg: {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  houseDescTitleBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  houseDescTitleBoxMobile: {
    position: 'absolute',
    justifyContent: 'space-around',
    bottom: '0',
    zIndex: '1',
    [theme.breakpoints.down('md')]: {
      padding: '20px 40px',
    },
  },
  houseDescTitle: {
    textTransform: 'uppercase',
    fontSize: '48px',
    lineHeight: '1.2',
    '@media (min-width:1920px)': {
      fontSize: '3.3vw',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '44px',
    },
  },
  houseDescIconBox: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100px',
      objectFit: 'contain',
      height: '85px',
    },
  },
  mainPlan: {
    width: '40px',
    height: '40px',
    '@media (min-width:1920px)': {
      width: '2.8vw',
      height: '2.8vw',
    },
    [theme.breakpoints.down('md')]: {
      objectFit: 'contain',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  houseDescText: {
    // display: '-webkit-box',
    // lineClamp: '4',
    // boxOrient: 'vertical',
    // overflow: 'hidden',
    // textOverflow: 'ellipsis',
    // paddingBottom:'20px',
    '@media (min-width:1921px)': {
      paddingBottom: '0',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  houseDescSpecBox: {
    ...style.flex,
    '& > * + * ': {
      marginLeft: '0',
    },
    flexDirection: 'column',
    alignItems: 'flex-start',
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      flexDirection: 'column',
      alignItems: 'normal',
    },
  },
  houseDescSpec: { ...style.flexColumn, width: '100%', height: '100%' },
  houseDescSpecOne: {
    ...style.flex,
    alignItems: 'flex-end',
    '& p': { textTransform: 'none', whiteSpace: 'nowrap' },
    '& p:last-child': {
      whiteSpace: 'nowrap',
    },
  },
  textTransform: 'none',
  '& p': {
    minWidth: '50px',
    lineHeight: '1.6',
  },
  houseDescSpecNumberBox: {
    display: 'flex',
    width: '152px',
    '@media (min-width:1921px)': {
      width: '8vw',
    },
    [theme.breakpoints.down('md')]: {
      width: 'auto',
    },
  },

  houseDescMore: { ...style.flex },
  houseDescPrice: style.flexColumn,
  houseSpecPrice: {
    fontSize: '26px',
    fontWeight: '700',
    '@media (min-width:1920px)': {
      fontSize: '1.3vw',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
    },
  },
  Link: {
    textDecoration: 'none',
  },

  houseImg: {
    position: 'relative',
    width: '50vw',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '60vh',
      minHeight: '600px',
    },
  },
  mainImg: {
    width: '100%',
    objectFit: 'cover',
    objectPosition: '50% 80%',
    height: '100vh',
    '& img': {
      objectPosition: '50% 80%',
    },
    [theme.breakpoints.down('md')]: {
      padding: '0',
      height: '60vh',
      minHeight: '600px',
    },
  },
}));

const HousesList = ({ data, lang }) => {
  const dataHouses = useMemo(() => getHouses(data,lang), [data,lang]);

  const breakpoints = useBreakpoint();
  const [house, setHouse] = useState(0);
  // console.log(dataHouses)
  const [activeSlide, setActiveSlide] = useState(0);
  const [animation] = useState(true);
  const param = { breakpoints };
  const classes = useStyles(param);

  const handleItemclick = (index) => {
    setHouse((state) => index);
    myRef.current.swiper.slideTo(index + 1);
    setActiveSlide(index);
  };

  const myRef = useRef(null);
  const houseSliderRef = useRef(null);
  const listItem = dataHouses.map((item, index) => {
    return (
      <SwiperSlide key={item.id}>
        <div
          role='link'
          tabIndex='0'
          className={
            activeSlide === index
              ? `${classes.houseListItem} ${classes.houseListItemActive}`
              : classes.houseListItem
          }
          onClick={() => handleItemclick(index)}
          onKeyDown={() => handleItemclick(index)}
        >
          <Typography
            className={
              activeSlide === index
                ? `${classes.houseListNumber} ${classes.houseListActiveNumber}`
                : classes.houseListNumber
            }
          >{`${item.letter?item.letter:item.code[6]}`}</Typography>
          {!breakpoints.md ? (
            !(activeSlide === index) ? (
              <>
                <CSSTransition
                  key={item.id}
                  in={true}
                  appear={true}
                  timeout={500}
                  classNames='houseMove'
                >
                  {item.icon ? (
                    <img
                      className={classes.houseListImg}
                      src={getPublicPath(data, `${item.icon}`)}
                      alt='house'
                    />
                  ) : null}
                </CSSTransition>
                <Typography
                  variant='subtitle1'
                  className={classes.houseListName}
                >
                  {item.code}
                </Typography>
              </>
            ) : null
          ) : (
            <>
              {item.icon ? (
                <CSSTransition
                  key={item.id}
                  in={activeSlide === index}
                  appear={true}
                  timeout={500}
                  classNames='houseMoveMobile'
                >
                  <img
                    className={
                      activeSlide === index
                        ? `${classes.houseListImg} ${classes.houseListImgActive}`
                        : classes.houseListImg
                    }
                    src={getPublicPath(data, `${item.icon}`)}
                    alt='house'
                  />
                </CSSTransition>
              ) : null}
              {activeSlide === index ? (
                <Box className={classes.button}>
                  <Link
                    className={classes.Link}
                    to={`model${dataHouses[house]['URL']}`}
                    aria-label={`model ${item['URL']}`}
                  >
                    <RegularButton variant='outlined' lowerCase='true'>
                      {lang === 'EN' ? 'More' : 'Подробнее'}
                    </RegularButton>
                  </Link>
                </Box>
              ) : null}

              {!(activeSlide === index) ? (
                <Typography
                  variant='subtitle1'
                  className={classes.houseListName}
                >
                  {item.code}
                </Typography>
              ) : null}
            </>
          )}
        </div>
      </SwiperSlide>
    );
  });

  const listMainImages = dataHouses.map((item, index) => {
    return item.baner ? (
      <SwiperSlide key={index}>
        <img
          className={classes.mainImg}
          src={getPublicPath(data, `${item.baner}`)}
          alt='house'
        />
      </SwiperSlide>
    ) : null;
  });

  return (
    <Box components='main' className={classes.Block}>
      {breakpoints.md ? (
        <>
          {dataHouses.map((item, index) => {
            return (
              <Box className={classes.houseDescContent} key={index}>
                <Box className={classes.houseDescImgBox}>
                  {item.icon ? (
                    <img
                      className={classes.houseDescImg}
                      src={getPublicPath(data, `${item.icon}`)}
                      alt='house'
                    />
                  ) : null}
                </Box>
                <Box className={classes.houseDescTitleBox}>
                  <Typography
                    variant='h1'
                    color='textSecondary'
                    className={classes.houseDescTitle}
                  >
                    {item.code}
                  </Typography>
                </Box>

                <Typography variant='body1' className={classes.houseDescText}>
                  {item.desc}
                </Typography>

                <Box className={classes.houseDescSpecBox}>
                  <Box className={classes.houseDescSpec}>
                    <Box className={classes.houseDescSpecOne}>
                      <Typography
                        variant='body1'
                        className={classes.houseDescSpecName}
                      >
                        {lang === 'EN' ? 'Total Area:' : 'Общая площадь:'}
                      </Typography>
                      <Box className={classes.houseDescSpecNumberBox}>
                        <Typography
                          variant='h6'
                          component='p'
                          className={classes.houseSpecValue}
                        >
                          {item.countArea(item.modules, 'square')} м&#178;
                        </Typography>
                      </Box>
                    </Box>
                    <Box className={classes.houseDescSpecOne}>
                      <Typography
                        variant='body1'
                        className={classes.houseDescSpecName}
                      >
                        {lang === 'EN'
                          ? 'Effective Area:'
                          : 'Эффективная площадь:'}
                      </Typography>
                      <Box className={classes.houseDescSpecNumberBox}>
                        <Typography
                          variant='h6'
                          component='p'
                          className={classes.houseSpecValue}
                        >
                          {item.countArea(item.modules, 'square_effective')}{' '}
                          м&#178;
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box className={classes.houseDescSpec}>
                    <Box className={classes.houseDescSpecOne}>
                      <Typography
                        variant='body1'
                        className={classes.houseDescSpecName}
                      >
                        {lang === 'EN'
                          ? 'Number of floors:'
                          : 'Количество этажей:'}
                      </Typography>
                      <Box className={classes.houseDescSpecNumberBox}>
                        <Typography
                          variant='h6'
                          component='p'
                          className={classes.houseSpecValue}
                        >
                          {item.floors ?? 1}
                        </Typography>
                      </Box>
                    </Box>
                    {item.stages_number ? (
                      <Box className={classes.houseDescSpecOne}>
                        <Typography
                          variant='body1'
                          className={classes.houseDescSpecName}
                        >
                           {lang === 'EN' ? 'Grow stage:': 'Стадии роста:' }
                        </Typography>
                        <Box className={classes.houseDescSpecNumberBox}>
                          <Typography
                            variant='h6'
                            component='p'
                            className={classes.houseSpecValue}
                          >
                            {item.stages_number}
                          </Typography>
                        </Box>
                      </Box>
                    ) : null}
                  </Box>
                </Box>

                <Box className={classes.houseDescMore}>
                  <Box className={classes.houseDescPrice}>
                    <Typography variant='h5' className={classes.houseSpecPrice}>
                      {item.countArea(item.modules, 'price')
                        ? `
                    $${numberWithSpace(
                      Math.round(+item.countArea(item.modules, 'price'))
                    )}`
                        : null}
                    </Typography>
                  </Box>
                  <Link className={classes.Link} to={`model${item.URL}`}>
                    <RegularButton variant='outlined' lowerCase='true'>
                      {lang === 'EN' ? 'More' : 'Подробнее'}
                    </RegularButton>
                  </Link>
                </Box>
              </Box>
            );
          })}
        </>
      ) : (
        <>
          <Box components='section' className={classes.houseListBlock}>
            <ModelsSlider houseRef={houseSliderRef} listItem={listItem} />
          </Box>
          <Box components='section' className={classes.houseDesc}>
            <Box className={classes.houseDescContent}>
              <TransitionGroup className={classes.houseDescImgBox}>
                <CSSTransition
                  in={animation}
                  key={activeSlide}
                  appear={true}
                  timeout={2000}
                  classNames='fadeHouse'
                >
                  {dataHouses[house].icon ? (
                    <img
                      className={classes.houseDescImg}
                      src={getPublicPath(data, `${dataHouses[house].icon}`)}
                      alt='house'
                    />
                  ) : null}
                </CSSTransition>
              </TransitionGroup>
              <Box className={classes.houseDescTitleBox}>
                <Typography
                  variant='h1'
                  color='textSecondary'
                  className={classes.houseDescTitle}
                >
                  {dataHouses[house].code}
                </Typography>
              </Box>

              <Typography variant='body1' className={classes.houseDescText}>
                {dataHouses[house].desc}
              </Typography>

              <Box className={classes.houseDescSpecBox}>
                <Box className={classes.houseDescSpec}>
                  <Box className={classes.houseDescSpecOne}>
                    <Typography
                      variant='body1'
                      className={classes.houseDescSpecName}
                    >
                      {/* {houses[house].totalAreaText} */}
                      {lang === 'EN' ? 'Total Area:' : 'Общая площадь:'}
                    </Typography>
                    <Box className={classes.houseDescSpecNumberBox}>
                      <Typography
                        variant='h6'
                        component='p'
                        className={classes.houseSpecValue}
                      >
                        {dataHouses[house].countArea(
                          dataHouses[house].modules,
                          'square'
                        )}{' '}
                        м&#178;
                        {/* {houses[house].totalArea} */}
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={classes.houseDescSpecOne}>
                    <Typography
                      variant='body1'
                      className={classes.houseDescSpecName}
                    >
                      {/* {houses[house].effectiveAreaText} */}
                      {lang === 'EN'
                          ? 'Effective Area:'
                          : 'Эффективная площадь:'}
                    </Typography>
                    <Box className={classes.houseDescSpecNumberBox}>
                      <Typography
                        variant='h6'
                        component='p'
                        className={classes.houseSpecValue}
                      >
                        {/* {houses[house].effectiveArea} */}
                        {dataHouses[house].countArea(
                          dataHouses[house].modules,
                          'square_effective'
                        )}{' '}
                        м&#178;
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box className={classes.houseDescSpec}>
                  <Box className={classes.houseDescSpecOne}>
                    <Typography
                      variant='body1'
                      className={classes.houseDescSpecName}
                    >
                      {lang === 'EN'
                          ? 'Number of floors:'
                          : 'Количество этажей:'}
                    </Typography>
                    <Box className={classes.houseDescSpecNumberBox}>
                      <Typography
                        variant='h6'
                        component='p'
                        className={classes.houseSpecValue}
                      >
                        {dataHouses[house].floors ?? 1}
                      </Typography>
                    </Box>
                  </Box>

                  <Box className={classes.houseDescSpecOne}>
                    <Typography
                      variant='body1'
                      className={classes.houseDescSpecName}
                    >
                       {lang === 'EN' ? 'Grow stage:': 'Стадии роста:' }
                    </Typography>
                    <Box className={classes.houseDescSpecNumberBox}>
                      <Typography
                        variant='h6'
                        component='p'
                        className={classes.houseSpecValue}
                      >
                        {dataHouses[house]['modules']?.length}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box className={classes.houseDescMore}>
                <Box className={classes.houseDescPrice}>
                  <Typography variant='h5' className={classes.houseSpecPrice}>
                    {dataHouses[house].countArea(
                      dataHouses[house].modules,
                      'price'
                    )
                      ? `
                    $${numberWithSpace(
                      Math.round(
                        +dataHouses[house].countArea(
                          dataHouses[house].modules,
                          'price'
                        )
                      )
                    )}`
                      : null}
                  </Typography>
                </Box>
                <Link
                  className={classes.Link}
                  to={`model${dataHouses[house]['URL']}`}
                >
                  <RegularButton variant='outlined' lowerCase='true'>
                    {lang === 'EN' ? 'More' : 'Подробнее'}
                  </RegularButton>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box components='section' className={classes.houseImg}>
            <HouseMainImgSlider myRef={myRef} listItem={listMainImages} />
          </Box>
        </>
      )}
    </Box>
  );
};
export default HousesList;
