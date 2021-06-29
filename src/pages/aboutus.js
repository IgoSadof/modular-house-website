import "../components/global.css";
import React, { useState } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import modularHouseTheme from "../config/modularHouseTheme";
import FormBlock from "../components/FormBlock";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SendForm from "../components/SendForm";
import alexey from "../assets/images/aboutus_alexey.png";
import andrey from "../assets/images/aboutus_andrey.png";
import office from "../assets/images/office.png";
import RegularButton from "../components/buttons/RegularButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "60px 0px 100px",
    boxSizing: "border-box",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    backgroundColor: "#D1D1D1",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      padding: "40px  20px",
    },
  },
  button: {
    marginLeft: "auto",
  },
  mainVideoBox: {
    position: "relative",
    width: "480px",
    height: "100%",
  },
  fullImg: {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    opacity: (param) => 1 - 0.1 * param.scrol,
  },
  header: {
    fontSize: "72px",
    fontWeight: "600",
    width: "53%",
    lineHeight: "1.15",
    letterSpacing: "0.03em",
    marginLeft: "auto",
    color: "#4F4F4F",
    [theme.breakpoints.down("md")]: {
      width: "65%",
      fontSize: "24px",
    },
  },
  blockTitle: {
    textTransform: "uppercase",
    fontSize: "14px",
    width: "200px",
    [theme.breakpoints.down("md")]: {
      width: "fit-content",
    },
  },

  line: {
    display: "inline-block",
    width: "75px",
    height: "1px",
    backgroundColor: "black",
    marginTop: "10px",
  },
  Block: {
    display: "flex",
    gap: "20px",
    marginTop: "100px",
 
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      padding: "0 10%",
      marginTop: "40px",
      "&:last-child":{
        marginBottom: "40px",
      },
    },
  },
  titleBox: {
    marginLeft: "auto",
    display: "flex",
    gap: "20px",
    flexDirection: "row-reverse",
  },
  textBox: {
    width: "360px",
    display: "flex",
    flexDirection: "column",
    gap: "60px",
    marginLeft: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  creatorsBox: {
    width: "360px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  creatorTextBox: {
    fontSize: "12px",
    width: "350px",
    marginTop: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  creatorTitle: {
    fontSize: "14px",
    textTransform: "uppercase",
    fontWeight: 600,
  },
  creatorSubtitle: {
    marginTop: "10px",
    fontSize: "12px",
  },
  creatorMainText: {
    marginTop: "60px",
    fontSize: "12px",
  },
  creatorFooterText: {
    marginTop: "10px",
    fontSize: "12px",
  },
  imgBox: {
    marginLeft: "auto",
  },
  BlockMt0: {
    marginTop: "0px",
  },
  lineInvis: {
    opacity: "0",
  },
  img: {
    height: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  header2: {
    width: "680px",
    [theme.breakpoints.down("md")]: {
      width: "65%",
    },
  },
}));

const MainPage = () => {
  const matches = {
    1920: useMediaQuery("(min-width:1920px)"),
    1200: useMediaQuery("(max-width:1200px)"),
  };
  const classes = useStyles();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleClickConnect = () => {
    setIsFormOpen((state) => !state);
  };
  const handleCloseForm = (e) => {
    console.log(e.target);
  };

  return (
    <ThemeProvider theme={modularHouseTheme}>
      <div className="conteiner">
        <div className="content">
          <div className="components">
            <div className={classes.root} onClick={handleCloseForm}>
              <SendForm isFormOpen={isFormOpen} click={handleClickConnect} />
              <Box className={classes.content}>
                <Box className={classes.button}>
                  <RegularButton variant="outlined" click={handleClickConnect}>
                    СВЯЗАТЬСЯ
                  </RegularButton>
                </Box>
                <Box className={classes.Block}>
                  {matches[1200] ? (
                    <Box className={classes.titleBox}>
                      <span className={classes.line}></span>
                      <Typography
                        variant="subtitle1"
                        className={classes.blockTitle}
                      >
                        Автор концепции MH - Андрусь Bezdar
                      </Typography>
                    </Box>
                  ) : (
                    <>
                      <span className={classes.line}></span>
                      <Typography
                        variant="subtitle1"
                        className={classes.blockTitle}
                      >
                        Автор концепции MH - Андрусь Bezdar
                      </Typography>
                    </>
                  )}

                  <Typography className={classes.header}>
                    Мы команда архитекторов, стремящаяся сделать жильё доступным
                    и качественным!
                  </Typography>
                </Box>
              </Box>
            </div>
            <Box className={classes.Block}>
              {matches[1200] ? (
                <Box className={classes.titleBox}>
                  <span className={classes.line}></span>
                  <Typography
                    variant="subtitle1"
                    className={classes.blockTitle}
                  >
                    Разработка технологии MH - Андрусь Bezdar, Кораблёв Алексей,
                    Амбражейчик Кирилл, Короленко Николай.
                  </Typography>
                </Box>
              ) : (
                <>
                  <span className={classes.line}></span>
                  <Typography variant="body1" className={classes.blockTitle}>
                    Разработка технологии MH - Андрусь Bezdar, Кораблёв Алексей,
                    Амбражейчик Кирилл, Короленко Николай.
                  </Typography>
                </>
              )}

              <Box className={classes.textBox}>
                <Typography variant="body1" className={classes.text}>
                  Мы видим миссию нашей команды в изменении окружающего мира за
                  счет качественной концептуальной архитектуры. В каждом нашем
                  проекте заложен уникальный смысл и авторская идея.
                </Typography>
                <Typography variant="body1" className={classes.text}>
                  Технология модульного строительства MODULAR HOUSE родилась в
                  умах архитекторов студии ZROBYM architects и при
                  сотрудничестве с производителями каркасных домов выросла в
                  modular house
                </Typography>
                <Typography variant="body1" className={classes.text}>
                  Технология создана на основе многолетнего изучения опыта
                  энергоэффективного строительства в климатических условиях
                  Беларуси и опробована на практике.
                </Typography>
              </Box>
            </Box>

            <Box className={classes.Block}>
              {matches[1200] ? (
                <Box className={classes.titleBox}>
                  <span className={classes.line}></span>
                  <Typography
                    variant="subtitle1"
                    className={classes.blockTitle}
                  >
                    Модульная система
                  </Typography>
                </Box>
              ) : (
                <>
                  <span className={classes.line}></span>
                  <Typography
                    variant="subtitle1"
                    className={classes.blockTitle}
                  >
                    Модульная система:
                  </Typography>
                </>
              )}
              <Box className={classes.textBox}>
                <Typography variant="body1" className={classes.text}>
                  Модульная система, являющаяся основой наших проектов,
                  позволяет людям с небольшим бюджетом начать с маленького
                  домика и расширить его в будущем. Мы унифицировали все
                  элементы дома и создали взаимозаменяемый технологичный
                  конструктор, позволяющий легко модернизировать и
                  реконструировать жилое пространство. Дом растёт вместе с
                  ростом семьи во времени.
                </Typography>
                <Typography variant="body1" className={classes.text}>
                  Технология МН основана на принципах рацональности и
                  оптимальности. Это проявляется в соблюдении баланса между
                  понятиями экологичности материалов, энергоэффективности
                  здания, эргономичности его внутреннего пространства и общей
                  стоимостью модульного дома. Главная идея нашей технологии -
                  предложить людям быстросборный дом из готовых заводских
                  элементов высокого качества.
                </Typography>
              </Box>
            </Box>

            <Box className={classes.Block}>
              {matches[1200] ? (
                <Box className={classes.titleBox}>
                  <span className={classes.line}></span>
                  <Typography
                    variant="subtitle1"
                    className={classes.blockTitle}
                  >
                    Создатели
                  </Typography>
                </Box>
              ) : (
                <>
                  <span className={classes.line}></span>
                  <Typography
                    variant="subtitle1"
                    className={classes.blockTitle}
                  >
                    Создатели
                  </Typography>
                </>
              )}
              <Box className={classes.creatorsBox}>
                <Box className={classes.creatorTextBox}>
                  <Typography
                    variant="subtitle2"
                    className={classes.creatorTitle}
                  >
                    Алексей Кораблев
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.creatorSubtitle}
                  >
                    вед. архитектор
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.creatorMainText}
                  >
                    Окончил Белорусский национальный технический университет в
                    2014 году по специальности «Архитектура». Занимается
                    деятельностью в области архитектуры и дизайна с 2010 года. С
                    2011 года учредитель и ведущий архитектор ZROBYM architects.
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.creatorFooterText}
                  >
                    Участник международных конкурсов "Архстояние'2011"...
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.imgBox}>
                <img className={classes.img} src={alexey} alt="img"></img>
              </Box>
            </Box>

            <Box className={`${classes.Block} ${classes.BlockMt0}`}>
              <span className={`${classes.line} ${classes.lineInvis}`}></span>
              <Box className={classes.creatorsBox}>
                <Box className={classes.creatorTextBox}>
                  <Typography className={classes.creatorTitle}>
                    Алексей Кораблев
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className={classes.creatorSubtitle}
                  >
                    вед. архитектор
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.creatorMainText}
                  >
                    Окончил Белорусский национальный технический университет в
                    2014 году по специальности «Архитектура». Занимается
                    деятельностью в области архитектуры и дизайна с 2010 года. С
                    2011 года учредитель и ведущий архитектор ZROBYM architects.
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.creatorFooterText}
                  >
                    Участник международных конкурсов "Архстояние'2011"...
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.imgBox}>
                <img className={classes.img} src={andrey} alt="img"></img>
              </Box>
            </Box>
            <Box className={classes.Block}>
              {matches[1200] ? (
                <Box className={classes.titleBox}>
                  <span className={classes.line}></span>
                  <Typography
                    variant="subtitle1"
                    className={classes.blockTitle}
                  >
                    Наш друг, В. Татаров.
                  </Typography>
                </Box>
              ) : (
                <>
                  <span className={classes.line}></span>
                  <Typography
                    variant="subtitle1"
                    className={classes.blockTitle}
                  >
                    Наш друг, В. Татаров.
                  </Typography>
                </>
              )}
              <Typography className={`${classes.header} ${classes.header2}`}>
                Модульные дома - экологичность, технологичность, оптимальность.
              </Typography>
            </Box>
            <Box className={classes.Block}>
              {matches[1200] ? (
                <Box className={classes.titleBox}>
                  <span className={classes.line}></span>
                  <Typography
                    variant="subtitle1"
                    className={classes.blockTitle}
                  >
                    В офисе студии ZROBYM architects, за кружкой хорошего кофе
                    всегда можно получить необходимую информацию, выбрать
                    готовый проект или заказать разработку модульного дома
                    индивидуально.
                  </Typography>
                </Box>
              ) : (
                <span className={classes.line}></span>
              )}
              <FormBlock
                img={office}
                header={
                  matches[1200]
                    ? null
                    : `В офисе студии ZROBYM architects, 
                    за кружкой хорошего кофе всегда можно получить необходимую информацию, выбрать 
                    готовый проект или заказать разработку модульного дома индивидуально.`
                }
                email
              />
            </Box>
          </div>
          <Footer />
        </div>
        <Menu />
      </div>
    </ThemeProvider>
  );
};
export default MainPage;
