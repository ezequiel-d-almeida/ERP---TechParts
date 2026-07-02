import { Link } from "react-router-dom"

export const clientList = [
    
]

export function Client() {

    return (
        <main>
            {clientList.map(client => (<p key={clientList.indexOf(client)}>{client.nome}</p>))}

            <Link  className="new__button" to="/createClient">
                Novo Cliente
            </Link>
        </main>
    )
}
