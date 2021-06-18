import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { houses } from "../constant/houses";
import Box from "@material-ui/core/Box";
// import RegularButton from "./buttons/RegularButton";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
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
  textPrice: {
    display: "flex",
    alignItems: "center",
  },
  textPriceValue: {
    fontSize: "30px",
  },
});

const CalculateTable = ({ houseN }) => {
  const options = {};
  houses[houseN].options.forEach((item) => {
    options[item.name] = item.variants[0].price;
  });
  
  const [currentOption, setCheckboxesCheck] = useState(options);
  const [price, setPrice] = useState(
    Object.values(currentOption).reduce(
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

  useEffect(()=>{
    let sum = Object.values(currentOption).reduce(
      (accumulator, currentValue) => +accumulator + +currentValue
    );
    setPrice(sum);
    
  },[currentOption])

  return (
    <div className={classes.conteiner}>
      <table className={classes.table}>
        <tbody>
          {houses[houseN].options.map((item, index) => (
            <tr className={classes.tableRow} key={index}>
              <td className={`${classes.tableCell} ${classes.tableCellFirst}`}>
                <Typography variant="h6">{item.name}</Typography>
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
                  control={<Radio />}
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
                  control={<Radio />}
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
          ))}
        </tbody>
      </table>

      <Box className={classes.tableResult}>
        {/* <RegularButton variant="outlined">Скачать смету</RegularButton> */}
        <Typography variant="h6" className={classes.textPrice}>
          Иотого
        </Typography>
        <Typography variant="caption" className={classes.textPriceValue}>
          $ {price}
        </Typography>
      </Box>
    </div>
  );
};

export default CalculateTable;
