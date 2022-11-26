import styles from "./RegisterForm.module.css";
import Submit from "../form/Submit";
import Input from "../form/Input";
import Input2 from "./Input2";
import React from 'react'
import Api from "../API/ApiConfig";
import { useState } from "react";

function RegisterForm() {

    // const [user, setUser] = useState(userData || {})

    // const state = {
    //     nome: '',
    //     cpfCnpj: '',
    //     email: '',
    //     senha: '',
    //     celular: '',
    // }

    const [state, setState] = useState({
        nome: '',
        cpfCnpj: '',
        email: '',
        senha: '',
        celular: '',
    })

    

    function submit(e){
        e.preventDefault()
        const user = {
            nome: state.nome,
            cpfCnpj: state.cpfCnpj,
            email: state.email,
            senha: state.senha,
            celular: state.celular,
        }

        Api.post('/AdicionarCliente', { user }).then(
            res => {
                console.log(res)
                console.log(res.data)
            }
        )

    }

    function handleChange(e){
        setState({
            nome: e.target.value,
            cpfCnpj: e.target.value,
            email: e.target.value,
            senha: e.target.value,
            celular: e.target.value,
        })
    }


    return (
        <form form onSubmit={submit}>
            <div className={styles.input_container}>
                <Input2
                    type="text"
                    name="name"
                    placeholder="NOME"
                    handleOnChange={handleChange}
                    value={state.nome}
                />

                <div className={styles.img_border}>
                    <Input2
                        type="text"
                        name="subName"
                        placeholder="SOBRENOME"
                        handleOnChange={handleChange}
                        value={state.nome}

                    />
                </div>

            </div>

            <Input
                type="text"
                name="cpf_cnpj"
                placeholder="CEP OU CNPJ"
                handleOnChange={handleChange}
                value={state.cpfCnpj}
            />

            <Input
                type="text"
                name="phone"
                placeholder="TELEFONE"
                handleOnChange={handleChange}
                value={state.celular}
            />

            <Input
                type="text"
                name="e-mail"
                placeholder="E-mail"
                handleOnChange={handleChange}
                value={state.email}
            />

            <Input
                type="text"
                name="password"
                placeholder="Senha"
                handleOnChange={handleChange}
                value={state.senha}
            />

            <Submit text="CADASTRAR " />
        </form>
    )



}
export default RegisterForm
