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
import ImageCarousel from './Components/ImageCarousel/ImageCarousel'
import ProductCateogory from './Components/ProductCategories/ProductCateogories'
import ProductResult from './Components/ProductResult/ProductResult'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'

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

const pages = ['MEN', 'WOMEN', 'ABOUT US']

export default function App() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search/${query}`)
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
              FOREVER21
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={(page) => navigate(`/search/${page}`)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
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
            <ShoppingCartIcon />
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
          <Route path="/search/:query" element={<ProductResult />} />
        </Routes>
      </Box>
    </>
  )
}