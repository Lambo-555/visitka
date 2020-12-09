import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styles from './contacts.module.scss'
import { themeDark, themeLight } from "../commonStyles/themes"
import langEn from '../../languages/en'
import langRu from '../../languages/ru'


const Contacts = (props) => {
  const history = useHistory()
  const [theme, setTheme] = useState({})
  const [lang, setLang] = useState({})

  useEffect(() => {
    setTheme(props.settings.currentTheme === 'dark' ? themeDark : themeLight)
    setLang(props.settings.currentLang === 'en' ? langEn : langRu)
    return () => {
    }
  }, [props.data, props.settings])
  return (
    <div className={styles.back} style={theme}>
      <div className={styles.box}>
        <h1>{lang.contacts_header}</h1>
        <p>Gmail:  <a href="https://gmail.com/">malishevstanislav@gmail.com</a></p> 
        <p>GitHub: <a href="https://github.com/Lambo-555">Lambo-555</a></p>
        <p>Telegram: <a href="https://t.me/easystem">easystem</a></p>
        <button onClick={() => history.goBack()}>{lang.button_back}</button>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    settings: state.settingsReducer
  }
}

export default connect(mapStateToProps, null)(Contacts);
