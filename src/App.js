import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import ImageCarousel from './Components/ImageCarousel/ImageCarousel'
import ProductCateogory from './Components/ProductCategories/ProductCateogories'
import ProductResult from './Components/ProductResult/ProductResult'
import AboutUs from './Components/AboutUs/AboutUs'
import Cart from './Components/Cart/Cart'
import InvalidURL from './Components/InvalidURL'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export default function App() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [cartItems, setCartItems] = useState([])
  let [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    if (cartItems.length === 1) {
      setCartTotal(cartItems[0].qty)
    } else {
      setCartTotal(cartItems.reduce((a, b) => a + b.qty, 0))
    }
  }, [cartItems])

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search/${query}`)
    }
  }

  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.pid === product.pid)
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.pid === product.pid ? { ...exist, qty: exist.qty + 1 } : item
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.pid === product.pid)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.pid !== product.pid))
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.pid === product.pid ? { ...exist, qty: exist.qty - 1 } : item
        )
      )
    }
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <Button
                onClick={() => navigate(`/`)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                FOREVER 21
              </Button>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={() => navigate(`/search/men`)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                MEN
              </Button>
              <Button
                onClick={() => navigate(`/search/women`)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                WOMEN
              </Button>
              <Button
                onClick={() => navigate(`/aboutus`)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                ABOUT US
              </Button>
            </Box>
            <Search
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleEnter}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <IconButton
              aria-label="cart"
              onClick={() => navigate(`/cart`)}
            >
              <Badge badgeContent={cartTotal} color="success">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ width: 960, m: 'auto' }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ImageCarousel />
                <ProductCateogory />
              </>
            }
          />
          <Route
            path="/search/:query"
            element={<ProductResult onAdd={onAdd} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                setCartItems={setCartItems}
              />
            }
          />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/*" element={<InvalidURL />} />
        </Routes>
      </Box>
    </>
  )
}
