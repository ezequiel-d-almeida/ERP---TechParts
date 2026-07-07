import { Link } from "react-router-dom"
import { PageHeader } from "../components/PageHeader"

export function Client({ clientList }) {

    return (

        <main>

            <PageHeader
                title="Clientes"
                buttonText="Novo Cliente"
                buttonPath="/createClient"
            />

            <div className="list-header">

                <span>Nome</span>
                <span>E-mail</span>
                <span>Telefone</span>
                <span>Ações</span>

            </div>

            {clientList.map((client, index) => (

                <div
                    className="list-row"
                    key={index}
                >

                    <span>{client.name}</span>

                    <span>{client.email}</span>

                    <span>{client.phone}</span>

                    <span>

                        <Link
                            className="btn btn--secondary"
                            to={`/editClient/${client.id}`}
                        >
                            Editar
                        </Link>

                        <button
                            className="btn btn--danger"
                            onClick={() => {
                                // Handle client deletion
                            }}
                        >
                            Excluir
                        </button>

                    </span>

                </div>

            ))}

        </main>

    )
}
