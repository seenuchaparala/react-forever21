import { useParams } from 'react-router-dom'
import useFetch from '../../useFetch'
import ProductCard from './ProductCard'
import { Grid } from '@mui/material'

const ProductResult = () => {
  const { query } = useParams()
  const data = useFetch

  // <div>
  //   <Grid container spacing={2}>
  //     {list.map((item) => (
  //       <Grid key={item.id} item xs={3}>
  //         <Category productName={item.product} image={item.image} />
  //       </Grid>
  //     ))}
  //   </Grid>
  // </div>

  return (
    <div>
      <Grid container spacing={2}>
        {data.map((product) => {
          return (
            <Grid key={product.id} item xs={3}>
              <ProductCard data={product} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default ProductResult