import perfil from '../../imgs/perfil_logado.png'
import styles from './ProfileLogged.module.css'

function ProfileLogged() {
    return(
        <img src={perfil} alt="Perfil Logado" className={styles.perfil}></img>
    )
}

export default ProfileLogged