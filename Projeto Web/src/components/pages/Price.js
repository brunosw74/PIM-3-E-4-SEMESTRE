import styles from './Price.module.css'
// import background from '../../imgs/background_Cotacao.png'


function Price() {
    return (
        <section className={styles.container}>
            <div className={styles.price_container}>
                <p className={styles.title}>Preencha os campos e receba uma proposta personalizada:</p>


                <div className={styles.input_container}>
                    <ul className={styles.imput_margin}>
                        <input type="text" placeholder="NOME" name="name" id="name" className={styles.input_model_1}></input>
                    </ul>
                    <input type="text" placeholder="EMAIL" name="email" id="email" className={styles.input_model_1}></input>
                </div>

                <ul className={styles.imput_margin_2}>
                    <input type="text" placeholder="TIPO DE VEICULO" name="vehicle" id="vehicle" className={styles.input_model_2}></input>
                </ul>

                <ul className={styles.imput_margin_2}>
                    <div className={styles.input_container}>
                        <ul className={styles.imput_margin}>
                            <input type="text" placeholder="MARCA" name="brand" id="brand" className={styles.input_model_1}></input>
                        </ul>
                        <input type="text" placeholder="MODELO" name="model" id="model" className={styles.input_model_1}></input>
                    </div>
                </ul>

                <ul className={styles.imput_margin_2}>
                    <div className={styles.input_container}>
                        <ul className={styles.imput_margin}>
                            <input type="text" placeholder="ANO" name="year" id="year" className={styles.input_model_1}></input>
                        </ul>
                        <input type="text" placeholder="CELULAR" name="cell" id="cell" className={styles.input_model_1}></input>
                    </div>
                </ul>

                <ul>
                    <button className={styles.btn}>QUERO COTAR AGORA!</button>    
                </ul>
                

            </div>
        </section>
    )
}

export default Price