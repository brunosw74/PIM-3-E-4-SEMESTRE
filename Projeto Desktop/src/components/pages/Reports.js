import styles from './Reports.module.css'
// import reports from '../../imgs/relatorios2.png'

function Reports() {
    return (
        <section className={styles.container}>
            <div className={styles.title_page}>
                <p>Relatorio</p>
            </div>

            <div className={styles.rep_container}>
                <ul className={styles.rep_container1}>
                    <ul className={styles.rep_img} />
                    <button className={styles.btn1}>Funcionario</button>
                    <button className={styles.btn1}>Nome do Cliente</button>
                    <button className={styles.btn1}>Data</button>
                    <button className={styles.btn1}>ID relatório</button>
                </ul>

                <button className={styles.btn2}>Salvar</button>
                <button className={styles.btn3}>Gerar Relatório</button>

                {/* <ul className={styles.line}/> */}


                <div className={styles.picture_container}>
                    <p className={styles.picture_text}>Visualizar</p>
                    <button className={styles.btn_exclude}></button>
                </div>

               <button className={styles.btn_add}></button>
                <p className={styles.p}>Anexar arquivo Excel/Word</p>
            </div>

        </section>
    )
}

export default Reports