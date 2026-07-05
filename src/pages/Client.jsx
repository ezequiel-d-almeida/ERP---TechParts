import { Link } from "react-router-dom"

export function Client({ clientList }) {

    return (

        <main>

            <div className="page-header">

                <h2 className="page-header__title">
                    Clientes
                </h2>

                <Link
                    className="btn btn--primary"
                    to="/createClient"
                >
                    Novo Cliente
                </Link>

            </div>

            <div className="list-header">

                <span>Nome</span>
                <span>E-mail</span>
                <span>Telefone</span>

            </div>

            {clientList.map((client, index) => (

                <div
                    className="list-row"
                    key={index}
                >

                    <span>{client.name}</span>

                    <span>{client.email}</span>

                    <span>{client.phone}</span>

                </div>

            ))}

        </main>

    )
}
