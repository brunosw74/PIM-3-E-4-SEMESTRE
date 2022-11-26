import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <section>
                <div >
                    <ul className={styles.text}>
                        <p>Avenida Francisco Manoel s/n.º <br /></p>
                        <p>CNPJ: 06.099.229/0001-01  <br /></p>
                        <p>Clique aqui e acesse nossa politica de privacidade</p>
                    </ul>

                    <ul className={styles.copy_right}>
                        &copy; <span>Copyright Top Seguros Brasil - 2022</span>
                    </ul>

                    <ul className={styles.tel}>
                        <p> Telefone: (13)4009 2000</p>
                    </ul>
                    
                </div>
            </section>
        </footer>
    )
}

export default Footer