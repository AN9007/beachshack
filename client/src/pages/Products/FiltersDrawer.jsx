import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Typography } from '@mui/material';
import FiltersAcordion from './Filters';

const DrawerFilters = ({open, onClose, filters, setFilters}) => {

  return (
    <Box>
      

          <Drawer
            anchor='top'
            open={open}
            onClose={onClose}
          >
               <Box
                sx={{ width: 'auto'}}
                role="presentation"
                >
                    <Typography variant='h4' color='text.primary' padding={'0.5em'} textAlign={'left'}>Filters</Typography>
                    <FiltersAcordion filters={filters} setFilters={setFilters}/>

            
                </Box>
          </Drawer>
      
    </Box>
  );
}

export default DrawerFilters
