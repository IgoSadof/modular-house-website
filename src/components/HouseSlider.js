import React, { useState, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import Box from "@material-ui/core/Box";
// import { houses } from "../constant/houses";
import Typography from "@material-ui/core/Typography";
import { Link } from "gatsby";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import getHousesData from "../utils/getHousesData";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "125px",
    marginBottom: "100px",
  },
  list: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  conteiner: {
    // border: "1px solid",
    marginRight: "20px",
    cursor: "pointer",
  },
  content: {
    border: "1px solid",
    marginRight: "20px",
    cursor: "pointer",
  },
  imgBox: {
    width: "100%",
    height: "400px",
    overflow: "hidden",
    "&:hover $img": {
      transform: "scale(1.1)",
    },
    "&:focus $img": {
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("md")]: {
      height: "250px",
    },
  },
  img: {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    transition: "all .5s",
  },
  description: {
    padding: "35px 45px",
    [theme.breakpoints.down("md")]: {
      padding: "15px",
    },
  },
  name: {
    width: "50%",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    fontSize: "48px",
  },
  properties: {
    // marginTop: "40px",
    display: "flex",
    flexDirection: "column",

    width: "100%",
  },
  property: {
    display: "flex",
    justifyContent: "space-between",
    width: "70%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  price: {
    minWidth: "130px",
    textAlign: "end",
    [theme.breakpoints.down("md")]: {
      textAlign: "right",
      paddingRight: "10px",
    },
  },
  houseDescIconBox: {
    width: "40px",
    height: "40px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "100px",
      objectFit: "contain",
      height: "85px",
    },
  },
  mainPlan: {
    width: "40px",
    height: "40px",
    [theme.breakpoints.down("md")]: {
      objectFit: "contain",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  subtitle: {
    display: "flex",
    marginTop: "40px",
  },
}));
const HouseSlider = ({ mobile, houseRef }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { regex: "/(jpg)|(png)/" } }) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(
                width: 1000
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
            relativePath
          }
        }
      }
      allMysqlModules {
        nodes {
          moduleName
          parameterValue
          parameterName
          parentId
          contentId
        }
      }
      allMysqlHouses {
        nodes {
          alias
          mysqlId
          name
          contentID
          value
        }
      }
    }
  `);

  const dataHouses = useMemo(() => getHousesData(data), [data]);

  const matches = {
    1920: useMediaQuery("(min-width:1920px)"),
    1200: useMediaQuery("(max-width:1200px)"),
    600: useMediaQuery("(max-width:600px)"),
  };
  const getBackgroundImg = (path) => {
    let img = data.allFile.edges.find(
      (item) => item.node.relativePath === path.substr(7)
    )?.node.childImageSharp.fluid;
    return img;
  };
  const getImg = (path) => {
    let img = getImage(
      data.allFile.edges.find(
        (item) => item.node.relativePath === path.substr(7)
      )?.node
    );
    return img;
  };
  const [swipe, setSwipe] = useState(false);
  const param = { mobile };
  const classes = useStyles(param);
  const handleClick = (e) => {
    if (swipe) {
      e.preventDefault();
      setSwipe(false);
    }
  };
  const settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: matches[600] ? 1 : 2,
    // slidesToScroll: 1,
    adaptiveHeight: true,
  };
  const listItems = dataHouses
    ? dataHouses.map((item, index) => {
        return (
          <li className={classes.conteiner} key={index}>
            <Box className={classes.content}>
              <Link
                className={classes.link}
                to={`what-we-do/model${item["URL"].toUpperCase()}`}
                onClick={handleClick}
              >
                <Box className={classes.imgBox}>
                  <BackgroundImage
                    className={classes.img}
                    Tag="div"
                    {...convertToBgImage(getImg(`${item["Баннер"]}`))}
                  >
                  </BackgroundImage>
                </Box>
              </Link>

              <Box className={classes.description}>
                <Box className={classes.title}>
                  <Typography
                    variant="h1"
                    color="textSecondary"
                    className={classes.name}
                  >
                    {item.Код}
                  </Typography>
                  <Typography variant="h5" className={classes.price}>
                    {/* {item.price} */}
                    от{" "}
                    {item.takeFromBaseModule(item.modules, "Стоимость") ??
                      100000}{" "}
                    $
                  </Typography>
                </Box>
                <Box className={classes.subtitle}>
                  <Box className={classes.properties}>
                    <Box className={classes.property}>
                      <Typography
                        variant="body1"
                        className={classes.propertyName}
                      >
                        {/* {item.totalAreaText} */}
                        Общая площадь:
                      </Typography>
                      <Typography
                        variant="h6"
                        className={classes.propertyValue}
                      >
                        {item.countArea(item.modules, "Площадь общая")} М2
                      </Typography>
                    </Box>
                    <Box className={classes.property}>
                      <Typography
                        variant="body1"
                        className={classes.propertyName}
                      >
                        {/* {item.effectiveAreaText} */}
                        Эффективная площадь:
                      </Typography>
                      <Typography
                        variant="h6"
                        className={classes.propertyValue}
                      >
                        {item.countArea(item.modules, "Площадь полезная")} М2
                      </Typography>
                    </Box>
                    <Box className={classes.property}>
                      <Typography
                        variant="body1"
                        className={classes.propertyName}
                      >
                        {/* {item.baseModuleAreaText} */}
                        Площадь базового дома:
                      </Typography>
                      <Typography
                        variant="h6"
                        className={classes.propertyValue}
                      >
                        {/* {item.baseModuleArea} */}
                        {item.takeFromBaseModule(
                          item.modules,
                          "Площадь общая"
                        ) ?? 100}{" "}
                        M2
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={classes.houseDescIconBox}>
                    <GatsbyImage
                      className={classes.mainPlan}
                      image={getImg(
                        `${item["Иконка планировки"].substr(
                          item["Иконка планировки"].search(/images\//)
                        )}`
                      )}
                      alt="img"
                    ></GatsbyImage>
                  </Box>
                </Box>
              </Box>
            </Box>
          </li>
        );
      })
    : null;

  return (
    <ul className={classes.list}>
      <Slider onSwipe={() => setSwipe(true)} ref={houseRef} {...settings}>
        {listItems}
      </Slider>
    </ul>
  );
};
export default HouseSlider;
