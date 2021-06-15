import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";

const Accordion = withStyles({
  root: {
    width: "640px",
    // borderBottom: "1px solid #333333",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "#D1D1D1",
    borderBottom: "1px solid #333333",
    marginBottom: 0,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    backgroundColor: "#D1D1D1",
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function Accordions({ arr }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      {arr.map((item, index) => {
        return (
            
          <Accordion
            key={index}
            square
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
          >
            <AccordionSummary
              aria-controls={`panel${index + 1}d-content`}
              id={`panel${index + 1}d-header`}
              expandIcon={<AddIcon />}
            >
              <Typography>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.subtitle}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
