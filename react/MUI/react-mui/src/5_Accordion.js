import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { LoremIpsum } from 'react-lorem-ipsum';
import { useState } from 'react'

const AccordionClass = () => {

    const [expanded, setexpanded] = useState(false);
    const handleChange  = (isExpanded, panel) => {
        setexpanded(isExpanded ? panel : false);
    }
    return (
        <div>
            <Accordion
            expanded={expanded === 'panel1'}
            onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
            >
                <AccordionSummary
                id='panel1-header'
                aria-controls='panel1-content'
                expandIcon={<ExpandMore />} 
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <LoremIpsum Typography={1} />
                </AccordionDetails>
            </Accordion>
            <Accordion
            expanded={expanded === 'panel2'}
            onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}
            >
                <AccordionSummary
                id='panel2-header'
                aria-controls='panel2-content'
                expandIcon={<ExpandMore />} 
                >
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <LoremIpsum Typography={1} />
                </AccordionDetails>
            </Accordion>
            <Accordion
            expanded={expanded === 'panel3'}
            onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}
            >
                <AccordionSummary
                id='panel3-header'
                aria-controls='panel3-content'
                expandIcon={<ExpandMore />} 
                >
                    <Typography>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <LoremIpsum Typography={1} />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default AccordionClass;