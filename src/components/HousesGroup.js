import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import getPublicPath from '../utils/getPublicPath';
import MyCalendar from './MyCalendar';
import Form from './Form';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  comteiner: {},
  title: {
    textAlign: 'start',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  groupImage: {
    width: '100%',
  },
  tabConteiner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  houseIcon: {
    width: 'auto',
    marginTop: 'auto',
  },
  tab: {
    width: 'calc(100% / 6)',
    aspectRatio: '1 / 1',
    height: '6vw',
    padding: '10px',
    /*border: '1px solid #4F4F4F',*/

    color: '#d1d1d1',
    backgroundColor: '#4F4F4F',
    opacity: '1',
    [theme.breakpoints.down('md')]: {
      height: '20vw',
      borderLeft: 'none !important',
    },
  },
  activeTab: {
    border: '1px solid #4F4F4F',
    backgroundColor: 'transparent',
    borderRight: 'none',
    borderBottom: 'none',
    color: '#4F4F4F',
  },
  emptyTab: {
    border: 'none',
    borderBottom: '1px solid #4F4F4F',
    backgroundColor: 'transparent',
    pointerEvents: 'none',
  },
  tabPanel: {
    border: '1px solid #4F4F4F',
    borderTop: 'none',
    padding: '40px',
    [theme.breakpoints.down('md')]: {
      border: 'none',
      padding: '5%',
    },
    '@media (min-width:1537px)': {
      // width: '4vw',
    },
  },
  formBox: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
      '& div[class*="formHeader"]': {
        marginTop: '0px',
      },
    },
    '& div[class*="MuiFormControl"]': {
      height: '50px',
      '@media (min-width:1921px)': {
        height: '4.6vw',
      },
    },
    '& button': {
      marginTop: 'max(40px,0.2vw)',
      '@media (min-width:1921px)': {
        marginTop: '1.1vw',
      },
    },
  },
  optionsBox: {
    display: 'grid',
    display: 'none!important',
    gridTemplateColumns: 'repeat(2, 50%)',
    width: '100%',
    gridColumnGap: '40px',
    gridRowGap: '0',
    '@media (min-width:1921px)': {
      gridColumnGap: '2.1vw',
    },
    '@media (max-width:600px)': {
      padding: '0',
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
  optionsName: {
    textTransform: 'none',
    whiteSpace: 'nowrap',
  },
  calendarConteiner: {
    margin: 'max(20px,1vw) auto',
    width: '350px',
  },
  priceBox: {
    '@media (min-width:1537px)': {
      fontSize: 'max(28px,2vw) !important',
    },
  },
}));

export default function HousesGroup({
  data,
  lang,
  groupImage,
  houses,
  groupName,
  calendar,
}) {
  const classes = useStyles();
  const [value, setValue] = useState('0');
  const [selectDate, setSelectDate] = useState(null);
  const [currentOption, setCurrentOption] = useState({});
  const dates =
    calendar[
      calendar.findIndex(
        (house) =>
          house.name.replace('Дом ', '') ===
          houses[0].house_name.replace('Дом ', '')
      )
    ]?.house_calendar;
  const [unavailableDates, setUnavailableDates] = useState(dates);

  const handleChangeCheckbox = (event) => {
    setCurrentOption({
      ...currentOption,
      [event.target.name]: event.target.checked,
    });
  };

  const handleChange = (event, newValue) => {
    setUnavailableDates(
      calendar.find(
        (house) =>
          house.name.replace('Дом ', '') ===
          houses[newValue].house_name.replace('Дом ', '')
      )?.house_calendar
    );
    setValue(newValue);
  };

  const handleHouses = (houses) => {
    const newHowses = [...houses];
    newHowses.length = 5;

    return newHowses.fill({}, houses.length, 6);
  };

  return (
    <Box
      className={classes.comteiner}
      sx={{ width: '100%', typography: 'body1' }}
    >
      <Typography className={classes.title} variant='h2'>
        {groupName}:
      </Typography>
      <img
        style={{     
        maxWidth: '100%',
        marginTop: 'max(20px, 1.5vw)',
        marginBottom: 'max(30px, 1.5vw)',
        marginLeft: 'auto',
        marginLight: 'auto',
      }}
        className={classes.groupImage}
        src={getPublicPath(data, groupImage)}
        alt='icon'
      />
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            TabIndicatorProps={{
              style: { display: 'none' },
            }}
            onChange={handleChange}
            aria-label='houses tabs'
          >
            {handleHouses(houses).map((house, index) => {
              return (
                <Tab
                  className={`${classes.tab}
                    ${
                      !house.house_name
                        ? classes.emptyTab
                        : +value === index
                        ? classes.activeTab
                        : classes.tab
                    }
                  `}
                  style={{
                    borderLeft:
                      index === 0 ? '1px solid #4F4F4F' : '1px solid #d1d1d1',
                    borderRight:
                      house.house_name &&
                      !handleHouses(houses)[index + 1].house_name
                        ? '1px solid #4F4F4F'
                        : '1px solid #d1d1d1',
                  }}
                  key={index}
                  label={
                    house.house_name ? (
                      <Box className={classes.tabConteiner}>
                        <img
                          className={classes.houseIcon}
                          style={{
                            filter:
                              +value === index ? 'invert(0%)' : 'invert(100%)',
                          }}
                          src={getPublicPath(data, house.house_icon)}
                          alt='icon'
                        />
                        <Typography
                          variant='h3'
                          style={{
                            color: 'inherit',
                            fontWeight: '500',
                            textTransform: 'uppercase',
                            marginTop: 'max(12px,0.6vw)',
                            marginBottom: 'min(-12px,-0.6vw)', 
                          }}
                        >
                          {house.house_name.replace('Дом ', '')}
                        </Typography>
                      </Box>
                    ) : null
                  }
                  value={`${index}`}
                />
              );
            })}
          </TabList>
        </Box>
        {handleHouses(houses).map((house, index) => {
          return house.house_name ? (
            <TabPanel
              className={classes.tabPanel}
              key={index}
              value={`${index}`}
            >
              <Typography variant='body1'>
                {lang === 'EN'
                  ? `Choose a house number, suitable free dates for living, send an application and wait for the manager's response`
                  : `Выберите номер домика, подходящие свободные даты для проживания,
                    отправьте заявку и ожидайте ответа менеджера`}
              </Typography>

              <Box className={classes.calendarConteiner}>
                <MyCalendar
                  unavailableDates={unavailableDates}
                  setSelectDate={(date) => {
                    setSelectDate(date);
                  }}
                />
              </Box>

              <Box className={classes.formBox}>
                {/* <Box className={classes.optionsBox}> */}
                <Box>
                  {house.house_options
                    ? house.house_options
                        .filter((item) => item.published)
                        .map((item, index) =>
                          item.active ? (
                            <FormControlLabel
                              key={index}
                              onChange={handleChangeCheckbox}
                              name={item.name}
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
                              onChange={handleChangeCheckbox}
                              disabled
                              name={item.name}
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
                        )
                    : null}
                </Box>
                <Form
                  data={data}
                  endpoint={'https://formspree.io/f/mzbokwwy'}
                  extraFormFields={{
                    date: selectDate,
                    currentOption,
                    house: house.house_name,
                  }}
                  arenda={true}
                  sendDate={selectDate}
                  buttonText={lang === 'EN' ? 'book' : 'бронировать'}
                  lang={lang}
                  priceBlock={
                    <Typography variant='h3' className={classes.priceBox}>
                      <strong>{house.house_price} BYN</strong> /
                      {lang === 'EN' ? (
                        <span style={{ textTransform: 'none' }}> 1 night</span>
                      ) : (
                        <span style={{ textTransform: 'none' }}> 1 ночь</span>
                      )}
                    </Typography>
                  }
                />
              </Box>
              <Typography
                variant='body2'
                style={{ marginTop: 'max(40px,0.2vw)' }}
              >
                {lang === 'EN'
                  ? `When settling in several houses, book each one separately`
                  : `*При заселении в несколько домиков - бронировать каждый отдельно`}
              </Typography>
            </TabPanel>
          ) : null;
        })}
      </TabContext>
    </Box>
  );
}
