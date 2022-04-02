import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormBlock from "./FormBlock";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import TitleWithLine from "../components/TitleWithLine";
import getPublicPath from '../utils/getPublicPath';

const useStyles = makeStyles((theme) => ({
  main:{
    [theme.breakpoints.down("md")]: {
      "& h2":{
        fontSize:'18px',
      }
    },
  },
  button: {
    marginLeft: "auto",
  },
  header: {
    fontSize: "3vw",
    fontWeight: "600",
    lineHeight: "1.2",
    letterSpacing: "0.03em",
    textTransform:"uppercase",
    color: "#4F4F4F",
    // '@media (min-width:1921px)': {
    //   fontSize: "3.54vw",
    // },
    [theme.breakpoints.down("md")]: {
      width: "65%",
      fontSize: "24px",
    },
  },
  Block: {
    display: "flex",
    gap: "60px",
    marginTop: "100px",
    "&:first-child ":{
      marginTop:'auto',
      height:'86vh',
      '@media (min-width:1921px)': {
        // marginTop: "7vw",
      },
    },
    '@media (min-width:1921px)': {
      gap: "4.2vw",
      marginTop: "8.3vw",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      alignItems: "center",
      marginTop: "60px",
      "&:first-child ":{
        marginTop:'60px',
        height:'auto',
      },
    },
  },
  BlockContent:{
    "&:first-child ":{
      marginTop:'auto',
      marginBottom: 'auto',
      height:'auto',
      '@media (min-width:1921px)': {
        // marginTop: "7vw",
      },
    },

  },
  titleBox: {
    gap: "20px",
    flexDirection: "row-reverse",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      right: "-12%",
      width: "100%",
      marginLeft: "0",
    },
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginLeft: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      // gap: "30px",
    },
    '@media (min-width:1921px)': {
      gap: "1.1vw",
    },
  },
  creatorsBox: {
    // width: "360px",
    display: "flex",
    marginTop: "auto",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: "0",
    },
  },
  creatorTextBox: {
    // fontSize: "12px",
    marginTop: "auto",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  creatorTitle: {
    fontSize: "28px",
    textTransform: "uppercase",
    fontWeight: 600,
    '@media (min-width:1921px)': {
      fontSize: "1.45vw",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
  },
  creatorSubtitle: {
    marginTop: "10px",
    fontSize: "14px",
    '@media (min-width:1921px)': {
      fontSize: "0.73vw",
      marginTop: "0.07vw",
    },
    
  },
  creatorMainText: {
    marginTop: "60px",
    [theme.breakpoints.down("md")]: {
      marginTop: "20px",
    },
    // fontSize: "12px",
  },
  creatorFooterText: {
    marginTop: "15px",
    // fontSize: "12px",
  },
  imgBox: {
    marginLeft: "auto",
    marginRight: "auto",
    width:"100%",
    [theme.breakpoints.down("md")]: {
      marginTop: "40px",
    },
  },
  BlockMt0: {
    marginTop: "60px",
    '@media (min-width:1921px)': {
      marginTop: "4.2vw",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "30px",
      gap:'20px',
    },
  },
  lineInvis: {
    opacity: "0",
  },
  img: {
    height: "100%",
    // width:"100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  header2: {
    [theme.breakpoints.down("md")]: {
      width: "65%",
    },
  },
  BlockColumn: {
    width: "28vw",
    display: "flex",
    gap: "20px",
    marginLeft: "100px",
    justifyContent: "space-between",
    flexDirection: "column",
    flexShrink: "0",  
    [theme.breakpoints.down("md")]: {
      order: "3",
      marginLeft: "0",
      width: "100%",
    },
  },
}));

const AboutUs = ({data}) => {
  const breakpoints = useBreakpoint();
  const classes = useStyles();
  return (
    <Box component="main" className={classes.main}>
      <Box
        component="section"
        className={classes.Block}
      >
        <Box className={`${classes.Block} ${classes.BlockContent}`}>
        <Box className={classes.BlockColumn}>
          <Box className={classes.titleBox}>
            <TitleWithLine title="Автор концепции MH - Андрусь Bezdar" />
          </Box>
        </Box>

        <Typography className={classes.header}>
          Мы команда архитекторов, стремящаяся сделать жильё доступным и
          качественным!
        </Typography>

        </Box>
        
      </Box>

      <Box component="section" className={classes.Block}>
        <Box className={classes.BlockColumn}>
          <Box className={classes.titleBox}>
            <TitleWithLine
              title="Разработка технологии MH - Андрусь Bezdar, Кораблёв Алексей,
              Амбражейчик Кирилл, Короленко Николай."
            />
          </Box>
        </Box>

        <Box component="section" className={classes.textBox}>
          <Typography variant="body1" className={classes.text}>
            Мы видим миссию нашей команды в изменении окружающего мира за счет
            качественной концептуальной архитектуры. В каждом нашем проекте
            заложен уникальный смысл и авторская идея.
          </Typography>
          <Typography variant="body1" className={classes.text}>
            Технология модульного строительства MODULAR HOUSE родилась в умах
            архитекторов студии ZROBYM architects и при сотрудничестве с
            производителями каркасных домов выросла в modular house
          </Typography>
          <Typography variant="body1" className={classes.text}>
            Технология создана на основе многолетнего изучения опыта
            энергоэффективного строительства в климатических условиях Беларуси и
            опробована на практике.
          </Typography>
        </Box>
      </Box>

      <Box component="section" className={classes.Block}>
        <Box className={classes.BlockColumn}>
          <Box className={classes.titleBox}>
            <TitleWithLine title="Модульная система" />
          </Box>
        </Box>

        <Box component="section" className={classes.textBox}>
          <Typography variant="body1" className={classes.text}>
            Модульная система, являющаяся основой наших проектов, позволяет
            людям с небольшим бюджетом начать с маленького домика и расширить
            его в будущем. Мы унифицировали все элементы дома и создали
            взаимозаменяемый технологичный конструктор, позволяющий легко
            модернизировать и реконструировать жилое пространство. Дом растёт
            вместе с ростом семьи во времени.
          </Typography>
          <Typography variant="body1" className={classes.text}>
            Технология МН основана на принципах рацональности и оптимальности.
            Это проявляется в соблюдении баланса между понятиями экологичности
            материалов, энергоэффективности здания, эргономичности его
            внутреннего пространства и общей стоимостью модульного дома. Главная
            идея нашей технологии - предложить людям быстросборный дом из
            готовых заводских элементов высокого качества.
          </Typography>
        </Box>
      </Box>

      <Box component="section" className={classes.Block}>
        {!breakpoints.md ? (
          <>
            <Box className={classes.BlockColumn}>
              <Box className={classes.titleBox}>
                <TitleWithLine title="Создатели" />
              </Box>
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
                    CEO & FOUNDER
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
            </Box>
            <Box className={classes.imgBox}>
              <img className={classes.img} src={getPublicPath(data,"images/aboutus_alexey.png")} alt="img"></img>
            </Box>
          </>
        ) : (
          <>
            <Box className={classes.BlockColumn}>
              <Box className={classes.titleBox}>
                <TitleWithLine title="Создатели" />
              </Box>
              <Box className={classes.imgBox}>
                <img className={classes.img} src={getPublicPath(data,"images/aboutus_alexey.png")} alt="img"></img>
              </Box>
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
                    CEO & FOUNDER
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
            </Box>
          </>
        )}
      </Box>

      <Box
        component="section"
        className={`${classes.Block} ${classes.BlockMt0}`}
        style={breakpoints.md ? { flexDirection: "column" } : null}
      >
        <Box className={classes.BlockColumn}>
          <Box className={classes.creatorsBox}>
            <Box className={classes.creatorTextBox}>
              <Typography variant="subtitle2" className={classes.creatorTitle}>
                Андрусь Bezdar
              </Typography>
              <Typography variant="body1" className={classes.creatorSubtitle}>
                CEO & FOUNDER
              </Typography>
              <Typography variant="body1" className={classes.creatorMainText}>
                Окончил Белорусский национальный технический университет в 2014
                году по специальности «Архитектура». Занимается деятельностью в
                области архитектуры и дизайна с 2010 года. С 2011 года
                учредитель и ведущий архитектор ZROBYM architects.
              </Typography>
              <Typography variant="body1" className={classes.creatorFooterText}>
                Участник международных конкурсов "Архстояние'2011"...
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={classes.imgBox}>
          <img className={classes.img} src={getPublicPath(data,"images/aboutus_andrey.png")} alt="img"></img>
        </Box>
      </Box>
      <Box component="section" className={classes.Block}>
        <Box className={classes.BlockColumn}>
          <Box className={classes.titleBox}>
            <TitleWithLine title="Наш друг, В. Татаров." />
          </Box>
        </Box>
        <Typography className={`${classes.header} ${classes.header2}`}>
          Модульные дома - экологичность, технологичность, оптимальность.
        </Typography>
      </Box>
      <Box component="section" className={classes.Block}>
        <FormBlock
          img={getPublicPath(data,"images/aboutus_office.png")}
          staticImg={true}
          header={"Приглашаем"}
          title={`В офис студии ZROBYM architects, 
                    за кружкой хорошего кофе всегда можно получить необходимую информацию, выбрать 
                    готовый проект или заказать разработку модульного дома индивидуально.`}
          email
        />
      </Box>
    </Box>
  );
};
export default AboutUs;
