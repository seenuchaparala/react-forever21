import CartItem from './CartItem'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import TextField from '@mui/material/TextField'
import { useState } from 'react'

const Cart = ({ cartItems, onAdd, onRemove, setCartItems }) => {
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  const [coupon, setCoupon] = useState('')
  const [discount, setDiscount] = useState(0)
  const [labelError, setLabelError] = useState(false)
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      switch (coupon) {
        case 'EXTRA30':
          setDiscount((0.3 * itemsPrice).toFixed(2))
          setLabelError(false)
          break
        case 'EXTRA50':
          setDiscount((0.5 * itemsPrice).toFixed(2))
          setLabelError(false)
          break
        default:
          setLabelError(true)
          break
      }
    }
  }
  return cartItems.length === 0 ? (
    <Typography variant="h4" align="center">
      Your Cart is Empty
    </Typography>
  ) : (
    <div style={{ width: 960, padding: 20 }}>
      <Typography variant="h4" align="center">
        Your Cart
      </Typography>

      {cartItems.map((item) => (
        <CartItem
          key={item.pid}
          item={item}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
      <Grid container sx={{ justifyContent: 'center' }}>
        <TextField
          error={labelError}
          id="outlined-error-helper-text"
          label="Enter Coupon EXTRA30"
          helperText={labelError && 'Invalid coupon'}
          align="center"
          sx={{ margin: 2 }}
          onChange={(e) => setCoupon(e.target.value)}
          onKeyDown={handleEnter}
        />
      </Grid>
      <Typography variant="h5" align="center" sx={{ margin: 2 }}>
        You Saved: ${discount}
      </Typography>

      <Typography variant="h5" align="center" sx={{ margin: 2 }}>
        Total: ${(itemsPrice - discount).toFixed(2)}
      </Typography>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Button
          variant="contained"
          onClick={() => {
            setCartItems([])
            alert('Thank you for your purchase!')
          }}
        >
          Checkout
        </Button>
      </Grid>
    </div>
  )
}

export default Cart
