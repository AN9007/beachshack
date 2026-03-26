import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';





export default function AccordionExpand({title,idHeader,idContent,children}) {
    return (
      <div>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id={`${idHeader}-header`}
            aria-controls={`${idContent}-content`}
            >
                <Typography color='text.primary' component="span">{title}</Typography>
            </AccordionSummary>

            <AccordionDetails>
                {children}
            </AccordionDetails>

        </Accordion>

        </div>
    );
    }