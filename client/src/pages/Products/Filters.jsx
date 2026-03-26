import Accordion from './Accordion'

import Checkbox from "@mui/material/Checkbox";
import { FormGroup } from '@mui/material';
import FormControlLabel from "@mui/material/FormControlLabel";

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import { useFilters } from '../../context/FiltersContext';





const FiltersAcordion = () => {

    const {filters,setFilters} = useFilters()

    const CATEGORIES =['Body', 'Hair Care', 'Skin Care']
    const PRODUCT_TYPES =['Cleanser', 'Moisturiser', 'Shampoo', 'Serum', 'Deodorant', 'Soap', 'Fragrances', 'Accessory']
    
    const handleCheckboxChange = (filterKey, value) => (e) => {
        setFilters(prev =>({
            ...prev,
            [filterKey]: e.target.checked ? 
            [...prev[filterKey], value] //add
            : prev[filterKey].filter(item => item !== value),//remove

  }))}
    return(
        <>
            <Accordion title={'Categories'} idHeader={'Categories'} idContent={'Categories'}>
                <FormGroup>
                    {CATEGORIES.map(categoryItem => (

                    <FormControlLabel 
                        key={categoryItem}
                        control={
                            <Checkbox
                                sx={{ color: 'primary.main' }}
                                checked={filters.category.includes(categoryItem)}
                                onChange={ handleCheckboxChange('category', categoryItem)}
                            />} 
                        label= {categoryItem} 
                        />))}

                </FormGroup>

            </Accordion>

            <Accordion title={'Product Type'} idHeader={'Product Type'} idContent={'Product Type'}>
            <FormGroup>
                {PRODUCT_TYPES.map(productTypeItem => (

                    <FormControlLabel 
                    key={productTypeItem}
                    control={
                    <Checkbox
                        sx={{ color: 'primary.main' }}
                        checked={filters.productType.includes(productTypeItem)}
                        onChange={handleCheckboxChange('productType', productTypeItem)}
                
                     />} 
                     label={productTypeItem}
                />
                    
                ))}
                    
                 
                </FormGroup>

            </Accordion>

            <Accordion title={'Price'} idHeader={'Price'} idContent={'Price'}>
                <Box sx={{ width: 'auto' }}>
                        <Slider
                            value={[filters.minPrice, filters.maxPrice]}
                            min={0}
                            max={100}
                            step={1}
                            valueLabelDisplay="auto"
                            valueLabelFormat={(v) => `$${v}`}
                            disableSwap
                            onChange={(e, newValue)=>{
                                setFilters(prev =>({
                                    ...prev,
                                    minPrice: newValue[0],
                                    maxPrice: newValue[1]
                                }))

                            }
                            }
                        />
                    
                </Box>
     
            </Accordion>
            

        </>

    );
}

export default FiltersAcordion