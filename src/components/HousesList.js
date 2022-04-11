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
import getHousesData from '../utils/getHousesData';
import { GatsbyImage } from 'gatsby-plugin-image';
import { SwiperSlide } from 'swiper/react';
import getImg from '../utils/getImg';
import numberWithSpace from '../utils/numberWithSpace';

const style = {
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '20px',
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
    backgroundColor: '#D1D1D1',
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
    // gap: "40px",
  },
  houseListItem: {
    width: '100%',
    height: '10vw',
    minHeight: '140px',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex !important',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    border: 'none',
    background: 'none',
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
    top: '-7%',
    fontSize: (param) => (param.breakpoints.xl ? '72px' : '64px'),
    margin: 'auto',
    color: '#E0E0E0',
    transition: '1s',
    '@media (min-width:1920px)': {
      fontSize: '5vw !important',
    },
  },
  houseListActiveNumber: {
    top: '15%',
    color: '#FFFFFF',
    transition: '1s',
    [theme.breakpoints.down('md')]: {
      opacity: '0',
    },
  },
  houseListImg: {
    position: 'absolute',
    top: '15%',
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
    // height: '100%',
    padding: '0 60px',
    gap: '40px',
    justifyContent: 'flex-end',
    '@media (max-width:1441px)': {
      padding: '0 40px',
    },
    '@media (min-width:1921px)': {
      padding: '0 4.2vw',
      gap: '2.1vw',
      margin: '3.1vw 0',
    },
    [theme.breakpoints.down('md')]: {
      '&:first-of-type':{
        marginTop:'50px',
      },
      gap: '16px',
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
    display: '-webkit-box',
    lineClamp: '4',
    boxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingBottom:'20px',
    '@media (min-width:1921px)': {
      paddingBottom:'0',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  houseDescSpecBox: {
    ...style.flex,
    gap: '0',
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
    alignItems: 'end',
    '& p': { textTransform: 'none' },
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
    height: '100vh',
    [theme.breakpoints.down('md')]: {
      padding: '0',
      height: '60vh',
      minHeight: '600px',
    },
  },
}));

const HousesList = ({ data }) => {
  const dataHouses = useMemo(() => getHousesData(data), [data]);

  const breakpoints = useBreakpoint();
  const [house, setHouse] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [animation] = useState(true);
  const param = { breakpoints };
  const classes = useStyles(param);

  const handleItemclick = (index) => {
    setHouse((state) => index);
    myRef.current.slickGoTo(index);
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
          >{`0${index + 1}`}</Typography>
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
                  {item['Иконка дома'] ? (
                    <GatsbyImage
                      className={classes.houseListImg}
                      image={getImg(data, `${item['Иконка дома']}`)}
                      alt='img'
                    ></GatsbyImage>
                  ) : null}
                </CSSTransition>
                <Typography
                  variant='subtitle1'
                  className={classes.houseListName}
                >
                  {item['Код']}
                </Typography>
              </>
            ) : null
          ) : (
            <>
              {item['Иконка дома'] ? (
                <CSSTransition
                  key={item.id}
                  in={activeSlide === index}
                  appear={true}
                  timeout={500}
                  classNames='houseMoveMobile'
                >
                  <GatsbyImage
                    className={
                      activeSlide === index
                        ? `${classes.houseListImg} ${classes.houseListImgActive}`
                        : classes.houseListImg
                    }
                    image={getImg(data, `${item['Иконка дома']}`)}
                    alt='img'
                  ></GatsbyImage>
                </CSSTransition>
              ) : null}
              {activeSlide === index ? (
                <Box className={classes.button}>
                  <Link
                    className={classes.Link}
                    to={`model${dataHouses[house]['URL'].toUpperCase()}`}
                    aria-label={`model ${item['URL']}`}
                  >
                    <RegularButton variant='outlined' lowerCase='true'>
                      Подробнее
                    </RegularButton>
                  </Link>
                </Box>
              ) : null}

              {!(activeSlide === index) ? (
                <Typography
                  variant='subtitle1'
                  className={classes.houseListName}
                >
                  {item['Код']}
                </Typography>
              ) : null}
            </>
          )}
        </div>
      </SwiperSlide>
    );
  });

  const listMainImages = dataHouses.map((item, index) => {
    return (
      <li className={classes.mainImg} key={index}>
        {item['Баннер'] ? (
          <GatsbyImage
            className={classes.mainImg}
            image={getImg(data, `${item['Баннер']}`)}
            alt='img'
          ></GatsbyImage>
        ) : null}
      </li>
    );
  });

  return (
    <Box components='main' className={classes.Block}>
      {breakpoints.md ? (null
        // <>
        //   {dataHouses.map((item, index) => {
        //     return (
        //       <Box className={classes.houseDescContent}>
        //         <Box className={classes.houseDescImgBox}>
        //           {item['Иконка дома'] ? (
        //             <GatsbyImage
        //               className={classes.houseDescImg}
        //               image={getImg(data, `${item['Иконка дома']}`)}
        //               alt='img'
        //             ></GatsbyImage>
        //           ) : null}
        //         </Box>
        //         <Box className={classes.houseDescTitleBox}>
        //           <Typography
        //             variant='h1'
        //             color='textSecondary'
        //             className={classes.houseDescTitle}
        //           >
        //             {item['Код']}
        //           </Typography>
        //         </Box>

        //         <Typography variant='body1' className={classes.houseDescText}>
        //           {item['Описание']}
        //         </Typography>

        //         <Box className={classes.houseDescSpecBox}>
        //           <Box className={classes.houseDescSpec}>
        //             <Box className={classes.houseDescSpecOne}>
        //               <Typography
        //                 variant='body1'
        //                 className={classes.houseDescSpecName}
        //               >
        //                 Общая площадь:
        //               </Typography>
        //               <Box className={classes.houseDescSpecNumberBox}>
        //                 <Typography
        //                   variant='h6'
        //                   component='p'
        //                   className={classes.houseSpecValue}
        //                 >
        //                   {item.countArea(item.modules, 'Площадь общая')}{' '}
        //                   м&#178;
        //                 </Typography>
        //               </Box>
        //             </Box>
        //             <Box className={classes.houseDescSpecOne}>
        //               <Typography
        //                 variant='body1'
        //                 className={classes.houseDescSpecName}
        //               >
        //                 Эффективная площадь:
        //               </Typography>
        //               <Box className={classes.houseDescSpecNumberBox}>
        //                 <Typography
        //                   variant='h6'
        //                   component='p'
        //                   className={classes.houseSpecValue}
        //                 >
        //                   {item.countArea(item.modules, 'Площадь полезная')}{' '}
        //                   м&#178;
        //                 </Typography>
        //               </Box>
        //             </Box>
        //           </Box>

        //           <Box className={classes.houseDescSpec}>
        //             <Box className={classes.houseDescSpecOne}>
        //               <Typography
        //                 variant='body1'
        //                 className={classes.houseDescSpecName}
        //               >
        //                 Количество этажей:
        //               </Typography>
        //               <Box className={classes.houseDescSpecNumberBox}>
        //                 <Typography
        //                   variant='h6'
        //                   component='p'
        //                   className={classes.houseSpecValue}
        //                 >
        //                   {item['Этажность'] ?? 1}
        //                 </Typography>
        //               </Box>
        //             </Box>

        //             <Box className={classes.houseDescSpecOne}>
        //               <Typography
        //                 variant='body1'
        //                 className={classes.houseDescSpecName}
        //               >
        //                 Cтадии роста:
        //               </Typography>
        //               <Box className={classes.houseDescSpecNumberBox}>
        //                 <Typography
        //                   variant='h6'
        //                   component='p'
        //                   className={classes.houseSpecValue}
        //                 >
        //                   {item['modules']?.length}
        //                 </Typography>
        //               </Box>
        //             </Box>
        //           </Box>
        //         </Box>

        //         <Box className={classes.houseDescMore}>
        //           <Box className={classes.houseDescPrice}>
        //             <Typography variant='h5' className={classes.houseSpecPrice}>
        //               {item.countArea(item.modules, 'Стоимость')
        //                 ? `
        //             $${numberWithSpace(
        //               item.countArea(item.modules, 'Стоимость')
        //             )}`
        //                 : null}
        //             </Typography>
        //           </Box>
        //           <Link
        //             className={classes.Link}
        //             to={`model${item['URL'].toUpperCase()}`}
        //           >
        //             <RegularButton variant='outlined' lowerCase='true'>
        //               Подробнее
        //             </RegularButton>
        //           </Link>
        //         </Box>
        //       </Box>
        //     );
        //   })}
        // </>
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
                  {dataHouses[house]['Иконка дома'] ? (
                    <GatsbyImage
                      className={classes.houseDescImg}
                      image={getImg(
                        data,
                        `${dataHouses[house]['Иконка дома']}`
                      )}
                      alt='img'
                    ></GatsbyImage>
                  ) : null}
                </CSSTransition>
              </TransitionGroup>
              <Box className={classes.houseDescTitleBox}>
                <Typography
                  variant='h1'
                  color='textSecondary'
                  className={classes.houseDescTitle}
                >
                  {dataHouses[house]['Код']}
                </Typography>
              </Box>

              <Typography variant='body1' className={classes.houseDescText}>
                {dataHouses[house]['Описание']}
              </Typography>

              <Box className={classes.houseDescSpecBox}>
                <Box className={classes.houseDescSpec}>
                  <Box className={classes.houseDescSpecOne}>
                    <Typography
                      variant='body1'
                      className={classes.houseDescSpecName}
                    >
                      {/* {houses[house].totalAreaText} */}
                      Общая площадь:
                    </Typography>
                    <Box className={classes.houseDescSpecNumberBox}>
                      <Typography
                        variant='h6'
                        component='p'
                        className={classes.houseSpecValue}
                      >
                        {dataHouses[house].countArea(
                          dataHouses[house].modules,
                          'Площадь общая'
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
                      Эффективная площадь:
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
                          'Площадь полезная'
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
                      Количество этажей:
                    </Typography>
                    <Box className={classes.houseDescSpecNumberBox}>
                      <Typography
                        variant='h6'
                        component='p'
                        className={classes.houseSpecValue}
                      >
                        {dataHouses[house]['Этажность'] ?? 1}
                      </Typography>
                    </Box>
                  </Box>

                  <Box className={classes.houseDescSpecOne}>
                    <Typography
                      variant='body1'
                      className={classes.houseDescSpecName}
                    >
                      Cтадии роста:
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
                      'Стоимость'
                    )
                      ? `
                    $${numberWithSpace(
                      dataHouses[house].countArea(
                        dataHouses[house].modules,
                        'Стоимость'
                      )
                    )}`
                      : null}
                  </Typography>
                </Box>
                <Link
                  className={classes.Link}
                  to={`model${dataHouses[house]['URL'].toUpperCase()}`}
                >
                  <RegularButton variant='outlined' lowerCase='true'>
                    Подробнее
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
