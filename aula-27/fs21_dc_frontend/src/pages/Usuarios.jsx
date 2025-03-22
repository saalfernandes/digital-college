import { useEffect, useState } from "react"
import LayoutDefault from "../layouts/LayoutDefault"
import Api from '../config/Api'
import { useNavigate } from "react-router-dom"
const Usuarios = () => {

    const [lista, setLista] = useState([])
    const navigate = useNavigate();

    async function getLista() {
        // const response = await fetch('https://fakestoreapi.com/users')
        // const dados = await response.json()
        // setLista(dados)

        const response = await Api.get('users')
        setLista(response.data)
    }

    async function deletarItem(id) {

        const check = confirm("Deseja deletar este usuário?")
        try {
            if (check) {
                await Api.delete(`users/${id}`)
                alert("Usuário Deletado com Sucesso.")
                getLista()
            }
        } catch (error) {
            alert("Erro ao deletar o usuário." + error.menssage)
        }
    }


    useEffect(() => {
        getLista()
    }, []);

    return (
        <LayoutDefault>
              <div className="d-flex justify-content-between">
        <h4>Usuários</h4>
        <button onClick={() => navigate('/usuarios/novo')} className="btn btn-success btn-sm">Novo Usuário</button>
        
    </div>
            
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Endereço</th>
                        <th>
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>
                                {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}
                            </td>
                            <td>
                                <button type="button" className="btn btn-primary"onClick={() => navigate()}>Editar</button>
                                <button type="button" className="btn btn-danger" onClick={() => deletarItem(item.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </LayoutDefault>
    )
}

export default Usuarios