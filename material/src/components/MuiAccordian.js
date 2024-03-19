import { AccordionDetails, AccordionSummary, Typography, Accordion ,  } from '@mui/material'
import {ExpandMore} from '@mui/icons-material'
import {useState} from 'react'



export const MuiAccordian = () => {
    const [expanded , setExpanded] = useState(false)

    const handleChange = (isExpanded , panel) => {
        setExpanded( isExpanded? panel : false)
    }
    
  return (
    <div>
      
      
    
      <Accordion 
             onChange={(_event , isExpanded) => {handleChange(isExpanded , 'panel1')}}
             expanded={expanded ===  'panel1'}>
            <AccordionSummary 
                aria-controls='panel1-content' 
                expandIcon={<ExpandMore/>} 
                id='panel1-header' >
             <Typography>Accordian1</Typography>
        </AccordionSummary>

        <AccordionDetails>
            <Typography>Pariatur incididunt velit fugiat cillum. In velit exercitation proident 
                cupidatat consequat culpa velit eu. Ex ullamco amet labore dolor excepteur irure sunt
                tempor sunt est laborum. Adipisicing dolore est ipsum qui do deserunt sit occaecat anim.
                Ad sunt ut reprehenderit duis commodo pariatur dolore magna labore amet cupidatat.
                Eu minim et laborum culpa mollit et et labore veniam mollit sint nisi. Et dolor occaecat ex 
                aliqua id voluptate est labore.
            </Typography>
        </AccordionDetails>
      </Accordion>




      <Accordion 
      onChange={(_event , isExpanded) => {handleChange(isExpanded , 'panel2')}}
      expanded = {expanded === 'panel2'}>
        <AccordionSummary 
        aria-controls='panel2-content' 
        expandIcon={<ExpandMore/>} 
        id='panel2-header' >
            <Typography>Accordian2</Typography>
        </AccordionSummary>

        <AccordionDetails>
            <Typography>Pariatur incididunt velit fugiat cillum. In velit exercitation proident 
                cupidatat consequat culpa velit eu. Ex ullamco amet labore dolor excepteur irure sunt
                tempor sunt est laborum. Adipisicing dolore est ipsum qui do deserunt sit occaecat anim.
                Ad sunt ut reprehenderit duis commodo pariatur dolore magna labore amet cupidatat.
                Eu minim et laborum culpa mollit et et labore veniam mollit sint nisi. Et dolor occaecat ex 
                aliqua id voluptate est labore.
            </Typography>
        </AccordionDetails>
      </Accordion>




      <Accordion 
         onChange={(_event , isExpanded) => {handleChange(isExpanded , 'panel3')}}
        expanded = {expanded === 'panel3'}>
        <AccordionSummary 
        aria-controls='panel3-content' 
        expandIcon={<ExpandMore/>} 
        id='panel3-header' >
            <Typography>Accordian3</Typography>
        </AccordionSummary>

        <AccordionDetails>
            <Typography>Pariatur incididunt velit fugiat cillum. In velit exercitation proident 
                cupidatat consequat culpa velit eu. Ex ullamco amet labore dolor excepteur irure sunt
                tempor sunt est laborum. Adipisicing dolore est ipsum qui do deserunt sit occaecat anim.
                Ad sunt ut reprehenderit duis commodo pariatur dolore magna labore amet cupidatat.
                Eu minim et laborum culpa mollit et et labore veniam mollit sint nisi. Et dolor occaecat ex 
                aliqua id voluptate est labore.
            </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

