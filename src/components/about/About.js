import React, { useState } from "react"
import styles from "../welcome/welcome.module.scss"
import aboutStyles from "../about/about.module.scss"
import Card from "./Card"

const About = () => {
  const [cardName, setCardName] = useState('About card');
  const [showCard, setShowCard] = useState(false);

  const cardCloseHandler = () => {setShowCard(false)}
  const cardOpenHandler = () => {setShowCard(true)}

  const listHandler = (e) => {cardOpenHandler(); e.target.id.length > 0 && setCardName(e.target.id)}
  return (
    <div className={styles.container}>
      {showCard
        ? <Card name={cardName} close={cardCloseHandler}/>
        : null
      }
      <h1>About me</h1>
      <div onClick={listHandler} className={aboutStyles.list}>
        <div id="job">Job</div>
        <div id="challenges">Challenges</div>
        <div id="achievements">Achievements</div>
        <div id="contacts">Contacts</div>
      </div>
    </div>
  )
}

export default About