// import styles from './LoginButton.module.css'
import { Link } from "react-router-dom"
import next from '../../../imgs/seta2.png'


function LoginButton({to}) {
    return (
        <Link to={to}>
            <img src={next} alt="Login Button"></img>
        </Link>
    )
}

export default LoginButton