import * as React from 'react';
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import { lessonsData } from './lessonsData';
import './style/lesson.css';

const Lessons = () => {
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const handleExpansion =
    (index: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? index : false);
    };

  return (
    <div>
      {lessonsData.map((l, index: number) => {
        return (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleExpansion(index)}
            slots={{ transition: Fade as AccordionSlots['transition'] }}
            slotProps={{ transition: { timeout: 400 } }}
            sx={{
              '& .MuiAccordion-region': {
                height: expanded === index ? 'auto' : 0,
              },
              '& .MuiAccordionDetails-root': {
                display: expanded === index ? 'block' : 'none',
              },
            }}
            className="lesson-accordion"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography>{l.lesson}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                component="div"
                dangerouslySetInnerHTML={{ __html: l.description }}
              />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default Lessons;
