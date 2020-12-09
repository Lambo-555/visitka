import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styles from './experience.module.scss'
import { themeDark, themeLight } from "../commonStyles/themes"
import langEn from '../../languages/en'
import langRu from '../../languages/ru'

const Experience = (props) => {
  const history = useHistory()
  const [posY, setPosY] = useState(0)
  const [posX, setPosX] = useState(0)
  const [theme, setTheme] = useState({})
  const [lang, setLang] = useState({})

  useEffect(() => {
    setTheme(props.settings.currentTheme === 'dark' ? themeDark : themeLight)
    setLang(props.settings.currentLang === 'en' ? langEn : langRu)
    return () => {
      console.log('componentDidUnmount')
    }
  }, [props.data, props.settings])

  const animate = (e) => {
    setPosX((e.pageX / window.innerWidth) * 100)
    setPosY((e.pageY / window.innerHeight) * 100)
  }
  const fluidStyle = {
    borderRadius: `${posX}% ${100 - posX}% ${100 - posX}% ${posX}% / ${posY}% ${posY}% ${100 - posY}% ${100 - posY}%`,
  }
  return (
    <div className={styles.back} style={theme} onMouseMove={animate}>
      <div className={styles.box}>
        <div className={styles.fluid} style={fluidStyle}></div>
        <h1>{lang.exp_header1}</h1>
        <p>{lang.exp_p1}</p>
        <ul>
          <li>{lang.exp_li_001}</li>
          <li>{lang.exp_li_002}</li>
          <li>{lang.exp_li_003}</li>
          <li>{lang.exp_li_004}></li>
          <li><small>{lang.exp_li_005}</small></li>
        </ul>
        <h1>{lang.exp_header2}</h1> 
        <p>{lang.exp_p2}</p>
        <ul>
          <li>{lang.exp_li_201}</li>
          <li>{lang.exp_li_202}</li>
          <li>{lang.exp_li_203}</li>
          <li>{lang.exp_li_204}</li>
          <li><small>{lang.exp_li_205}</small></li>
        </ul>
        <button onClick={() => history.goBack()}>{lang.button_back}</button>
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


export default connect(mapStateToProps, null)(Experience);
