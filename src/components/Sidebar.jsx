import { Link } from "react-router-dom"

export function Sidebar() {
    return  (
            <nav id='sidebar'>
                <Link className="nav-button" to="/products">
                    Produtos
                </Link>

                <Link className="nav-button" to="/clients">
                    Clientes
                </Link>

                <Link className="nav-button" to="/sales">
                    Vendas
                </Link>
            </nav>
    )
}