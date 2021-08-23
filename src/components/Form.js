import React, { useState, useEffect,useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import InputAdornment from "@material-ui/core/InputAdornment";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import SquareButton from "./buttons/SquareButton";
import RegularButton from "./buttons/RegularButton";
import ClearIcon from "@material-ui/icons/Clear";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
// import addToMailchimp from "gatsby-plugin-mailchimp";
import TextField from "@material-ui/core/TextField";

import { useForm, ValidationError } from "@formspree/react";
import { ContactsOutlined } from "@material-ui/icons";
import CircularProgress from '@material-ui/core/CircularProgress';

// import { useForm, ValidationError } from '@formspree/react';

const useStyles = makeStyles((theme) => ({
  Block: {
    display: "flex",
    gap: "20px",
    marginTop: "145px",
  },
  titleBoxMain: {
    marginLeft: "auto",
    display: "flex",
    gap: "20px",
    flexDirection: "row-reverse",
  },
  titleBox: {
    width: "70%",
    display: "flex",
  },
  line: {
    display: "inline-block",
    width: "75px",
    minWidth: "75px",
    height: "1px",
    backgroundColor: "black",
    marginTop: "10px",
  },
  formBox: {
    // position: "relative",
    height: (param) => (param.buttonAbs ? "100%" : "auto"),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minWidth: "300px",
    width: "22vw",
    [theme.breakpoints.down("md")]: {
      alignSelf: "center",
    },
  },
  formHeader: {
    [theme.breakpoints.down("md")]: {
      "& $titleBoxMain": {
        right: "-12%",
        position: "relative",
      },
    },
  },
  title: {
    textTransform: "uppercase",
    // width: "245px",
  },
  subtitle: {
    marginTop: "60px",
    width: "120px",
    // color: "#4F4F4F",
  },

  formFields: {
    marginTop: "60px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      marginTop: "10px",
    },
    field: {
      width: "100%",
    },
  },

  button: {
    position: (param) => (param.button ? "absolute" : "relative"),
    bottom: (param) => (param.button ? "0" : null),
    left: (param) => (param.button ? "0" : null),
    marginTop: "100px",
    [theme.breakpoints.down("md")]: {
      marginTop: "40px",
      display: "flex",
      justifyContent: "space-between",
    },
  },
  expodom_img: {
    width: "90%",
  },
  Expodom: {
    marginTop: "100px",
    "& .makeStyles-message-392": {
      color: "red",
    },
  },
  messageBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: "60px",
    width: "100%",
  },
  messageLabelBox: {
    display: "flex",
    justifyContent: "space-between",
    color: "#4F4F4F",
  },
  messageField: {
    // marginTop: "50px",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "1px solid #4F4F4F",
    marginTop: "10px",
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.h4.fontSize,
    "&:focus": {
      outline: "none",
    },
    // fontFamily:'Ubuntu',
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "radial-gradient(#E2E2E2,rgba(232, 232, 232, 0.12))",
    backdropFilter: "blur(10px)",
    boxShadow: theme.shadows[5],
    padding: "100px 120px",
    width: "600px",
    height: "500px",
  },
  buttonBox: {
    display: "inline-block",
    marginLeft: "auto",
  },
  buttonBoxLeft: {
    display: "inline-block",
    marginRight: "auto",
  },
}));

const Form = ({
  title,
  email,
  text,
  subtitle,
  buttonAbs,
  closeForm,
  inBurger,
  main,
}) => {
  const matches = {
    1920: useMediaQuery("(min-width:1920px)"),
    1200: useMediaQuery("(max-width:1200px)"),
  };
  const [button, setButton] = useState(buttonAbs);
  const [open, setOpen] = React.useState(false);
  const [emailText, setEmailText] = React.useState("");
  const [telText, setTelText] = React.useState("");
  const [nameText, setNameText] = React.useState("");
  const [messageText, setMessageText] = React.useState("");
  const param = { button, buttonAbs };
  const classes = useStyles(param);

  const checkAbsbutton = () => {
    setButton(matches[1200] ? false : buttonAbs);
  };
  useEffect(() => {
    checkAbsbutton();
  }, [matches]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("message submith");
  // };

  // const _handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const result = await addToMailchimp(emailText, {
  //     FNAME: nameText ?? "none",
  //     emailText: emailText ?? "none",
  //     telText: telText ?? "none",
  //     messageText: messageText ?? "none",
  //   });
  //   console.log('message send')
  //   console.log(result)
  // };
  const formRef = useRef(null);

  let [state, handleSubmit] = useForm("xgerpayy");
  useEffect(() => {
    if (state.succeeded && state.submitting && !open) {
      console.log(state);
      setOpen(true);
      console.log(formRef.current.reset);
      formRef.current.reset()
      }
  },[state]);
  

  return (
    <Box className={classes.formBox}>
      <Box className={classes.formHeader}>
        {title ? (
          !matches[1200] ? (
            <Typography variant="h5" className={classes.title}>
              {title}
            </Typography>
          ) : (
            <Box className={main ? classes.titleBoxMain : classes.titleBox}>
              {main ? <span className={classes.line}></span> : null}
              <Typography variant="h4" className={classes.text}>
                {title}
              </Typography>
            </Box>
          )
        ) : null}
        {subtitle ? (
          <Typography variant="body1" className={classes.subtitle}>
            Оставьте заявку и наш менеджер свяжеться с вами
          </Typography>
        ) : null}
      </Box>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={classes.root}
        // noValidate
        autoComplete="off"
        method="POST"
        action="https://formspree.io/f/xgerpayy"
      >
        <Box className={classes.formFields}>
          <TextField
            className={classes.field}
            onChange={handleChangeName}
            value={nameText}
            //   required
            id="name"
            name="name"
            label={<Typography variant="body2">Имя</Typography>}
            // InputProps={{
            //   endAdornment: <InputAdornment position="end">*</InputAdornment>,
            // }}
          />
          {/* For ditection of bots */}
          <input type="text" name="_gotcha" style={{display : "none"}} />
          <TextField
            className={classes.field}
            onChange={handleChangeTel}
            value={telText}
            // InputProps={{
            //   endAdornment: <InputAdornment position="end">*</InputAdornment>,
            // }}
            id="phone"
            name="phone"
            label={<Typography variant="body2">Телефон</Typography>}
            // validators={["isNumber"]}
            // errorMessages={["telefon incorrect"]}
          />
          {email ? (
            <>
              <TextField
                className={classes.field}
                id="email"
                type="email"
                name="email"
                label={<Typography variant="body2">Email</Typography>}
                onChange={handleChangeEmail}
                value={emailText}
                
                // validators={["required", "isEmail"]}
                // errorMessages={["this field is required", "email is not valid"]}
                // InputProps={{
                //   endAdornment: (
                //     <InputAdornment position="end">*</InputAdornment>
                //   ),
                // }}
              />
              <ValidationError field="email" prefix="Email" errors={state.errors} />
              {/* <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              /> */}
            </>
          ) : null}
        </Box>
        {text ? (
          <Box className={classes.messageBox}>
            <Box className={classes.messageLabelBox}>
              <Typography variant="body1">
                Оставьте заявку и наш менеджер свяжеться с вами
              </Typography>
              <div>*</div>
            </Box>
            {/* <TextField className={classes.messageField} id="standard-basic" /> */}
            <textarea
              id="message"
              name="message"
              value={messageText}
              onChange={handleChangeMessage}
              // rowsMin={3}
              className={classes.messageField}

              // aria-label="empty textarea"
              // placeholder="Empty"
            />
            {/* <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            /> */}
          </Box>
        ) : null}

        <Box className={classes.button}>
          <RegularButton
            submit={true}
            disabled={state.submitting}
            variant="outlined"
            click={state.succeeded? handleOpen: null}
          >
            Отправить
          </RegularButton>
          {inBurger ? (
            <RegularButton variant="outlined" click={closeForm}>
              Назад
            </RegularButton>
          ) : null}
        </Box>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          {state.submitting? <CircularProgress color="secondary"/> :
          <Fade in={open}>
            <div className={classes.paper}>
              <Box className={classes.buttonBox}>
                <SquareButton
                  variant="outlined"
                  click={handleClose}
                  icon={<ClearIcon />}
                />
              </Box>
              <Typography>
                СПАСИБО, ЧТО ВОСПОЛЬЗОВАЛИСЬ УСЛУГАМИ НАШЕЙ КОМПАНИИ
              </Typography>
              <Typography variant="body1">
                Никто ни за что ответственность не несет
              </Typography>
              <Box className={classes.buttonBoxLeft}>
                <RegularButton variant="outlined" click={handleClose}>
                  ОК
                </RegularButton>
              </Box>
            </div>
          </Fade>}
        </Modal>
      </form>
    </Box>
  );
};
export default Form;
