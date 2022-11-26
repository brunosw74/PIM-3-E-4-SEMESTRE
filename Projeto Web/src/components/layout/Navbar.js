import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import logo from '../../imgs/logo.png'
import tlogo from '../../imgs/titulo_logo.png'

import Container from './Container'
import LinkButton from './LinkButton'
import styles from './Navbar.module.css'
import MenuPages from './MenuPages'


function Navbar({ isLoged}) {

    const location = useLocation();
    isLoged = location.pathname === "/seguros2" ? true : false;

    return (
        <nav className={styles.navbar}>
            <Container customClass='backLine'>

                <ul>
                    <Link to='/'>
                        <img src={logo} alt="Top"></img>
                    </Link>

                    <img src={tlogo} alt="Titulo" ></img>
                </ul>

                
                
                <ul className={isLoged? styles.list2 : styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Seguros</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/servicos'>Serviços</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/sinistro'>Sinistro</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/cotacao'>Cotação</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/oficinas'>Oficinas</Link>
                    </li>
                </ul>

                {isLoged ? <ul className={styles.button_login}>
                    <MenuPages />
                    
                </ul> : <ul className={styles.button_login}>
                    <LinkButton to="/login" text="Entrar"></LinkButton>
                </ul>}

            </Container>
        </nav>
    )
}

export default Navbar