import styles from './Documents.module.css'
import f_rg from '../../imgs/frente_rg2.png'
import self_rg from '../../imgs/self_rg.png'
import b_rg from '../../imgs/verso_rg2.png'
import comp from '../../imgs/foto_comp2.png'

function Documents() {
    return (
        <section className={styles.container}>
            <div className={styles.docs_container}>
                <div className={styles.img_container}>

                    <div  className={styles.img_margin1}>
                        <img src={f_rg} alt="Frente RG"></img>
                        <p className={styles.text_img_1}>Frente do RG</p>
                    </div>
                    <div className={styles.img_margin2}>
                        <img src={self_rg} alt="Self RG" className={styles.img_2}></img>
                        <p className={styles.text_img_2}>Self com RG</p>
                    </div>
                    <div className={styles.img_margin3}>
                        <img src={b_rg} alt="Verso RG"></img>
                        <p className={styles.text_img_1}>Verso do RG</p>
                    </div>
                </div>

                <div>
                    <img src={comp} alt="Comprovante de Residencia" className={styles.img_3}></img>
                    <p className={styles.text_img_3}>Comprovante de residencia</p>
                </div>

            </div>
        </section>
    )
}

export default Documents