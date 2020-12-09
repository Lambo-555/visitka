import { useHistory } from "react-router-dom"
import styles from "./notFound.module.scss"

const NotFound = props => {
  let history = useHistory()
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>404</h1>
      <p>Page <strong>"{history.location.pathname.substring(1)}"</strong> not found</p>
      <button
        className={styles.button}
        onClick={() => history.goBack()}
      >Go back</button>
    </div>
  )
}

export default NotFound