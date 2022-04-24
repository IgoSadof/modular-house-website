import React, { useState, useRef, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import FormBlock from '../components/FormBlock';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SquareButton from '../components/buttons/SquareButton';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CalculateTable from '../components/CalculateTable';
// import Panel from '../components/Panel';
import { SwiperSlide } from 'swiper/react';
import TitleWithLine from '../components/TitleWithLine';
import '@google/model-viewer';
import Model3d from './Model3d';
import getHouses from '../utils/getHouses';
import { GatsbyImage } from 'gatsby-plugin-image';
import getImg from '../utils/getImg';
import FadeAnimation from './animations/FadeAnimation';
import ImageSVG from './svg/ImageSVG';
import numberWithSpace from '../utils/numberWithSpace';
import getImagesFromDirectory from '../utils/getImgsFromDirectory';
import getPublicPath from '../utils/getPublicPath';
import HouseFotosSlider from '../components/sliders/HouseFotosSlider';

const useStyles = makeStyles((theme) => ({
  BlockFullscreen: {
    position: 'relative',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#D1D1D1',
    overflow: 'hidden',
    // height: '100vh',
    // minHeight: '768px',
    [theme.breakpoints.down('md')]: {
      // minHeight:'0',
      '& $titleBox': {
        marginTop: '100px',
        right: '0',
        position: 'relative',
      },
    },
  },
  Block: {
    display: 'flex',
    gap: '20px',
    padding: '0 10%',
    backgroundColor: '#D1D1D1',
    marginTop: '100px',
    '@media (min-width:1920px)': {
      gap: '1.4vw',
      marginTop: '6.9vw',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '40px',
      flexDirection: 'column',
      padding: '0 10%',
      justifyContent: 'center',
      '& $titleBox': {
        right: '-12%',
        position: 'relative',
      },
    },
  },

  button: {
    position: 'absolute',
    top: '5%',
    right: '10%',
    background: 'radial-gradient(#D1D1D1 0%,rgba(209, 209, 209, 0.12) 100%)',

    zIndex: '2',
  },
  mainBlock: {
    height: '100vh',
    minHeight: '500px',
    [theme.breakpoints.down('md')]: {
      height: '100%',
    },
  },
  mainImgBox: {
    height: '100%',
    zIndex: '1',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      '@media (orientation: landscape)': {
        height: '65vh',
      },
    },
  },
  mainImg: {
    position: 'relative',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  mainImgSlider: {
    width: '100%',
    objectFit: 'cover',
    '& img': {
      aspectRatio: '4/3',
      objectPosition: 'bottom',
    },
  },
  mainImgItem: {
    height: '100%',
    position: 'relative',
  },
  secondImgBox: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  mainDescWraper: {
    width: '100%',
    display: 'flex',
    position: 'absolute',
    left: '0',
    paddingLeft: '10%',
    bottom: '80px',
    zIndex: '1',
    '& $buttons': {
      position: 'relative',
      zIndex: '4',
      bottom: '0',
      left: '0',
      marginLeft: 'auto',
      marginRight: '10%',
    },
    '@media (min-width:1921px)': {
      bottom: '4.2vw',
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      paddingLeft: '10%',
      paddingRight: '10%',
      paddingTop: '20px',
      position: 'relative',
      bottom: '0',
    },
  },
  mainDescBox: {
    backgroundColor: 'rgba(209,209,209,0.9)',
    width: '100%',
    display: 'flex',
    margin: 'auto',
    gap: '60px',
    minHeight: '232px',
    padding: '40px 10%',
    '@media (min-width:1921px)': {
      padding: '2.1vw 10%',
      gap: '4.2vw',
    },
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      bottom: null,
      backgroundColor: 'rgba(209,209,209)',
      flexDirection: 'column',
      padding: '20px 10%',
      gap: '20px',
      justifyContent: 'center',
      '@media (orientation: landscape)': {
        padding: '1%',
      },
    },
  },
  mainBlockTitleBox: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      '& h1': {
        fontSize: '36px',
      },
    },
  },
  houseDescIconBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100px',
    objectFit: 'contain',
    height: '85px',
  },
  mainPlan: {
    width: '40px',
    height: '40px',
    objectFit: 'contain',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  houseDescTitle: {
    color: 'white',
    width: '50%',
  },
  houseSpecPrice: {
    fontSize: '20px',
    color: 'white',
  },
  mainBlockSubtitleBox: {
    display: 'flex',
    // gap: '100px',
    width: '100%',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      marginTop: '15px',
      gap: '10px',
      '@media (orientation: landscape)': {
        justifyContent: 'space-around',
      },
    },
  },
  mainBlockTitle: {
    textAlign: 'left',
    color: '#E2E2E2',
    marginLeft: '100px',
    width: '28vw',
    '@media (min-width:1921px)': {
      marginLeft: '5.2vw',
    },
    [theme.breakpoints.down('md')]: {
      color: '#4F4F4F',
      marginLeft: '0',
      width: '100%',
    },
  },
  mainBlockList: {
    listStyle: 'none',
    padding: '0',
    gap: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media (min-width:1921px)': {
      gap: '0.05vw',
    },
  },
  mainBlockListRight: {
    // marginLeft: 'auto',
    // marginRight: 'auto',
  },
  mainBlockItem: {
    fontSize: '12px',
    fontWeight: '400',
    '& h6': {
      textTransform: 'none',
    },
  },
  modelBlock: {
    display: 'flex',
    marginTop: '60px',
    gap: '60px',
    padding: '0 0 100px 10%',
    backgroundColor: '#D1D1D1',
    '@media (min-width:1921px)': {
      gap: '4.2vw',
      padding: '0 0 3.5vw 10%',
      marginTop: '3.1vw',
    },
    [theme.breakpoints.down('md')]: {
      padding: '40px 0',
      gap: '40px',
      flexDirection: 'column-reverse',
      // padding: '10%',
      paddingTop: '20px',
      justifyContent: 'center',
      marginTop: '10px',
    },
  },
  modelDesc: {
    position: 'relative',
    width: '28vw',
    marginLeft: '100px',
    flexShrink: '0',
    // height: (param) => `${param.heightOneLine * param.modulesCounts}vh`,
    display: 'flex',
    minHeight: (param) => `${param.heightModuleList}vh`,
    gap: '40px',
    '@media (min-width:1921px)': {
      marginLeft: '5.2vw',
      gap: '2.1vw',
    },
    [theme.breakpoints.down('md')]: {
      padding: '0 9%',
      marginLeft: '0',
      width: '100%',
      minheight: (param) =>
        `${param.heightOneLine * param.modulesCounts + 4}vh`,
    },
  },
  accordionBox: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  modelDescFirstColumn: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media (max-width:1919px)': {
      gap: '20px',
    },
    // gap:"20px",
    // '@media (min-width:1921px)': {
    //   gap: '1.4vw',
    // },
    [theme.breakpoints.down('md')]: {
      marginLeft: '0',
    },
  },
  modelDescSecondColumn: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 'auto',
    textAlign: 'left',
    // '& p': {
    //   overflowY: 'scroll',
    // },
    '@media (max-width:1919px)': {
      gap: '20px',
    },
    // gap:"20px",
    // '@media (min-width:1921px)': {
    //   gap: '1.4vw',
    // },
  },
  modelDescItemTitle: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '100%',
    // minHeight: '16vh1,

    height: (param) =>
      param.breakpoints.xxl
        ? `${param.heightModuleList / param.modulesCounts}vh`
        : '100px',
    minHeight: '70px',
    margin: '10px 0',
    '& h1': {
      fontSize: '48px',
      '@media (min-width:1921px)': {
        fontSize: '2.5vw',
      },
    },
    '& p': {
      textTransform: 'none',
    },
  },
  model: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    backgroundPosition: 'center',
    width: '56vw',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    minHeight: '400px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '50vh',
      // height: (param) => (param.breakpoints.s ? '50vh' : '100vh'),
    },
  },
  conteinerVRmodel: {
    visibility: 'hidden',
  },
  modelButton: {
    cursor: 'pointer',
    position: 'absolute',
    top: '0',
    right: '10%',
    width: '40px',
    height: '40px',
  },
  conteiner360: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    zIndex: '10',
  },
  modelDescLine: {
    display: (param) => (param.modulesCounts > 1 ? 'block' : 'none'),
    position: 'relative',
    width: '1px',
    // height: '100%',
    backgroundColor: '#BDBDBD',
  },
  modelDescLineButton: {
    position: 'absolute',
    top: (param) => `${param.pilldistance}%`,
    transition: '0.5s',
    transform: `translate(-50%, 0%)`,
  },
  modelDescLineActive: {
    position: 'absolute',
    zIndex: '2',
    left: '50%',
    width: '1px',
    height: (param) => `${param.pilldistance}%`,
    backgroundColor: 'black',
    transition: '0.5s',
  },
  modelDescLineMinus: {
    width: '30px',
    height: '30px',
    border: '1px solid',
    borderRadius: '50% 50% 0 0',
    fontSize: '30px',
    backgroundColor: '#D1D1D1',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '0.5s',
    '@media (min-width:1921px)': {
      width: '1.5vw',
      height: '1.5vw',
      fontSize: '1.5vw',
    },
  },
  minus: {
    // position: 'relative',
    // top: '-8%',
  },
  modelDescLineMinusCircle: {
    width: '30px',
    height: '30px',
    border: '1px solid',
    borderRadius: '50%',
    fontSize: '30px',
    backgroundColor: '#D1D1D1',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '0.5s',
    '@media (min-width:1921px)': {
      width: '2.1vw',
      height: '2.1vw',
      fontSize: '2.1vw',
    },
  },
  modelDescLinePlus: {
    width: '30px',
    height: '30px',
    border: '1px solid',
    borderRadius: '0 0 50% 50%',
    fontSize: '30px',
    backgroundColor: '#D1D1D1',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '0.5s',
    '@media (min-width:1921px)': {
      width: '1.5vw',
      height: '1.5vw',
      fontSize: '1.5vw',
    },
  },
  plus: {
    // position: "relative",
    // bottom: "12%",
  },
  disable: {
    color: '#BDBDBD',
  },
  buttons: {
    position: 'absolute',
    display: 'flex',
    gap: '12px',
    left: '14%',
    bottom: '20px',
    zIndex: '2',
    '@media (min-width:1921px)': {
      bottom: '1.1vw',
      gap: '0.6vw',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      justifyContent: 'space-between',
      left: '0%',
      bottom: '50%',
      transform: 'translate(0, 50%)',
    },
  },
  blockGalary: {
    height: 'auto',
  },
  titleBox: {
    display: 'flex',
    gap: '20px',
    '@media (min-width:1920px)': {
      gap: '1.4vw',
    },

    flexDirection: 'row-reverse',
    [theme.breakpoints.down('md')]: {
      marginLeft: 'auto',
    },
  },
  line: {
    display: 'inline-block',
    width: '80px',
    height: '1px',
    backgroundColor: 'black',
    marginTop: '22px',
    '@media (min-width:1921px)': {
      width: '5.2vw',
      marginTop: '1.5vw',
    },
  },
  BlockCalculation: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      minHeight: '100%',
    },
  },
  calculationPlan: {
    display: 'flex',
    flexDirection: 'column',
    height: '95vh',
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '50vh',
      '@media (orientation: landscape)': {
        height: '70vw',
      },
    },
  },
  calculationPlanConteiner: {
    width: '100%',
    position: 'relative',
  },
  calculationPlanImg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    margin: 'auto',
    position: 'relative',
    overflow: 'hidden',
    '& img': {
      objectFit: 'contain !important',
    },
  },
  calculationPlanImgInner: {
    position: 'absolute',
    width: '100%',
    height: '85vh',
    [theme.breakpoints.down('md')]: {
      marginLeft: '0',
      order: '1',
      height: '50vh',
      '@media (orientation: landscape)': {
        height: '70vw',
      },
    },
  },
  calculation: {
    display: 'flex',
    gap: '40px',
    flexDirection: 'column',
    marginLeft: 'auto',
    width: '32%',
    '@media (min-width:1921px)': {
      gap: '2.1vw',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '0',
      width: '100%',
    },
  },
  calculationItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    '@media (min-width:1921px)': {
      gap: '1.1vw',
    },
  },
  calculationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calculationBody: {
    paddingLeft: '20px',
    paddingRight: '30px',
    borderLeft: '1px solid',
  },
  calculationBodyItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  calculationResult: {
    display: 'flex',
    alignItems: 'center',
    '& p': {
      marginLeft: 'auto',
      marginRight: '48px',
    },
    [theme.breakpoints.down('md')]: {
      '& span': {
        fontSize: '30px',
        lineHeight: '1.4',
      },
    },
  },
  BlockForm: {
    // paddingLeft: "18vw",
    height: 'auto',
    justifyContent: 'center',
    paddingBottom: '100px',

    [theme.breakpoints.down('md')]: {
      padding: '0',
      paddingBottom: '40px',
      marginTop: '80px',
    },
  },
  BlockTable: {
    [theme.breakpoints.down('md')]: {
      padding: '0',
      width: '100%',
    },
  },
  text: {
    marginBottom: '40px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '20px',
    },
  },
}));

const HousePage = ({ house, data }) => {
  const dataHouses = useMemo(() => getHouses(data), [data]);
  // const houses = useMemo(() => getHouses(data), [data]);

  const breakpoints = useBreakpoint();
  const [houseNumber] = useState(house);
  const baseFolder = `houses/${dataHouses[house].code.replace(' ', '')}/модули`;

  const [relativeDirectory, setRelativeDirectory] = React.useState(baseFolder);
  const baseModulePrice = dataHouses[houseNumber].modules[0].price
    ? +dataHouses[houseNumber].modules[0].price.replace(/[KК]/, '000')
    : 0;
  const baseModule = dataHouses[houseNumber].modules[0].name
    ? dataHouses[houseNumber].modules[0].name
    : 'no-modules';
  const [modulePrice, setModulePrice] = useState(baseModulePrice);
  const [userModuleList, setUserModuleList] = useState([baseModule]);
  const [userOptions, setUserOptions] = useState({});

  const baseImg = dataHouses[houseNumber].modules[0]?.rooms[0]
    ? dataHouses[houseNumber].modules[0].rooms[0]['Главное изображение']
    : `${dataHouses[houseNumber].baner}`;

  // const [roomsImg, setRoomsImg] = useState(baseImg);
  // const [roomsImgIndex, setRoomsImgIndex] = useState(0);
  // const handleRoomsImgChange = (img, index) => {
  //   setRoomsImg(img);
  //   setRoomsImgIndex(index);
  // };
  const modulesCounts = dataHouses[houseNumber]['modules'].length;
  const pillStep = 100 / modulesCounts;
  const heightOneLine = 10;
  const heightModuleList = 60;

  const [pilldistance, setPilldistance] = useState(heightOneLine * 1.5);
  const [pillClick, setPillClick] = useState(0);
  const param = {
    pilldistance,
    modulesCounts,
    heightOneLine,
    heightModuleList,
    breakpoints,
  };
  const classes = useStyles(param);

  const [model3d, setModel3d] = useState(
    getPublicPath(data, dataHouses[houseNumber]['modules'][pillClick].model3d)
  );
  const firstSlider = useRef(null);
  const secondSlider = useRef(null);
  const categoryRef = React.createRef();

  const handlePlusClick = (e) => {
    if (pilldistance + pillStep <= 120 && pillClick + 1 < modulesCounts) {
      setPilldistance((state) => state + pillStep);
      setPillClick((state) => state + 1);
      setModel3d(
        getPublicPath(
          data,
          dataHouses[houseNumber]['modules'][pillClick + 1].model3d
        )
      );
    }
  };
  const handleMinusClick = (e) => {
    if (pilldistance - pillStep >= 10 && pillClick - 1 >= 0) {
      setPilldistance((state) => state - pillStep);
      setPillClick((state) => state - 1);
      setModel3d(
        getPublicPath(
          data,
          dataHouses[houseNumber]['modules'][pillClick - 1].model3d
        )
      );
    }
  };
  const handleFirstSliderClickLeft = () => {
    firstSlider.current.swiper.slidePrev();
  };
  const handleFirstSliderClickRight = () => {
    firstSlider.current.swiper.slideNext();
  };
  const handleSeconSliderClickLeft = () => {
    secondSlider.current.swiper.slidePrev();
  };
  const handleSeconSliderClickRight = () => {
    secondSlider.current.swiper.slideNext();
  };

  // const handleChangePanel = (value) => {
  //   if (value === '') {
  //     setRelativeDirectory(baseFolder);
  //   } else {
  //     setRelativeDirectory(baseFolder + '/' + value);
  //   }
  // };

  const [currentCheckbox, setCurrentCheckbox] = useState(0);

  const handleClickCheckbox = (event, curentIndex) => {
    setCurrentCheckbox(curentIndex);
    const chooseModules = dataHouses[houseNumber].modules.filter(
      (item, index) => {
        if (event.target.checked) {
          if (index <= curentIndex) {
            return item;
          }
        } else {
          if (index < curentIndex) {
            return item;
          }
        }
      }
    );
    let price = 0;
    let mudules = [];
    chooseModules.forEach((item) => {
      price += item.price ? +item.price.replace(/[KК]/, '000') : 0;
      mudules.push(item.name);
    });

    setModulePrice(price);
    setUserModuleList(mudules);

    if (currentCheckbox === curentIndex) {
      setCurrentCheckbox(curentIndex - 1);
    }
  };

  const ext_gallery = useMemo(() => {
    return dataHouses[houseNumber].ext_gallery.map((item, index) => {
      return (
        <SwiperSlide className={classes.mainImgItem} key={index}>
          <GatsbyImage
            className={classes.mainImgSlider}
            image={getImg(data, item.image)}
            alt='img'
          ></GatsbyImage>
        </SwiperSlide>
      );
    });
  }, [dataHouses[houseNumber].ext_gallery]);

  const int_gallery = useMemo(() => {
    return dataHouses[houseNumber].int_gallery.map((item, index) => {
      return (
        <SwiperSlide className={classes.mainImgItem} key={index}>
          <GatsbyImage
            className={classes.mainImgSlider}
            image={getImg(data, item.image)}
            alt='img'
          ></GatsbyImage>
        </SwiperSlide>
      );
    });
  }, [dataHouses[houseNumber].int_gallery]);

  let all = {};
  all.name = 'Все';
  all.name = '';

  const modulesWithImages = dataHouses[house].modules.filter(
    (item, index) =>
      getImagesFromDirectory(data, `${baseFolder}/модуль${index + 1}`).length
  );

  const panelTabs = [all, ...modulesWithImages];
  const getUserOptions = (options) => {
    setUserOptions(options);
  };

  const extraFormFields = {
    house: dataHouses[houseNumber].code,
    userModuleList: userModuleList,
    options: userOptions,
  };

  const plans = useMemo(() => {
    return dataHouses[houseNumber]['modules'].map((item) => {
      if (item.plan) {
        return (
          <GatsbyImage
            className={classes.calculationPlanImg}
            image={getImg(data, `${item.plan}`)}
            alt='img'
          ></GatsbyImage>
        );
      } else {
        return <ImageSVG />;
      }
    });
  }, [houseNumber]);

  // const preventScroll = (e) => {
  //   e.stopPropagation();
  //   console.log(e.target);
  // };

  const modelViwerRef = useRef();

  return (
    <Box components='main'>
      <Box
        components='section'
        className={` ${classes.BlockFullscreen} ${classes.mainBlock}`}
      >
        <Box className={classes.mainImgBox}>
          <HouseFotosSlider
            houseRef={firstSlider}
            listItem={ext_gallery}
            pagination
          />
        </Box>
        <Box className={classes.mainDescWraper}>
          <Box className={classes.mainBlockTitleBox}>
            <Typography
              variant='h1'
              color='textSecondary'
              className={classes.mainBlockTitle}
            >
              {dataHouses[houseNumber].code}
            </Typography>
          </Box>

          {!breakpoints.md ? (
            <Box className={classes.buttons}>
              <SquareButton
                variant={'contained'}
                click={handleFirstSliderClickLeft}
                less
                color='#4F4F4F'
                bgColor='#D1D1D1'
              />
              <SquareButton
                variant={'contained'}
                click={handleFirstSliderClickRight}
                great
                color='#4F4F4F'
                bgColor='#D1D1D1'
              />
            </Box>
          ) : (
            <Box className={classes.mainBlockSubtitleBox}></Box>
          )}
        </Box>
      </Box>

      <Box components='section' className={classes.modelBlock}>
        <Box className={classes.modelDesc}>
          <Box className={classes.modelDescFirstColumn}>
            {dataHouses[houseNumber].modules.map((item, index) => {
              return (
                <li className={classes.modelDescItemTitle} key={index}>
                  <Typography
                    variant='h1'
                    color='textSecondary'
                    className={
                      pillClick >= index ? classes.modelNumber : classes.disable
                    }
                  >
                    0{index + 1}
                  </Typography>
                  <Typography
                    className={pillClick >= index ? null : classes.disable}
                    variant='h6'
                    component='p'
                  >
                    {item.name}
                  </Typography>
                  {/* <Typography
                    className={pillClick >= index ? null : classes.disable}
                    variant="h6"
                  >
                    {item.area} м2
                  </Typography> */}
                </li>
              );
            })}
          </Box>

          <div className={classes.modelDescLine}>
            <div className={classes.modelDescLineActive}></div>
            {pillClick === 0 ? (
              <div className={classes.modelDescLineButton}>
                <div
                  role='button'
                  tabIndex='0'
                  onClick={handlePlusClick}
                  onKeyDown={handlePlusClick}
                  className={classes.modelDescLineMinusCircle}
                >
                  <div className={classes.plus}>+</div>
                </div>
              </div>
            ) : pillClick + 1 < modulesCounts ? (
              <div className={classes.modelDescLineButton}>
                <div
                  role='button'
                  tabIndex='0'
                  onClick={handleMinusClick}
                  onKeyDown={handleMinusClick}
                  className={classes.modelDescLineMinus}
                >
                  <div className={classes.minus}>-</div>
                </div>
                <div
                  role='button'
                  tabIndex='0'
                  onClick={handlePlusClick}
                  onKeyDown={handlePlusClick}
                  className={classes.modelDescLinePlus}
                >
                  <div className={classes.plus}>+</div>
                </div>
              </div>
            ) : (
              <div className={classes.modelDescLineButton}>
                <div
                  role='button'
                  tabIndex='0'
                  onClick={handleMinusClick}
                  onKeyDown={handleMinusClick}
                  className={classes.modelDescLineMinusCircle}
                >
                  <div
                    style={{ top: '-0.2vw', position: 'relative' }}
                    className={classes.minus}
                  >
                    -
                  </div>
                </div>
              </div>
            )}
          </div>

          <Box className={classes.modelDescSecondColumn}>
            {dataHouses[houseNumber].modules.map((item, index) => {
              return (
                <li className={classes.modelDescItemTitle} key={index}>
                  <Typography
                    className={pillClick >= index ? null : classes.disable}
                    variant='body1'
                  >
                    {item.desc}
                  </Typography>
                </li>
              );
            })}
          </Box>
        </Box>
        <Box className={classes.model}>
          <Model3d
            newref={modelViwerRef}
            srcPath={model3d}
            srcPathIos={getPublicPath(
              data,
              dataHouses[houseNumber]['modules'][pillClick].model3d.replace(
                'glb',
                'usdz'
              )
            )}
          ></Model3d>
        </Box>
      </Box>

      <Box className={`${classes.BlockFullscreen} ${classes.blockGalary}`}>
        <Box className={classes.secondImgBox}>
          <HouseFotosSlider houseRef={secondSlider} listItem={int_gallery} />
          <Box className={classes.buttons}>
            {/* <Button color="secondary">hello</Button> */}
            <SquareButton
              variant={'contained'}
              click={handleSeconSliderClickLeft}
              less
              color='#4F4F4F'
              bgColor='#D1D1D1'
            />
            <SquareButton
              variant={'contained'}
              click={handleSeconSliderClickRight}
              great
              color='#4F4F4F'
              bgColor='#D1D1D1'
            />
          </Box>
          {/* {breakpoints.md? null : (
          <Panel ref={categoryRef} arr={panelTabs} change={handleChangePanel} />
          )} */}
        </Box>
      </Box>

      <Box className={`${classes.Block} ${classes.BlockCalculation}`}>
        <Box className={classes.titleBox}>
          {breakpoints.md ? (
            <TitleWithLine title={'Расчет стоимости'} />
          ) : (
            <span className={classes.line}></span>
          )}
        </Box>
        <Box className={classes.calculationPlan}>
          {breakpoints.md ? null : (
            <Typography className={classes.text} variant='h2'>
              Расчет стоимости
            </Typography>
          )}
          <Box className={classes.calculationPlanConteiner}>
            {plans.map((plan, index) => {
              if (index <= currentCheckbox) {
                return (
                  <React.Fragment key={index}>
                    <FadeAnimation
                      inProp={index <= currentCheckbox}
                      index={index}
                      className={classes.calculationPlanImgInner}
                      timeout={1000}
                    >
                      {plan}
                    </FadeAnimation>
                  </React.Fragment>
                );
              }
            })}
          </Box>
        </Box>
        <Box className={classes.calculation}>
          {dataHouses[houseNumber].modules.map((item, index) => {
            return (
              <Box className={classes.calculationItem} key={index}>
                {index === 0 ? (
                  <Box className={classes.calculationHeader}>
                    <FormControlLabel
                      checked
                      disabled
                      value={
                        item.price ? +item.price.replace(/[KК]/, '000') : 0
                      }
                      control={<Checkbox color='primary' />}
                      label={<Typography variant='h6'>{item.name}</Typography>}
                      labelPlacement='end'
                    />
                    <Typography variant='h6'>
                      ${numberWithSpace(item.price)}
                    </Typography>
                  </Box>
                ) : (
                  <Box className={classes.calculationHeader}>
                    <FormControlLabel
                      checked={currentCheckbox >= index ? true : false}
                      onClick={(event) => handleClickCheckbox(event, index)}
                      value={
                        item.price ? +item.price.replace(/[KК]/, '000') : 0
                      }
                      control={<Checkbox color='primary' />}
                      label={<Typography variant='h6'>{item.name}</Typography>}
                      name={item.name}
                      labelPlacement='end'
                    />
                    <Typography variant='h6'>
                      ${numberWithSpace(item.price)}
                    </Typography>
                  </Box>
                )}
                {item.rooms.length > 0 ? (
                  <Box className={classes.calculationBody}>
                    {item.rooms.map((item, index) => {
                      return (
                        <li className={classes.calculationBodyItem} key={index}>
                          <Typography
                            variant='body1'
                            className={classes.calculationBodyText}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant='body1'
                            className={classes.calculationBodyText}
                          >
                            {item.square ? `${item.square}` : null} м&#178;
                          </Typography>
                        </li>
                      );
                    })}
                  </Box>
                ) : null}
              </Box>
            );
          })}

          <Box
            className={classes.calculationResult}
            style={
              breakpoints.xxl ? { marginLeft: '1.6vw' } : { marginLeft: '32px' }
            }
          >
            <Typography variant='h6' component='p'>
              ЦЕНА
            </Typography>
            <Typography variant='caption'>
              ${numberWithSpace(modulePrice)}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className={`${classes.Block} ${classes.BlockTable}`}>
        <CalculateTable
          getOptions={getUserOptions}
          houseNumber={houseNumber}
          houseOptions={dataHouses[houseNumber].options}
        />
      </Box>

      <Box className={`${classes.Block} ${classes.BlockForm}`}>
        <FormBlock
          endpoint='https://formspree.io/f/mgedeody'
          extraFormFields={extraFormFields}
          header={dataHouses[houseNumber]['form-block'][0].header}
          title={dataHouses[houseNumber]['form-block'][0].title}
          subtitle={dataHouses[houseNumber]['form-block'][0].subtitle}
          email
          padding={true}
          img={
            !breakpoints.md
              ? getImg(data, `${dataHouses[houseNumber].baner}`)
              : null
          }
          formPosition='center'
        />
      </Box>
    </Box>
  );
};
export default HousePage;
