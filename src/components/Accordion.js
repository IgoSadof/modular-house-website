import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from "@material-ui/core/styles";

const Accordion = withStyles({
  root: {
    width: '100%',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: '#D1D1D1',
    borderBottom: '1px solid #333333',
    marginBottom: 0,
    minHeight: 56,
    '& h4': {
      textTransform: 'inherit',
      letterSpacing: '0.03em',
    },
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    backgroundColor: '#D1D1D1',
    // padding: '40px',
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles(() => ({
  details: {
    padding: '16px',
  },
  noDetails: {
    padding: '0',
  },
}));


export default function Accordions({
  arr,
  roomsImg,
  houseRooms,
  answers,
  title,
  uppercase,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const classes = useStyles();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      {arr.map((item, index) => {
        return (
          <Accordion
            // .substr(dataHouses[houseNumber].modules[0].rooms[0]["Главное изображение"]).search(/images\//)
            onClick={
              roomsImg
                ? () =>
                    roomsImg(
                      item['Главное изображение'].substr(
                        item['Главное изображение'].search(/images\//)
                      ),
                      index
                    )
                : null
            }
            key={index}
            square
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
          >
            <AccordionSummary
              aria-controls={`${title ? title : '0'}-${index}`}
              id={`${title ? title : '0'}-heading-${index}`}
              expandIcon={<AddIcon />}
            >
              <Typography
                style={!uppercase ? { textTransform: 'inherit' } : null}
                variant='h4'
                component='h3'
              >
                {houseRooms
                  ? item['Экспликация']
                  : answers
                  ? item[70]
                  : item[70].toUpperCase()}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={item?classes.details:classes.noDetails}>
              <Typography variant='body1' component='p'>
                {houseRooms ? item['Описание комнаты'] : item[71]}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
