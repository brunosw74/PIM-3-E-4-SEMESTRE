// import { ApiException } from "../ApiException";
// import { Api } from "../ApiConfig";

// export interface IUser {
//     idCliente: 0;
//     nome: string;
//     cpfCnpj: string;
//     email: string;
//     senha: string;
//     celular: string;
//     cep: string;
//     endereco: string;
// }

// const getById = async (id: number): Promise<IUser[] | ApiException> => {
//     try {
//         const { data } = await Api().get(`/ObterClientePorId/${id}`)
//         return data
//     } catch (error: any) {
//         return new ApiException(error.message || 'Erro ao consultar o Usuario.')
//     }
// }

// const create = async (dataToCreate: Omit<IUser, 'idCLiente'>): Promise<IUser | ApiException> => {
//     try {
//         const { data } = await Api().post('/AdicionarCliente', dataToCreate)
//         return data
//     } catch (error: any) {
//         return new ApiException(error.message || 'Erro ao criar o Usuario.')
//     }
// }

// export const UsersService = {
//     getById,
//     create
// }