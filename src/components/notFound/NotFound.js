import { useHistory } from "react-router-dom"

const NotFound = props => {
  let history = useHistory()
  console.log("History", history)
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>404</h1>
      <p>Page <strong>"{history.location.pathname}"</strong> not found</p>
    </div>
  )
}

export default NotFound