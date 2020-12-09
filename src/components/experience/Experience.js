import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styles from './experience.module.scss'
import { themeDark, themeLight } from "../commonStyles/themes"


const Experience = (props) => {
  const history = useHistory()
  const [posY, setPosY] = useState(0)
  const [posX, setPosX] = useState(0)
  const [theme, setTheme] = useState({})

  useEffect(() => {
    setTheme(props.settings.currentTheme === 'dark' ? themeDark : themeLight)
    return () => {
      console.log('componentDidUnmount')
    }
  }, [props.data, props.settings])

  const animate = (e) => {
    setPosX((e.pageX / window.innerWidth) * 100)
    setPosY((e.pageY / window.innerHeight) * 100)
  }
  const fluidStyle = {
    borderRadius: `${posX}% ${100-posX}% ${100-posX}% ${posX}% / ${posY}% ${posY}% ${100-posY}% ${100-posY}%`,
  }
  return (
    <div className={styles.back} style={theme} onMouseMove={animate}>
      <div className={styles.box}>
        <div className={styles.fluid} style={fluidStyle}></div>
        <h1>Опыт работы</h1>
        <p>Я работал 1.5 года в качестве менеджера в банке МНД. Там я выполнял самые разнообразные задачи, среди которых были поручения, связанные с IT.</p>
        <ul>
          <li>Верстка страниц, правка содержимого</li>
          <li>Дополнение сайта, UI</li>
          <li>Разработка простых ботов для ВК (FAQ)</li>
          <li>Администрирование групп, VK API</li>
          <li><small>И иные задачи</small></li>
        </ul>
        <h1>Курсы</h1>
        <p>Я целенаправленно стремился в IT сферу и до сих пор иду по намеченному плану. Я изучаю следующие технологии:</p>
        <ul>
          <li>React + Redux + Router / Vue</li>
          <li>Node + express / PHP + Laravel</li>
          <li>MongoDB(Mongoose) / MySQL</li>
          <li>SASS</li>
          <li><small>И другие технологии</small></li>
        </ul>
        <button onClick={() => history.goBack()}>Назад</button>
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
