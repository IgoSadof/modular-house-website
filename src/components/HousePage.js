import React, { useState, useRef, useMemo } from 'react';
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
    backgroundColor: 'rgb(209,209,209)',
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
    backgroundColor: 'rgb(209,209,209)',
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
        marginTop: '40px',
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
    },
  },
  conteinerVRmodel: {
    visibility: 'hidden',
  },
  modelButton: {
    cursor:'pointer',
    position: 'absolute',
    zIndex:'10',
    top: '0',
    right: '10%',
    width: '40px',
    height: '40px',
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
    outline:'none',
    borderRadius: '50% 50% 0 0',
    fontSize: '30px',
    backgroundColor: 'rgb(209,209,209)',
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
    outline:'none',
    border: '1px solid',
    borderRadius: '50%',
    fontSize: '30px',
    backgroundColor: 'rgb(209,209,209)',
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
    outline:'none',
    border: '1px solid',
    borderRadius: '0 0 50% 50%',
    fontSize: '30px',
    backgroundColor: 'rgb(209,209,209)',
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

const HousePage = ({ house, data }) => {
  const dataHouses = useMemo(() => getHouses(data), [data]);

  const breakpoints = useBreakpoint();
  const [houseNumber] = useState(house);
  const baseModule = dataHouses[houseNumber].modules?.[0].name
    ? dataHouses[houseNumber].modules[0].name
    : 'no-modules';

  const [userModuleList, setUserModuleList] = useState([baseModule]);
  const [userOptions, setUserOptions] = useState({});
  const modulesCounts = dataHouses[houseNumber].modules?.length;
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
  const getUserOptions = (options) => {
    setUserOptions(options);
  };
  const getUserModules = (modules) => {
    setUserModuleList(modules);
  };

  const extraFormFields = {
    house: dataHouses[houseNumber].code,
    userModuleList: userModuleList,
    options: userOptions,
  };

  const modelViwerRef = useRef();
  const modules = dataHouses[houseNumber].modules.filter(
    (item) => item.published
  );
  console.log(modules)
  const options = dataHouses[houseNumber].options.filter(
    (item) => item.published
  );

  const [modelVideo, setModelVideo] = useState(
    getPublicPath(
      data,
      dataHouses[houseNumber]['modules'][pillClick].video
    )
  );
  // const videos = dataHouses[houseNumber]['modules'].map((item,index)=>(
  //   <HouseModelPlayer video={item.video} key={index}/>
  // ))


  const vrButtonClick = () => {
    modelViwerRef.current.activateAR();
  };

  // console.log(dataHouses[houseNumber]);

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
        mouseIcon={true}
      ></FullScreenHouseSlider>

      <Box components='section' className={classes.modelBlock}>
        <Box className={classes.modelDesc}>
          <Box className={classes.modelDescFirstColumn}>
            {modules?.map((item, index) => {
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
            {modules?.map((item, index) => {
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
          {breakpoints.sm ? (
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

      <FullScreenHouseSlider
        arr={dataHouses[houseNumber]?.int_gallery?.filter(
          (item) => item.published
        )}
        data={data}
        mobileButtons={true}
        autoSlidesPerView={true}
      ></FullScreenHouseSlider>

      <Box className={`${classes.Block} ${classes.BlockCalculation}`}>
        <CalculationBlock
          modules={modules}
          getUserModules={getUserModules}
          data={data}
        ></CalculationBlock>
      </Box>

      <Box className={`${classes.Block} ${classes.BlockTable}`}>
        <OptionsTable
          getOptions={getUserOptions}
          houseNumber={houseNumber}
          houseOptions={options}
          options={userOptions}
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
              ? getPublicPath(
                  data,
                  `${dataHouses[houseNumber]['form-block'][0].img}`
                )
              : null
          }
          formPosition='center'
        />
      </Box>
    </Box>
  );
};
export default HousePage;
