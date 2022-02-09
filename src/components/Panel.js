import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  panel: {
    position: 'absolute',
    right: '0',
    bottom: '0',
    minWidth:'50.8vw',
    height: '76px',
    paddingLeft: '50px',
    backgroundColor: '#D1D1D1',
    '@media (min-width:1921px)': {
      height: '3.96vw',
      paddingLeft: '2.6vw',
    },
  },
  tabs: {
    height: '56px',
    borderBottom: '1.5px solid #BDBDBD',
    overflow: 'visible',
    '@media (min-width:1921px)': {
      height: '2.9vw',
    },
    '&>div': {
      boxSizing: 'border-box',
      overflow:"visible !important",
    },
    '&>div>div': {
      height: '100%',
      overflow:"visible",
    },
    '&>div>span': {
      bottom:"-4%"
    },
  },
  tab: {
    padding: '0',
    paddingRight: '20px',
    '@media (min-width:1921px)': {
      paddingRight: '1.1vw',
    },
    '& span': {
      display: 'flex',
      alignItems: 'center',
      height: 'auto',
      '& h6': {
        alignSelf: 'flex-start',
      },
    },
  },
}));

const Panel = React.forwardRef(({ change, arr }, ref) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue((state) => newValue);
    change(arr[newValue].name);
  };
  const listItem = arr.map((item, index) => {
    return (
      <Tab
        className={classes.tab}
        key={index}
        label={
          <Typography variant='h6' color='textPrimary'>
            {' '}
            {item['Название модуля']}{' '}
          </Typography>
        }
      ></Tab>
    );
  });
  return (
    <Box className={classes.panel}>
      <Tabs
        className={classes.tabs}
        ref={ref}
        value={value}
        indicatorColor='primary'
        textColor='primary'
        onChange={handleChange}
        aria-label='disabled tabs example'
      >
        {listItem}
      </Tabs>
    </Box>
  );
});

export default Panel;
