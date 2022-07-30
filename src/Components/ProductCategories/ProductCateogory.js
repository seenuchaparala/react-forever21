import Category from './Category'
import CapImage from '../ImageCarousel/Images/Mens_caps.jpg'
import ShoeImage from '../ImageCarousel/Images/shoes.jpg'
import GiftImage from '../ImageCarousel/Images/giftcard.jpg'
import SunglassImage from '../ImageCarousel/Images/sunglasses.jpg'
import { Grid } from '@mui/material'
const ProductCateogory = () => {
  const list = [
    { product: 'Caps', image: CapImage },
    { product: 'Shoes', image: ShoeImage },
    { product: 'Gift Cards', image: GiftImage },
    { product: 'Sunglasses', image: SunglassImage },
  ]
  return (
    <div>
      <Grid container spacing={2}>
        {list.map((item) => (
          <Grid item xs={3}>
            <Category productName={item.product} image={item.image} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ProductCateogory
