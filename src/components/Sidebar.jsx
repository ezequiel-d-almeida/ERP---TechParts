import { Link } from "react-router-dom"

export function Sidebar() {
    return (

        <nav id="sidebar">

            <Link className="sidebar__link" to="/products">
                Produtos
            </Link>

            <Link className="sidebar__link" to="/clients">
                Clientes
            </Link>

            <Link className="sidebar__link" to="/sales">
                Vendas
            </Link>

        </nav>

    )
}