import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Painel from '../pages/Painel'
import Produtos from '../pages/Produtos' 
import Usuario from '../pages/Usuario'

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Painel />} />
                    <Route path='/produtos' element={<Produtos />} />
                    <Route path='/usuario' element={<Usuario />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes;