import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styles from './challenges.module.scss'
import { themeDark, themeLight } from "../commonStyles/themes"

const Challenges = props => {
  const history = useHistory()
  const [posY, setPosY] = useState(0)
  const [posX, setPosX] = useState(0)
  const [theme, setTheme] = useState({})
  const [challenges, setChallenges] = useState([])

  useEffect(() => {
    setChallenges(props.data.challenges)
    setTheme(props.settings.currentTheme === 'dark' ? themeDark : themeLight)
    return () => {
      console.log('componentDidUnmount')
    }
  }, [props.data, props.settings])


  const animate = (e) => {
    setPosX((window.innerWidth / 2 - e.pageX) / 50)
    setPosY((window.innerHeight / 2 - e.pageY) / 50)
  }
  const tableStyle = {
    boxShadow: `${posX * 2}px ${posY * 2}px 25px rgba(0, 0, 0, 0.4)`,
    transform: `rotateY(${posX * -1}deg) rotateX(${posY}deg) rotateZ(${posY / 3}deg)`,
  }
  const buttonStyle = {
    boxShadow: `inset ${posX * 2}px ${posY * 2}px 25px rgba(0, 0, 0, 0.4)`,
  }
  const headStyle = {
    boxShadow: `inset ${posX * 10}px ${posY * 10}px 50px rgba(0, 0, 0, 0.5)`,
  }

  return (
    <div className={styles.back} style={theme} onMouseMove={animate}>
      <table className={styles.table} style={tableStyle}>
        <thead>
          <tr style={headStyle}>
            <th>Name</th>
            <th>Role</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          {challenges.length > 0
            ? challenges.map((item, index) => {
              return (
                <tr key={index}>
                  <td><a href={item.link}>{item.name}</a></td>
                  <td>{item.role}</td>
                  <td style={{ textAlign: 'center' }}>{item.place}</td>
                </tr>
              )
            })
            : <tr style={{ padding: '15px' }}><td>Loading...</td></tr>
          }
          <tr
            onClick={() => { history.goBack() }}
            className={styles.button}
            style={buttonStyle}
          ><td>Back</td></tr>
        </tbody>
      </table>
    </div>

  )
}

//react-redux
//get data
function mapStateToProps(state) {
  return {
    data: state.challengeReducer,
    settings: state.settingsReducer
  }
}


export default connect(mapStateToProps, null)(Challenges);