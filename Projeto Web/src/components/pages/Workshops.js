import styles from './Workshops.module.css'
// import { Link } from 'react-router-dom'

function Workshops() {
    return (
        <section className={styles.container}>
            <ul>
                <p className={styles.title}>Oficinas credenciadas</p>
            </ul>

            <div className={styles.work_container}>
                <button className={styles.img_link} onClick={"https://www.google.com/maps/place/Unip+Santos+-+Campus+II+-+Rangel/@-23.943436,-46.331882,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce037b0339a809:0x6f43dba55e64599!8m2!3d-23.943436!4d-46.331882"}></button>


                <div className={styles.hour_container}>
                    <ul>
                        <p className={styles.text_3}>Horas: <p className={styles.text_2}>Fechado</p> <p className={styles.text_1}>* Abre qui. às 08:00</p></p>
                    </ul>

                </div>

            </div>


        </section>
    )
}

export default Workshops