import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LinkButton from './LinkButton'
import styles from './Navbar.module.css'
import logo from '../../imgs/logo.png'
import tlogo from '../../imgs/titulo_logo.png'
import user from '../../imgs/user_default.png'
import perfilLoged from '../../imgs/perfil_logado.png'
import Container from './Containers'
import MenuButton from './MenuButton'
import MenuSelect from './Select/MenuSelect'

function Navbar({ imgdefualt, isLogin, isOrigin, isMenu }) {

    const location = useLocation();
    isLogin = location.pathname === "/login" ? true : false;
    isOrigin = location.pathname === "/" ? true : false;
    isMenu = location.pathname === "/menu" ? true : false;
    // console.log(isLogin)

    imgdefualt = user;

    const [menuPages, setMenuPages] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/menuPages", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setMenuPages(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <nav className={styles.navbar}>
            <Container>
                <ul>
                    <Link to='/'>
                        <img src={logo} alt="Top"></img>
                    </Link>

                    <img src={tlogo} alt="Titulo" ></img>
                </ul>

                {isMenu ? <ul className={styles.button_menu}>
                    {/* <MenuButton
                        name="menuPages_id"
                        options={menuPages}
                    /> */}
                    <MenuSelect/>
                </ul> : <ul className={styles.button_login}><LinkButton to="/login" text="Entrar" /></ul>}

                <ul className={styles.img_user}></ul>

                {isLogin ? null : <img src={isOrigin ? imgdefualt : perfilLoged} alt="User Default" className={styles.img_user}></img>}


            </Container>
        </nav>
    )
}

export default Navbar