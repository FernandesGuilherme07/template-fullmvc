import {
  Button,
  Dialog,
  DialogContent,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputLabel,
  Typography,
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/styles'
import Modal from '@material-ui/core/Modal'
import DialogTitle from '@material-ui/core/DialogTitle'
import CloseIcon from '@material-ui/icons/Close'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import Slide from '@material-ui/core/Slide'
import SessionContext from 'react-storefront/session/SessionContext'
import Burger from '../assets/Burger.png'

import React, { useContext, useEffect } from 'react'
import { LinkedCamera } from '@material-ui/icons'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />
})
const useStyles = makeStyles(() => ({
  paper: {
    minWidth: '50vw',
    position: 'fixed',
    right: '2vw',
    height: '100vh',
    zIndex: '1010 !important',
    maxWidth: 'unset',
    padding: 0,
  },
}))
const GlobalCss = withStyles({
  '@global': {
    '.MuiDialog-paperWidthSm': {
      minWidth: '30vw',
      maxWidth: '60vw !important',
    },
    '.MuiDialog-paper': {
      position: 'absolute !important',
      right: '0vw !important',
      padding: '0 !important',
      margin: '0 !important',
      height: '100vh',
    },
    '.MuiDialogTitle-root': {
      padding: '0 !important',
    },
  },
})(() => null)

export default function AddToCart(props) {
  const classes = useStyles()
  const { open, onClose, product } = props
  const { actions } = useContext(SessionContext)
  const [extras, setExtras] = React.useState([])

  useEffect(() => {
    if (product && product.extras) {
      const extrasToBe = []
      product.extras.map(element => {
        extrasToBe.push({
          name: element.ingredient,
          price: element.price,
          quantity: element.quantity,
          id: element.ingredient_id,
        })
      })
      setExtras(extrasToBe)
    }
  }, [product])
  const [quantity, setQuantity] = React.useState(1)

  const [observations, setObservations] = React.useState('')
  const handleClose = () => {
    onClose()
  }

  const addExtra = index => {
    const x = [...extras]
    x[index].quantity += 1
    setExtras(x)
  }
  return (
    <Dialog
      className={classes.paper}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      style={{ height: '100vh' }}
    >
      <GlobalCss />
      <DialogTitle
        id="simple-dialog-title"
        style={{
          height: '30vh',
          width: '30vw',
          padding: '0 !important',
          zIndex: 0,
        }}
      >
        <img src={product.image} style={{ width: '100%', height: '100%' }} />
      </DialogTitle>
      <DialogContent
        style={{
          width: '30vw',
          height: '70vh',
          marginTop: '7vh',
          fontFamily: 'Work Sans, sans-serif',
          zIndex: 100,
          position: 'relative',
          backgroundColor: 'white',
        }}
      >
        <Grid style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography style={{ fontSize: '1.125rem', fontWeight: '600' }}>
            {product.name}
          </Typography>
          <Typography style={{ fontSize: '1.125rem', fontWeight: '600' }}>
            R$ {product.price}
          </Typography>
        </Grid>
        <Grid style={{ fontSize: '1.025rem', marginTop: '2vw' }}>{product.description}</Grid>
        <Grid>
          {extras.length > 0 && (
            <Typography style={{ fontSize: '1.125rem', marginTop: '2vw' }}>Extras</Typography>
          )}
        </Grid>
        <Grid container style={{ display: 'flex', flexDirection: 'column' }}>
          {extras.map((element, index) => (
            <Grid
              key={index}
              style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Grid>
                <Typography style={{ fontSize: '0.875rem', fontWeight: '500' }}>
                  {element.name}
                </Typography>
                <Typography style={{ fontSize: '0.775rem' }}>+R$ {element.price}</Typography>
              </Grid>
              <Grid
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Typography style={{ display: element.quantity > 0 ? '' : 'none' }}>
                  {element.quantity}
                </Typography>
                <IconButton onClick={() => addExtra(index)}>
                  <AddIcon />
                </IconButton>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid>
          <Typography style={{ fontSize: '1.125rem', marginTop: '1vw' }}>Observação</Typography>
        </Grid>
        <Grid>
          <FormControl
            style={{
              marginTop: '1vw',
            }}
            fullWidth={true}
            margin={'normal'}
          >
            <InputLabel htmlFor="obs-input">Escreve todas observações aqui..</InputLabel>
            <Input
              id="obs-input"
              type="text"
              value={observations}
              onChange={e => {
                setObservations(e.target.value)
              }}
              multiline
              rows={4}
            />
          </FormControl>
        </Grid>
        <Grid
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            padding: '1vw',
            alignItems: 'center',
            position: 'absolute',
            bottom: '0',
            width: '30vw',
          }}
        >
          <IconButton
            onClick={() => {
              if (quantity > 1) setQuantity(quantity - 1)
            }}
          >
            <RemoveIcon style={{ stroke: 'black', strokeWidth: 1 }} />
          </IconButton>
          <Typography style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{quantity}</Typography>

          <IconButton
            onClick={() => {
              setQuantity(quantity + 1)
            }}
          >
            <AddIcon style={{ stroke: 'black', strokeWidth: 1 }} />
          </IconButton>
          <Button
            style={{
              backgroundColor: '#FDC82F',
              color: 'white',
              borderRadius: '0.2vw',
              marginLeft: '2vw',
            }}
          >
            Addicionar
          </Button>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}
