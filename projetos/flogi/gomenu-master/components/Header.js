import React, { useState, useCallback, useContext, useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import AppBar from 'react-storefront/AppBar'
import CartButton from 'react-storefront/CartButton'
import Search from './search/Search'
import Logo from '../components/assets/gomarketLogo.png'
import {
  Avatar,
  Container,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from '@material-ui/core'
import Menu from 'react-storefront/menu/Menu'
import MenuButton from 'react-storefront/menu/MenuButton'
import Link from 'react-storefront/link/Link'
import SessionContext from 'react-storefront/session/SessionContext'
import get from 'lodash/get'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
  title: {},
  logo: {
    position: 'absolute',
    left: 10,
    top: '2vw',
    [theme.breakpoints.down('xs')]: {
      left: '50%',
      top: 6,
    },
  },
  toolbar: {
    padding: 0,
    margin: 0,
  },

  container: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    fontFamily: 'Work Sans, sans-serif',

    [theme.breakpoints.down('xs')]: {
      padding: 5,
    },
  },
  root: {},
  paper: {
    textAlign: 'center',
  },
  input: {
    flex: 1,
    '& input': {
      textAlign: 'center',
    },
  },
  iconButton: {
    padding: 10,
  },
  '.makeStyles-root-6': {
    height: '12vh',
  },
}))

const GlobalCss = withStyles({
  '@global': {
    '.makeStyles-root-7': {
      height: '12vh !important',
    },
    '.MuiContainer-maxWidthLg': {
      maxWidth: 'unset',
    },
    '.makeStyles-root-15': {
      height: 100,
      borderBottom: 'none',
    },
  },
})(() => null)

export default function Header(props) {
  const classes = useStyles()
  const { categories, setCategoryFN, setSearchFN, image } = props
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenuClose = useCallback(() => setMenuOpen(false), [])
  const handleMenuButtonClick = useCallback(() => setMenuOpen(menuOpen => !menuOpen), [])
  const { session } = useContext(SessionContext)
  const [selectedCategory, setCategory] = React.useState(0)
  const [categoriesToBeDisplayed, setCategoriesToBeDisplayed] = React.useState([])
  const [search, setSearch] = React.useState('')
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')

  useEffect(() => {
    let x = []
    x.push('Todas')
    categories.map(element => {
      x.push(element)
    })
    setCategoriesToBeDisplayed(x)
    if (process.browser) {
      setName(localStorage.getItem('item_name'))
      setPhone(localStorage.getItem('item_phone'))
    }
  }, [categories])

  const handleSearch = event => {
    setSearch(event.target.value)
    setSearchFN(event.target.value)
  }

  return (
    <React.Fragment>
      <GlobalCss />
      <AppBar>
        <Container maxWidth="lg" className={classes.container}>
          <Grid
            style={{
              width: '25%',
              display: 'flex',
              justifyContent: 'flex-start',
              margin: '2vw',
              marginTop: '4vw',
            }}
          >
            <Link
              href="/"
              style={{ width: '10vw', height: '10vw', display: 'flex', alignItems: 'bottom' }}
            >
              <a>
                <img
                  src={image !== '' ? 'https://res.cloudinary.com/arbid/' + image : Logo}
                  style={{ objectFit: 'contain' }}
                />
              </a>
            </Link>
          </Grid>
          <Grid
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '1vw',
              width: '50%',
              justifyContent: 'center',
            }}
          >
            {categoriesToBeDisplayed.map((element, index) => (
              <Grid
                item
                key={index}
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setCategoryFN(element)
                  setCategory(index)
                }}
              >
                <Typography
                  style={{
                    color: 'black',
                    margin: '2vw',
                    marginBottom: '0.3vw',
                    textTransform: 'uppercase',
                    fontSize: '1rem',
                  }}
                >
                  {element}{' '}
                </Typography>
                {selectedCategory === index && (
                  <div>
                    <Divider
                      style={{
                        height: '0.15vw',
                        backgroundColor: '#FDC82F',
                      }}
                    />
                  </div>
                )}
              </Grid>
            ))}
          </Grid>
          {/* <Search /> */}
          <Grid
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '25%',
              justifyContent: 'center',
            }}
          >
            <Grid style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Grid>
                <Typography
                  style={{ marginLeft: '1vw', opacity: '0.5', color: 'black', fontSize: '0.75rem' }}
                >
                  {name}
                </Typography>
                <Typography
                  style={{ marginLeft: '1vw', opacity: '0.5', color: 'black', fontSize: '0.75rem' }}
                >
                  {phone}
                </Typography>
              </Grid>
              <Grid>
                <PhoneAndroidIcon
                  style={{
                    color: '#612EF2 !important',
                    width: '2vw',
                    height: '3vh',
                    marginTop: '1vw',
                  }}
                />
              </Grid>
            </Grid>
            <Grid style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Avatar
                alt=""
                style={{
                  backgroundColor: '#612EF2',
                  width: '1.75vw',
                  height: '1.75vw',
                  fontSize: '1rem',
                }}
              >
                1
              </Avatar>
              <Typography
                style={{ marginLeft: '0.5vw', opacity: '0.5', color: 'black', fontSize: '1rem' }}
              >
                R$ 12.00
              </Typography>
              <CartButton quantity={get(session, 'itemsInCart')} />
            </Grid>
          </Grid>
          <MenuButton open={menuOpen} onClick={handleMenuButtonClick} />
        </Container>
      </AppBar>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '3vw',
          marginLeft: '2vw',
        }}
      >
        <Paper
          style={{
            width: '37vw',
            height: '3vw',
            backgroundColor: '#EFEFEF',
            borderRadius: '15px',
            display: 'flex',
            position: 'relative',
            zIndex: '2000',
          }}
          elevation={0}
        >
          <InputBase
            className={classes.input}
            placeholder="Pesquisa..."
            value={search}
            onChange={handleSearch}
            // onKeyPress={e => {
            //   if (e.key === 'Enter') {
            //     searchData(search)
            //   }
            // }}
          />
          <IconButton className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    </React.Fragment>
  )
}
