import styles from '../../assets/styles/components/button.module.css'

const Button = ({ disabled, onClick, label, customStyle, ref }) => {
  return (
    <button
      type='button'
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      style={customStyle}
      ref={ref}
    >
      {' '}
      {label}
    </button>
  )
}

export default Button
