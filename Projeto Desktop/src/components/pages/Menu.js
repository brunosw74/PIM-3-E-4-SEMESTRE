import MenuItens from '../layout/MenuItens/MenuItens'
import styles from './Menu.module.css'
import credenciais from '../../imgs/credenciais.png'
import valores from '../../imgs/valores2.png'
import sinistro from '../../imgs/sinistro2.png'
import relatorios from '../../imgs/relatorios2.png'
import consulta from '../../imgs/consulta2.png'
import seguros from '../../imgs/seguros2.png'

function Menu() {

    return (
        <section >
            
            {/* <ul className={styles.img_user}>
                    
            </ul> */}

            <div className={styles.menu_container}>
                <ul className={styles.menu_container_item}>
                    <MenuItens srcimg={credenciais} text="Cadastrar oficinas credenciadas" altimg="Cadastrar credenciais" to="/credenciais"/>
                </ul>

                <ul className={styles.menu_container_item2}>
                    <MenuItens srcimg={valores} text="Emitir valor da franquia" altimg="Valor da Franquia" to="/franquia"/>
                    
                </ul>

                <ul>
                    <MenuItens srcimg={sinistro} text="Cadastrar sinistro" altimg="Sinistro" to="/sinistro"/>
                </ul>
            </div>

            <div className={styles.menu_container}>

                <ul className={styles.menu_container_item}>
                    <MenuItens srcimg={relatorios} text="Gerar relatório" altimg="Relatorio" to="/relatorio"/>
                </ul>

                <ul className={styles.menu_container_item2}>
                    <MenuItens srcimg={consulta} text="Consultar tabela fipe" altimg="Fipe" to="/fipe"/>
                </ul>

                <ul>
                    <MenuItens srcimg={seguros} text="Cadastrar seguros" altimg="Seguros" to="/seguros"/>
                </ul>
            </div>

        </section>

        // <MenuItens srcimg={credenciais} text="Cadastrar oficinas credenciadas" altimg="Cadastrar credenciais"/>
        // <MenuItens srcimg={valores} text="Emitir valor da franquia" altimg="Valor da Franquia"/>
        // <MenuItens srcimg={sinistro} text="Cadastrar sinistro" altimg="Sinistro"/>
        // <MenuItens srcimg={relatorios} text="Gerar relatório" altimg="Relatorio"/>
        // <MenuItens srcimg={consulta} text="Consultar tabela fipe" altimg="Fipe"/>
        // <MenuItens srcimg={seguros} text="Cadastrar seguros" altimg="Seguros"/>
    )
}

export default Menu