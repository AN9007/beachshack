
export const RoundedContainer= () => ({
    marginTop: '10vh',
    borderRadius:' 320px 270px 300px 220px',
    marginInline:'auto',
    
    width:{
        xs:'95%',
        sm:'85%',
        md:'60%',
        lg:'35%'
  
    },
      padding:{
          xs:'3em',
          sm:'3em',
          md:'5em'
      },

})

export const GridButtons = () =>({
      display: 'grid',
      gridTemplateColumns: '2em 2em 2em',
      alignItems: 'center',
      height: '1.5em',
      marginTop: '0.8em',
})

const HeroBase = () => ({
    display: 'flex',
    justifyContent:'center',
    flexDirection:'column',

    
})

export const Hero = () => ({
    backgroundSize: 'cover', /* Ensures the image covers the entire div */
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    zIndex: -1
})

export const HeroHome = () =>({
    ... HeroBase(),
    alignItems:'center',
    backgroundImage: 'url("/img/hero2.png")'

})

export const HeroAbout = () => ({
    ... HeroBase(),
    paddingLeft:{xs:'2em', md:'4em'},
    paddingRight:{xs:'2em', md:0},
    backgroundImage: 'url("/img/store-interior.png")'
})

export const HeroPurpose = () =>({
    ... HeroBase(),
    paddingLeft:{xs:'2em', md:'4em'},
    paddingRight:{xs:'2em', md:0},
   
    backgroundImage: 'url("/img/ocean-coral.png")'
})



// Two columns layout Image + text
export const ImageTextSection = () => ({
    display: 'flex',
    padding: '2em',
    marginTop: '5em',
    columnGap: '2em',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
  });
  
  export const ImageStyle = () => ({
    maxWidth: '700px',
    height: 'auto',
    objectFit: 'cover',
    width: '100%',
    overflow: 'hidden',
  });
  
  export const TextBoxStyle = () => ({
    width: { xs: '90%', md: '60%' },
    textAlign: { xs: 'center', md: 'left' },
  });

  export const SubNavContainer = () => ({
    display: 'flex',
    columnGap: '4em',
    alignItems: 'center',
    justifyContent: 'center'
  });


 