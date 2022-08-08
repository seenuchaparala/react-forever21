import { useParams } from 'react-router-dom'
import useFetch from '../../useFetch'
import ProductCard from './ProductCard'
import { Grid } from '@mui/material'

const ProductResult = ({ onAdd }) => {
  const { query } = useParams()
  const data = useFetch(query)

  return (
    <div>
      <Grid container spacing={2}>
        {data.map((product) => {
          return (
            <Grid key={product.pid} item xs={3}>
              <ProductCard data={product} onAdd={onAdd} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default ProductResult
