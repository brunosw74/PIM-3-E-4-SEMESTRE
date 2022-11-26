import styles from './MenuSelect.module.css'
import { React} from "react";
import { Link } from 'react-router-dom'

function MenuSelect() {

    // let selectDiv = props.selectDiv ? styles.select_container : null
    // let divSHow = props.divSHow ? styles.div_Show : null
    // var container = document.querySelector(styles.select_container.display)

    // var container = useRef(styles.select_container: display)

    // function DivVisible() {
    //     // if(container.current === 'block'){
    //     //     container.current = 'none'
    //     // }
    //     // else{
    //     //     container.current = 'block'
    //     // }
        
    // }

    return (
        <section>
            <div>
                <button className={styles.btn_menu}>Menu</button>
            </div>
            {/* `${selectDiv} ${divSHow}` */}
            {/* <div className={styles.select_container}>
                <ul className={styles.margin_Top}></ul>
                <Link to='/credenciais' className={styles.btn_select}>Cadastrar oficinas credenciadas </Link>
                <Link to='/franquia' className={styles.btn_select}>Emitir valor da franquia</Link>
                <Link to='/sinistro' className={styles.btn_select}>Cadastrar sinistro </Link>
                <Link to='/relatorio' className={styles.btn_select}>Gerar relatórios</Link>
                <Link to='/fipe' className={styles.btn_select}>Consulta tabela fipe</Link>
                <Link to='/seguros' className={styles.btn_select}>Cadastrar Seguros</Link>
                <Link to='/attcliente' className={styles.btn_select}>Suporte ao Cliente</Link>
            </div> */}
        </section>

    )

}

export default MenuSelect