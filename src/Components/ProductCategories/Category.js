import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Category = ({image, productName}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image={image}
      alt={productName}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {productName}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Shop Now</Button>
    </CardActions>
  </Card>
  )
}

export default Category