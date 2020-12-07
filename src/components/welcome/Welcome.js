import React, { useState } from "react"
import { Link } from "react-router-dom";
import styles from "./welcome.module.scss"

const Welcome = () => {
  const [name, setName] = useState('');
  const [inputShow, setInputShow] = useState(true);
  const incognitoHandler = () => {
    if (name.length > 0) {
      setInputShow(!inputShow)
    } else {
      setInputShow(!inputShow)
      setName("Incognito")
    }
  }
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.fluid}></div>
        <h2>Welcome{name.length > 0 ? `, ${name}!` : ''}</h2>
        {inputShow
          ? <div className={styles.inputGroup}>
            <h5>What is your name?</h5>
            <input
              name="name" type="text" placeholder="beauty"
              onChange={(e) => setName(() => e.target.value)}
              value={name} />
            <button
              onClick={incognitoHandler}
              className={styles.btn}
            >{name.length > 0 ? 'Set' : 'Stay incognito'}</button>
          </div>
          : null
        }
        {!inputShow
          ?
          <>
            <p>My name is <strong>Malyshev Stanislav</strong></p>
            <small>I'm junior web developer</small>
            <small>and this is my site</small>
            <br />
            <Link to="/About">Continue</Link>
          </>
          : ''
        }
      </div>
    </React.Fragment>
  )
}

export default Welcome