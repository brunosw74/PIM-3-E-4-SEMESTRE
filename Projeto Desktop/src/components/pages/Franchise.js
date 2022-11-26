import styles from './Franchise.module.css'
import franquia from '../../imgs/valores2.png'
import btnadd from '../../imgs/add_table.png'


function Franchise() {
    return (
        <section className={styles.container}>
            <div className={styles.h1}>
                <h1 >Franquia</h1>
            </div>

            <div className={styles.fran_container}>
                <img className={styles.img} src={franquia} alt="Valores de Franquia" ></img>

                <ul>
                    <button className={styles.btn}>Valor Total</button>
                    <button className={styles.btn}>Valor Inicial</button>
                    <button className={styles.btn}>Valor Final</button>
                </ul>

                <button className={styles.btn_add}>
                    <img src={btnadd} alt="Adicionar Tabelas de Valores"></img>
                </button>
                <p className={styles.p}>Inserir Tabela de valores - Parcelas</p>
                <button className={styles.btn_confirm}>Confirmar</button>
            </div>
        </section>
    )
}

export default Franchise
