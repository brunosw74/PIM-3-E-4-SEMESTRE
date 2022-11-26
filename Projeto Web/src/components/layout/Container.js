// Conteiner.js ira servir para poder mover os itens do Container
import styles from './Container.module.css'

function Container(props) {
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>
    )
}

export default Container