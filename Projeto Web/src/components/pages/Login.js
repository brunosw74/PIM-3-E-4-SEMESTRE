import { React, useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../layout/Buttons/BackButton";
import LinkButton from "../layout/LinkButton";
import styles from "./Login.module.css";

function Login() {

    // let [usersDates, setUserDates] = useState("")
    const [cpf, setCPF] = useState("");
    const [password, setPassword] = useState("");

    // useEffect(() => {
    //     fetch('http://localhost:5000/users', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then((resp) => resp.json())
    //         .then((data) => {
    //             console.log(data)
    //             setUserDates(data)
    //         })
    // }, [])

    // function singIn(users) { 

    //     usersDates = setUserDates({
    //         users: {
    //             cpf_cnpj: users.target.value,
    //             password: users.target.value
    //         }
    //     })

    //     if (usersDates.users.cpf_cnpj === cpf && usersDates.users.password === password) {
    //         goUserData()
    //     }
    //     else {
    //         console.log('SEU LOGIN FALHOU')
    //     }
    // }

    // function goUserData() {
    //     this.router.navigate(['/user-data'])
    // }

    // function goSecurity2() {
    //     this.router.navigate(['/seguros2'])
    // }

    return (
        <section className={styles.container}>
            <div className={styles.login_container}>
                <div className={styles.back_button}>
                    <BackButton to="/"></BackButton>
                </div>

                <div className={styles.text_container}>
                    <h1 className={styles.text1}>Acessar Conta</h1>
                    <h1 className={styles.text2}>Preencha seus dados de acesso para continuar</h1>
                </div>

               <div className={styles.input_container}>
                    <input type="text" placeholder="CPF OU CNPJ" name="cpf_cnpj" value={cpf}
                        onChange={(cpf) => setCPF(cpf)}
                        className={styles.input_info}
                    ></input>

                    <input type="text" placeholder="SENHA" name="password"  value={password}
                        onChange={(password) => setPassword(password)}
                        className={styles.input_password}
                    ></input>

                </div>

                <div className={styles.margin_loginButton}>
                    <LinkButton text="Entrar" to='/seguros2'></LinkButton>
                    {/* <button className={styles.btnLogin} onClick={goSecurity2}>LOGIN</button> */}
                </div>


                <div className={styles.text_containe2}>
                    <h1 className={styles.text3}>Ainda não tem sua conta?</h1>
                    <Link to="/register" className={styles.button2}>
                        <h1 className={styles.text4}> Crie uma agora mesmo!</h1>
                    </Link>
                </div>

            </div>
        </section>
    );
}


export default Login;
