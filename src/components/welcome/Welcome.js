import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import styles from "./welcome.module.scss"

const Welcome = () => {
  const [posY, setPosY] = useState(0)
  const [posX, setPosX] = useState(0)
  const animate = (e) => {
    setPosX((window.innerWidth / 2 - e.pageX) / 50)
    setPosY((window.innerHeight / 2 - e.pageY) / 50)
  }
  const buttonStyle = {
    boxShadow: `${posX*0.5}px ${posY*0.5}px 5px rgba(0, 0, 0, 0.2)`
  }
  return (
    <div className={styles.container} onMouseMove={animate}>
      <div className={styles.card} style={{
        transform: `rotateY(${posX * -1}deg) rotateX(${posY}deg)`,
        boxShadow: `${posX * 3}px ${posY * 3}px 10px rgba(0, 0, 0, 0.2), ${posX * 5}px ${posY * 5}px 50px rgba(0, 0, 0, 0.2)`
      }}>
        <div className={styles.image}>
          <div className={styles.circle}></div>
          <img src="./logo192.png" alt="avatar" />
        </div>
        <div className={styles.about}>
          <h1>Hello visitor</h1>
          <h3>This is my site</h3>
          <div className={styles.menu}>
            <button style={buttonStyle}>button</button>
            <button style={buttonStyle}>button</button>
            <button style={buttonStyle}>button</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome