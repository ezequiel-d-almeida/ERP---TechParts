import { Link } from "react-router-dom"

export function Client({
    clientList
}) {

    return (
        <main>
            <div id="topoLista__clients">
                <h2>Lista de clientes</h2>
                <Link  className="new__button" to="/createClient">
                Novo Cliente
                </Link>

                <h3>Nome - Email - Telefone</h3>
            </div>
            {clientList.map(client => (<p key={clientList.indexOf(client)}>{client.name} - {client.email} - {client.phone}</p>))}
        </main>
    )
}
