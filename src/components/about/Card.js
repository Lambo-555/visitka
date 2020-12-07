import styles from "./card.module.scss" 
const Card = props => {
  if(props.name) {
    //find 'name' in DB
  }
  return (
    <div className={styles.card}>
      <div className={styles.header}>{props.name}</div>
      <button onClick={props.close}>Close</button>
    </div>
  )
}

export default Card