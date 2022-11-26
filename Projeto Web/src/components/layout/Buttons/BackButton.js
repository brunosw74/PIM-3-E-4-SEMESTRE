import styles from './BackButton.module.css'
import { Link } from "react-router-dom"
import back from '../../../imgs/seta.png'


function BackButton({to}) {
    return (
        <Link to={to}>
            <img src={back} alt="Back Button" className={styles.img_back}></img>
        </Link>
    )
}

export default BackButton