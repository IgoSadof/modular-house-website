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
import Panel from '../components/Panel';
import HouseFotosSlider from '../components/sliders/HouseFotosSlider';
import Accordions from '../components/Accordion';
import '@google/model-viewer';
import Model3d from './Model3d';
import getHousesData from '../utils/getHousesData';
import { GatsbyImage } from 'gatsby-plugin-image';
import getImg from '../utils/getImg';
import FadeAnimation from './animations/FadeAnimation';
import ImageSVG from './svg/ImageSVG';
import HouseModelPlayer from './HouseModelPlayer';
import numberWithSpace from '../utils/numberWithSpace';
import getImagesFromDirectory from '../utils/getImgsFromDirectory';
import getPublicPath from '../utils/getPublicPath';

const useStyles = makeStyles((theme) => ({
  BlockFullscreen: {
    position: 'relative',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#D1D1D1',
    overflow: 'hidden',
    height: '100vh',
    [theme.breakpoints.down('md')]: {
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
      marginTop: '120px',
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
    background:
      // "radial-gradient(100% 100% at 0% 0%, #D1D1D1 0%, rgba(209, 209, 209, 0.12) 100%)",
      'radial-gradient(#D1D1D1 0%,rgba(209, 209, 209, 0.12) 100%)',

    zIndex: '2',
  },
  mainImgBox: {
    height: '72vh',
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
    height: '100vh',
    objectFit: 'cover',
    [theme.breakpoints.down('md')]: {
      height: '70vh',
    },
  },
  mainImgItem: {
    height: '100%',
  },
  secondImgBox: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  mainDescBox: {
    width: '100%',
    display: 'flex',
    margin: 'auto',
    gap: '60px',
    // justifyContent: 'space-between',
    padding: '50px 10%',
    '@media (min-width:1921px)': {
      padding: '3.5vw 10%',
      gap: '4.2vw',
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      padding: '10%',
      gap: '50px',
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
      position: 'absolute',
      justifyContent: 'space-around',
      bottom: '7%',
      zIndex: '1',
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
      gap: '10px',
      '@media (orientation: landscape)': {
        justifyContent: 'space-around',
      },
    },
  },
  mainBlockTitle: {
    textAlign: 'left',
    marginLeft: '100px',
    // width: '300px',
    width: '28vw',
    '@media (min-width:1921px)': {
      marginLeft: '5.2vw',
    },
  },
  mainBlockList: {
    listStyle: 'none',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      gap: '10px',
    },
  },
  mainBlockListRight: {
    // marginLeft: 'auto',
    // marginRight: 'auto',
  },
  mainBlockItem: {
    fontSize: '12px',
    fontWeight: '400',
    '& h6':{
      textTransform: 'none',
    },
    '@media (min-width:1920px)': {
      marginTop: '0.7vw',
    },
  },
  modelBlock: {
    display: 'flex',
    // justifyContent: "space-between",
    gap: '60px',
    padding: '0 0 100px 10%',
    backgroundColor: '#D1D1D1',
    '@media (min-width:1921px)': {
      gap: '4.2vw',
      padding: '0 0 3.5vw 10%',
    },
    [theme.breakpoints.down('md')]: {
      padding: '100px 0',
      gap: '20px',
      flexDirection: 'column',
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
    '& p': {
      overflowY: 'scroll',
    },
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
    alignItems: 'center',
    marginRight: 'auto',
    // minHeight: '16vh',

    height: (param) => `${param.heightModuleList / param.modulesCounts}vh`,
    margin: '10px 0',
    '& h1': {
      fontSize: '48px',
      '@media (min-width:1921px)': {
        fontSize: '2.5vw',
      },
    },
    '& p':{
      textTransform: 'none',
    },
  },
  model: {
    display: 'flex',
    alignItems: 'center',
    backgroundPosition: 'center',
    width: '56vw',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: (param) => (param.breakpoints.s ? '50vh' : '100vh'),
    },
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
    width: '40px',
    height: '40px',
    border: '1px solid',
    borderRadius: '50%',
    fontSize: '40px',
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
    gap: '20px',
    left: '14%',
    bottom: '20px',
    zIndex: '2',
    '@media (min-width:1921px)': {
      bottom: '1.1vw',
      gap: '1.1vw',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      justifyContent: 'space-between',
      padding: '0 40px',
      left: '0%',
      bottom: '18%',
      '@media (orientation: landscape)': {
        bottom: '25%',
      },
    },
  },
  blockGalary: {
    height: 'auto',
  },
  panel: {
    position: 'absolute',
    right: '0',
    bottom: '0',
    width: '620px',
    '@media (min-width:1920px)': {
      width: '43vw',
    },

    backgroundColor: '#D1D1D1',
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

  BlockRooms: {
    height: 'auto',
    gap: '20px',
    marginTop: '100px',
    '@media (min-width:1921px)': {
      gap: '1.4vw',
      marginTop: '6.9vw',
    },
    [theme.breakpoints.down('md')]: {
      '& $titleBox': {
        right: '0%',
      },
      padding: '0',
      justifyContent: 'center',
    },
  },
  roomsList: {
    width: '28vw',
    display: 'flex',
    flexShrink: '0',
    flexDirection: 'column',
    marginRight: '40px',
    gap: '20px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginRight: '0',
      order: '2',
    },
  },
  roomsImgBox: {
    position: 'relative',
    width: '44vw',
    height: '85vh',
    marginLeft: 'auto',
    [theme.breakpoints.down('md')]: {
      marginLeft: '0',
      order: '1',
      height: '50vh',
      width: '100%',
      '@media (orientation: landscape)': {
        height: '100vh',
        marginLeft: '20px',
      },
    },
  },
  roomImg: {
    position: 'absolute',
    top: '0',
    left: '0',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
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
    justifyContent: 'space-between',
    gap: '100px',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      '& span':{
        fontSize:'18px',
        lineHeight:'20px',
      }
    },

  },
  BlockForm: {
    // paddingLeft: "18vw",
    justifyContent: 'center',
    paddingBottom: '100px',

    [theme.breakpoints.down('md')]: {
      padding: '0',
      paddingBottom: '40px',
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
  const dataHouses = useMemo(() => getHousesData(data), [data]);
  const breakpoints = useBreakpoint();
  const [houseNumber] = useState(house);
  const baseFolder = `houses/${dataHouses[house]['Код'].replace(
    ' ',
    ''
  )}/модули`;
  const [relativeDirectory, setRelativeDirectory] = React.useState(baseFolder);
  const baseModulePrice = dataHouses[houseNumber].modules[0]['Стоимость']
    ? +dataHouses[houseNumber].modules[0]['Стоимость'].replace(/[KК]/, '000')
    : 0;
  const baseModule = dataHouses[houseNumber].modules[0]['Название модуля']
    ? dataHouses[houseNumber].modules[0]['Название модуля']
    : 'no-modules';
  const [modulePrice, setModulePrice] = useState(baseModulePrice);
  const [userModuleList, setUserModuleList] = useState([baseModule]);
  const [userOptions, setUserOptions] = useState({});

  const baseImg = dataHouses[houseNumber].modules[0]?.rooms[0]
    ? dataHouses[houseNumber].modules[0].rooms[0]['Главное изображение']
    : `${dataHouses[houseNumber]['Баннер']}`;

  const [roomsImg, setRoomsImg] = useState(baseImg);
  const [roomsImgIndex, setRoomsImgIndex] = useState(0);
  const handleRoomsImgChange = (img, index) => {
    setRoomsImg(img);
    setRoomsImgIndex(index);
  };
  const modulesCounts = dataHouses[houseNumber]['modules'].length;
  const pillStep = 100 / modulesCounts;
  const heightOneLine = 10;
  const heightModuleList = 50;

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
  // console.log(dataHouses[houseNumber]['modules'][pillClick])

  const [model3d, setModel3d] = useState(
    getPublicPath(
      data,
      dataHouses[houseNumber]['modules'][pillClick]['3D Модель']
    )
  );
  const [modelVideo, setModelVideo] = useState(
    getPublicPath(
      data,
      dataHouses[houseNumber]['modules'][pillClick]['3D Модель Видео']
    )
  );
  console.log(dataHouses[houseNumber]['modules'][pillClick])

  const myRef = useRef(null);
  const categoryRef = React.createRef();

  const handlePlusClick = (e) => {
    if (pilldistance + pillStep <= 120 && pillClick + 1 < modulesCounts) {
      setPilldistance((state) => state + pillStep);
      setPillClick((state) => state + 1);
      setModel3d(
        getPublicPath(
          data,
          dataHouses[houseNumber]['modules'][pillClick + 1]['3D Модель']
        )
      );
      setModelVideo(
        getPublicPath(
          data,
          dataHouses[houseNumber]['modules'][pillClick + 1]['3D Модель Видео']
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
          dataHouses[houseNumber]['modules'][pillClick - 1]['3D Модель']
        )
      );
      setModelVideo(
        getPublicPath(
          data,
          dataHouses[houseNumber]['modules'][pillClick - 1]['3D Модель Видео']
        )
      );
    }
  };
  const handleClickLeft = () => {
    myRef.current.slickPrev();
  };
  const handleClickRight = () => {
    myRef.current.slickNext();
  };

  const handleChangePanel = (value) => {
    if (value === '') {
      setRelativeDirectory(baseFolder);
    } else {
      setRelativeDirectory(baseFolder + '/' + value);
    }
  };

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
      price += item['Стоимость']
        ? +item['Стоимость'].replace(/[KК]/, '000')
        : 0;
      mudules.push(item['Название модуля']);
    });

    setModulePrice(price);
    setUserModuleList(mudules);

    if (currentCheckbox === curentIndex) {
      setCurrentCheckbox(curentIndex - 1);
    }
  };

  const images = useMemo(() => {
    return getImagesFromDirectory(data, relativeDirectory).map(
      (item, index) => {
        return (
          <li className={classes.mainImgItem} key={index}>
            {item ? (
              <GatsbyImage
                className={classes.mainImgSlider}
                image={item}
                alt='img'
              ></GatsbyImage>
            ) : null}
          </li>
        );
      }
    );
  }, [relativeDirectory]);

  let all = {};
  all['Название модуля'] = 'Все';
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
    house: dataHouses[houseNumber]['Код'],
    userModuleList: userModuleList,
    options: userOptions,
  };

  const plans = useMemo(() => {
    return dataHouses[houseNumber]['modules'].map((item) => {
      if (item['План']) {
        return (
          <GatsbyImage
            className={classes.calculationPlanImg}
            image={getImg(data, `${item['План']}`)}
            alt='img'
          ></GatsbyImage>
        );
      } else {
        return <ImageSVG />;
      }
    });
  }, [houseNumber]);

  return (
    <Box components='main'>
      <Box
        components='section'
        className={` ${classes.BlockFullscreen} ${classes.mainBlock}`}
      >
        <Box className={classes.mainImgBox}>
          {dataHouses[houseNumber]['Баннер'] ? (
            <GatsbyImage
              className={classes.mainImg}
              image={getImg(data, `${dataHouses[houseNumber]['Баннер']}`)}
              alt='img'
            ></GatsbyImage>
          ) : null}
          {breakpoints.md ? (
            <Box className={classes.mainBlockTitleBox}>
              <Typography
                variant='h1'
                color='textSecondary'
                className={classes.houseDescTitle}
              >
                {dataHouses[houseNumber]['Код']}
              </Typography>
              <Box className={classes.houseDescIconBox}>
                {dataHouses[houseNumber]['Иконка планировки'] ? (
                  <GatsbyImage
                    className={classes.mainPlan}
                    image={getImg(
                      data,
                      `${dataHouses[houseNumber]['Иконка планировки']}`
                    )}
                    alt='img'
                  ></GatsbyImage>
                ) : null}
                <Typography variant='h5' className={classes.houseSpecPrice}>
                  {/* {dataHouses[houseNumber].price} */}
                </Typography>
              </Box>
            </Box>
          ) : null}
        </Box>
        <Box className={classes.mainDescBox}>
          {breakpoints.md ? null : (
            <Box className={classes.mainBlockTitleBox}>
              <Typography
                variant='h1'
                color='textSecondary'
                className={classes.mainBlockTitle}
              >
                {dataHouses[houseNumber]['Код']}
              </Typography>
            </Box>
          )}
          <Box className={classes.mainBlockSubtitleBox}>
            {/* <ul className={classes.mainBlockList}>
                  {houses[houseNumber].modules.map((item, index) => {
                    return (
                      <li className={classes.mainBlockItem} key={index}>
                        <Typography variant="body1">
                          0{index + 1} Модуль
                        </Typography>
                      </li>
                    );
                  })}
                </ul> */}
            {!breakpoints.md ? (
              <>
                <ul className={classes.mainBlockList}>
                  {dataHouses[houseNumber].modules.map((item, index) => {
                    return (
                      <li className={classes.mainBlockItem} key={index}>
                        <Typography variant='body1'>
                          0{index + 1} Модуль
                        </Typography>
                      </li>
                    );
                  })}
                </ul>
                <ul className={classes.mainBlockList}>
                  {dataHouses[houseNumber].modules.map((item, index) => {
                    return (
                      <li className={classes.mainBlockItem} key={index}>
                        <Typography variant='body1'>
                          {item['Название модуля']}
                        </Typography>
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : (
              <ul className={classes.mainBlockList}>
                {dataHouses[houseNumber].modules.map((item, index) => {
                  return (
                    <li className={classes.mainBlockItem} key={index}>
                      <Typography variant='body1'>
                        0{index + 1} {item['Название модуля']}
                      </Typography>
                    </li>
                  );
                })}
              </ul>
            )}
            <ul
              className={`${classes.mainBlockList} ${classes.mainBlockListRight}`}
            >
              {dataHouses[houseNumber].modules.map((item, index) => {
                return (
                  <li className={classes.mainBlockItem} key={index}>
                    <Typography variant='subtitle1'>
                      $ {numberWithSpace(item['Стоимость'])} /{' '}
                      {item['Срок изготовления']} дней
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </Box>
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
                    {item['Описание модуля']}
                  </Typography>
                </li>
              );
            })}
          </Box>
        </Box>
        <Box className={classes.model}>
          {breakpoints.md ? (
            <Model3d
              srcPath={model3d}
              srcPathIos={model3d
                .replace('glb', 'usdz')}
            ></Model3d>
          ) : (
            <HouseModelPlayer video={modelVideo} />
          )}
        </Box>
      </Box>

      <Box className={`${classes.BlockFullscreen} ${classes.blockGalary}`}>
        <Box className={classes.secondImgBox}>
          <HouseFotosSlider myRef={myRef} listItem={images} />
          <Box className={classes.buttons}>
            {/* <Button color="secondary">hello</Button> */}
            <SquareButton variant={'contained'} click={handleClickLeft} less />
            <SquareButton
              variant={'contained'}
              click={handleClickRight}
              great
            />
          </Box>
          {/* {breakpoints.md ? null : ( */}
          <Panel ref={categoryRef} arr={panelTabs} change={handleChangePanel} />
          {/* )} */}
        </Box>
      </Box>

      <Box className={`${classes.Block} ${classes.BlockRooms}`}>
        <Box className={classes.titleBox}>
          <span className={classes.line}></span>
          {breakpoints.md ? (
            <Typography variant='h2' className={classes.text}>
              Экспликация
            </Typography>
          ) : null}
        </Box>
        {/* <span className={classes.line}></span> */}
        <Box className={classes.roomsList}>
          {breakpoints.md ? null : (
            <Typography variant='h2'>Экспликация</Typography>
          )}
          <Box className={classes.accordionBox}>
            <Accordions
              arr={dataHouses[houseNumber].allRooms}
              roomsImg={handleRoomsImgChange}
              houseRooms={true}
            />
          </Box>
        </Box>
        <FadeAnimation
          index={roomsImgIndex}
          className={classes.roomsImgBox}
          timeout={500}
        >
          {roomsImg ? (
            <GatsbyImage
              className={classes.roomImg}
              image={getImg(data, roomsImg)}
              alt='img'
            ></GatsbyImage>
          ) : null}
        </FadeAnimation>
      </Box>

      <Box className={`${classes.Block} ${classes.BlockCalculation}`}>
        <Box className={classes.titleBox}>
          <span className={classes.line}></span>
          {breakpoints.md ? (
            <Typography variant='h2' className={classes.text}>
              Смета
            </Typography>
          ) : null}
        </Box>
        <Box className={classes.calculationPlan}>
          {breakpoints.md ? null : (
            <Typography className={classes.text} variant='h2'>
              Смета
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
                        item['Стоимость']
                          ? +item['Стоимость'].replace(/[KК]/, '000')
                          : 0
                      }
                      control={<Checkbox color='primary' />}
                      label={
                        <Typography variant='h6'>
                          {item['Название модуля']}
                        </Typography>
                      }
                      labelPlacement='end'
                    />
                    <Typography variant='h6'>
                      $ {numberWithSpace(item['Стоимость'])}
                    </Typography>
                  </Box>
                ) : (
                  <Box className={classes.calculationHeader}>
                    <FormControlLabel
                      checked={currentCheckbox >= index ? true : false}
                      onClick={(event) => handleClickCheckbox(event, index)}
                      value={
                        item['Стоимость']
                          ? +item['Стоимость'].replace(/[KК]/, '000')
                          : 0
                      }
                      control={<Checkbox color='primary' />}
                      label={
                        <Typography variant='h6'>
                          {item['Название модуля']}
                        </Typography>
                      }
                      name={item['Название модуля']}
                      labelPlacement='end'
                    />
                    <Typography variant='h6'>
                      $ {numberWithSpace(item['Стоимость'])}
                    </Typography>
                  </Box>
                )}

                <Box className={classes.calculationBody}>
                  {item.rooms.map((item, index) => {
                    return (
                      <li className={classes.calculationBodyItem} key={index}>
                        <Typography
                          variant='body1'
                          className={classes.calculationBodyText}
                        >
                          {item['Экспликация']}
                        </Typography>
                        <Typography
                          variant='body1'
                          className={classes.calculationBodyText}
                        >
                          {item['Площадь комнаты']
                            ? `${item['Площадь комнаты']}`
                            : null} м&#178;
                        </Typography>
                      </li>
                    );
                  })}
                </Box>
              </Box>
            );
          })}

          <Box className={classes.calculationResult} style={breakpoints.xxl?{marginLeft:"1.6vw"}:{marginLeft:"32px"}}>
            <Typography variant='h6'>Цена</Typography>
            <Typography variant='caption'>
              $ {numberWithSpace(modulePrice)}
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
          title={`
                      Можете отправить свой выбор нам, и мы начнем готовиться к встрече.
              `}
          subtitle={`Наш менеджер свяжеться с вами для выяснения диталей.`}
          email
          padding={true}
          img={getImg(
            data,
            `${dataHouses[houseNumber]['Баннер']}`
          )}
          formPosition='center'
        />
      </Box>
    </Box>
  );
};
export default HousePage;
