import styles from './ButtonYellow.module.css'

function ButtonYellow({text}) {
    return(
        <button className={styles.btn}>{text}</button>
    )
}

export default ButtonYellow