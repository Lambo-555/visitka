import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import { settingsSetLanguage, settingsSetTheme } from "../../store/actionCreators/settingsReducer";
import styles from "./welcome.module.scss"
//Languages
import langRu from "../../languages/ru"
import langEn from "../../languages/en"
//Themes
import { themeDark, themeLight } from "../commonStyles/themes"
import { useHistory } from "react-router-dom";

const Welcome = (props) => {
  let history = useHistory()
  const [posY, setPosY] = useState(0)
  const [posX, setPosX] = useState(0)
  const [lang, setLang] = useState({})
  const [theme, setTheme] = useState(themeLight)

  useEffect(() => {
    props.settings.currentLang === 'en' ? setLang(langEn) : setLang(langRu)
    props.settings.currentTheme === 'light' ? setTheme(themeLight) : setTheme(themeDark)

    return () => {
      console.log('componentDidUnmount')
    }
  }, [props.settings])

  const langHandler = () => {
    props.settings.currentLang === 'en'
      ? props.onLangChange('ru')
      : props.onLangChange('en')
  }
  const themeHandler = () => {
    props.settings.currentTheme === 'dark'
      ? props.onThemeChange('light')
      : props.onThemeChange('dark')
  }

  const animate = (e) => {
    setPosX((window.innerWidth / 2 - e.pageX) / 50)
    setPosY((window.innerHeight / 2 - e.pageY) / 50)
  }
  const buttonStyle = {
    boxShadow: `${posX * 0.5}px ${posY * 0.5}px 5px rgba(0, 0, 0, 0.2)`
  }
  const redirectHandler = (path) => {
    history.push(path)
  }
  return (
    <div className={styles.container} style={theme} onMouseMove={animate}>
      <div className={styles.card} style={{
        transform: `rotateY(${posX * -1}deg) rotateX(${posY}deg)`,
        boxShadow: `${posX * 2}px ${posY * 2}px 10px rgba(0, 0, 0, 0.2), ${posX * 5}px ${posY * 5}px 50px rgba(0, 0, 0, 0.2)`,
        background: `linear-gradient(
          30deg,
        rgba(255,255,255,0.2), 
        rgba(255,255,255,0.2) ${50 + posX - posY}%, 
        rgba(150,150,150,0.2) ${75 + posX - posY}%,  
        rgba(150,150,150,0.1) ${75 + posX - posY}%), white`
      }}>

        <button className={styles.language} onClick={langHandler}>en / ru</button>
        <button className={styles.theme} onClick={themeHandler}>🌞 / 🌑</button>

        <div className={styles.image}>
          <div className={styles.circle} style={{ boxShadow: `inset ${posX * 2}px ${posY * 2}px 10px rgba(0, 0, 0, 0.4)` }}></div>
          <img src="./logo192.png" alt="avatar" />
        </div>
        <div className={styles.about}>
          <h1>{lang.hello}</h1>
          <small>{lang.hello_from}</small>
          <h3>{lang.about}</h3>
          <div className={styles.menu}>
            <button style={buttonStyle} onClick={() => redirectHandler('/challenges')}>{lang.btn_challenges}</button>
            <button style={buttonStyle} onClick={() => redirectHandler('/experience')}>{lang.btn_exp}</button>
            <button style={buttonStyle} onClick={() => redirectHandler('/contacts')}>{lang.btn_contacts}</button>
          </div>
        </div>
      </div>
    </div>
  )
}


//react-redux
//get data
function mapStateToProps(state) {
  return {
    settings: state.settingsReducer
  }
}
//set data
function mapDispatchToProps(dispatch) {
  return {
    onLangChange: (newLang) => dispatch(settingsSetLanguage(newLang)),
    onThemeChange: (newTheme) => dispatch(settingsSetTheme(newTheme)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);