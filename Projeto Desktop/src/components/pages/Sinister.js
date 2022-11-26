import styles from './Sinister.module.css'
import btnadd from '../../imgs/add_table.png'

function Sinister() {
    return(
        <section className={styles.container}>
            <div className={styles.h1}>
                <h1>Sinistro</h1>
            </div>

            <div className={styles.sin_container}>
                <button className={styles.btn_add}>
                    <img src={btnadd} alt="Adicionar Foto"></img>
                </button>

                <p className={styles.p}>Adicionar Foto</p>

                <div className={styles.btn_container}>
                    <ul className={styles.btn_container_item}> 
                        <button className={styles.btn}>Tipo de Sinistro</button>
                    </ul>
                    
                    <button className={styles.btn}>Titulo</button>

                </div>

                <div className={styles.btn_container}>
                    <ul className={styles.btn_container_item}>
                        <button className={styles.btn}>Descrição</button>
                    </ul>
                    <button className={styles.btn}>Tipo de Serviço</button>
                </div>

            </div>
        </section>
    )
}

export default Sinister