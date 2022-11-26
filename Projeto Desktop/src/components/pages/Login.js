import Label from "../layout/Label"
import styles from "../pages/Login.module.css"
import tuser from '../../imgs/user_default.png'
import ExitButton from '../layout/ExitButton'
import NextButton from "../layout/NextButton"

function Login() {
    return (
            <section className={styles.login_container}>

                <ExitButton to="/"></ExitButton>

                <img src={tuser} alt="User" className={styles.user}></img>

                <Label text="Usuario"></Label>
                <Label text="Autentificador"></Label>

                <NextButton to="/menu"></NextButton>

            </section>
        
    )
}

export default Login