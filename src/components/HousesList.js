import "../components/global.css";
import React, { useRef, useState, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link } from "gatsby";
import RegularButton from "./buttons/RegularButton";
import ModelsSlider from "./sliders/ModelsSlider";
import HouseMainImgSlider from "./sliders/HouseMainImgSlider";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import getHousesData from "../utils/getHousesData";
import { GatsbyImage } from "gatsby-plugin-image";
import { SwiperSlide } from "swiper/react";
import getImg from "../utils/getImg";

const style = {
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};
const useStyles = makeStyles((theme) => ({
  Block: {
    position: "relative",
    display: "flex",
    paddingLeft: "10%",
    backgroundColor: "#D1D1D1",
    overflow: "hidden",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      padding: "0%",
    },
  },
  button: {
    position: "absolute",
    top: "5%",
    right: "10%",
    zIndex: "2",
    transition: "0.5s",
    [theme.breakpoints.down("md")]: {
      transform: "scale(0.55)",
      top: "55%",
      right: "0",
      opacity: "1",
      left: "-15%",
    },
  },
  houseListBlock: {
    width: "10vw",
    flexShrink: "0",
    borderRight: "1px solid",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      borderRight: "none",
      padding: "0",
      marginBottom:"20px",
    },
  },
  houseList: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    padding: "0",
    justifyContent: "space-around",
    alignItems: "center",
    // gap: "40px",
  },
  houseListItem: {
    width: "100%",
    height: "10vw",
    minHeight: "140px",
    position: "relative",
    cursor: "pointer",
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    border: "none",
    background: "none",
    [theme.breakpoints.down("md")]: {
      transform: "scale(0.7)",
      top: "20px",
      width: "120px",
    },
  },
  houseListItemActive: {
    [theme.breakpoints.down("md")]: {
      transform: "scale(1.2)",
    },
  },
  houseListNumber: {
    position: "absolute",
    zIndex: "0",
    top: "-7%",
    fontSize: (param) => (param.breakpoints.xl ? "72px" : "64px"),
    margin: "auto",
    color: "#E0E0E0",
    transition: "1s",
    "@media (min-width:1920px)": {
      fontSize: "5vw !important",
    },
  },
  houseListActiveNumber: {
    top: "15%",
    color: "#FFFFFF",
    transition: "1s",
    [theme.breakpoints.down("md")]: {
      opacity: "0",
    },
  },
  houseListImg: {
    position: "absolute",
    left: "10%",
    top: "15%",
    zIndex: "2",
    width: "100%",
    
    transition: "0.5s",
    [theme.breakpoints.down("md")]: {
      maxWidth: "150px",
      width: "80%",
      top: "10%",
    },
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      top: "20%",
    },
  },
  houseListImgActive: {
    top: "0%",
  },
  houseListName: {
    position: "relative",
    // left: "10%",
    top: "-0.7vw",
    marginBottom: "10px",
    zIndex:"2",
    "@media (min-width:1920px)": {
      marginBottom: "0.7vw",
      fontSize:"1vw"
    },
  },
  houseDesc: {
    display: "flex",
    width: "42%",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: "20px",
      padding: "4% 10%",
      height: "auto",
    },
  },
  houseDescContent: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "100%",
    height: "90%",
    padding: "0 60px",
    justifyContent: "space-between",
    "@media (min-width:1921px)": {
      padding: "0 4.2vw",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0",
      order: "2",
    },

    // gap: "40px",
  },
  houseDescImgBox: {
    position: "relative",
    width: "100%",
    height: "28vh",
    "& picture img": {
      objectFit: "contain !important",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    // height: "350px",
  },
  houseDescImg: {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  houseDescTitleBox: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  houseDescTitleBoxMobile: {
    position: "absolute",
    justifyContent: "space-around",
    bottom: "0",
    zIndex: "1",
  },
  houseDescTitle: {
    textTransform:"uppercase",
    fontSize: "48px",
    lineHeight: "1.2",
    "@media (min-width:1920px)": {
      fontSize: "3.3vw",
    },
    [theme.breakpoints.down("md")]: {
      color: "#F2F2F2",
      fontSize: "44px",
    },
  },
  houseDescIconBox: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems:"center",
      width: "100px",
      objectFit: "contain",
      height: "85px",
    },
  },
  mainPlan: {
    width: "40px",
    height: "40px",
    "@media (min-width:1920px)": {
      width: "2.8vw",
      height: "2.8vw",
    },
    [theme.breakpoints.down("md")]: {
      objectFit: "contain",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  houseDescText: {
    margin: "40px 0",
    overflowY: "auto",
    maxHeight: "20vh",
    lineHeight: "1.6",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  houseDescSpecBox: {
    ...style.flex,
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      flexDirection: "column",
      alignItems: "normal",
    },
  },
  houseDescSpec: style.flexColumn,
  houseDescSpecOne: style.flex,
  "& p": {
    minWidth: "50px",
  },
  houseDescMore: { ...style.flex, marginTop: "40px" },
  houseDescPrice: style.flexColumn,
  "& p": {
    lineHeight: "1.6",
  },
  houseSpecPrice: {
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      color: "white",
    },
  },
  Link: {
    textDecoration: "none",
  },

  houseImg: {
    position: "relative",
    width: "44vw",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100%",
    },
  },
  mainImg: {
    width: "100%",
    objectFit: "cover",
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      padding: "0",
      height: "95vh",
    },
  },
}));

const HousesList = ({ data }) => {
  const dataHouses = useMemo(() => getHousesData(data), [data]);

  const breakpoints = useBreakpoint();
  const [house, setHouse] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [animation] = useState(true);
  const param = { breakpoints };
  const classes = useStyles(param);

  const handleItemclick = (index) => {
    setHouse((state) => index);
    myRef.current.slickGoTo(index);
    setActiveSlide(index);
  };
  const scrollOff = (e) => {
    document.body.style.overflow = "hidden";
  };
  const scrollOn = (e) => {
    document.body.style.overflow = "inherit";
  };
  const myRef = useRef(null);
  const houseSliderRef = useRef(null);
  const listItem = dataHouses.map((item, index) => {
    return (
      <SwiperSlide key={item.id}>
        <div
          role="link"
          tabIndex="0"
          className={
            activeSlide === index
              ? `${classes.houseListItem} ${classes.houseListItemActive}`
              : classes.houseListItem
          }
          onClick={() => handleItemclick(index)}
          onKeyDown={() => handleItemclick(index)}
        >
          <Typography
            className={
              activeSlide === index
                ? `${classes.houseListNumber} ${classes.houseListActiveNumber}`
                : classes.houseListNumber
            }
          >{`0${index + 1}`}</Typography>
          {!breakpoints.md ? (
            !(activeSlide === index) ? (
              <>
                <CSSTransition
                  key={item.id}
                  in={true}
                  appear={true}
                  timeout={500}
                  classNames="houseMove"
                >
                  <GatsbyImage
                    className={classes.houseListImg}
                    image={getImg(
                      data,
                      `${item["Иконка дома"].substr(
                        item["Иконка дома"].search(/images\//)
                      )}`
                    )}
                    alt="img"
                  ></GatsbyImage>
                </CSSTransition>
                <Typography
                  variant="subtitle1"
                  className={classes.houseListName}
                >
                  {item["Код"]}
                </Typography>
              </>
            ) : null
          ) : (
            <>
              <CSSTransition
                key={item.id}
                in={true}
                appear={true}
                timeout={500}
                classNames="houseMoveMobile"
              >
                <GatsbyImage
                  className={
                    activeSlide === index
                      ? `${classes.houseListImg} ${classes.houseListImgActive}`
                      : classes.houseListImg
                  }
                  image={getImg(
                    data,
                    `${item["Иконка дома"].substr(
                      item["Иконка дома"].search(/images\//)
                    )}`
                  )}
                  alt="img"
                ></GatsbyImage>
              </CSSTransition>
              {activeSlide === index ? (
                <Box className={classes.button}>
                  <Link
                    className={classes.Link}
                    to={`model${dataHouses[house]["URL"].toUpperCase()}`}
                    aria-label={`model ${item["URL"]}`}
                  >
                    <RegularButton variant="outlined" lowerCase="true">Подробнее</RegularButton>
                  </Link>
                </Box>
              ) : null}

              {!(activeSlide === index) ? (
                <Typography
                  variant="subtitle1"
                  className={classes.houseListName}
                >
                  {item["Код"]}
                </Typography>
              ) : null}
            </>
          )}
        </div>
      </SwiperSlide>
    );
  });

  const listMainImages = dataHouses.map((item, index) => {
    return (
      <li className={classes.mainImg} key={index}>
        <GatsbyImage
          className={classes.mainImg}
          image={getImg(
            data,
            `${item["Баннер"].substr(item["Баннер"].search(/images/))}`
          )}
          alt="img"
        ></GatsbyImage>
        {/* <div className={classes.mainImg} style={{ backgroundImage: `url(${item.img.main})` }}></div> */}
      </li>
    );
  });

  return (
    <Box components="main" className={classes.Block}>
      <Box
        components="section"
        className={classes.houseListBlock}
        // onWheel={handleScrol}
        onMouseOver={scrollOff}
        onMouseOut={scrollOn}
        onClick={scrollOn}
      >
        <ModelsSlider
          houseRef={houseSliderRef}
          listItem={listItem}
          mobile={breakpoints.md}
        />
      </Box>
      <Box components="section" className={classes.houseDesc}>
        <Box className={classes.houseDescContent}>
          <TransitionGroup className={classes.houseDescImgBox}>
            <CSSTransition
              in={animation}
              key={activeSlide}
              appear={true}
              timeout={2000}
              classNames="fadeHouse"
            >
              {/* <Fade inProp={animation}> */}
              <GatsbyImage
                // ref={element}
                className={classes.houseDescImg}
                image={getImg(
                  data,
                  `${dataHouses[house]["Иконка дома"].substr(
                    dataHouses[house]["Иконка дома"].search(/images\//)
                  )}`
                )}
                alt="img"
              ></GatsbyImage>
              {/* </Fade> */}
            </CSSTransition>
          </TransitionGroup>

          {!breakpoints.md ? (
            <Box className={classes.houseDescTitleBox}>
              <Typography
                variant="h1"
                color="textSecondary"
                className={classes.houseDescTitle}
              >
                {dataHouses[house]["Код"]}
              </Typography>
              <Box className={classes.houseDescIconBox}>
                <GatsbyImage
                  className={classes.mainPlan}
                  image={getImg(
                    data,
                    `${dataHouses[house]["Иконка планировки"].substr(
                      dataHouses[house]["Иконка планировки"].search(/images/)
                    )}`
                  )}
                  alt="img"
                ></GatsbyImage>
              </Box>
            </Box>
          ) : null}

          <Typography variant="body1" className={classes.houseDescText}>
            {dataHouses[house]["Описание"]}
          </Typography>

          <Box className={classes.houseDescSpecBox}>
            <Box className={classes.houseDescSpec}>
              <Box className={classes.houseDescSpecOne}>
                <Typography
                  variant="body1"
                  className={classes.houseDescSpecName}
                >
                  {/* {houses[house].totalAreaText} */}
                  Общая площадь:
                </Typography>
                <Typography variant="h6" component="p" className={classes.houseSpecValue}>
                  {dataHouses[house].countArea(
                    dataHouses[house].modules,
                    "Площадь общая"
                  )}{" "}
                  m<sup>2</sup>
                  {/* {houses[house].totalArea} */}
                </Typography>
              </Box>
              <Box className={classes.houseDescSpecOne}>
                <Typography
                  variant="body1"
                  className={classes.houseDescSpecName}
                >
                  {/* {houses[house].effectiveAreaText} */}
                  Эффективная площадь:
                </Typography>
                <Typography variant="h6" component="p"className={classes.houseSpecValue}>
                  {/* {houses[house].effectiveArea} */}
                  {dataHouses[house].countArea(
                    dataHouses[house].modules,
                    "Площадь полезная"
                  )}{" "}
                  m<sup>2</sup>
                </Typography>
              </Box>
            </Box>

            <Box className={classes.houseDescSpec}>
              <Box className={classes.houseDescSpecOne}>
                <Typography
                  variant="body1"
                  className={classes.houseDescSpecName}
                >
                  Этажность:
                </Typography>
                <Typography variant="h6" component="p" className={classes.houseSpecValue}>
                  {dataHouses[house]["Этажность"] ?? 1}
                </Typography>
              </Box>
              <Box className={classes.houseDescSpecOne}>
                <Typography
                  variant="body1"
                  className={classes.houseDescSpecName}
                >
                  Cтадии роста:
                </Typography>
                <Typography variant="h6" component="p" className={classes.houseSpecValue}>
                  {dataHouses[house]["modules"]?.length}
                </Typography>
              </Box>
            </Box>
          </Box>
          {breakpoints.md ? null : (
            <>
              <Box className={classes.houseDescMore}>
                <Box className={classes.houseDescPrice}>
                  <Typography
                    variant="body1"
                    className={classes.houseSpecValue}
                  >
                    Стоимость всех модулей:
                  </Typography>
                  <Typography variant="h5" className={classes.houseSpecPrice}>
                    {/* {houses[house].price} */}
                    {dataHouses[house].countArea(
                      dataHouses[house].modules,
                      "Стоимость"
                    ) ?? 100}{" "}
                    $
                  </Typography>
                </Box>
                <Link
                  className={classes.Link}
                  to={`model${dataHouses[house]["URL"].toUpperCase()}`}
                >
                  <RegularButton variant="outlined" lowerCase="true">Подробнее</RegularButton>
                </Link>
              </Box>
            </>
          )}
        </Box>
      </Box>

      <Box components="section" className={classes.houseImg}>
        <HouseMainImgSlider myRef={myRef} listItem={listMainImages} />
        {breakpoints.md ? (
          <Box
            className={`${classes.houseDescTitleBox} ${classes.houseDescTitleBoxMobile}`}
          >
            <Typography
              variant="h1"
              color="textSecondary"
              className={classes.houseDescTitle}
            >
              {dataHouses[house]["Код"]}
            </Typography>
            <Box className={classes.houseDescIconBox}>
              <GatsbyImage
                className={classes.mainPlan}
                image={getImg(
                  data,
                  `${dataHouses[house]["Иконка планировки"]}`
                )}
                alt="img"
              ></GatsbyImage>
              <Typography variant="h5" className={classes.houseSpecPrice}>
                {dataHouses[house].countArea(
                  dataHouses[house].modules,
                  "Стоимость"
                ) ?? 100}
              </Typography>
            </Box>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
export default HousesList;
