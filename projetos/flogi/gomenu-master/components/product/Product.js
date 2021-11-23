import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'

export default function Product(props) {
  const { name, price, image, handleClick } = props

  return (
    <Paper
      style={{
        width: '13vw',
        height: '18vw',
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)',
        marginTop: '1vw',
        border: '1px solid lightgrey',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        cursor: 'pointer',
        padding: 0,
        position: 'relative',
      }}
      onClick={handleClick}
    >
      <div style={{ width: '100%', height: '60%', position: 'absolute', top: 0 }}>
        <img
          src={image}
          style={{
            width: '100%',
            height: '100%',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: '15px',
            resizeMode: 'contain',
          }}
          alt=""
        />
      </div>
      <Grid style={{ height: '40%', marginBottom: '1vw', marginTop: '13vw' }}>
        <Typography
          style={{
            fontSize: '0.938rem',
            height: '3vw',
            textAlign: 'center',
            fontFamily: 'Work Sans, sans-serif',
          }}
        >
          {name}
        </Typography>
        <Typography
          style={{
            marginTop: '1vw',
            fontSize: '1.125rem',
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'Work Sans, sans-serif',
          }}
        >
          R$ {price}
        </Typography>
      </Grid>
    </Paper>
  )
}
