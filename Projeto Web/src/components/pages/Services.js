import styles from './Services.module.css'
import img1 from '../../imgs/img_servicos.png'

import house from '../../imgs/casa.png'
import keychain from '../../imgs/chaveiro.png'
import tire from '../../imgs/pneu.png'
import trailer from '../../imgs/reboque.png'

function Services() {
    return (
        <section className={styles.container}>
            <div className={styles.services_container}>
                <img src={keychain} alt={"Chaveiro"} className={styles.keychain}></img>
                <p className={styles.service_container_text}> Chaveiro <br /> No caso de impossibilidade, perda ou esquecimento da chave no interior do veículo, enviaremos um chaveiro para te ajudar.</p>

                <img src={trailer} alt={"Reboque"} className={styles.trailer}></img>
                <p className={styles.service_container_text}>Guincho / Reboque <br /> Seja por pane ou avaria/acidente, onde não consiga reparar o veículo no local, a Central de Assistência providenciará o reboque do seu veículo para a oficina mais próxima da região.</p>

                <img src={tire} alt={"Pneu"} className={styles.tire}></img>
                <p className={styles.service_container_text}>Troca de pneus <br /> Em caso de pneu furado, será providenciado o deslocamento de um prestador de serviço que irá lhe ajudar na troca do pneu. Em caso de impossibilidade deste serviço, será fornecido o reboque do veículo para a oficina mais próxima da região.</p>

                <img src={house} alt={"Casa"} className={styles.house}></img>
                <p className={styles.service_container_text}>Transporte domiciliar <br /> Em caso de roubo ou furto do veículo, a Central de Assistência providenciará o transporte do motorista e de seus ocupantes até o local de escolha do cliente.</p>

            </div>

            <img src={img1} alt="Imagem Ilustrativa" className={styles.img_sr}></img>

            <ul className={styles.explain_container}>
                <p className={styles.title}>Cobertura Opcional de Perda Total por Danos/Colisão</p>

                <p className={styles.text}>A cobertura de Perda Total por Danos/Colisão é um produto adicional ao seguro de Furto e Roubo da Top Seguros <br/>Brasil. Uma indenização integral de Perda Total é caracterizada quando o valor de reparos dos danos no veículo <br/>(causados por colisão, incêndio, alagamento ou outras causas externas) têm um valor igual ou superior a 75% do <br/>valor segurado. A indenização será paga nos seguintes casos: colisão com outro veículo, colisão em postes,<br/> capotamento, alagamento/enchente, incêndio, queda de barrancos e pedras sobre o veículo.Na hora de escolher<br/> seu Seguro de Furto e Roubo da Top Seguros Brasil, você pode optar por incluir também a cobertura nova de Perda<br/> Total, com uma taxa adicional em seu contrato. Caso você já possua o Seguro de Furto e Roubo, pode adicionar a<br/> nova cobertura de Perda Total por meio de endosso.E essa cobertura, aliada à um custo reduzido e ampla<br/> aceitação tornam o Seguro Top Seguros Brasil indispensável para sua<br/> tranquilidade. Peça uma cotação para sua moto ou seu carro agora mesmo!</p>
            </ul>

            {/* <div className={styles.explain_container}>
                
                    <p>Cobertura Opcional de Perda Total por Danos/Colisão</p>

                    <p>A cobertura de Perda Total por Danos/Colisão é um produto adicional ao seguro de Furto e Roubo da Top Seguros Brasil. Uma indenização integral de Perda Total é caracterizada quando o valor de reparos dos danos no veículo (causados por colisão, incêndio, alagamento ou outras causas externas) têm um valor igual ou superior a 75% do valor segurado. A indenização será paga nos seguintes casos: colisão com outro veículo, colisão em postes, capotamento, alagamento/enchente, incêndio, queda de barrancos e pedras sobre o veículo.Na hora de escolher seu Seguro de Furto e Roubo da Top Seguros Brasil, você pode optar por incluir também a cobertura nova de Perda Total, com uma taxa adicional em seu contrato. Caso você já possua o Seguro de Furto e Roubo, pode adicionar a nova cobertura de Perda Total por meio de endosso.E essa cobertura, aliada à um custo reduzido e ampla aceitação tornam o Seguro Top Seguros Brasil indispensável para sua tranquilidade. Peça uma cotação para sua moto ou seu carro agora mesmo!</p>
                
            </div> */}
        </section>
    )
}

export default Services