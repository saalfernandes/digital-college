import { useEffect, useState } from "react"
import LayoutDefault from "../layouts/LayoutDefault"
import { Table } from 'react-bootstrap'
import Api from '../config/Api'
const Usuarios = () => {
    const [lista, setLista] = useState([])

    async function listarUsuarios() {
        //const response = await fetch('https://fakestoreapi.com/users')
        //const usuarios = await response.json()
        //setLista(usuarios)

        const response = await Api.get('https://fakestoreapi.com/users')
        setLista(response.data)
    }

    useEffect(() => {
        listarUsuarios()
    }, []);
    //https://dontpad.com/fa21
    return (
        <LayoutDefault>
            <h4>Usuarios</h4>
            <hr />
            <input type="text" className="form-control" placeholder="pesquisar" />
            {lista.length === 0 && 'Usuario não encontrado.'}
            <Table hover striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Endereço</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lista.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.username}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.address.street}, {usuario.address.suite}, {usuario.address.city}, {usuario.address.zipcode}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </LayoutDefault>
    )
}
export default Usuarios