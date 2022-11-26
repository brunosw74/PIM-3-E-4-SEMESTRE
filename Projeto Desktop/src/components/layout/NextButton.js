import styles from './NextButton.module.css'
import next from '../../imgs/seta.png'
import {Link} from 'react-router-dom'

function NextButton({to}) {
    return(
        <Link className={styles.btn} to={to}>
            <img src={next} alt="Proximo"></img>
        </Link>
    )
}

export default NextButton