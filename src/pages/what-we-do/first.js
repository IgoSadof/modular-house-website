import "../../components/global.css";
import React, { useState, useRef } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import modularHouseTheme from "../../config/modularHouseTheme";
import FormBlock from "../../components/FormBlock";
import what_we_do_img1 from "../../assets/images/w-we-do-img1.png";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SendForm from "../../components/SendForm";
import MySlider from "../../components/Slider";

import SquareButton from "../../components/buttons/SquareButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import whatWeDoImg2 from "../../assets/images/w-we-do-img2.png";
import whatWeDoImg3 from "../../assets/images/w-we-do-img3.png";
import plan from "../../assets/images/plan.png";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CalculateTable from "../../components/CalculateTable";
import Panel from "../../components/Panel";
import HouseFotosSlider from "../../components/HouseFotosSlider";
import { houses } from "../../constant/houses";

const useStyles = makeStyles((theme) => ({
  BlockFullscreen: {
    position: "relative",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#D1D1D1",
    overflow: "hidden",
    height: "100vh",
  },
  Block: {
    display: "flex",
    gap: "20px",
    padding: "100px 200px",
    backgroundColor: "#D1D1D1",
  },

  button: {
    position: "absolute",
    top: "5%",
    right: "10%",
    background:
      "radial-gradient(100% 100% at 0% 0%, #D1D1D1 0%, rgba(209, 209, 209, 0.12) 100%)",
    width: "125px",
    height: "36px",
    zIndex: "2",
  },
  mainImgBox: {
    height: "72vh",
  },
  mainImg: {
    position: "relative",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  mainImgItem: {
    height: "100%",
  },
  secondImgBox: {
    position: "relative",
    width: "100%",
    height: "90vh",
    // objectFit: "cover",
  },
  mainDescBox: {
    width: "100%",
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
    padding: "50px 280px",
  },
  mainBlockSubtitleBox: {
    display: "flex",
    gap: "100px",
  },
  mainBlockTitle: {
    textAlign: "left",
    width: "300px",
  },
  mainBlockList: {
    listStyle: "none",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    aligneItems: "center",
    justifyContent: "space-between",
  },
  mainBlockItem: {
    fontSize: "12px",
    fontWeight: "400",
  },
  modelBlock: {
    display: "flex",
    gap: "100px",
    padding: "100px 200px",
    backgroundColor: "#D1D1D1",
  },
  modelDesc: {
    position: "relative",
    width: "450px",
    display: "flex",
    gap: "40px",
  },
  modelDescFirstColumn: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "70px",
    justifyContent: "space-between",
  },
  modelDescSecondColumn: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "70px",
    justifyContent: "space-between",
  },
  modelDescItemTitle: {
    // width: "100px",
    // paddingRight:"40px",
  },
  modelNumber: {
    fontSize: "48px",
    fontWeight: "600",
  },
  model: {
    border: "1px solid",
    width: "50%",
  },
  modelDescLine: {
    position: "relative",
    width: "1px",
    height: "100%",
    backgroundColor: "#BDBDBD",
  },
  modelDescLineActive: {
    position: "absolute",
    zIndex: "2",
    left: "50%",
    width: "1px",
    height: (param) => param.pilldistance,
    backgroundColor: "black",
    transition: "0.5s",
  },
  modelDescLineMinus: {
    transform: (param) => `translate(-50%, ${param.pilldistance}px)`,
    width: "30px",
    height: "30px",
    border: "1px solid",
    borderRadius: "50% 50% 0 0",
    fontSize: "30px",
    backgroundColor: "#D1D1D1",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.5s",
  },
  minus: {
    position: "relative",
    top: "-8%",
  },
  modelDescLineMinusCircle: {
    transform: (param) => `translate(-50%, ${param.pilldistance}px)`,
    width: "30px",
    height: "30px",
    border: "1px solid",
    borderRadius: "50%",
    fontSize: "30px",
    backgroundColor: "#D1D1D1",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.5s",
  },
  modelDescLinePlus: {
    transform: (param) => `translate(-50%, ${param.pilldistance - 1}px)`,
    width: "30px",
    height: "30px",
    border: "1px solid",
    borderRadius: "0 0 50% 50%",
    fontSize: "30px",
    backgroundColor: "#D1D1D1",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.5s",
  },
  plus: {
    position: "relative",
    bottom: "12%",
  },
  disable:{
    color:'#BDBDBD',
  },
  buttons: {
    position: "absolute",
    display: "flex",
    gap: "20px",
    left: "14%",
    bottom: "4%",
  },
  blockGalary: {
    height: "auto",
  },
  panel: {
    position: "absolute",
    right: "0",
    bottom: "0",
    width: "620px",
    // height: "75px",
    backgroundColor: "#D1D1D1",
  },
  line: {
    display: "inline-block",
    width: "75px",
    height: "1px",
    backgroundColor: "black",
    marginTop: "10px",
  },

  BlockRooms: {
    height: "auto",
    paddingLeft: "160px",
    gap: "20px",
    justifyContent: "space-between",
  },
  roomsList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  roomDesc: {
    display: "flex",
    flexDirection: "column",
    gap: "100px",
  },
  roomDescArticle: {
    marginTop: "260px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    width: "285px",
  },
  roomDescTitle: {
    fontSize: "30px",
  },
  roomDescList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    cursor: "pointer",
  },
  roomImg: {
    marginLeft: "auto",
  },
  BlockCalculation: {
    paddingLeft: "160px",
  },
  calculationPlan: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "50%",
    // gap:"160px",
  },
  calculation: {
    display: "flex",
    gap: "40px",
    flexDirection: "column",
    marginLeft: "auto",
    width: "350px",
    // height: "500px",
    // border: "1px solid",
  },
  calculationItem: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  calculationHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  calculationBody: {
    paddingLeft: "20px",
    paddingRight: "30px",
    borderLeft: "1px solid",
  },
  calculationBodyItem: {
    display: "flex",
    justifyContent: "space-between",
  },
  calculationResult: {
    display: "flex",
    justifyContent: "center",
    gap: "100px",
    alignItems: "center",
  },
  BlockForm: {
    paddingLeft: "350px",
    justifyContent: "center",
  },
  BlockTable: {
    paddingBottom: "0px",
    paddingTop: "0px",
  },
}));

const First = () => {
  const [pilldistance, setPilldistance] = useState(110);
  const param = { pilldistance };
  const classes = useStyles(param);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [value, setValue] = React.useState(2);
  const [category, setCategory] = React.useState("все");
  const [modulePrice, setModulePrice] = useState(0);

  const myRef = useRef(null);
  const categoryRef = React.createRef();

  const handleClickConnect = () => {
    setIsFormOpen((state) => !state);
  };
  const handlePlusClick = (e) => {
    if (pilldistance + 180 <= 470) setPilldistance((state) => state + 180);
  };
  const handleMinusClick = (e) => {
    if (pilldistance - 180 >= 110) {
      setPilldistance((state) => state - 180);
    }
  };

  const handleClickLeft = () => {
    myRef.current.slickPrev();
  };
  const handleClickRight = () => {
    myRef.current.slickNext();
  };

  const handleChangePanel = (value) => {
    //   setValue(newValue);
    setCategory(value);
  };
  const handleChangeCheckbox = (event) => {
    if (event.target.checked) {
      console.log(`add ${event.target.value}`);
      setModulePrice((state) => state + +event.target.value);
    } else {
      setModulePrice((state) => state - +event.target.value);
    }
  };

  const listItem = houses[0].img.fotosCategory[category].map((item, index) => {
    return (
      <li className={classes.mainImgItem} key={index}>
        <img className={classes.mainImg} src={item} alt="img"></img>
      </li>
    );
  });

  return (
    <ThemeProvider theme={modularHouseTheme}>
      <div className="conteiner">
        <div className="content">
          <Box className={` ${classes.BlockFullscreen} ${classes.mainBlock}`}>
            <SendForm isFormOpen={isFormOpen} click={handleClickConnect} />
            <Button
              className={classes.button}
              variant="outlined"
              onClick={handleClickConnect}
            >
              СВЯЗАТЬСЯ
            </Button>
            <Box className={classes.mainImgBox}>
              <img
                className={classes.mainImg}
                src={what_we_do_img1}
                alt="img"
              ></img>
            </Box>
            <Box className={classes.mainDescBox}>
              <Box className={classes.mainBlockTitleBox}>
                <Typography
                  variant="h1"
                  color="textSecondary"
                  className={classes.mainBlockTitle}
                >
                  SQUARE HOUSE
                </Typography>
              </Box>
              <Box className={classes.mainBlockSubtitleBox}>
                {/* <Box className={classes.mainBlockList}> */}
                <ul className={classes.mainBlockList}>
                  <li className={classes.mainBlockItem}>
                    <Typography variant="body1">01 Модуль</Typography>
                  </li>
                  <li className={classes.mainBlockItem}>
                    <Typography variant="body1">02 Модуль</Typography>
                  </li>
                  <li className={classes.mainBlockItem}>
                    <Typography variant="body1">03 Модуль</Typography>
                  </li>
                </ul>
                {/* </Box> */}
                {/* <Box className={classes.mainBlockList}> */}
                <ul className={classes.mainBlockList}>
                  <li className={classes.mainBlockItem}>
                    <Typography variant="body1">Базовый модуль</Typography>
                  </li>
                  <li className={classes.mainBlockItem}>
                    <Typography variant="body1">Жилой модуль</Typography>
                  </li>
                  <li className={classes.mainBlockItem}>
                    <Typography variant="body1">Гараж</Typography>
                  </li>
                </ul>
                {/* </Box> */}
                {/* <Box className={classes.mainBlockList}> */}
                <ul className={classes.mainBlockList}>
                  <li className={classes.mainBlockItem}>
                    <Typography variant="subtitle1">
                      $25 000 / 45 дней
                    </Typography>
                  </li>
                  <li className={classes.mainBlockItem}>
                    <Typography variant="subtitle1">
                      $68 000 / 20 дней
                    </Typography>
                  </li>
                  <li className={classes.mainBlockItem}>
                    <Typography variant="subtitle1">
                      $45 000 / 20 дней
                    </Typography>
                  </li>
                </ul>
                {/* </Box> */}
              </Box>
            </Box>
          </Box>

          <Box className={classes.modelBlock}>
            <Box className={classes.modelDesc}>
              <Box className={classes.modelDescFirstColumn}>
                <Box className={classes.modelDescItemTitle}>
                  <Typography
                    variant="h1"
                    color="textSecondary"
                    className={classes.modelNumber}
                  >
                    01
                  </Typography>
                  <Typography variant="h6">Базавый</Typography>
                  <Typography variant="h6">170 м2</Typography>
                </Box>
                <Box className={classes.modelDescItemTitle}>
                  <Typography
                    className={pilldistance < 290 ? classes.disable : null}
                    variant="h1"
                    color="textSecondary"
                  >
                    02
                  </Typography>
                  <Typography
                    className={pilldistance < 290 ? classes.disable : null}
                    variant="h6"
                  >
                    Жилой
                  </Typography>
                  <Typography
                    className={pilldistance < 290 ? classes.disable : null}
                    variant="h6"
                  >
                    170 м2
                  </Typography>
                </Box>
                <Box className={classes.modelDescItemTitle}>
                  <Typography
                    className={pilldistance < 470 ? classes.disable : null}
                    variant="h1"
                    color="textSecondary"
                  >
                    03
                  </Typography>
                  <Typography
                    className={pilldistance < 470 ? classes.disable : null}
                    variant="h6"
                  >
                    Гараж
                  </Typography>
                  <Typography
                    className={pilldistance < 470 ? classes.disable : null}
                    variant="h6"
                  >
                    170 м2
                  </Typography>
                </Box>
              </Box>

              <div className={classes.modelDescLine}>
                <div className={classes.modelDescLineActive}></div>
                {pilldistance < 470 ? (
                  <>
                    <div
                      onClick={handleMinusClick}
                      className={classes.modelDescLineMinus}
                    >
                      <div className={classes.minus}>-</div>
                    </div>
                    <div
                      onClick={handlePlusClick}
                      className={classes.modelDescLinePlus}
                    >
                      <div className={classes.plus}>+</div>
                    </div>
                  </>
                ) : (
                  <div
                    onClick={handleMinusClick}
                    className={classes.modelDescLineMinusCircle}
                  >
                    <div className={classes.minus}>-</div>
                  </div>
                )}
              </div>

              <Box className={classes.modelDescSecondColumn}>
                <Typography variant="body1">
                  Развитие дома происходит по горизонтали в двух направлениях. К
                  базовому модулю могут быть пристроены навес для автомобиля в
                  одном направлении.
                </Typography>
                <Typography
                  // variant={pilldistance<290?"body2":"body1"}
                  variant={"body1"}
                  className={pilldistance < 290 ? classes.disable : null}
                >
                  Развитие дома происходит по горизонтали в двух направлениях. К
                  базовому модулю могут быть пристроены навес для автомобиля в
                  одном направлении.
                </Typography>
                {/* <Typography variant={pilldistance<470?"body2":"body1"}> */}
                <Typography
                  variant={"body1"}
                  className={pilldistance < 470 ? classes.disable : null}
                >
                  Развитие дома происходит по горизонтали в двух направлениях. К
                  базовому модулю могут быть пристроены навес для автомобиля в
                  одном направлении.
                </Typography>
              </Box>
            </Box>
            <Box className={classes.model}></Box>
          </Box>

          <Box className={`${classes.BlockFullscreen} ${classes.blockGalary}`}>
            <Box className={classes.secondImgBox}>
              <HouseFotosSlider myRef={myRef} listItem={listItem} />
              <Box className={classes.buttons}>
                {/* <Button color="secondary">hello</Button> */}
                <SquareButton
                  variant={"contained"}
                  click={handleClickLeft}
                  icon={<ArrowBackIosIcon />}
                />
                <SquareButton
                  variant={"contained"}
                  click={handleClickRight}
                  icon={<ArrowForwardIosIcon />}
                />
              </Box>
              <Panel ref={categoryRef} change={handleChangePanel} />
            </Box>
          </Box>

          <Box className={`${classes.Block} ${classes.BlockRooms}`}>
            <span className={classes.line}></span>
            <Box className={classes.roomsList}>
              <Typography variant="h6">Гостинная</Typography>
              <Typography variant="h6">Кухня</Typography>
              <Typography variant="h6">Сан узел</Typography>
              <Typography variant="h6">Кладовка</Typography>
              <Typography variant="h6">Фасад</Typography>
            </Box>
            <Box className={classes.roomDesc}>
              <Box className={classes.roomDescArticle}>
                <Typography variant="caption" className={classes.roomDescTitle}>
                  ГОСТИННАЯ
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.roomDescSubtitle}
                >
                  Стоимость дома «под ключ», с панорамным остеклением, отделкой
                  лиственницей, фальцевой кровлей и разводкой коммуникаций
                  внутри дома составляет 660$ за метр. В полной конфигурации,
                  дом площадью 50 м. кв. обходится в 33 к$. Домокомплект
                  привозится на участок и собирается на специально
                  подготовленном фундаменте в течении двух недель. Отсутствие
                  затяжного строительства существенно экономит деньги заказчика.
                </Typography>
              </Box>

              <Box className={classes.roomDescList}>
                <Typography variant="body1" className={classes.roomDescItem}>
                  Ванная
                </Typography>
                <Typography variant="body1" className={classes.roomDescItem}>
                  Общая комната
                </Typography>
                <Typography variant="body1" className={classes.roomDescItem}>
                  Сан узел
                </Typography>
                <Typography variant="body1" className={classes.roomDescItem}>
                  Детская{" "}
                </Typography>
                <Typography variant="body1" className={classes.roomDescItem}>
                  Коридор
                </Typography>
              </Box>
            </Box>
            <img className={classes.roomImg} src={whatWeDoImg2} alt="img"></img>
          </Box>

          <Box className={`${classes.Block} ${classes.BlockCalculation}`}>
            <span className={classes.line}></span>
            <Box className={classes.calculationPlan}>
              <Typography variant="h6">Экспликация</Typography>
              <img
                className={classes.calculationPlanImg}
                src={plan}
                alt="img"
              ></img>
            </Box>
            <Box className={classes.calculation}>
              <Box className={classes.calculationItem}>
                <Box className={classes.calculationHeader}>
                  <FormControlLabel
                    onChange={handleChangeCheckbox}
                    value={25000}
                    control={<Checkbox color="primary" />}
                    label={<Typography variant="h6">БАЗОВЫЙ МОДУЛЬ</Typography>}
                    labelPlacement="end"
                  />
                  <Typography variant="h3">$25 000</Typography>
                </Box>
                <Box className={classes.calculationBody}>
                  <Box className={classes.calculationBodyItem}>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      Ванная
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      107 м2
                    </Typography>
                  </Box>
                  <Box className={classes.calculationBodyItem}>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      Общая комната
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      107 м2
                    </Typography>
                  </Box>
                  <Box className={classes.calculationBodyItem}>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      Детская
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      107 м2
                    </Typography>
                  </Box>
                  <Box className={classes.calculationBodyItem}>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      Коридор
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      107 м2
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className={classes.calculationItem}>
                <Box className={classes.calculationHeader}>
                  <FormControlLabel
                    onChange={handleChangeCheckbox}
                    value={25000}
                    control={<Checkbox color="primary" />}
                    label={<Typography variant="h6">БАЗОВЫЙ МОДУЛЬ</Typography>}
                    labelPlacement="end"
                  />
                  <Typography variant="h3">$25 000</Typography>
                </Box>
                <Box className={classes.calculationBody}>
                  <Box className={classes.calculationBodyItem}>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      Ванная
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      107 м2
                    </Typography>
                  </Box>
                  <Box className={classes.calculationBodyItem}>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      Общая комната
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      107 м2
                    </Typography>
                  </Box>
                  <Box className={classes.calculationBodyItem}>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      Детская
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      107 м2
                    </Typography>
                  </Box>
                  <Box className={classes.calculationBodyItem}>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      Коридор
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      107 м2
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className={classes.calculationItem}>
                <Box className={classes.calculationHeader}>
                  <FormControlLabel
                    onChange={handleChangeCheckbox}
                    value={25000}
                    control={<Checkbox color="primary" />}
                    label={<Typography variant="h6">БАЗОВЫЙ МОДУЛЬ</Typography>}
                    labelPlacement="end"
                  />
                  <Typography variant="h3">$25 000</Typography>
                </Box>
                <Box className={classes.calculationBody}>
                  <Box className={classes.calculationBodyItem}>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      Ванная
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      107 м2
                    </Typography>
                  </Box>
                  <Box className={classes.calculationBodyItem}>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      Общая комната
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      107 м2
                    </Typography>
                  </Box>
                  <Box className={classes.calculationBodyItem}>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      Детская
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      107 м2
                    </Typography>
                  </Box>
                  <Box className={classes.calculationBodyItem}>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      Коридор
                    </Typography>
                    <Typography
                      variant="body1"
                      className={classes.calculationBodyText}
                    >
                      107 м2
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className={classes.calculationResult}>
                <Typography variant="h6">Цена</Typography>
                <Typography variant="caption">${modulePrice}</Typography>
              </Box>
            </Box>
          </Box>

          <Box className={`${classes.Block} ${classes.BlockTable}`}>
            <CalculateTable houseN={"1"} />
          </Box>

          <Box className={`${classes.Block} ${classes.BlockForm}`}>
            <FormBlock
              title={`
                      Можете отправить свой выбор нам, и мы начнем готовиться к встрече.
              `}
              subtitle={`Наш менеджер свяжеться с вами для выяснения диталей.`}
              email
              img={whatWeDoImg3}
              formPosition="center"
            />
          </Box>

          <Footer />
        </div>
        <Menu />
      </div>
    </ThemeProvider>
  );
};
export default First;
