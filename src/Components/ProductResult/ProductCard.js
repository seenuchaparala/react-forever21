import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function ProductCard({ data, onAdd }) {
  const { thumb_image, brand, title, price } = data
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="350" image={thumb_image} alt={title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          align="center"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: 200,
            whiteSpace: 'nowrap',
          }}
        >
          {brand}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: 200,
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ margin: 1 }}
        >
          ${price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button size="small" onClick={() => onAdd(data)}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  )
}
