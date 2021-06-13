import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  Block: {
    display: "flex",
    gap: "20px",
    marginTop: "145px",
  },
  line: {
    display: "inline-block",
    width: "75px",
    height: "1px",
    backgroundColor: "black",
    marginTop: "10px",
  },
  formBox: {
    // position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "285px",
  },
  formHeader: {
    // marginTop: "140px",
  },
  title: {
    textTransform: "uppercase",
    width: "245px",
  },
  subtitle: {
    fontSize: "12px",
    marginTop: "60px",
    width: "120px",
    color: "#4F4F4F",
  },

  formFields: {
    marginTop: "60px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  button: {
    position: param => param.button? 'absolute':'relative',
    bottom: param => param.button? '0':null,
    left: param => param.button? '0':null,

    width: "120px",
    borderRadius: "0",
    height: "36px",
    marginTop: "100px",
    border: "1px solid",
  },
  expodom_img: {
    width: "100%",
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
  messageLabel: {
    fontSize: "11px",
  },
  messageField: {
    marginTop: "50px",
  },
}));

const Form = ({ title, email, text, subtitle,buttonAbs}) => {
  const [button, setButton] = useState(buttonAbs);
  const param = {button};
  const classes = useStyles(param);

  return (
      <Box className={classes.formBox}>
        <Box className={classes.formHeader}>
          {title?(<Typography className={classes.title}>
            {title}
          </Typography>):null}
          {subtitle ? (
            <Typography className={classes.subtitle}>
              Оставьте заявку и наш менеджер свяжеться с вами
            </Typography>
          ) : null}
        </Box>

        <form className={classes.root} noValidate autoComplete="off">
          <Box className={classes.formFields}>
            <TextField
              //   required
              id="standard-basic"
              label="Имя"
              InputProps={{
                endAdornment: <InputAdornment position="end">*</InputAdornment>,
              }}
            />
            <TextField
              InputProps={{
                endAdornment: <InputAdornment position="end">*</InputAdornment>,
              }}
              id="standard-basic"
              label="Телефон"
            />
            {email ? (
              <TextField
                id="standard-basic"
                label="Email"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">*</InputAdornment>
                  ),
                }}
              />
            ) : null}
          </Box>
          {text ? (
            <Box className={classes.messageBox}>
              <Box className={classes.messageLabelBox}>
                <Typography className={classes.messageLabel}>
                  Оставьте заявку и наш менеджер свяжеться с вами
                </Typography>
                <div>*</div>
              </Box>
              <TextField className={classes.messageField} id="standard-basic" />
            </Box>
          ) : null}
          {/* {!button === false? (<Button className={classes.button} variant="outlined">
            Отправить
          </Button>):null } */}

          <Button className={classes.button} variant="outlined">
            Отправить
          </Button>
        </form>
      </Box>
  );
};
export default Form;
