import CartItem from './CartItem'

const Cart = ({ cartItems, onAdd, onRemove }) => {
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.qty === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.pid}
          item={item}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
      <h2>Total: ${itemsPrice.toFixed(2)} </h2>
    </div>
  )
}

export default Cart
