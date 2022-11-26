import styles from './Sinister.module.css'
import card1 from '../../imgs/card_sinistro_1.png'
import card2 from '../../imgs/card_sinistro_2.png'

function Sinister() {
    return (
        <section className={styles.container}>

            <div className={styles.sinister_container1}>
                <p className={styles.title_container1}>Sinistro de Veículos</p>
                <p className={styles.text_container1}>Top seguros Brasil em casos de colisão, roubo, furto, incêndio, alagamento ou quebra de vidros.</p>
                <button className={styles.btn1}>AVISAR SINISTRO ON-LINE</button>
            </div>

            <div className={styles.sinister_container2}>
                <ul className={styles.text_container2}>
                    <p> Acompanhamento de Sinistro <br /><br />Já avisou à Top Seguros Brasil? Então, veja, por aqui, como está a situação do seu carro.</p>
                </ul>
                <ul >
                    <button className={styles.btn2}>ACOMPANHAR SINISTRO</button>
                </ul>

            </div>

            <div className={styles.card_container}>
                <div className={styles.card_1}>
                    <img src={card1} alt={"Card 1"}></img>
                    <ul>
                        <p className={styles.card1_text}>Faça a vistoria digital</p>
                        
                    </ul>
                    <ul>
                    <button className={styles.card_button}>conheça mais</button>
                    </ul>
                    
                </div>

                <div className={styles.card_2}>
                    <img src={card2} alt={"Card 2"}></img>
                    <ul >
                        <p className={styles.card2_text}>Acompanhe o sinistro pelo o WhatsApp</p>
                        <button className={styles.card_button2}>conheça mais</button>
                    </ul>
                    
                </div>
            </div>

        </section>
    )
}

export default Sinister