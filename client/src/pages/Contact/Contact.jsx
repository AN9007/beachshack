
import { TextField, Button, Container, Box, Typography, Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material';
import { useState } from 'react';
import { LAYOUT_MARGIN_TOP} from '../../utils/spacing'


const Contact = () =>{

// Input states
const [name, setName] = useState("")
const [lastName, setLastName] =  useState("")
const [email, setEmail] = useState("")
const [fromSubmmited, setFromSubmmited] = useState(false)
const [notRobot, setNotRobot]= useState(false)

//Error states
const [nameError, setNameError] = useState(false)
const [lastNameError, setLastNameError] = useState(false)
const [emailError, setEmailError] = useState(false)
const [notRobotError, setNotRobotError] = useState(false)

// Handle form submit
const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true

    if (!name){
        setNameError(true)
        isValid = false

    } else{
        setNameError(false)
    }

    if(!lastName){
        setLastNameError(true)
        isValid = false
    } else{
        setLastNameError(false)
    }

    if(!email || !/^[\w.-]+@[\w.-]+[A-Za-z]{2,6}$/.test(email)){
        setEmailError(true)
        isValid = false
    } else{
        setEmailError(false)
    }

    if (isValid){
        setName("")
        setLastName("")
        setEmail("")
        setFromSubmmited(true)
    }

    if (!notRobot) {
        setNotRobotError(true)
        return;
    }
}

    return <>
<Box sx={LAYOUT_MARGIN_TOP}>
    <Typography variant='h1' mb={'0.5em'}>Contact us</Typography>

    {fromSubmmited ? 
            <Box >
                <Typography mt={'1em'} fontWeight={500}>✅ Your form has been successfully submitted!</Typography>
            </Box> 
            : null}
 
    <Container maxWidth="sm" sx={{paddingTop:'1em'}}>
        <form onSubmit={handleSubmit}> 

            {/* Name Input */}
            <TextField 
                label="Name" 
                value={name} 
                variant="outlined"  
                fullWidth 
                margin="normal" 
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                id={nameError? "outlined-error-helper-text" : null}
                helperText={nameError? 'Name is required' : null}
                autoComplete="off"
            />
            {/* Last Name Input */}
            <TextField 
                label="Last Name" 
                value={lastName} 
                variant="outlined"  
                fullWidth 
                margin="normal" 
                onChange={(e) => setLastName(e.target.value)}
                error={lastNameError}
                helperText={lastNameError? 'Last Name is required' : null}
                autoComplete="off"
            />


            {/* Email Input */}
            <TextField 
                label="Email" 
                value={email}
                variant="outlined"  
                fullWidth 
                margin="normal"
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError? 'Plase enter a valid email' : null}
                autoComplete="off"
             />

            {/* Message Input */}
            <TextField 
                label="Message" 
                variant="outlined" 
                multiline maxRows={5} 
                fullWidth margin="normal" 
            />    
            

            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end'}}>
                {/* Human Validation */}
                <FormControl error={notRobotError}>
                    <FormControlLabel
                        control={
                            <Checkbox 
                            checked={notRobot}
                            onChange={(e)=>{ setNotRobot(e.target.checked)
                                if (e.target.checked) setNotRobotError(false)
                            }}
                            sx={{color:'primary.main'}}/>
                        }
                        label='I am not a robot'
                    />

                    {notRobotError ? (<FormHelperText>Verify you are human!</FormHelperText>) : null}
                </FormControl>
            

                <Button sx={{marginTop:'3em'}} variant="contained" color="primary" fullWidth type='submit'>
                    Send
                </Button>
            </Box>
        
        
        </form>

    

    </Container>

    </Box>
    </>
}

export default Contact