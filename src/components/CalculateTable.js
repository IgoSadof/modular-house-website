import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { houses } from "../constant/houses";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  table: {
    width: "100%",
    minWidth: 200,
  },
  conteiner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    flexGrow: 1,
    margin: "20px",
    marginTop: "0",
    maxHeight: "480px",
  },
  title: {
    alignSelf: "end",
    margin: "25px",
  },
  table: {
    borderCollapse: "collapse",
    width: "100%",
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
  button: {},
  textPrice: {
    display: "flex",
    alignItems: "center",
  },
  textPriceValue: {
    fontSize: "30px",
  },
});

const CalculateTable = ({ houseN }) => {
  console.log("start");
  const [price, setPrice] = useState(0);
  const Checkboxes = {};
  houses[houseN].options.forEach((item, index) => {
    Checkboxes[`${item.name}1`] = false;
    Checkboxes[`${item.name}2`] = false;
  });
  console.log(checkboxesCheck)
  const first = useRef("1");
  const second = useRef("2");
  const [checkboxesCheck, setCheckboxesCheck] = useState(Checkboxes);
  console.log(checkboxesCheck)
  const classes = useStyles();
  const handleChangeCheckbox = (event) => {
    setCheckboxesCheck({
      ...checkboxesCheck,
      [event.target.name]: event.target.checked,
    });
    console.log(checkboxesCheck);
    if (event.target.checked) {
      setPrice((state) => state + +event.target.value);
    } else {
      setPrice((state) => state - +event.target.value);
    }
  };

  return (
    <div className={classes.conteiner}>
      <table className={classes.table}>
        <tbody>
          {houses[houseN].options.map((item, index) => (
            <tr className={classes.tableRow} key={index}>
              <td className={`${classes.tableCell} ${classes.tableCellFirst}`}>
                {item.name}
              </td>
              <td className={classes.tableCell} align="left">
                <FormControlLabel
                  ref={first}
                  name={item.name+'1'}
                  disabled={checkboxesCheck[item.name+'2'] ? true : false}
                  onChange={handleChangeCheckbox}
                  className={classes.calculationHeaderText}
                  value={+item.variants[0].price}
                  control={<Checkbox color="primary" />}
                  label={item.variants[0].name}
                  labelPlacement="end"
                />
              </td>
              <td className={classes.tableCell} align="left">
                <FormControlLabel
                  ref={second}
                  name={item.name+'2'}
                  disabled={checkboxesCheck[item.name+'1'] ? true : false}
                  onChange={handleChangeCheckbox}
                  className={classes.calculationHeaderText}
                  value={+item.variants[1].price}
                  control={<Checkbox color="primary" />}
                  label={item.variants[1].name}
                  labelPlacement="end"
                />
              </td>
              <td
                className={`${classes.tableCell} ${classes.tableCellLast}`}
                align="right"
              >
                $ {item.variants[0].price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Box className={classes.tableResult}>
        <Button className={classes.button} variant="outlined">
          Скачать схему
        </Button>
        <Typography className={classes.textPrice}>цена</Typography>
        <Typography className={classes.textPriceValue}>$ {price}</Typography>
      </Box>
    </div>
  );
};

export default CalculateTable;
