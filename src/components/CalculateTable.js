import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const useStyles = makeStyles((theme) => ({
  conteiner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    flexGrow: 1,

    marginLeft: "75px",
    [theme.breakpoints.down("md")]: {
      margin: "0",
    },
  },
  title: {
    alignSelf: "end",
    margin: "25px",
  },
  table: {
    width: "100%",
    minWidth: 200,
    borderCollapse: "collapse",
    padding: "0 20px",
  },
  tableRow: {
    height: "50px",
    borderTop: "1px solid",
    borderBottom: "1px solid",
  },
  tableCell: {
    width: "25%",
  },
  tableCellFirst: {
    paddingLeft: "40px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 50px",
    },
  },
  tableCellLast: {
    paddingRight: "40px",
  },
  tableResult: {
    display: "flex",
    width: "100%",
    padding: "40px",
    justifyContent: "space-between",
    borderBottom: "1px solid",
  },
  textPrice: {
    display: "flex",
    alignItems: "center",
  },
  textPriceValue: {
    fontSize: "30px",
  },
  innerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
  },
  secondRadio:{
    marginRight:'0',
    width:'100px'
  }
}));

const CalculateTable = ({ houseOptions }) => {
 const breakpoints = useBreakpoint();
  const options = {};
  houseOptions.forEach((item) => {
    options[item.name] = item.variants[0].price;
  });

  const [currentOption, setCheckboxesCheck] = useState(options);
  const [price, setPrice] = useState(
    Object.keys(currentOption).length === 0? "0": Object.values(currentOption).reduce(
      (accumulator, currentValue) => +accumulator + +currentValue
    )
  );
  const classes = useStyles();
  const handleChangeCheckbox = (event) => {
    setCheckboxesCheck({
      ...currentOption,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    let sum = Object.keys(currentOption).length === 0? 0 : Object.values(currentOption).reduce(
      (accumulator, currentValue) => +accumulator + +currentValue
    );
    setPrice(sum);
  }, [currentOption]);

  return (
    <div className={classes.conteiner}>
      <table className={classes.table}>
        <tbody>
          {!breakpoints.md
            ? houseOptions.map((item, index) => (
                <tr className={classes.tableRow} key={index}>
                  <td
                    className={`${classes.tableCell} ${classes.tableCellFirst}`}
                  >
                    <Typography variant="h6" component="p">{item.name}</Typography>
                  </td>

                  <td className={classes.tableCell} align="left">
                    <FormControlLabel
                      name={item.name}
                      checked={
                        currentOption[item.name] === item.variants[0].price
                          ? true
                          : false
                      }
                      onChange={handleChangeCheckbox}
                      value={+item.variants[0].price}
                      control={<Radio color="primary" />}
                      label={
                        <Typography variant="body1">
                          {item.variants[0].name}
                        </Typography>
                      }
                      labelPlacement="end"
                    />
                  </td>

                  <td className={classes.tableCell} align="left">
                    <FormControlLabel
                      name={item.name}
                      checked={
                        currentOption[item.name] === item.variants[1].price
                          ? true
                          : false
                      }
                      onChange={handleChangeCheckbox}
                      value={+item.variants[1].price}
                      control={<Radio color="primary" />}
                      label={
                        <Typography variant="body1">
                          {item.variants[1].name}
                        </Typography>
                      }
                      labelPlacement="end"
                    />
                  </td>
                  <td
                    className={`${classes.tableCell} ${classes.tableCellLast}`}
                    align="right"
                  >
                    +${currentOption[item.name]}
                  </td>
                </tr>
              ))
            : houseOptions.map((item, index) => (
                <tr className={classes.tableRow} key={index}>
                  <td
                    className={`${classes.tableCell} ${classes.tableCellFirst}`}
                  >
                    <Box className={classes.innerRow}>
                      <Typography variant="h6" component="p">{item.name}</Typography>
                      <Box style={{ paddingLeft: `20px` }} className={classes.secondRadio}>+${currentOption[item.name]}</Box>
                    </Box>
                    <Box className={classes.innerRow}>
                      <FormControlLabel
                        name={item.name}
                        checked={
                          currentOption[item.name] === item.variants[0].price
                            ? true
                            : false
                        }
                        onChange={handleChangeCheckbox}
                        value={+item.variants[0].price}
                        control={<Radio color="primary" />}
                        label={
                          <Typography variant="body1">
                            {item.variants[0].name}
                          </Typography>
                        }
                        labelPlacement="end"
                      />

                      <FormControlLabel
                        className={classes.secondRadio}
                        name={item.name}
                        checked={
                          currentOption[item.name] === item.variants[1].price
                            ? true
                            : false
                        }
                        onChange={handleChangeCheckbox}
                        value={+item.variants[1].price}
                        control={<Radio color="primary" />}
                        label={
                          <Typography variant="body1">
                            {item.variants[1].name}
                          </Typography>
                        }
                        labelPlacement="end"
                      />
                    </Box>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>

      <Box className={classes.tableResult}>
        {/* <RegularButton variant="outlined">Скачать смету</RegularButton> */}
        <Typography variant="h6" component="p" className={classes.textPrice}>
          Итого
        </Typography>
        <Typography variant="caption" className={classes.textPriceValue}>
          $ {price}
        </Typography>
      </Box>
    </div>
  );
};

export default CalculateTable;
