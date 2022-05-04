import React, { useMemo,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Form from './Form';
import MyCalendar from './MyCalendar';
import getData from '../utils/getData';
import FullScreenHouseSlider from './sliders/FullScreenHouseSlider';
import ContentBlock from './ContentBlock';
import getPublicPath from '../utils/getPublicPath';

const useStyles = makeStyles((theme) => ({
  BlockFullscreen: {
    position: 'relative',
    marginBottom: '120px',
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
    [theme.breakpoints.down('md')]: {
      marginTop: '40px',
      marginLeft: '0',
    },
    '@media (min-width:1921px)': {
      marginTop: '4.2vw',
      gap: '1.7vw',
    },
  },
  descBlockContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingLeft: '100px',
    gap: '32px',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '0',
    },
    '@media (min-width:1921px)': {
      paddingLeft: '5.2vw',
      gap: '1.7vw',
    },
  },
  descTitle: {
    fontSize: '38px',
    fontWeight: '600',
    '@media (min-width:1921px)': {
      fontSize: '2vw',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '28px',
    },
  },

  inviteTitleBox: {
    marginTop: '30px',
    width: '70%',
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
  iconsBlockConteiner: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(3, 33%)',
    rowGap: '28px',
    columnGap: '20px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)',
    },
  },
  iconBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  icon: {
    width: '60px',
    height: '60px',
  },
  calendar: {
    width: '18vw',
    minWidth: '240px',
    marginTop: 'auto',
    marginBottom: 'auto',
    flexShrink: '0',
    [theme.breakpoints.up('xl')]: {
      '& button':{
        fontSize:'1.02vw',
      },
      width: '18vw',
      height: 'fit-content',
    },
    [theme.breakpoints.down('md')]: {
      order: '1',
    },
  },
  calendarFormBox: {
    marginTop: '90px',
    display: 'flex',
    gap: '150px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
      alignItems: 'center',
      marginTop: '40px',
      gap: '60px',
      padding: '0 10%',
    },
  },
}));

const Watch = ({ data }) => {
  const [selectDate, setSelectDate] = useState(null);
  const classes = useStyles();
  const pageData = useMemo(() => getData(data.allMysqlArenda.nodes), [data]);
  const pageDataMainText =
    pageData.arenda_text.split('\n\r\n')?.length > 0
      ? pageData.arenda_text.split('\n\r\n')
      : pageData.arenda_text;

      console.log(JSON.stringify(selectDate))

  return (
    <Box components='main' className={classes.BlockFullscreen}>
      <FullScreenHouseSlider
        title={pageData.arenda_title}
        arr={pageData.arenda_gallery}
        data={data}
        mouseIcon={true}
        pagination={true}
      ></FullScreenHouseSlider>

      <Box className={classes.descBlock}>
        <Box className={classes.descBlockContent}>
          <Typography variant='h2' className={classes.descTitle}>
            {pageData.arenda_subtitle}
          </Typography>
          {Array.isArray(pageDataMainText) ? (
            pageDataMainText.map((article, index) => (
              <Typography variant='body1' key={index}>
                {article}
              </Typography>
            ))
          ) : (
            <Typography variant='body1'>{pageData.arenda_text}</Typography>
          )}
        </Box>
      </Box>

      <ContentBlock
        title={pageData.arenda_icon_title}
        leftColumnContent={
          <Box className={classes.textBlock}>
            <Typography variant='body1'>{pageData.arenda_icon_text}</Typography>
          </Box>
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
                <Typography variant='body1'>{item.name}</Typography>
              </Box>
            ))}
          </Box>
        }
      ></ContentBlock>

      <ContentBlock
        title={pageData.arenda_invite_title}
        leftColumnContent={
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
        }
        rightColumnContent={
          <Box className={classes.calendarFormBox}>
            <Box className={classes.calendar}>
              <MyCalendar selectDate={selectDate} setSelectDate={(date)=>{setSelectDate(date)}} />
            </Box>
            <Form endpoint={'https://formspree.io/f/mzbokwwy'} extraFormFields={{date:selectDate}} sendDate={selectDate}/>
          </Box>
        }
      ></ContentBlock>
    </Box>
  );
};
export default Watch;
