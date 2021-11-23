import { Grid } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/styles'
import React, { useEffect } from 'react'
import AddToCart from '../../components/product/AddToCart'

import Product from '../../components/product/Product'
import Header from '../../components/Header'
import getMenu from '../../hooks/products/getMenu'
import createLazyProps from 'react-storefront/props/createLazyProps'
import useLazyState from 'react-storefront/hooks/useLazyState'
import fetchFromAPI from 'react-storefront/props/fetchFromAPI'
const useStyles = makeStyles(theme =>
  createStyles({
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
  })
)

const store = React.memo(lazyProps => {
  const classes = useStyles()
  const [state, setState] = useLazyState(lazyProps)
  const [categories, setCategories] = React.useState([])
  const [products, setProducts] = React.useState([])
  const [addOpen, setOpen] = React.useState(false)
  const [productSelected, setProductSelected] = React.useState({})
  const [selectedCategory, setSelectedCategory] = React.useState('')
  const [search, setSearch] = React.useState('')
  const [storeImage, setStoreImage] = React.useState('')

  useEffect(() => {
    let productsToBeAdded = []
    let categoriesToBe = []
    state?.pageData?.data?.products[0]?.menus.map(async (element, index) => {
      if (index === 2) {
        const menu = await getMenu(element.menu_id)
        menu.data.products.map(element => {
          productsToBeAdded.push(element)
          if (!categoriesToBe.includes(element.category)) {
            categoriesToBe.push(element.category)
          }
        })
        setCategories(categoriesToBe)
        if (categoriesToBe.length > 0) {
          setSelectedCategory('Todas')
        }
        setProducts(productsToBeAdded)
      }
    })
    console.log(state?.pageData?.data?.products[0].image)
    if (state?.pageData?.data?.products[0].image) {
      setStoreImage(state?.pageData?.data?.products[0].image)
    }
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '98vw' }}>
      <Header
        categories={categories}
        setCategoryFN={index => setSelectedCategory(index)}
        setSearchFN={searchData => setSearch(searchData)}
        image={storeImage}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1vw',
        }}
      >
        {selectedCategory !== 'Todas' ? (
          <div
            style={{
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            className={classes.root}
          >
            <div
              style={{
                width: '90vw',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  color: '#612EF2',
                  fontWeight: '600',
                  fontFamily: 'Work Sans, sans-serif',
                  fontSize: '1.75rem',
                }}
              >
                {categories.length > 0 &&
                  categories.filter(item => item === selectedCategory || item === 'Todas')}
              </div>
            </div>
            <Grid spacing={2} container style={{ width: '60vw' }}>
              {products.length > 0 &&
                products
                  .filter(item =>
                    search !== ''
                      ? item.category === selectedCategory &&
                        item.name.toLowerCase().includes(search.toLowerCase())
                      : item.category === selectedCategory
                  )
                  .map((element, index) => (
                    <Grid item xs={3} sm={3} key={index} style={{ maxWidth: '15vw' }}>
                      <Product
                        name={element.name}
                        price={element.price}
                        image={element.image}
                        handleClick={() => {
                          setProductSelected(element)
                          setOpen(true)
                        }}
                      />
                    </Grid>
                  ))}
            </Grid>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '100vw',
            }}
          >
            {categories.map((category, index) => (
              <div
                style={{
                  width: '100vw',
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                className={classes.root}
                key={index}
              >
                <div
                  style={{
                    width: '90vw',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      color: '#612EF2',
                      fontWeight: '600',
                      fontFamily: 'Work Sans, sans-serif',
                      fontSize: '1.75rem',
                      marginTop: '1vw',
                    }}
                  >
                    {categories.length > 0 && categories.filter(item => item === category)}
                  </div>
                </div>
                <Grid spacing={3} key={index} container style={{ width: '60vw' }}>
                  {products.length > 0 &&
                    products
                      .filter(item =>
                        search !== ''
                          ? item.category === category &&
                            item.name.toLowerCase().includes(search.toLowerCase())
                          : item.category === category
                      )
                      .map((element, index) => (
                        <Grid item xs={3} key={index} style={{ width: '60vw' }}>
                          <Product
                            name={element.name}
                            price={element.price}
                            image={element.image}
                            handleClick={() => {
                              setProductSelected(element)
                              setOpen(true)
                            }}
                          />
                        </Grid>
                      ))}
                </Grid>
              </div>
            ))}
          </div>
        )}
        <AddToCart
          open={addOpen}
          onClose={() => {
            setOpen(false)
            setProductSelected({})
          }}
          product={productSelected}
        />
      </div>
    </div>
  )
})

store.getInitialProps = createLazyProps(fetchFromAPI, { timeout: 50 /* the default */ })

export default store
