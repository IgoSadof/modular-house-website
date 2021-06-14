import "../../styles/global.css";
import React, { useState } from "react";
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

import SquareButton from "../../components/SquareButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import whatWeDoImg2 from "../../assets/images/w-we-do-img2.png";
import whatWeDoImg3 from "../../assets/images/w-we-do-img3.png";
import plan from "../../assets/images/plan.png";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CalculateTable from "../../components/CalculateTable";
import Panel from "../../components/Panel";

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
  mainImg: {
    position: "relative",
    width: "100%",
    height: "720px",
    objectFit: "cover",
  },
  secondImg: {
    position: "relative",
    width: "100%",
    height: "720px",
    objectFit: "cover",
  },
  mainDescBox: {
    width: "100%",
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
    padding: "50px 300px",
  },
  mainBlockSubtitleBox: {
    display: "flex",
    gap: "100px",
  },
  mainBlockTitle: {
    fontSize: "48px",
    fontWeight: "600",
    lineHeight: "50px",
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
  modelSubtitle: {
    // borderLeft:"1px solid",
    fontSize: "12px",
  },
  model: {
    border: "1px solid",
    width: "100%",
  },
  modelDescLine: {
    left: "28%",
    width: "1px",
    height: "100%",
    backgroundColor: "black",
    "&::before": {
      // transformOrigin: "100% 50%",
      transform: "translate(-50%, 165px)",
      // position: "absolute",
      content: `'+'`,
      width: "40px",
      height: "40px",
      border: "1px solid",
      borderRadius: "50%",
      fontSize: "30px",
      backgroundColor: "#D1D1D1",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  // modelDescCircle:{
  //   position:"absolute",
  //   width:"50px",
  //   left:"21%",
  //   height:"50px",
  //   border:"1px solid",
  //   borderRadius:"50%",
  //   backgroundColor:""
  // }
  buttons: {
    position: "absolute",
    display: "flex",
    gap: "20px",
    left: "10%",
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
  text: {
    textTransform: "uppercase",
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
    width:'50%',
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
  calculationHeaderText: {
    fontSize: "24px !important",
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
  calculationSum: {
    fontSize: "30px",
  },
  BlockForm: {
    paddingLeft: "350px",
    justifyContent: "center",
  },
  BlockTable:{
    paddingBottom:'0px',
    paddingTop:'0px',
  }
}));

const First = () => {
  // const [lineLength, setLineLength] = useState(265);
  const param = {};
  const classes = useStyles(param);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [value, setValue] = React.useState(2);
  const [modulePrice, setModulePrice] = useState(0);

  const handleClickConnect = () => {
    setIsFormOpen((state) => !state);
  };
  // const handleCircleClick = (e) => {
  //   setLineLength((state) => (state ===);
  // };

  const handleClickLeft = () => {};
  const handleClickRight = () => {};

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeCheckbox = (event) => {
    if (event.target.checked) {
      console.log(`add ${event.target.value}`);
      setModulePrice((state) => state + +event.target.value);
    } else {
      setModulePrice((state) => state - +event.target.value);
    }
  };

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
            <Box className={classes.mainImg}>
              <img
                className={classes.mainImg}
                src={what_we_do_img1}
                alt="img"
              ></img>
            </Box>
            <Box className={classes.mainDescBox}>
              <Box className={classes.mainBlockTitleBox}>
                <Typography className={classes.mainBlockTitle}>
                  SQUARE HOUSE
                </Typography>
              </Box>
              <Box className={classes.mainBlockSubtitleBox}>
                {/* <Box className={classes.mainBlockList}> */}
                <ul className={classes.mainBlockList}>
                  <li className={classes.mainBlockItem}>01 Модуль</li>
                  <li className={classes.mainBlockItem}>02 Модуль</li>
                  <li className={classes.mainBlockItem}>03 Модуль</li>
                </ul>
                {/* </Box> */}
                {/* <Box className={classes.mainBlockList}> */}
                <ul className={classes.mainBlockList}>
                  <li className={classes.mainBlockItem}>Базовый модуль</li>
                  <li className={classes.mainBlockItem}>Жилой модуль</li>
                  <li className={classes.mainBlockItem}>Гараж</li>
                </ul>
                {/* </Box> */}
                {/* <Box className={classes.mainBlockList}> */}
                <ul className={classes.mainBlockList}>
                  <li className={classes.mainBlockItem}>
                    <strong>$25 000 / 45 дней</strong>
                  </li>
                  <li className={classes.mainBlockItem}>
                    <strong>$68 000 / 20 дней</strong>
                  </li>
                  <li className={classes.mainBlockItem}>
                    <strong>$45 000 / 20 дней</strong>
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
                  <Typography className={classes.modelNumber}>01</Typography>
                  <Typography className={classes.modelHeader}>
                    Базавый
                  </Typography>
                  <Typography className={classes.modelSquare}>
                    170 м2
                  </Typography>
                </Box>
                <Box className={classes.modelDescItemTitle}>
                  <Typography className={classes.modelNumber}>02</Typography>
                  <Typography className={classes.modelHeader}>Жилой</Typography>
                  <Typography className={classes.modelSquare}>
                    170 м2
                  </Typography>
                </Box>
                <Box className={classes.modelDescItemTitle}>
                  <Typography className={classes.modelNumber}>03</Typography>
                  <Typography className={classes.modelHeader}>Гараж</Typography>
                  <Typography className={classes.modelSquare}>
                    170 м2
                  </Typography>
                </Box>
              </Box>

              {/* <span className={classes.modelDescLine}></span> */}
              <MySlider />

              <Box className={classes.modelDescSecondColumn}>
                <Typography className={classes.modelSubtitle}>
                  Развитие дома происходит по горизонтали в двух направлениях. К
                  базовому модулю могут быть пристроены навес для автомобиля в
                  одном направлении.
                </Typography>
                <Typography
                  className={`${classes.modelSubtitle} ${classes.modelSubtitleMiddle}`}
                >
                  Развитие дома происходит по горизонтали в двух направлениях. К
                  базовому модулю могут быть пристроены навес для автомобиля в
                  одном направлении.
                </Typography>
                <Typography className={classes.modelSubtitle}>
                  Развитие дома происходит по горизонтали в двух направлениях. К
                  базовому модулю могут быть пристроены навес для автомобиля в
                  одном направлении.
                </Typography>
              </Box>
            </Box>
            <Box className={classes.model}></Box>
          </Box>

          <Box className={`${classes.BlockFullscreen} ${classes.blockGalary}`}>
            <Box className={classes.secondImg}>
              <img
                className={classes.mainImg}
                src={what_we_do_img1}
                alt="img"
              ></img>
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
              <Panel />
            </Box>
          </Box>

          <Box className={`${classes.Block} ${classes.BlockRooms}`}>
            <span className={classes.line}></span>
            <Box className={classes.roomsList}>
              <Typography className={classes.text}>Гостинная</Typography>
              <Typography className={classes.text}>Кухня</Typography>
              <Typography className={classes.text}>Сан узел</Typography>
              <Typography className={classes.text}>Кладовка</Typography>
              <Typography className={classes.text}>Фасад</Typography>
            </Box>
            <Box className={classes.roomDesc}>
              <Box className={classes.roomDescArticle}>
                <Typography className={classes.roomDescTitle}>
                  ГОСТИННАЯ
                </Typography>
                <Typography className={classes.roomDescSubtitle}>
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
                <Typography className={classes.roomDescItem}>Ванная</Typography>
                <Typography className={classes.roomDescItem}>
                  Общая комната
                </Typography>
                <Typography className={classes.roomDescItem}>
                  Сан узел
                </Typography>
                <Typography className={classes.roomDescItem}>
                  Детская{" "}
                </Typography>
                <Typography className={classes.roomDescItem}>
                  Коридор
                </Typography>
              </Box>
            </Box>
            <img className={classes.roomImg} src={whatWeDoImg2} alt="img"></img>
          </Box>

          <Box className={`${classes.Block} ${classes.BlockCalculation}`}>
            <span className={classes.line}></span>
            <Box className={classes.calculationPlan}>
              <Typography className={classes.text}>Расчет</Typography>
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
                    className={classes.calculationHeaderText}
                    value={25000}
                    control={<Checkbox color="primary" />}
                    label="БАЗОВЫЙ МОДУЛЬ"
                    labelPlacement="end"
                  />
                  <Typography className={classes.calculationHeaderText}>
                    $25 000
                  </Typography>
                </Box>
                <Box className={classes.calculationBody}>
                  <Box className={classes.calculationBodyItem}>
                    <Typography className={classes.calculationBodyText}>
                      Ванная
                    </Typography>
                    <Typography className={classes.calculationBodyText}>
                      107 м2
                    </Typography>
                  </Box>
                  <Box className={classes.calculationBodyItem}>
                    <Typography className={classes.calculationBodyText}>
                      Общая комната
                    </Typography>
                    <Typography className={classes.calculationBodyText}>
                      107 м2
                    </Typography>
                  </Box>
                  <Box className={classes.calculationBodyItem}>
                    <Typography className={classes.calculationBodyText}>
                      Детская
                    </Typography>
                    <Typography className={classes.calculationBodyText}>
                      107 м2
                    </Typography>
                  </Box>
                  <Box className={classes.calculationBodyItem}>
                    <Typography className={classes.calculationBodyText}>
                      Коридор
                    </Typography>
                    <Typography className={classes.calculationBodyText}>
                      107 м2
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className={classes.calculationItem}>
                <Box className={classes.calculationHeader}>
                  <FormControlLabel
                    onChange={handleChangeCheckbox}
                    className={classes.calculationHeaderText}
                    value={25000}
                    control={<Checkbox color="primary" />}
                    label="ЖИЛОЙ МОДУЛЬ"
                    labelPlacement="end"
                  />
                  <Typography className={classes.calculationHeaderText}>
                    $25 000
                  </Typography>
                </Box>
                <Box className={classes.calculationBody}>
                  <Box className={classes.calculationBodyItem}>
                    <Typography className={classes.calculationBodyText}>
                      Ванная
                    </Typography>
                    <Typography className={classes.calculationBodyText}>
                      107 м2
                    </Typography>
                  </Box>
                  <Box className={classes.calculationBodyItem}>
                    <Typography className={classes.calculationBodyText}>
                      Общая комната
                    </Typography>
                    <Typography className={classes.calculationBodyText}>
                      107 м2
                    </Typography>
                  </Box>
                  <Box className={classes.calculationBodyItem}>
                    <Typography className={classes.calculationBodyText}>
                      Детская
                    </Typography>
                    <Typography className={classes.calculationBodyText}>
                      107 м2
                    </Typography>
                  </Box>
                  <Box className={classes.calculationBodyItem}>
                    <Typography className={classes.calculationBodyText}>
                      Коридор
                    </Typography>
                    <Typography className={classes.calculationBodyText}>
                      107 м2
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className={classes.calculationItem}>
                <Box className={classes.calculationHeader}>
                  <FormControlLabel
                    className={classes.calculationHeaderText}
                    value={25000}
                    onChange={handleChangeCheckbox}
                    control={<Checkbox color="primary" />}
                    label="ГАРАЖ"
                    labelPlacement="end"
                  />
                  <Typography className={classes.calculationHeaderText}>
                    $25 000
                  </Typography>
                </Box>
                <Box className={classes.calculationBody}>
                  <Box className={classes.calculationBodyItem}>
                    <Typography className={classes.calculationBodyText}>
                      Ванная
                    </Typography>
                    <Typography className={classes.calculationBodyText}>
                      107 м2
                    </Typography>
                  </Box>
                  <Box className={classes.calculationBodyItem}>
                    <Typography className={classes.calculationBodyText}>
                      Общая комната
                    </Typography>
                    <Typography className={classes.calculationBodyText}>
                      107 м2
                    </Typography>
                  </Box>
                  <Box className={classes.calculationBodyItem}>
                    <Typography className={classes.calculationBodyText}>
                      Детская
                    </Typography>
                    <Typography className={classes.calculationBodyText}>
                      107 м2
                    </Typography>
                  </Box>
                  <Box className={classes.calculationBodyItem}>
                    <Typography className={classes.calculationBodyText}>
                      Коридор
                    </Typography>
                    <Typography className={classes.calculationBodyText}>
                      107 м2
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className={classes.calculationResult}>
                <Typography className={classes.calculationHeaderText}>
                  Цена
                </Typography>
                <Typography className={classes.calculationSum}>
                  ${modulePrice}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box className={`${classes.Block} ${classes.BlockTable}`}>
            <CalculateTable houseN={'1'}/>
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
