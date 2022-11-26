import styles from './Security.module.css'
import example_select from '../../imgs/pesquisa-fipe.png'

function Security() {
    return (
        <section className={styles.container}>
            <div className={styles.title_page}>
                <p>Seguros</p>
            </div>

            <div className={styles.sec_container}>

                <div>
                    <img src={example_select} alt="Select Exemple" className={styles.img}></img>
                </div>

                <div className={styles.btn_container}>
                    <ul className={styles.btn_margin}>
                        <button className={styles.btn_blue}>Valor a Vista</button>
                    </ul>

                    <ul className={styles.btn_margin}>
                        <button className={styles.btn_blue}>Parcelado</button>
                    </ul>

                    <ul className={styles.btn_margin}>
                        <button className={styles.btn_blue}>Valor Final</button>
                    </ul>

                </div>

                <div className={styles.btn_container2}>
                    <ul className={styles.btn_margin2}>
                        <button className={styles.btn_yellow}>Tipo do Seguro</button>
                    </ul>

                    <ul className={styles.btn_margin2}>
                        <button className={styles.btn_green}>Adicionar</button>
                    </ul>

                </div>

            </div>

        </section>
    )
}

export default Security