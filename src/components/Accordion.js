import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const Accordion = withStyles({
  root: {
    width: '100%',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: '1px solid #454545',
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

const AccordionSummary = withStyles((theme)=>({
  root: {
    backgroundColor: theme.palette.primary.fon,
    marginBottom: '0',
    minHeight: '56px', 
    padding: '0',
    '& h4': {
      textTransform: 'inherit',
      letterSpacing: '0.03em',
    },
    '&$expanded': {
      minHeight: '56px',
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
}))(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.fon,
    color:'red'
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
  details: {
    padding: '0 0 16px 0',
    [theme.breakpoints.down('md')]: {
      padding: '16px 10%',
    },
  },
  accordionTitle:{
    [theme.breakpoints.down('md')]: {
      padding: '0 10%',
    },

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
    <div className='mt-15'>
      {arr.map((item, index) => {
        return (
          <Accordion
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
            {item.published ? (
              <AccordionSummary
                className={classes.accordionTitle}
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
                    ? item.question
                    : item.question.toUpperCase()}
                </Typography>
              </AccordionSummary>
            ) : null}
            {item.published ? (
              <AccordionDetails
                className={
                  item['Описание комнаты'] || item.question
                    ? classes.details
                    : classes.noDetails
                }
              >
                <Typography variant='body1' component='p'>
                  {houseRooms ? item['Описание комнаты'] : item.answer}
                </Typography>
              </AccordionDetails>
            ) : null}
          </Accordion>
        );
      })}
    </div>
  );
}
