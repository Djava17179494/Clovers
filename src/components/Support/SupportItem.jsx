import React, { useState } from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    // "@media (min-width:375px)" : {
      
    // },
    "@media (min-width: 1024px)": {
      width: "100%",
    },
    width: "100%",
    "&:not(:last-child)": {
      borderBottom: "1px solid rgba(0, 0, 0, .125)",
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
    ({ theme }) => ({
      backgroundColor: "rgba(255, 255, 255, 1)",
      padding: 0,
      flexDirection: "row",
      "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(180deg)",
      },
      "& .MuiAccordionSummary-content": {
        fontSize: 36,
        //   marginLeft: theme.spacing(1),
      },
    })
  );


const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    color: "#424242",
    padding: "0 0 24px",
  
    "@media (min-width: 1024px)": {
      fontSize: "24px",
    },
  }));


const SupportItem = ({ num, title, desc }) => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = (panel) => (event, newExpanded) => {
    setIsAccordionOpen(newExpanded ? panel : false);
  };
    return (
        <Accordion
      expanded={isAccordionOpen === `panel${num}`}
      onChange={toggleAccordion(`panel${num}`)}
    >
      <AccordionSummary
        expandIcon={
          isAccordionOpen === `panel${num}` ? (
            <KeyboardArrowUpIcon key={num} />
          ) : (
            <KeyboardArrowDownIcon key={num} />
          )
        } // Иконка изменяется при раскрытии и закрытии
        aria-controls={`panel${num}d-content`}
        id={`panel${num}d-header`}
      >
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{desc}</Typography>
      </AccordionDetails>
    </Accordion>
    )
}


export default SupportItem;