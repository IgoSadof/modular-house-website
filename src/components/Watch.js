import "./css/global.css";
import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import StaticPanel from "./StaticPanel";
import Form from "./Form";
import MyCalendar from "./MyCalendar";
import { houses } from "../constant/houses";
import HouseFotosSlider from "./HouseFotosSlider";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const useStyles = makeStyles((theme) => ({
  imageSlider: {
    position: "relative",
  },
  excursion: {
    display: "flex",
    justifyContent: "space-between",
    height: "50vh",
    padding: "8vh 10% 8vh 18%",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 10%",
      height: "auto",
      gap: "30px",
    },
  },
  excursionText: {
    width: "90%",
    marginRight: "auto",
  },

  excursionSend: {
    position: "relative",
    width: "60%",
    display: "flex",
    gap: "30%",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      gap: "30px",
      order: "2",
    },
  },
  formBox: {
    marginLeft: "auto",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  calendar: {
    width: "260px",
    height: "240px",
    marginTop: "auto",
    marginBottom: "auto",
    [theme.breakpoints.up("xl")]: {
      width: "18vw",
      height: "fit-content",
    },
    [theme.breakpoints.down("md")]: {
      order: "1",
    },
  },
  mainImg: {
    position: "relative",
    width: "100%",
    height: "50vh",
    objectFit: "cover",
    objectPosition: "bottom",
  },
}));

const Watch = () => {
 const breakpoints = useBreakpoint();
  const [category, setCategory] = React.useState("все");
  const param = {};
  const classes = useStyles(param);

  const handleChangePanel = (value) => {
    setCategory(value);
  };
  const categoryRef = React.createRef();
  const listItem = houses[0].img.fotosCategory[category].map((item, index) => {
    return (
      <li key={index}>
        <img className={classes.mainImg} src={item} alt="img"></img>
      </li>
    );
  });

  return (
    <Box components="main"  className={classes.BlockFullscreen}>
      <Box components="section"  className={classes.imageSlider}>
        <HouseFotosSlider listItem={listItem} />
        {breakpoints.md ? null : (
          <StaticPanel ref={categoryRef} change={handleChangePanel} />
        )}
      </Box>
      <Box components="section"  className={classes.excursion}>
        {breakpoints.md ? (
          <Typography className={classes.excursionText} variant="subtitle1">
            Оставьте заявку и наш менеджер свяжеться с вами
          </Typography>
        ) : null}
        <Box className={classes.excursionSend}>
          {breakpoints.md ? null : (
            <Typography variant="h5">На экскурсию</Typography>
          )}
          <Box className={classes.formBox}>
            {!breakpoints.md ? (
              <Form
                title="Оставьте заявку и наш менеджер свяжеться с вами"
                buttonAbs={true}
              />
            ) : (
              <Form/>
            )}
          </Box>
        </Box>

        <Box className={classes.calendar}>
          <MyCalendar />
        </Box>
      </Box>
    </Box>
  );
};
export default Watch;
