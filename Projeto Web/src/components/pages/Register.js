import styles from "./Register.module.css";
import BackButton from "../layout/Buttons/BackButton";
// import { useNavigate } from 'react-router-dom'
import RegisterForm from "../form/RegisterForm";
function Register() {

    // const navigate = useNavigate()

    // function createPost(user) {

    //     // initialize cost and service
        
    //     // user.cep = 0
    //     // user.street = ""

    //     // fetch('http://localhost:5000/users', {
    //     //     method: 'POST',
    //     //     headers: {
    //     //         'Content-type': 'application/json',
    //     //     },
    //     //     body: JSON.stringify(user),
    //     // })
    //     //     .then((resp) => resp.json())
    //     //     .then((data) => {
    //     //         console.log(data)
    //     //         // redirect
    //     //         navigate('/login', { message: 'User Criado com Sucesso!' })
    //     //     })
    //     //     .catch((err) => console.log(err))

    // }

    return (
        <div className={styles.container}>
            <div className={styles.register_container}>
                <div className={styles.back_button}>
                    <BackButton to="/login"></BackButton>
                </div>
                <RegisterForm/>
            </div>
        </div>
    );
}

export default Register;
