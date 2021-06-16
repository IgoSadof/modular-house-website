import "../../components/global.css";
import React, { useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import modularHouseTheme from "../../config/modularHouseTheme";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import SendForm from "../../components/SendForm";
import { houses } from "../../constant/houses";
import { Link } from "gatsby";
import RegularButton from "../../components/buttons/RegularButton";
import ModalsSlider from '../../components/ModalsSlider'

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
  page: { ...style.flexColumn, height: "100vh" },
  Block: {
    position: "relative",
    display: "flex",
    paddingLeft: "160px",
    backgroundColor: "#D1D1D1",
    overflow: "hidden",
    height: "100%",
  },
  button: {
    position: "absolute",
    top: "5%",
    right: "10%",
    zIndex: "2",
  },
  houseListBlock: {
    width: "160px",
    borderRight: "1px solid",
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
    height: "18vh",
    position: "relative",
    cursor: "pointer",
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // marginTop:'20px',
  },
  houseListNumber: {
    position: "absolute",
    zIndex: "0",
    top: "-20%",
    fontSize: "64px",
    margin: "auto",
    color: "white",
  },
  houseListImg: {
    position: "relative",
    zIndex: "2",
    width: "90%",
  },
  houseDesc: {
    display: "flex",
    width: "40%",
    height: "100%",
  },
  houseDescContent: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "100%",
    height: "80%",
    padding: "0 60px",
    justifyContent: "space-between",
    // gap: "40px",
  },
  houseDescImgBox: {
    width: "100%",
    // height: "350px",
  },
  houseDescImg: {
    width: "100%",
    objectFit: "cover",
  },
  houseDescTitleBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  houseDescTitle: {
    fontSize: "48px",
    lineHeight: "52px",
    width: "200px",
  },
  houseDescIconBox: {
    width: "40px",
    height: "40px",
    // border: "1px solid",
  },
  mainPlan: {
    width: "100%",
    height: "100%",
  },
  houseDescText: {
    fontSize: "14px",
  },
  houseDescSpecBox: style.flex,
  houseDescSpec: style.flexColumn,
  houseDescSpecOne: style.flex,
  houseDescMore: style.flex,
  houseDescPrice: style.flexColumn,
  houseSpecPrice: {
    fontSize: "20px",
  },
  Link: {
    textDecoration: "none",
  },

  houseImg: {
    width: "47%",
  },
  mainImg: {
    width: "100%",
    objectFit: "cover",
    height: "100%",
  },
}));

const WhatWeDo = () => {
  const [house, setHouse] = useState(0);
  const param = {};
  const classes = useStyles(param);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleClickConnect = () => {
    setIsFormOpen((state) => !state);
  };
  const handleItemclick = (index) => {
    setHouse((state) => index);
  };

  const listItem = houses.map((item, index) => {
    return (
      <li
        className={classes.houseListItem}
        key={item.id}
        onClick={() => handleItemclick(index)}
      >
        <Typography className={classes.houseListNumber}>{`0${
          index + 1
        }`}</Typography>
        <img
          className={classes.houseListImg}
          src={item.img.list}
          alt="img"
        ></img>
        <Typography variant ='subtitle1' className={classes.houseListName}>{item.name}</Typography>
      </li>
    );
  });

  return (
    <ThemeProvider theme={modularHouseTheme}>
      <div className="conteiner">
        <div className="content">
          <div className={classes.page}>
            <Box className={classes.Block}>
              <SendForm isFormOpen={isFormOpen} click={handleClickConnect} />
              <Box className={classes.button}>
                <RegularButton variant="outlined" click={handleClickConnect}>
                  СВЯЗАТЬСЯ
                </RegularButton>
              </Box>
              <Box className={classes.houseListBlock}>
                {/* <ul className={classes.houseList}>{housesList}</ul> */}
                <ModalsSlider listItem={listItem}/>
              </Box>
              <Box className={classes.houseDesc}>
                <Box className={classes.houseDescContent}>
                  <Box className={classes.houseDescImgBox}>
                    <img
                      className={classes.houseDescImg}
                      src={houses[house].img.desc}
                      alt="img"
                    ></img>
                  </Box>

                  <Box className={classes.houseDescTitleBox}>
                    <Typography variant='h1' color='textSecondary' className={classes.houseDescTitle}>
                      {houses[house].name}
                    </Typography>
                    <Box className={classes.houseDescIconBox}>
                      <img
                        className={classes.mainPlan}
                        src={houses[house].img.plan}
                        alt="img"
                      ></img>
                    </Box>
                  </Box>

                  <Typography variant='body1' className={classes.houseDescText}>
                    {houses[house].desc}
                  </Typography>

                  <Box className={classes.houseDescSpecBox}>
                    <Box className={classes.houseDescSpec}>
                      <Box className={classes.houseDescSpecOne}>
                        <Typography variant='body1' className={classes.houseDescSpecName}>
                          {houses[house].totalAreaText}
                        </Typography>
                        <Typography variant='h6' className={classes.houseSpecValue}>
                          {houses[house].totalArea}
                        </Typography>
                      </Box>
                      <Box className={classes.houseDescSpecOne}>
                        <Typography variant='body1' className={classes.houseDescSpecName}>
                          {houses[house].effectiveAreaText}
                        </Typography>
                        <Typography variant='h6' className={classes.houseSpecValue}>
                          {houses[house].effectiveArea}
                        </Typography>
                      </Box>
                    </Box>

                    <Box className={classes.houseDescSpec}>
                      <Box className={classes.houseDescSpecOne}>
                        <Typography variant='body1' className={classes.houseDescSpecName}>
                          Этажность:
                        </Typography>
                        <Typography variant='h6' className={classes.houseSpecValue}>
                          {houses[house].totalArea}
                        </Typography>
                      </Box>
                      <Box className={classes.houseDescSpecOne}>
                        <Typography variant='body1' className={classes.houseDescSpecName}>
                          Cтадии роста:
                        </Typography>
                        <Typography variant='h6' className={classes.houseSpecValue}>
                          {houses[house].effectiveArea}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={classes.houseDescMore}>
                    <Box className={classes.houseDescPrice}>
                      <Typography variant='body1' className={classes.houseSpecValue}>
                        Стоимость всех модулей:
                      </Typography>
                      <Typography variant='h5' className={classes.houseSpecPrice}>
                        {houses[house].price}
                      </Typography>
                    </Box>
                    <Link className={classes.Link} to={"first"}>
                      <RegularButton variant="outlined">
                        Подробнее
                      </RegularButton>
                    </Link>
                  </Box>
                </Box>
              </Box>

              <Box className={classes.houseImg}>
                <img
                  className={classes.mainImg}
                  src={houses[house].img.main}
                  alt="img"
                ></img>
              </Box>
            </Box>
            <Footer />
          </div>
        </div>
        <Menu />
      </div>
    </ThemeProvider>
  );
};
export default WhatWeDo;
