import styles from './Securitys.module.css'
import carro from '../../imgs/carro.png'
import moto from '../../imgs/moto.png'
import van from '../../imgs/van.png'
import caminhoes from '../../imgs/caminhoes.png'


function Securitys() {
    return (
        <section className={styles.security_container}>
            <div className={styles.title_page}>
                <h1>Tipos de Seguros</h1>
            </div>

            <div className={styles.content_container}>
                <ul className={styles.content_container_item}>
                    <ul className={styles.text_container}>
                        <h1 className={styles.box_title}>SEGURO PARA CARROS</h1>
                        <p className={styles.box_text}>Oferecemos um seguro exclusivo contra Furto e Roubo, com aceitação para qualquer marca, modelo e ano de carro, com valor até 80% mais barato que o seguro completo e Assistência 24h em todo o Brasil.</p>
                        <img src={carro} alt={"Carro"} className={styles.carro}></img>
                    </ul>
                </ul>

                 <ul className={styles.text_container2}>
                    <h1 className={styles.box_title}>SEGURO PARA MOTOS</h1>
                    <p className={styles.box_text}>Oferecemos um seguro exclusivo contra Furto e Roubo, com aceitação para qualquer marca, modelo e ano de motos, com valor até 80% mais barato que o seguro completo e Assistência 24h em todo o Brasil.</p>
                    <img src={moto} alt={"Moto"} className={styles.moto}></img>
                </ul> 
            </div>

            <div className={styles.content_containe2}>
                <ul className={styles.content_container_item}>
                    <ul className={styles.text_container3}>
                        <h1 className={styles.box_title}>SEGURO PARA VANS</h1>
                        <p className={styles.box_text}>Oferecemos um seguro exclusivo contra Furto e Roubo, com aceitação para qualquer marca, modelo e ano de vans, com valor até 80% mais barato que o seguro completo e Assistência 24h em todo o Brasil.</p>
                        <img src={van} alt={"Van"} className={styles.van}></img>
                    </ul>
                </ul>

                <ul className={styles.text_container4}>
                    <h1 className={styles.box_title}>SEGURO PARA CARROS</h1>
                    <p className={styles.box_text}>Oferecemos um seguro exclusivo contra Furto e Roubo, com aceitação para qualquer marca, modelo e ano de carro, com valor até 80% mais barato que o seguro completo e Assistência 24h em todo o Brasil.</p>
                    <img src={caminhoes} alt={"Caminoes"} className={styles.cmh}></img>
                </ul>
            </div>

        </section>
    )
}

export default Securitys