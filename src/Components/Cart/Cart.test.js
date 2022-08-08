import { render, screen } from '@testing-library/react'
import Cart from './Cart'

test('testing empty cart', () => {
  const mockData = []
  render(<Cart cartItems={mockData} />)
  expect(screen.getByText('Your Cart is Empty')).toBeInTheDocument()
})

test('testing title and total price', () => {
  const mockData = [
    { qty: 1, price: 7.99 },
    { qty: 1, price: 5.99 },
  ]
  render(<Cart cartItems={mockData} />)
  expect(screen.getByText('Total: $13.98')).toBeInTheDocument()
  expect(screen.getByText('Your Cart')).toBeInTheDocument()
})
