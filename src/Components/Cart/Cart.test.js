import { render, screen } from '@testing-library/react'
import Cart from './Cart'



test('Test cart function', () => {
    const mockData = [{qty:1}]
  render(<Cart cartItems={mockData}/>)
  expect(screen.getByText('Your Cart')).toBeInTheDocument()
})
