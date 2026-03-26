
import { useLocation, useNavigate } from "react-router";
import { Badge } from '@mui/material';
import { useShoppingBag } from "../../context/ShoppingBagContext"; 
import { useState } from "react";
import { AppBar, Toolbar, Box, InputBase, IconButton } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { padding } from "@mui/system";



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.30),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.45),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = () =>{
  let location = useLocation();
  let navigate = useNavigate();
  const {shoppingBagList} = useShoppingBag()
  const [search, setSearch] = useState('')


  const handleSubmit = (e) => {
    //1- Stops default browser behavior from reloading the page and wipe out the react state
    e.preventDefault()

    //2- Input validation,guard clause, if input is empty or just spaces stop here.
    if (!search.trim()) return
    
    //3- Translates user intent → URL state
    navigate(`/product?q=${encodeURIComponent(search)}`) //Always encode user input in URLs


  }

  const calculateamount = () => {
    let totalItems = 0
    for (let index = 0; index < shoppingBagList.length; index++) {
      const element = shoppingBagList[index];

      totalItems += element.quantity

    }
    return totalItems;
  }




  return <>

  <Box component='header' sx={{  
    width: '100%',
    top: 0,   
    right: 0,  
    zIndex: 1000, 
    position: 'fixed',
    height: '28vh',
    background: (theme) => theme.palette.custom.backgroundHeader

  }}> 

    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar sx={{gap:'1em', justifyContent:'flex-end'}}>

          <Box component='form' onSubmit={handleSubmit}>
            <Search >

              <SearchIconWrapper>
                <SearchOutlinedIcon />
              </SearchIconWrapper>

              <StyledInputBase
                type="text"  
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>

            <Badge badgeContent={calculateamount()} 
              sx={
                {'& .MuiBadge-badge': { backgroundColor: (theme) => theme.palette.custom.greendark, color: (theme) => theme.palette.text.secondary}}
                }>

              <ShoppingBagOutlinedIcon onClick={() => navigate('/shoppingbag')}/>
            </Badge>

        </Toolbar>
      </AppBar>
    </Box>

    </Box>
  </>
   
}

export default Header;