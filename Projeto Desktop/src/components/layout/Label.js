import styles from './Label.module.css'
import {Link} from 'react-router-dom'

function Label({to, text}) {
    return(
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default Label