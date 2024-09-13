import React from 'react'
import { Link } from "react-router-dom";
import { Input } from '../../components/Input/Input'
import styles from "./styles.module.scss"

export const Contact: React.FC = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.path}>
        {"Cart > Contact information > Shipping information"}
      </div>
      <div className={styles.block}>
      <div className={styles.title}>Contact information</div>
      <form action="" className={styles.form}>
        <div className={styles.up}>
            <Input label="First name*" placeholder="Enter your first name" type="text" htmlFor="first"/>
            <Input label="Last name*" placeholder="Enter your last name" type="text" htmlFor="last"/>
        </div>
        <div className={styles.down}>
        <Input label="Email*" placeholder="Enter your email" type="email" htmlFor="email"/>
        <Input label="Phone*" placeholder="Enter your phone" type="text" htmlFor="phone"/>
        </div>
      </form>
      <Link to="/shipping" className={styles.nextBtn}>Next step</Link>
    </div>
  </div>
  </div>
  )
}
