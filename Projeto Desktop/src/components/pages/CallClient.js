import ExitButton from '../layout/ExitButton'
import styles from './CallClient.module.css'
import enviar from '../../imgs/enviar.png'

function CallClient() {
    return (
        <section className={styles.container}>
            <div className={styles.title_page}>
                <h1>Atendimento ao Cliente</h1>
            </div>

            <div className={styles.call_container}>
                <ExitButton to="/"></ExitButton>
                <div className={styles.chat_container}>

                </div>
                <div className={styles.envio_container}>
                    <input type="text" name="chatbox" className={styles.text_input}></input>
                    
                    <button className={styles.img_enviar}>
                        <img src={enviar} alt="Botao Enviar"></img>
                    </button>
                </div>

            </div>

        </section>
    )
}

export default CallClient