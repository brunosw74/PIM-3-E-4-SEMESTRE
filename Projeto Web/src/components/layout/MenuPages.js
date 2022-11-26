import styles from './MenuPages.module.css'
// import user from '../../imgs/user_loged.png'
import { React} from "react";
import { Link } from 'react-router-dom'

function MenuPages() {

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
                <button className={styles.btn_myAcount}>Minha Conta</button>
                {/* <img src={user} alt="User Logado" className={styles.img_user}/> */}
                <ul className={styles.img_user}></ul>
            </div>
            {/* `${selectDiv} ${divSHow}` */}
            <div className={styles.select_container}>
                <ul className={styles.margin_Top}></ul>
                <Link to='/user-data' className={styles.btn_select}>Dados</Link>
                <Link to='/docs' className={styles.btn_select}>Documentos</Link>
                <Link to='/payments' className={styles.btn_select}>Pagamentos</Link>
                <Link to='/suport' className={styles.btn_select}>Suport</Link>
            </div>
        </section>

    )

}

export default MenuPages