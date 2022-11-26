import styles from './UserData.module.css'
import BackButton from '../layout/Buttons/BackButton'
import userLoged from '../../imgs/user_loged.png'
import Api from '../API/ApiConfig'
import React from 'react'
// import { IUser, UsersService } from '../API/users/UsersService'
// import { ApiException } from '../API/ApiException'

export default class UserData extends React.Component {

    state = {
        users: []
    }

    // useEffect(() => {
    //     UsersService.getById().then((result) => {
    //         if(result instanceof ApiException){
    //             alert(result.message)
    //         }
    //         else{
    //             setUser(result)
    //         }
    //     })
    // }, [])

    getIdUser(id) {
        Api.get(`/ObterClientePorId/${id}`).then(
            res => {
                const users = res.data
                this.setState({users})
            }
        )
    }

    render() {
        return (
            <section className={styles.container}>
                <div className={styles.title_page}>
                    <h1>Dados</h1>
                </div>
                <div className={styles.user_container}>
                    <div className={styles.back_button}>
                        <BackButton to="/"></BackButton>
                    </div>

                    <div className={styles.img_perfil}>
                        <img src={userLoged} alt="User"></img>
                        <p className={styles.user_perfil}>Alterar foto</p>
                    </div>

                    <h1 className={styles.name_user}>{this.state.users.map(
                        user => <li>{user.nome}</li>
                    )}</h1>

                    <input className={styles.text_input} type="text" placeholder="E-mail" name="e-mail" value={this.state.users.map(
                        user => <li>{user.email}</li>
                    )}></input>
                    <input className={styles.text_input} type="text" placeholder="Senha" name="password" value={this.state.users.map(
                        user => <li>{user.senha}</li>
                    )}></input>
                    <input className={styles.text_input} type="text" placeholder="Cep" name="cep" value={this.state.users.map(
                        user => <li>{user.cep}</li>
                    )}></input>
                    <input className={styles.text_input} type="text" placeholder="Rua" name="rua"></input>
                    <input className={styles.text_input} type="text" placeholder="Bairro" name="bairro"></input>


                    <div className={styles.text_input_container}>
                        <input className={styles.text_input2} input type="text" placeholder="Numero" name="numberhouse"></input>
                        <input className={styles.text_input2} input type="text" placeholder="Complemento" name="complement"></input>
                    </div>

                </div>
            </section>
        )
    }
}

