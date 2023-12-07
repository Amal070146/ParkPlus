import React from 'react'
import styles from './Navbar.module.css'
import { Bookingssvg, Dashboardsvg, QRsvg, Walletsvg } from './svg'

type Props = {}

export const Navbar = (props: Props) => {
  return (
    <div className={styles.NavbarWrapper}>
      <Dashboardsvg />
      <Bookingssvg />
      <Walletsvg />
      <QRsvg />
    </div>
  )
}