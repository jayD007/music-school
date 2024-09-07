import React, { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Fade,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { lessonsData } from './lessonsData';
import './style/lesson.css';
import Header from '../../components/header/Header';
import { AccordionSlots } from '@mui/material/Accordion';

const Lessons = () => {
  const [expanded, setExpanded] = useState<number | false>(0);

  const handleExpansion =
    (index: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? index : false);
    };

  const sortedLessonsData = lessonsData.sort((a, b) =>
    a.lesson.localeCompare(b.lesson),
  );

  return (
    <div id="lesson">
      <Header text="Lessen" />
      {sortedLessonsData.map((l, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleExpansion(index)}
          slots={{ transition: Fade as AccordionSlots['transition'] }}
          slotProps={{ transition: { timeout: 400 } }}
          className="lesson-accordion"
          sx={{
            '& .MuiAccordion-region': {
              height: expanded === index ? 'auto' : 0,
            },
            '& .MuiAccordionDetails-root': {
              display: expanded === index ? 'block' : 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#B0960A' }} />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            {expanded !== index && <Typography>{l.lesson}</Typography>}
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              component="div"
              dangerouslySetInnerHTML={{ __html: l.description }}
              sx={{ marginTop: '-50px' }}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Lessons;
