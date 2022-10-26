import React, { useState, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TitleWithLine from '../components/TitleWithLine';
import '@google/model-viewer';
import FadeAnimation from './animations/FadeAnimation';
import ImageSVG from './svg/ImageSVG';
import numberWithSpace from '../utils/numberWithSpace';
import getPublicPath from '../utils/getPublicPath';

const useStyles = makeStyles((theme) => ({
  line: {
    display: 'inline-block',
    width: '4.2vw',
    height: '1px',
    backgroundColor: 'black',
    marginTop: '22px',
    '@media (min-width:1921px)': {
      width: '5.2vw',
      marginTop: '1.5vw',
    },
  },
  calculationPlan: {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: 'auto',
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
    top: '0',
    width: '100%',
    height: 'auto',
    '&:first-child': {
      position: 'relative',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '0',
      order: '1',
      height: 'auto',
      '@media (orientation: landscape)': {
        height: '70vw',
      },
    },
  },
  calculation: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto !important',
    '& > * + * ': {
      marginTop: '40px',
    },
    // marginLeft: 'auto',
    width: '32%',
    alignSelf: 'center',
    '@media (min-width:1921px)': {
      '& > * + * ': {
        marginTop: '2.1vw',
      },
      marginLeft: '3.2vw',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '0 !important',
      width: '100%',
    },
  },
  calculationItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  calculationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&>div': {
      display: 'flex',
      alignItems: 'center',
    },
    '&>div>label': {
      marginRight: '0',
    },
    '&>label>span:last-child': {
      pointerEvents: 'none',
      cursor: 'none',
    },
  },
  calculationBody: {
    marginLeft: '10px',
    paddingLeft: '20px',
    paddingRight: '30px',
    [theme.breakpoints.down('md')]: {
      paddingRight: '0',
    },
    borderLeft: '1px solid #999',
    '& p': {
      lineHeight: '1.2em',
      marginBottom: '8px',
    },
    '& p + p': {
      whiteSpace: 'nowrap',
      lineHeight: '1.2em',
    },
  },
  calculationBodyItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  calculationResultBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  calculationResult: {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      fontWeight: '700',
    },
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

  text: {
    marginBottom: '40px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '20px',
    },
  },
  titleBox: {
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      left: '0',
      '& h2': {
        marginLeft: '0',
      },
    },
  },
  squaresSum:{
    textTransform:'none'
  },
  calculationResultDigit:{
    textTransform: 'inherit',
    marginRight:'30px',
    [theme.breakpoints.down('md')]: {
      marginRight:'0',
    },
  }
}));

const CalculationBlock = ({ modules, data, getUserModules, getUserOptions,setModulesPrice, lang }) => {
  const breakpoints = useBreakpoint();
  const baseModulePrice = modules?.[0].price
    ? +modules[0].price.replace(/[KК]/, '000')
    : 0;
  const baseModuleSquare = modules?.[0].square
  ? +modules[0].square
  : 0;
  // const baseModuleOptions = modules?.[0].module_options
  // ? modules[0].module_options
  // : 'no options';

  // const [modulePrice, setModulePrice] = useState(baseModulePrice);
  const [moduleSquare, setModuleSquare] = useState(baseModuleSquare);

  const classes = useStyles();

  const [currentCheckbox, setCurrentCheckbox] = useState(0);
  const handleClickCheckbox = (event, curentIndex) => {
    setCurrentCheckbox(curentIndex);
    const chooseModules = modules?.filter((item, index) => {
      if (event.target.checked) {
        if (index <= curentIndex) {
          return item;
        }
      } else {
        if (index < curentIndex) {
          return item;
        }
      }
    });
    let price = 0;
    let squareSum = 0;
    let mudules = [];
    let optionsList = []
    
    // console.log(optionsList)
    chooseModules?.forEach((item) => {
      price += item.price ? +item.price.replace(/[KК]/, '000') : 0;
      squareSum += item.square ? +item.square: 0;
      mudules.push(item.name);
      if(item.module_options){
        item.module_options.forEach(option=>{
          optionsList.push(Object.assign({}, option))
        })
      }
    });
    
    let modulesOptions = [];

    optionsList.forEach(item=>{
      if(modulesOptions.find(option=>option.name === item.name)){
        let currentOption = modulesOptions.find(option=>option.name === item.name)
  
        currentOption.option_expensive_price = parseInt(currentOption.option_expensive_price) + +item.option_expensive_price;
        currentOption.option_poor_price = parseInt(currentOption.option_poor_price) + +item.option_poor_price;
      }else{
        modulesOptions.push(item)
      }
    })
    modulesOptions.forEach(item=>item.name = item.name.trim().toLowerCase())
    let unicOpthions = [];
    modulesOptions?.forEach((option) => {
      if (unicOpthions.find((unicOption) => (unicOption.name === option.name))) {
        let currentOption = unicOpthions.find((unicOption,index) => (unicOption.name = option.name))
        currentOption.option_poor_price =
          +currentOption.option_poor_price + +option.option_poor_price;
          currentOption.option_expensive_price =
          +currentOption.option_expensive_price + +option.option_expensive_price;
      } else {
        unicOpthions.push(option);
      }
    });


    setModulesPrice(price);
    setModuleSquare(squareSum)
    getUserModules(mudules);
    getUserOptions(unicOpthions);
    

    if (currentCheckbox === curentIndex) {
      setCurrentCheckbox(curentIndex - 1);
    }
  };

  const plans = useMemo(() => {
    return modules.map((item) => {
      if (item.plan) {
        return (
          <img
            className={classes.calculationPlanImg}
            src={getPublicPath(data, `${item.plan}`)}
            alt='plan'
          />
        );
      } else {
        return <ImageSVG />;
      }
    });
  }, [classes.calculationPlanImg, data, modules]);

  return (
    <>
      <Box className={classes.titleBox}>
        {breakpoints.md ? (
          <TitleWithLine title={lang === 'EN' ? 'Cost calculation' : 'Расчет стоимости'} />
        ) : (
          <span className={classes.line}></span>
        )}
      </Box>
      <Box className={classes.calculationPlan}>
        {breakpoints.md ? null : (
          <Typography className={classes.text} variant='h2'>
            {lang === 'EN' ? 'Cost calculation' : 'Расчет стоимости'}
          </Typography>
        )}
        <Box className={classes.calculationPlanConteiner}>
          {plans?.map((plan, index) => {
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
        {modules?.map((item, index) => {
          return (
            <Box className={classes.calculationItem} key={index}>
              {index === 0 ? (
                <Box className={classes.calculationHeader}>
                  <Box className={classes.calculationHeadertName}>
                    <FormControlLabel
                      checked
                      disabled
                      value={item.price ? `${(+item.price).toFixed()}` : 0}
                      control={<Checkbox color='primary' />}
                      // label={<Typography variant='h6'>{item.name}</Typography>}
                      labelPlacement='end'
                    />
                    <Typography variant='h6'>{item.name}</Typography>
                  </Box>
                  {item.price ? (
                    <Typography variant='h6'>
                      {`$${numberWithSpace((+item.price).toFixed())}`}
                    </Typography>
                  ) : null}
                </Box>
              ) : (
                <Box className={classes.calculationHeader}>
                  <Box className={classes.calculationHeadertName}>
                    <FormControlLabel
                      checked={currentCheckbox >= index ? true : false}
                      onClick={(event) => handleClickCheckbox(event, index)}
                      value={item.price ? `${(+item.price).toFixed()}` : 0}
                      control={<Checkbox color='primary' />}
                      // label={<Typography variant='h6'>{item.name}</Typography>}
                      name={item.name}
                      labelPlacement='end'
                    />
                    <Typography variant='h6'>{item.name}</Typography>
                  </Box>
                  {item.price ? (
                    <Typography variant='h6'>
                      {`$${numberWithSpace((+item.price).toFixed())}`}
                    </Typography>
                  ) : null}
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
                          {item.square ? `${item.square} м²` : null}
                        </Typography>
                      </li>
                    );
                  })}
                </Box>
              ) : null}
            </Box>
          );
        })}

        <Box className={classes.calculationResultBox}>
          {/* <Typography variant='h6' className={classes.squaresSum}>
          <span>{`${moduleSquare.toFixed(2)} м²`}</span>
          </Typography> */}
          <Box
            className={classes.calculationResult}
            style={
              breakpoints.xxl ? { marginLeft: '1.6vw' } : { marginLeft: '32px' }
            }
          >
            <Typography variant='h6' component='p'>
            {lang === 'EN' ? 'SQUARE' : 'Площадь'}
            </Typography>
            <Typography variant='h6' className={classes.calculationResultDigit}>
              {`${numberWithSpace(modulePrice.toFixed())}`}
              {`${moduleSquare.toFixed(2)} м²`}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default CalculationBlock;
