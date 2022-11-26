import styles from './Origin.module.css'
import logo from '../../imgs/logo.png'

function Origin() {
    return (

        <section className={styles.origin_container}>

            <img src={logo} alt="Logo" />

            <h1>TOPS SEGUROS BRASIL</h1>
        </section>

    )
}

export default Origin