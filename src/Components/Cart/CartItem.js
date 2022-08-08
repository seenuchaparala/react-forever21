import * as React from 'react'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
})

export default function CartItem({ item, onAdd, onRemove }) {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Img
            sx={{ width: 128, height: 128 }}
            alt={item.title}
            src={item.thumb_image}
          />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {item.title}
              </Typography>
              <Grid container>
                <Button
                  size="small"
                  disableElevation
                  variant="contained"
                  onClick={() => onRemove(item)}
                >
                  -
                </Button>
                <p style={{ margin: 2 }}>Qty: {item.qty}</p>
                <Button
                  size="small"
                  disableElevation
                  variant="contained"
                  onClick={() => onAdd(item)}
                >
                  +
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                Subtotal: ${(item.qty * item.price).toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              ${item.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
