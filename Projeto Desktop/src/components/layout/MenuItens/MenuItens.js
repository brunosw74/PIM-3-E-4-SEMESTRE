import styles from './MenuItens.module.css'
import { Link } from 'react-router-dom'

function MenuItens({srcimg,text,altimg, to}) {
    return(
        <div className={styles.itens_container}>
            <img className={styles.img} src={srcimg} alt={altimg}></img>
            <Link className={styles.btn} to={to} >{text}</Link>
        </div>
    )
}

export default MenuItens