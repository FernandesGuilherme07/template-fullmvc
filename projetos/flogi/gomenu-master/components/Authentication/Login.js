import React from 'react'
import {
  Button,
  Dialog,
  DialogContent,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/styles'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import loginApi from '../../hooks/Auth/Login'
import sendSMSLogin from '../../hooks/Auth/Send_SMS_Login'
import Send_SMS_Register from '../../hooks/Auth/Send_SMS_Register'

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
      borderRadius: '4px',
    },
    '.MuiOutlinedInput-root': {
      borderRadius: '4px',
    },
  },
})(() => null)

export default function Login(props) {
  const classes = useStyles()
  const { open, onClose, changeToRegister, storeId } = props
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [phoneNumberError, setPhoneNumberError] = React.useState('')
  const [pin, setPin] = React.useState('')
  const [pin_id, setPin_id] = React.useState('')
  const [step, setStep] = React.useState(0)
  const [pinError, setPinError] = React.useState('')

  const handleClose = () => {
    onClose()
  }
  const checkForm = () => {
    let entered = false
    if (step === 0) {
      if (phoneNumber === '') {
        setPhoneNumberError('Please insert phone number')
        entered = true
      }
    }
    if (step === 1) {
      if (pin === '') {
        setPinError('Please add a valid pin')
        entered = true
      }
    }
    return entered
  }

  const handleSubmit = async () => {
    if (!checkForm()) {
      if (step === 0) {
        await sendSMSLogin(phoneNumber).then(async res => {
          if (res && res.data.pin_id) {
            setPin_id(res.data.pin_id)
            setStep(1)
          } else {
            await Send_SMS_Register(phoneNumber).then(res => {
              if (res && res.pin_id) {
                changeToRegister(res.pin_id)
              }
            })
          }
        })
      } else {
        await loginApi(pin_id, pin).then(res => {
          if (res.status === 200) {
            window.location.href = '/store/' + storeId
          } else {
            setPinError(res.data.detail)
          }
        })
      }
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
          style={{ height: '30vh', width: '30vw', padding: '0 !important' }}
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
            <Typography style={{ marginBottom: '3vw', fontSize: '1.5rem' }}>
              {step === 0 ? 'Enter your phone number' : 'Enter your 4 digit number'}
            </Typography>
            <Typography style={{ fontSize: '1rem', width: '75%', marginBottom: '0.5vw' }}>
              Enter your Phone Number
            </Typography>
            <TextField
              required
              id="outlined-required"
              label="Phone Number"
              variant="outlined"
              value={phoneNumber}
              onChange={e => {
                setPhoneNumber(e.target.value)
                setPhoneNumberError('')
              }}
              error={phoneNumberError !== ''}
              helperText={phoneNumberError}
              disabled={step === 1}
              style={{ marginBottom: '1vw', width: '75%', borderRadius: '4px' }}
            />
            {step === 1 && (
              <Typography style={{ fontSize: '1rem', width: '75%', marginBottom: '0.5vw' }}>
                Enter your Pin Number
              </Typography>
            )}
            {step === 1 && (
              <TextField
                required
                id="outlined-required"
                label="Pin Number"
                variant="outlined"
                value={pin}
                onChange={e => {
                  setPin(e.target.value)
                  setPinError('')
                }}
                error={pinError !== ''}
                helperText={pinError}
                style={{ width: '75%', borderRadius: '4px', marginBottom: '2vw' }}
              />
            )}

            <Button onClick={handleSubmit} style={{ backgroundColor: 'black', color: 'white' }}>
              Login
            </Button>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  )
}
