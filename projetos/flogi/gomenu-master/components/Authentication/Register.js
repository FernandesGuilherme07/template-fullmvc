import React from 'react'
import {
  Button,
  Dialog,
  DialogContent,
  FormControl,
  Grid,
  Input,
  InputLabel,
  TextField,
  Typography,
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/styles'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import Register from '../../hooks/Auth/Register'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />
})
const useStyles = makeStyles(() => ({
  paper: {
    minWidth: 650,
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
      right: '2vw !important',
      padding: '0 !important',
      margin: '0 !important',
    },
    '.MuiDialogTitle-root': {
      padding: '0 !important',
    },
    '.MuiPaper-root': {
      backgroundColor: '#FDC82F',
      minHeight: '99vh',
    },
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
      borderRadius: '4px',
    },
    '.MuiInputBase-input': {
      backgroundColor: 'white',
    },
    '.MuiOutlinedInput-root': {
      borderRadius: '4px',
    },
  },
})(() => null)

export default function Login(props) {
  const classes = useStyles()
  const { open, onClose, pin_id, storeId } = props
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [emailError, setEmailError] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [firstNameError, setFirstNameError] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [lastNameError, setLastNameError] = React.useState('')
  const [cpf, setCpf] = React.useState('')
  const [cpfError, setCpfError] = React.useState('')
  const [pin, setPin] = React.useState('')
  const [pinError, setPinError] = React.useState('')

  const handleClose = () => {
    onClose()
  }

  const checkForm = () => {
    let entered = false
    if (pin === '') {
      setPinError('Please insert pin')
      entered = true
    }
    if (email === '') {
      setEmailError('Please insert email')
      entered = true
    }
    if (firstName === '') {
      setFirstNameError('Please insert first name')
      entered = true
    }
    if (lastName === '') {
      setLastNameError('Please insert last name')
      entered = true
    }
    if (cpf === '') {
      setCpfError('Please insert cpf')
      entered = true
    }
    return entered
  }

  const handleSubmit = async () => {
    if (!checkForm()) {
      const x = await Register(pin_id, pin, firstName, lastName, email, cpf).then(res => {
        if (res) {
          window.location.href = '/store/' + storeId
        }
      })
    }
  }

  return (
    <div>
      <Dialog
        className={classes.paper}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <GlobalCss />

        <DialogTitle
          id="simple-dialog-title"
          style={{ height: '20vh', width: '30vw', padding: '0 !important' }}
        ></DialogTitle>
        <DialogContent style={{ width: '30vw', marginTop: '7vh' }}>
          <Grid
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography style={{ marginBottom: '3vw', fontSize: '1.5rem', width: '75%' }}>
              Seems like this is our first encounter, please enter the details below.
            </Typography>
            <Typography style={{ fontSize: '1rem', width: '75%', marginBottom: '0.5vw' }}>
              Enter your 4 digit pin number
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="Pin"
              variant="outlined"
              value={pin}
              error={pinError !== ''}
              helperText={pinError}
              onChange={e => {
                setPin(e.target.value)
                setPinError('')
              }}
              style={{ marginBottom: '1vw', width: '75%', borderRadius: '4px' }}
            />{' '}
            <Typography style={{ fontSize: '1rem', width: '75%', marginBottom: '0.5vw' }}>
              Enter your first name
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="First name"
              variant="outlined"
              value={firstName}
              error={firstNameError !== ''}
              helperText={firstNameError}
              onChange={e => {
                setFirstName(e.target.value)
                setFirstNameError('')
              }}
              style={{ marginBottom: '1vw', width: '75%', borderRadius: '4px' }}
            />{' '}
            <Typography style={{ fontSize: '1rem', width: '75%', marginBottom: '0.5vw' }}>
              Enter your last name
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="Last name"
              variant="outlined"
              value={lastName}
              error={lastNameError !== ''}
              helperText={lastNameError}
              onChange={e => {
                setLastName(e.target.value)
                setLastNameError('')
              }}
              style={{ marginBottom: '1vw', width: '75%', borderRadius: '4px' }}
            />
            <Typography style={{ fontSize: '1rem', width: '75%', marginBottom: '0.5vw' }}>
              Enter your E-Mail
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="E-Mail"
              variant="outlined"
              value={email}
              error={emailError !== ''}
              helperText={emailError}
              onChange={e => {
                setEmail(e.target.value)
                setEmailError('')
              }}
              style={{ marginBottom: '1vw', width: '75%', borderRadius: '4px' }}
            />
            <Typography style={{ fontSize: '1rem', width: '75%', marginBottom: '0.5vw' }}>
              Enter your CPF
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="CPF"
              variant="outlined"
              value={cpf}
              error={cpfError !== ''}
              helperText={cpfError}
              onChange={e => {
                setCpf(e.target.value)
                setCpfError('')
              }}
              style={{ marginBottom: '2vw', width: '75%', borderRadius: '4px' }}
            />
            <Button
              onClick={() => handleSubmit()}
              style={{ backgroundColor: 'black', color: 'white' }}
            >
              Register
            </Button>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  )
}
