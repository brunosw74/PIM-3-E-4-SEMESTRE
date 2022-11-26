import styles from './ExitButton.module.css'
import exit from '../../imgs/exit.png'
import {Link} from 'react-router-dom'

function ExitButton({to}) {
    return(
        <Link className={styles.btn} to={to}>
            <img src={exit} alt="Sair"></img>
        </Link>
    )
}
export default ExitButton