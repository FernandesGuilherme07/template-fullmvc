import React, { useEffect } from 'react'
import Goomarket from '../../components/assets/Goomarket.png'
import ModalLogin from '../../components/Authentication/Login'
import ModalRegister from '../../components/Authentication/Register'

export default function Login() {
  const [openLogin, setOpenLogin] = React.useState(true)
  const [openRegister, setOpenRegister] = React.useState(false)
  const [pin_id, setPin_id] = React.useState('')
  const [storeId, setStoreId] = React.useState(0)

  useEffect(() => {
    if (process.browser) {
      setStoreId(window.location?.pathname?.split('/')[2])
    }
  }, [])

  return (
    <div
      style={{
        backgroundImage: `url(${Goomarket})`,
        width: '100vw',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#F1F1EF',
        overflow: 'hidden !important',
      }}
    >
      <ModalLogin
        open={openLogin}
        onClose={() => {}}
        changeToRegister={pin_id => {
          setPin_id(pin_id)
          setOpenLogin(false)
          setOpenRegister(true)
        }}
        storeId={storeId}
      />
      <ModalRegister
        open={openRegister}
        onClose={() => {}}
        changeToLogin={() => {
          setOpenLogin(true)
          setOpenRegister(false)
        }}
        pin_id={pin_id}
        storeId={storeId}
      />
    </div>
  )
}
