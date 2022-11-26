import styles from './Fipe.module.css'
import example_select from '../../imgs/pesquisa-fipe.png'

function Fipe() {
    return (
        <section className={styles.container}>
            <div className={styles.title_page}>
                <p>Tabela Fipe</p>
            </div>

            <div className={styles.sec_container}>

                <div>
                    <img src={example_select} alt="Select Exemple" className={styles.img}></img>
                </div>

                <div className={styles.btn_container}>
                    <ul className={styles.btn_margin}>
                        <button className={styles.btn_blue}>Marca</button>
                    </ul>

                    <ul className={styles.btn_margin}>
                        <button className={styles.btn_blue}>Modelo</button>
                    </ul>

                    <ul className={styles.btn_margin}>
                        <button className={styles.btn_blue}>Ano</button>
                    </ul>

                </div>

                <div className={styles.btn_container2}>
                    <ul className={styles.btn_margin2}>
                        <button className={styles.btn_green}>Consultar</button>
                    </ul>

                    <ul className={styles.btn_margin2}>
                        <button className={styles.btn_yellow}>Valor</button>
                    </ul>

                </div>

            </div>

        </section>
    )
}

export default Fipe