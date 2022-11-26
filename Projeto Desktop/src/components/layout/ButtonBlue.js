import styles from './ButtonBlue.module.css'

function ButtonBlue({text}) {
    return(
        <button className={styles.btn}>{text}</button>
    )
}

export default ButtonBlue