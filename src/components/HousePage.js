import React, { useState, useRef, useMemo, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormBlock from '../components/FormBlock';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import OptionsTable from '../components/OptionsTable';
import '@google/model-viewer';
import Model3d from './Model3d';
import getHouses from '../utils/getHouses';
import getPublicPath from '../utils/getPublicPath';
import FullScreenHouseSlider from './sliders/FullScreenHouseSlider';
import FancyBoxHouseSlider from './sliders/FancyBoxHouseSlider';
import CalculationBlock from './CalculationBlock';
import HouseModelPlayer from './HouseModelPlayer';
import VRviwe from './svg/VRviwe';

const useStyles = makeStyles((theme) => ({
  Block: {
    display: 'flex',
    '& > * + * ': {
      marginLeft: '20px',
    },
    padding: '0 10%',
    marginTop: '100px',
    //alignItems: 'center',
    '@media (min-width:1921px)': {
      '& > * + * ': {
        marginLeft: '1.4vw',
      },
      marginTop: '6.9vw',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '40px',
      flexDirection: 'column',
      '& > * + * ': {
        marginLeft: '0',
        marginTop: '40px',
      },
      padding: '0 10%',
      justifyContent: 'center',
      '& $titleBox': {
        right: '-12%',
        position: 'relative',
      },
    },
  },

  modelBlock: {
    display: 'flex',
    marginTop: '60px',
    '& > * + * ': {
      marginLeft: '60px',
    },
    padding: '0 0 100px 10%',
    backgroundColor: theme.palette.primary.fon,
    '@media (min-width:1921px)': {
      '& > * + * ': {
        marginLeft: '4.2vw',
      },
      padding: '0 0 3.5vw 10%',
      marginTop: '3.1vw',
    },
    [theme.breakpoints.down('md')]: {
      padding: '40px 0',
      '& > * + * ': {
        marginLeft: '0',
        marginTop: '0',
      },
      flexDirection: 'column-reverse',
      // padding: '10%',
      paddingTop: '20px',
      justifyContent: 'center',
      marginTop: '10px',
    },
  },
  modelDesc: {
    display: 'flex',
    position: 'relative',
    width: '28vw',
    marginLeft: '100px',
    flexShrink: '0',
    minHeight: (param) => `${param.heightModuleList}vh`,
    '& > * + * ': {
      marginLeft: '40px',
    },
    '@media (min-width:1921px)': {
      marginLeft: '5.2vw',
      '& > * + * ': {
        marginLeft: '2.1vw',
      },
    },
    [theme.breakpoints.down('md')]: {
      padding: '0 9%',
      marginLeft: '0',
      width: '100%',
      minheight: (param) =>
        `${param.heightOneLine * param.modulesCounts + 4}vh`,
    },
  },
  modelDescFirstColumn: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto 0',
    '@media (max-width:1919px)': {
      '& > * + * ': {
        marginTop: '20px',
      },
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '0',
    },
  },
  modelDescSecondColumn: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 'auto',
    textAlign: 'left',

    '@media (max-width:1919px)': {
      '& > * + * ': {
        marginTop: '20px',
      },
    },
  },
  modelDescItemTitle: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '100%',

    height: (param) =>
      param.breakpoints.xxl
        ? `${param.heightModuleList / param.modulesCounts}vh`
        : 'auto',
    minHeight: '100px',
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
      height: 'auto',
      minHeight: 'auto',
      padding: '40px 0',
    },
  },
  conteinerVRmodel: {
    visibility: 'hidden',
  },
  modelButton: {
    '&::before': {
      content: '"Демонстрация в AR"',
      textTransform: 'uppercase',
      top: '-2px',
      display: 'inline-block',
      position: 'relative',
    },
    '&::after': {
      content: '"*Примерьте домик на своем участке"',
      display: 'block',
      fontSize: '82%',
      color: '#4F4F4F',
      marginTop: '20px',
      textAlign: 'center',
      width: '120%',
      left: '-10%',
      right: '-10%',
      position: 'relative',
    },
    cursor: 'pointer',
    position: 'absolute',
    textAlign: 'center',
    zIndex: '10',
    top: '0',
    right: '10%',
    left: '10%',
    width: '80%',
    height: '40px',
    padding: '12px 30px',
    background: 'rgb(79, 79, 79)',
    color: 'rgb(242, 242, 242)',
    '& svg': {
      width: 'auto',
      marginLeft: '15px',
    },
    '& svg path': {
      stroke: 'rgb(242, 242, 242)',
    },
    '& svg rect': {
      stroke: 'rgb(242, 242, 242)',
    },
  },
  modelDescLine: {
    display: (param) => (param.modulesCounts > 1 ? 'block' : 'none'),
    height: (param) =>
      param.breakpoints.xxl
        ? `${param.heightModuleList + 5}vh`
        : `${param.modulesCounts * 120}px`,
    marginTop: 'auto',
    marginBottom: 'auto',
    position: 'relative',
    width: '1px',
    // height: '100%',
    backgroundColor: '#BDBDBD',
    '@media (max-width:600px)': {
      height: (param) => `${param.modulesCounts * 130}px`,
    },
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
    outline: 'none',
    borderRadius: '50% 50% 0 0',
    fontSize: '30px',
    backgroundColor: theme.palette.primary.fon,
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

  modelDescLineMinusCircle: {
    width: '30px',
    height: '30px',
    outline: 'none',
    border: '1px solid',
    borderRadius: '50%',
    fontSize: '30px',
    backgroundColor: theme.palette.primary.fon,
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
  modelDescLinePlus: {
    width: '30px',
    height: '30px',
    outline: 'none',
    border: '1px solid',
    borderRadius: '0 0 50% 50%',
    fontSize: '30px',
    backgroundColor: theme.palette.primary.fon,
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

  disable: {
    color: '#BDBDBD',
  },

  titleBox: {
    display: 'flex',
    '& > * + * ': {
      marginLeft: '20px',
    },
    '@media (min-width:1920px)': {
      '& > * + * ': {
        marginLeft: '1.4vw',
      },
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
      marginTop: '1.2vw',
    },
  },
  BlockCalculation: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      '&:div:first-child': {
        position: 'relative',
        right: '-12%',
      },
      '&>h2': {
        whiteSpace: 'nowrap',
      },
      justifyContent: 'center',
      minHeight: '100%',
    },
  },

  BlockForm: {
    // paddingLeft: "18vw",
    height: 'auto',
    justifyContent: 'center',
    paddingBottom: '100px',
    paddingRight: '0',
    '& img': {
      objectFit: 'cover',
      height: '100%',
      width: '100%',
      filter: 'grayscale(100%) brightness(1.2)',
      mixBlendMode: 'darken',
    },
    '@media (min-width:1921px)': {
      paddingBottom: '5.2vw',
    },
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

const HousePage = ({ house, data, lang }) => {
  const dataHouses = useMemo(() => getHouses(data,lang), [data, lang]);
  const houseNumber = dataHouses.findIndex((item) => item.alias === house);
  const breakpoints = useBreakpoint();
  const baseModule = dataHouses[houseNumber].modules?.[0].name
    ? dataHouses[houseNumber].modules[0].name
    : 'no-modules';
  const baseModuleOptions = dataHouses[houseNumber].modules?.[0].module_options
  ? dataHouses[houseNumber].modules?.[0].module_options
  : [];
  const [userModuleList, setUserModuleList] = useState([baseModule]);
  const modules = dataHouses[houseNumber].modules.filter(
    (item) => item.published
  );
  const baseModulePrice = modules?.[0].price
    ? +modules[0].price.replace(/[KК]/, '000')
    : 0;

  const [userOptions, setUserOptions] = useState([]);
  const [modulesPrice, setModulesPrice] = useState(baseModulePrice);
  const [modulesOptions, setModulesOptions] = useState(baseModuleOptions);
  const modulesCounts = dataHouses[houseNumber].modules?.filter(
    (item) => item.video
  )?.length;
  const pillStep = 100 / modulesCounts;
  const heightOneLine = 10;
  const heightModuleList = modulesCounts * 10;

  const [pilldistance, setPilldistance] = useState(
    100 / modulesCounts - (100 / modulesCounts) * 0.1
  );
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
    getPublicPath(data, dataHouses[houseNumber].modules?.[pillClick].model3d)
  );

  const handlePlusClick = (e) => {
    if (pilldistance + pillStep <= 120 && pillClick + 1 < modulesCounts) {
      setPilldistance((state) => state + pillStep);
      setPillClick((state) => state + 1);
      setModel3d(
        getPublicPath(
          data,
          dataHouses[houseNumber].modules?.[pillClick + 1].model3d
        )
      );
      setModelVideo(
        getPublicPath(
          data,
          dataHouses[houseNumber]['modules'][pillClick + 1].video
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
          dataHouses[houseNumber].modules?.[pillClick - 1].model3d
        )
      );
      setModelVideo(
        getPublicPath(
          data,
          dataHouses[houseNumber]['modules'][pillClick - 1].video
        )
      );
    }
  };
  const getModulesOptions = (options) => {
    setModulesOptions(options);
  };

  const getUserOptions = (options) => {
    setUserOptions(options);
  };

  const getUserModules = (modules) => {
    setUserModuleList(modules);
  };

  const extraFormFields = {
    'Дом': dataHouses[houseNumber].code,
    'Список модулей': userModuleList,
    'Опции': userOptions,
  };

  const modelViwerRef = useRef();
  const options = dataHouses[houseNumber]?.options?.filter(
    (item) => item.published
  );

  const [modelVideo, setModelVideo] = useState(
    getPublicPath(data, dataHouses[houseNumber]['modules'][pillClick].video)
  );

  const vrButtonClick = () => {
    modelViwerRef.current.activateAR();
  };
  
  useEffect(() => {
    setModulesOptions(baseModuleOptions)
  }, [baseModuleOptions, lang]);

  return (
    <Box components='main'>
      <FullScreenHouseSlider
        title={dataHouses[houseNumber]?.code}
        arr={dataHouses[houseNumber]?.ext_gallery?.filter(
          (item) => item.published
        )}
        desc={dataHouses[houseNumber]?.desc}
        data={data}
        pagination={true}
        middleIcon={true}
        lang={lang}
      ></FullScreenHouseSlider>

      <Box components='section' className={classes.modelBlock}>
        <Box className={classes.modelDesc}>
          <Box className={classes.modelDescFirstColumn}>
            {modules?.map((item, index) => {
              if (item.video) {
                return (
                  <li className={classes.modelDescItemTitle} key={index}>
                    <Typography
                      variant='h1'
                      color='textSecondary'
                      className={
                        pillClick >= index
                          ? classes.modelNumber
                          : classes.disable
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
                  </li>
                );
              }
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
                    style={{ top: '-3px', position: 'relative' }}
                    className={classes.minus}
                  >
                    -
                  </div>
                </div>
              </div>
            )}
          </div>

          <Box className={classes.modelDescSecondColumn}>
            {modules?.map((item, index) => {
              if (item.video) {
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
              }
            })}
          </Box>
        </Box>

        <Box className={classes.model}>
          {breakpoints.m ? (
            <>
              <Box className={classes.modelButton} onClick={vrButtonClick}>
                <VRviwe />
              </Box>
              <Box className={classes.conteinerVRmodel}>
                <Model3d
                  scaleUp={breakpoints.minxl}
                  newref={modelViwerRef}
                  srcPath={model3d}
                  srcPathIos={getPublicPath(
                    data,
                    modules?.[pillClick].model3d.replace('glb', 'usdz')
                  )}
                ></Model3d>
              </Box>
              <HouseModelPlayer video={modelVideo} keyId={modelVideo} />
            </>
          ) : (
            <HouseModelPlayer video={modelVideo} keyId={modelVideo} />
          )}
        </Box>
      </Box>

      <FancyBoxHouseSlider
        arr={dataHouses[houseNumber]?.int_gallery?.filter(
          (item) => item.published
        )}
        data={data}
        mobileButtons={true}
        autoSlidesPerView={true}
        lang={lang}
      ></FancyBoxHouseSlider>

      <Box className={`${classes.Block} ${classes.BlockCalculation}`}>
        <CalculationBlock
          modules={modules}
          getUserModules={getUserModules}
          getUserOptions={getModulesOptions}
          data={data}
          setModulesPrice={setModulesPrice}
          lang={lang}
        ></CalculationBlock>
      </Box>

      {modulesOptions.length > 0 ? (
        <Box className={`${classes.Block} ${classes.BlockTable}`}>
          <OptionsTable
            getOptions={getUserOptions}
            houseNumber={houseNumber}
            houseOptions={modulesOptions}
            modulesPrice={modulesPrice}
            lang={lang}
          />
        </Box>
      ) : null}

      <Box className={`${classes.Block} ${classes.BlockForm}`}>
        <FormBlock
          data={data}
          endpoint='https://formspree.io/f/mgedeody'
          extraFormFields={extraFormFields}
          header={dataHouses[houseNumber]['form-block'][0].header}
          title={dataHouses[houseNumber]['form-block'][0].title}
          subtitle={dataHouses[houseNumber]['form-block'][0].subtitle}
          email
          padding={true}
          img={
            !breakpoints.md
              ? getPublicPath(
                  data,
                  `${dataHouses[houseNumber]['form-block'][0].img}`
                )
              : null
          }
          formPosition='center'
          lang={lang}
        />
      </Box>
    </Box>
  );
};
export default HousePage;
