import React from 'react'
import { Container, Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'
import useLazyState from 'react-storefront/hooks/useLazyState'
import CmsSlot from 'react-storefront/CmsSlot'
import LoadMask from 'react-storefront/LoadMask'
import Head from 'next/head'
import createLazyProps from 'react-storefront/props/createLazyProps'
import fetchFromAPI from 'react-storefront/props/fetchFromAPI'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    margin: theme.spacing(10, 0, 0, 0),
  },
}))

export default function Products(lazyProps) {
  const classes = useStyles()
  const [state] = useLazyState(lazyProps)
  const products = state.pageData.products || {}
  const loading = state.loading
  return (
    <>
      {state.loading ? null : (
        <Head>
          <title>{state.pageData.title}</title>
        </Head>
      )}
      <Container maxWidth="lg">
        {state.loading ? (
          <LoadMask fullscreen />
        ) : (
          <div className={classes.root}>
            <Grid container spacing={3}>
              {products
                ? products.map(product => {
                    return (
                      <Grid item xs={12} sm={4} md={3} key={`pid${product.id}`}>
                        <Paper elevation={3} style={{ padding: '2rem' }} >
                          <Typography variant="body1">{product.name}</Typography>
                          <Typography variant="body1">id: {product.product_id}</Typography>
                        </Paper>
                      </Grid>
                    )
                  })
                : null}
            </Grid>
            <CmsSlot>{state.pageData.slots.description}</CmsSlot>
          </div>
        )}
      </Container>
    </>
  )
}

Products.getInitialProps = createLazyProps(options => {
  const { res } = options
  if (res) res.setHeader('Cache-Control', 'max-age=99999')
  return fetchFromAPI(options)
})
