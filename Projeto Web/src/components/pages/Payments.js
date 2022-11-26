import styles from './Payments.module.css'

function Payments() {
    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <h1>Pagamentos</h1>
            </div>

            <div className={styles.payments_container}>
                <div>
                    <p className={styles.p1}>A Top Seguros Brasil tem a cobertura perfeita para você</p>
                    <p className={styles.p2}>Confira abaixo as opções:</p>
                </div>

                <div>
                    <label className={styles.l1}>Roubo + Furto + RCF</label>
                    <label className={styles.l2}>Roubo + Furto + RCF + PT Colisão</label>
                </div>

                <div className={styles.container_lyellow}>

                    <label className={styles.lyellow}>COBERTURAS</label>

                    <label className={styles.lyellow2}>ROUBO + FURTO + RCF</label>

                    <label className={styles.lyellow3}>Visualizar opções de pagamento</label>

                </div>

                <div className={styles.divs_container}>
                    <div className={styles.cob_container}>
                        <div className={styles.cob_lines}>
                            <ul className={styles.margin_lorange_2}>
                                <label className={styles.lorange2}>Ind. integral por: roubo/furto </label>
                            </ul>
                            <ul className={styles.margin_lorange2}>
                                <label className={styles.lorange}>95% Fipe</label>
                            </ul>
                        </div>

                        <div className={styles.cob_lines}>
                            <ul className={styles.margin_lorange2All}>
                                <label className={styles.lorange2}>Ind.int por: roubo/furto/colisão</label>
                            </ul>
                            <ul className={styles.margin_lorange2}>
                                <label className={styles.lorange}>95% Fipe</label>
                            </ul>
                        </div>

                        <div className={styles.cob_lines}>
                            <ul className={styles.margin_lorange2All}>
                                <label className={styles.lorange2}>Assistência 24 hotas</label>
                            </ul>
                        </div>

                        <div className={styles.cob_lines}>
                            <ul className={styles.margin_lorange2All_2}>
                                <label className={styles.lorange2}>RCF - Danos materiais</label>
                            </ul>
                            <ul className={styles.margin_lorangeAll3}>
                                <label className={styles.lorange}>50.000,00</label>
                            </ul>
                        </div>

                        <div className={styles.cob_lines}>
                            <ul className={styles.margin_lorange2All}>
                                <label className={styles.lorange2}>RCF - Danos corporais</label>
                            </ul>
                            <ul className={styles.margin_lorangeAll2}>
                                <label className={styles.lorange}>50.000,00</label>
                            </ul>

                        </div>

                        <div className={styles.cob_lines}>
                            <ul className={styles.margin_lorange2All}>
                                <label className={styles.lorange2}>RCF - Danos morais</label>
                            </ul>
                            <ul className={styles.margin_lorangeAll2}>
                                <label className={styles.lorange}>10.000,00</label>
                            </ul>
                        </div>

                    </div>

                    <div className={styles.frt_container}>
                        <ul className={styles.margin_lorange}>
                            <label className={styles.lorange}>R$ 1.892,56</label>
                        </ul>

                        <label className={styles.lblack}>Não contratado</label>

                        <ul className={styles.margin_lorangeAll}>
                            <label className={styles.lorange}>R$ 278,96</label>
                        </ul>

                        <ul className={styles.margin_lorangeAll}>
                            <label className={styles.lorange}>R$ 630,04</label>
                        </ul>

                        <ul className={styles.margin_lorangeAll}>
                            <label className={styles.lorange}>R$ 117,57</label>
                        </ul>

                        <ul className={styles.margin_lorangeAll}>
                            <label className={styles.lorange}>R$ 16,03</label>
                        </ul>

                        <btn className={styles.btn_contratar}>CONTRATAR</btn>

                    </div>

                    <div className={styles.pg_container}>
                        <ul className={styles.payText_container}>
                            <p className={styles.payText_1}>1x de: </p>
                            <p className={styles.payText_2}>R$ 3.151,77 - sem juros</p>
                        </ul>

                        <ul className={styles.payText_containerAll}>
                            <p className={styles.payText_1}>2x de: </p>
                            <p className={styles.payText_2}>R$ 1.575,89 - sem juros</p>
                        </ul>

                        <ul className={styles.payText_containerAll}>
                            <p className={styles.payText_1}>3x de: </p>
                            <p className={styles.payText_2}>R$ 1.050,59 - sem juros</p>
                        </ul>

                        <ul className={styles.payText_containerAll}>
                            <p className={styles.payText_1}>4x de: </p>
                            <p className={styles.payText_2}>R$ 832,55 - sem juros</p>
                        </ul>

                        <ul className={styles.payText_containerAll}>
                            <p className={styles.payText_1}>5x de: </p>
                            <p className={styles.payText_2}>R$ 680,75 - sem juros</p>
                        </ul>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Payments