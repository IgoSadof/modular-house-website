import React, { useState, useRef, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SquareButton from './buttons/SquareButton';
import RegularButton from './buttons/RegularButton';
import ClearIcon from '@material-ui/icons/Clear';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import TextField from '@material-ui/core/TextField';
import { customFontsSize } from '../config/modularHouseTheme';
import getData from '../utils/getData';

import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  Block: {
    display: 'flex',
    '& > * + * ': {
      marginLeft: '20px',
    },
    marginTop: '145px',
    '@media (min-width:1920px)': {
      '& > * + * ': {
        marginLeft: '1.4vw',
      },
      marginTop: '10vw',
    },
  },
  titleBoxMain: {
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'row-reverse',
    '& > * + * ': {
      marginLeft: '0',
      marginRight: '20px',
    },
  },
  titleBox: {
    width: '70%',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginTop: '0',
      '& p': {
        fontSize: '18px',
      },
    },
  },
  line: {
    display: 'inline-block',
    width: '4.2vw',
    height: '1px',
    backgroundColor: 'black',
    marginTop: 'auto',
    marginBottom: '4px',
  },
  formBox: {
    width: '100%',
    // position: "relative",
    height: (param) => (param.buttonAbs ? '100%' : 'auto'),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: (param) => (param.arenda ? 'null' : 'space-between'),
    minWidth: '300px',
    marginTop: (param) => (param.arenda ? '20px' : '0'),
    '& form': {
      [theme.breakpoints.down('md')]: {
        // marginTop:"20px",
      },
    },
    '& h3': {
      fontSize: customFontsSize.h4.regular,
      lineHeight: '1.4',
      '@media (min-width:1921px)': {
        fontSize: customFontsSize.h4.adaptiv,
      },
    },

    [theme.breakpoints.down('md')]: {
      alignSelf: 'center',
      width: '100%',
      // padding: '0 10%',
    },
  },
  formHeader: {
    [theme.breakpoints.down('md')]: {
      marginTop: '60px',
      '& $titleBoxMain': {
        right: '-12%',
        position: 'relative',
      },
      '& span': {
        width: '100px',
      },
      '& p': {
        textTransform: 'uppercase',
      },
    },
  },
  title: {
    textTransform: 'none',
  },
  subtitle: {
    width: '200px',
    marginTop: '60px',
    '@media (min-width:1921px)': {
      width: '13.9vw',
      //marginTop: '4.2vw',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '30px',
    },
  },

  formFields: {
    marginTop: (param) => (param.arenda ? '0' : '60px'),

    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '@media (min-width:1921px)': {
      marginTop: (param) => (param.arenda ? '0' : '3.2vw'),
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '10px',
    },
    field: {
      width: '100%',
      height: '82px !important',
    },
  },

  button: {
    position: (param) => (param.button ? 'absolute' : 'relative'),
    bottom: (param) => (param.button ? '2vw' : null),
    left: (param) => (param.button ? '0' : null),
    marginTop: (param) => (param.text ? '40px' : null),
    [theme.breakpoints.down('md')]: {
      marginTop: (param) => (param.text ? '40px' : '20px'),
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  expodom_img: {
    width: '90%',
  },
  Expodom: {
    marginTop: '100px',
    '& .makeStyles-message-392': {
      color: 'red',
    },
  },
  messageBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
  messageLabelBox: {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#4F4F4F',
  },
  messageField: {
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid #4F4F4F',
    marginTop: '10px',
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.body1.fontSize,
    '@media (min-width:1921px)': {
      fontSize: theme.typography.fontSize * customFontsSize.xl,
    },
    '&:focus': {
      outline: 'none',
    },
    '&:hover, &:focus': {
      transition: 'border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      borderBottom: '2px solid rgba(0, 0, 0, 0.87)',
      marginBottom: '-1px',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: 'radial-gradient(#E2E2E2,rgba(232, 232, 232, 0.12))',
    backdropFilter: 'blur(10px)',
    boxShadow: theme.shadows[5],
    padding: '100px 120px',
    width: '42vw',
    height: '35vw',
    [theme.breakpoints.down('md')]: {
      width: '90%',
      height: '54%',
      padding: '50px',
    },
  },
  buttonBox: {
    display: 'inline-block',
    marginLeft: 'auto',
  },
  buttonBoxLeft: {
    display: 'inline-block',
    marginRight: 'auto',
  },
}));

const Form = ({
  data,
  title,
  email,
  text,
  subtitle,
  closeForm,
  inBurger,
  main,
  buttonAbs,
  id,
  buttonText,
  endpoint,
  extraFormFields,
  sendDate,
  arenda,
  lang,
  priceBlock = false,
}) => {
  const breakpoints = useBreakpoint();
  const [button] = useState(buttonAbs);
  const [openModal, setOpenModal] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [emailText, setEmailText] = useState('');
  const [telText, setTelText] = useState('');
  const [nameText, setNameText] = useState('');
  const [messageText, setMessageText] = useState('');
  const [formProcessing, setFormProcessing] = useState(true);
  const param = { button, buttonAbs, text, arenda };
  const classes = useStyles(param);
  const formRef = useRef(null);
  const handleClose = () => {
    setOpenModal(false);
    setOpenPopup(false);
    setNameText('');
    setEmailText('');
    setMessageText('');
    setTelText('');
  };
  const handleChangeEmail = (e) => {
    const myemail = e.target.value;
    setEmailText(myemail);
  };
  const handleChangeTel = (e) => {
    const mytel = e.target.value;
    setTelText(mytel);
  };
  const handleChangeName = (e) => {
    const name = e.target.value;
    setNameText(name);
  };
  const handleChangeMessage = (e) => {
    const message = e.target.value;
    setMessageText(message);
  };

  const handleSubmit = async (event) => {
    setOpenModal(true);
    setFormProcessing(true);

    event.preventDefault();

    let data = {
      ...extraFormFields,
      Имя: nameText,
      Телефон: telText,
      email: emailText,
      Сообщение: messageText,
      // 'Таблица': '<h1>Hello world</h1>'
    };

    fetch(event.target.action, {
      method: event.target.method,
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        // console.log(response);
        setFormProcessing(false);
        setOpenPopup(true);
      })
      // .then(() => {
      //   if (sendDate) {
      //     fetch('https://modhouse.herokuapp.com/dates', {

      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/json;charset=utf-8'
      //       },
      //       body: JSON.stringify(sendDate),
      //     });
      //   }
      // })
      .catch((error) => {
        setFormProcessing(false);
        setOpenModal(false);
        // console.log(error);
      });
  };

  // const dataContacts = useMemo(
  //   () => getData(data.allMysqlContacts.nodes),
  //   [data]
  // );
  let dataContacts = useMemo(
    () => ({
      EN: getData(data.allMysqlContactsEn.nodes),
      RU: getData(data.allMysqlContacts.nodes),
    }),
    [data, lang]
  );
  // console.log(dataContacts);

  return (
    <Box className={classes.formBox}>
      <Box className={classes.formHeader}>
        {title ? (
          !breakpoints.md ? (
            <Typography variant='h5' component='h3' className={classes.title}>
              {title}
            </Typography>
          ) : (
            <Box className={main ? classes.titleBoxMain : classes.titleBox}>
              {main ? <span className={classes.line}></span> : null}
              <Typography variant='h6' component='p' className={classes.title}>
                {title}
              </Typography>
            </Box>
          )
        ) : null}
        {subtitle ? (
          <Typography variant='body1' className={classes.subtitle}>
            {typeof subtitle === 'string'
              ? subtitle
              : lang === 'EN'
              ? 'Leave a request and our manager will contact you'
              : 'Оставьте заявку и наш менеджер свяжеться с вами'}
          </Typography>
        ) : null}
      </Box>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={classes.root}
        // noValidate
        autoComplete='off'
        method='POST'
        action={endpoint ? endpoint : 'https://formspree.io/f/xoqrqjnd'}
      >
        <Box className={classes.formFields}>
          <TextField
            className={classes.field}
            onChange={handleChangeName}
            value={nameText}
            required
            id={`name-${id ? id : '0'}`}
            name='name'
            label={
              <Typography variant='body2'>
                {lang === 'EN' ? 'Name' : 'Имя'}
              </Typography>
            }
          />

          {/* For ditection of bots */}
          <input
            type='text'
            name='_gotcha'
            style={{ display: 'none' }}
            className={classes.field}
          />
          <TextField
            className={classes.field}
            onChange={handleChangeTel}
            value={telText}
            id={`phone-${id ? id : '0'}`}
            name='phone'
            type='tel'
            label={
              <Typography variant='body2'>
                {lang === 'EN' ? 'Phone number' : 'Телефон'}{' '}
              </Typography>
            }
            // validators={["isNumber"]}
            // errorMessages={["telefon incorrect"]}
          />
          {email ? (
            <>
              <TextField
                className={classes.field}
                id={`email-${id ? id : '0'}`}
                type='email'
                name='email'
                required
                label={<Typography variant='body2'>Email</Typography>}
                onChange={handleChangeEmail}
                value={emailText}
                // validators={["required", "isEmail"]}
                // errorMessages={["this field is required", "email is not valid"]}
              />
            </>
          ) : null}
        </Box>
        {text ? (
          <Box className={classes.messageBox}>
            <label htmlFor={`message-${id ? id : '0'}`}>
              <Box className={classes.messageLabelBox}>
                <Typography variant='body2'>
                  {lang === 'EN' ? 'Message...' : 'Сообщение...'}
                </Typography>
                <div>*</div>
              </Box>

              <textarea
                id={`message-${id ? id : '0'}`}
                name='message'
                value={messageText}
                rows='5'
                onChange={handleChangeMessage}
                style={{ width: '100%' }}
                className={classes.messageField}
              />
            </label>
          </Box>
        ) : null}

        <Box className={classes.button}>
          {arenda ? (
            <Box style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'flex-end'}}>
              {priceBlock}
              <RegularButton submit={true} variant='outlined' lowerCase={true}>
                {buttonText ? buttonText : lang === 'EN' ? 'Send' : 'Отправить'}
              </RegularButton>
            </Box>
          ) : (
            <RegularButton submit={true} variant='outlined' lowerCase={true}>
              {buttonText ? buttonText : lang === 'EN' ? 'Send' : 'Отправить'}
            </RegularButton>
          )}

          {inBurger ? (
            <RegularButton variant='outlined' click={closeForm}>
              {lang === 'EN' ? 'Back' : 'Назад'}
            </RegularButton>
          ) : null}
        </Box>
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          className={classes.modal}
          open={openModal}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          {formProcessing ? (
            <CircularProgress color='secondary' />
          ) : (
            <Fade in={openPopup}>
              <div className={classes.paper}>
                <Box className={classes.buttonBox}>
                  <SquareButton
                    variant='outlined'
                    click={handleClose}
                    icon={<ClearIcon />}
                  />
                </Box>
                <Typography>
                  {dataContacts.popup_title
                    ? dataContacts.popup_title
                    : lang === 'EN'
                    ? 'THANK YOU FOR CONTACTING US!'
                    : 'СПАСИБО, ЗА ОБРАЩЕНИЕ!'}
                </Typography>
                <Typography variant='body1'>
                  {dataContacts.popup_text
                    ? dataContacts.popup_text
                    : lang === 'EN'
                    ? 'Our specialist will contact you shortly'
                    : 'Наш специалист свяжется с Вами в ближайшее время'}
                </Typography>
                <Box className={classes.buttonBoxLeft}>
                  <RegularButton variant='outlined' click={handleClose}>
                    ОК
                  </RegularButton>
                </Box>
              </div>
            </Fade>
          )}
        </Modal>
      </form>
    </Box>
  );
};
export default Form;
