import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import typography from '@mui/system/typography';

export const theme = responsiveFontSizes(createTheme({

  palette: {

    primary: {
      light: '#427E9E',
      main: '#376681',// Blue slate
      dark: '#2A5165',
      contrastText: '#ffffff',// white
    },

    secondary:{
      light: '#F1F6F9',
      main:'#D4E3EC',
      dark: '#B8D1E0',
      contrastText: '#376681',//  Blue slate

    },

    custom:{
      green:'#7B9E87',
      greendark:'#688D75',
      seashell: '#FFF4EB',
      backgroundHeader: 'linear-gradient(to bottom, rgb(198, 216, 231), rgba(227,236,243,0.8), rgba(227,236,243,0.6), rgba(227,236,243,0))',

    },

    text:{
      primary:'#376681',// Blue slate
      secondary:'#ffffff',// white
    },

    background:{
      default:'linear-gradient(to bottom , white,#E2EDF3, #F1F6F9, white, #E2EDF3)',
      paper:'#ffffff',
    }

    
  },

  components:{

    MuiInputLabel:{
      styleOverrides:{
        root: ({theme}) =>({
          color: theme.palette.text.primary,
        }),

        focused: ({theme}) => ({
          color: theme.palette.primary.dark,
        })
      }
    },

    MuiAppBar: {
      styleOverrides: {
        root: ({theme}) =>  ({
          backgroundColor:'transparent', 
          color: theme.palette.primary.main,
          boxShadow:'none'
        }),
      },
    },


    MuiTypography:{
      styleOverrides:{
        root: ({ownerState, theme}) =>{
          if (ownerState.color === 'primary') {
            return {color: theme.palette.text.primary};
          }

          if (ownerState.color === 'secondary') {
            return { color: theme.palette.text.secondary};
          }
          return{}
        }
      }

    },

    MuiLink:{
      styleOverrides:{
        root:{
          textDecoration:'none',

        
        }
      }

    },

    MuiButton: {
      styleOverrides:{

        contained: {
          textTransform:'none',
          fontWeight:700,
          fontSize:'1rem',
          paddingInline:'1.5em',
          paddingBlock:'0.6em',
          maxWidth: '300px',
        },

        containedSecondary: {
          padding: '0.2rem',
          fontSize:'1rem',
          textTransform:'none',
          fontWeight:500,
          
          minWidth:'2em',
        },
        
      },
    },
    

    MuiIconButton:{
      styleOverrides:{
          root: ({theme}) => ({
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            borderRadius:'15px',

            '&:hover':{
              fontWeight:700,
              backgroundColor: theme.palette.primary.dark,
              borderColor: 'none',
            },

            '&:focus':{
              outline:'none'
            }

          }),

   
      },
        
    },

    MuiCssBaseline:{
      styleOverrides:{
        a:{
          textDecoration:'none',
          color: '#376681',
          '&:hover':{
            
            color: '#2A5165',
          }
        }

      }
    }
  },

  shape:{
    borderRadius: 8
  },

  custom:{
    radius:{
      sm:6, // small elements
      md:12, // cards / inputs
      lg: 20, // big containers 
    }
   
  },

  

  typography:{
    fontFamily:'Sora, serif',
    fontWeight: 400,
    lineHeight: 1.5,
    textAlign:'left',
  
    
    h1:{
      fontFamily: 'Amaranth, serif',
      fontWeight: 700,
      fontSize: '3.2rem',
      lineHeight: '1.1',
      fontStyle: 'normal'
    },

    h2:{
      fontFamily: 'Amaranth, serif',
      fontWeight: 600,
      fontSize: '2.2rem',
      lineHeight: '1.1',
      fontStyle: 'normal'
    },

    h3:{
      fontFamily: 'Amaranth, serif',
      fontWeight: 600,
      fontSize: '1.7rem',
      lineHeight: '1.1',
      fontStyle: 'normal',
      textAlign:'left'
    },

    h4:{
      fontFamily: 'Amaranth, serif',
      fontWeight: 600,
      fontSize: '1.3rem',
      lineHeight: '1.1',
      fontStyle: 'normal',
      textAlign:'left'
    },

  }




}))


