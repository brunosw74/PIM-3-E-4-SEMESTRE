import ButtonBlue from '../layout/ButtonBlue'
import ButtonYellow from '../layout/ButtonYellow'
import styles from './Credentials.module.css'
import btnadd from '../../imgs/add_table.png'

function Credentials() {
    return (
        <section className={styles.container}>
            <div className={styles.h1}>
                <h1 >Credenciais</h1>
            </div>

            <div className={styles.crend_container}>

                <ul className={styles.btn_conteiner}>
                    <ButtonBlue text={"Inserir Credenciais"}/>
                    <ButtonBlue text={"Localização"}/>
                    <ButtonBlue text={"Endereço"}/>
                    <ButtonBlue text={"CEP"}/>
                    <ButtonBlue text={"Número"}/>
                    <ButtonBlue text={"Nome do responsável"}/>
                    <ButtonBlue text={"CNPJ colaborador"}/>
                    
                </ul> 
                
                <ul className={styles.btn_container2}>
                    <ButtonYellow text={"Adicionar novo"}></ButtonYellow>
                    <ButtonYellow text={"Alterar"}></ButtonYellow>
                    <ButtonYellow text={"Deletar"}></ButtonYellow>

                    <button className={styles.btn_add}>
                        <img  src={btnadd} alt="Adicionar Tabelas de Valores"></img>
                    </button>
                    <p className={styles.p}>Adicionar mapa ou foto</p>
                </ul>
                
                
                <button className={styles.btn_confirm}>Confirmar</button>
            </div>

            

        </section>
    )
}

export default Credentials