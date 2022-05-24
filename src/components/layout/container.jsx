import styles from '../../assets/styles/layout/container.module.css'

const Container = ({ children, customStyle }) => {
  return (
    <div className={styles['l-container']} style={customStyle}>
      {children}
    </div>
  )
}

export default Container
