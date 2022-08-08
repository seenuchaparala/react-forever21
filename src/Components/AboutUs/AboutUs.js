import image from './aboutus.jpg'
import Grid from '@mui/material/Grid'

const AboutUs = () => {
  return (
    <Grid container sx={{ justifyContent: 'center' }} direction='column'>
      <img src={image} alt="About us" />

      <h2 style={{textAlign:'center'}}>ABOUT US</h2>
      <blockquote>
        "FOREVER 21 is a fashion industry leader making the latest trends
        accessible to all while inspiring unique style and confidence. With a
        renewed focus on the customer experience, the brand offers high style
        designs and fashion basics with compelling values and a dynamic store
        environment. While driving innovation across e-commerce and digital to
        expand access and convenience, the brand continues to strengthen its
        positioning as today’s preferred destination for the fashionable
        consumer. Forever 21 is located in more than 540 locations globally and
        online."
      </blockquote>
    </Grid>
  )
}

export default AboutUs
