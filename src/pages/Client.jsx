import { Link } from "react-router-dom"
import { PageHeader } from "../components/PageHeader/PageHeader"
import { ListHeader } from "../components/ListHeader/ListHeader"

export function Client({ 
    clientList,
    setClientList
 }) {

    function deletarItem(id) {
        const novoArray = clientList.filter(client => client.id !== id)
        console.log(novoArray)
        setClientList(novoArray)
    }

    return (

        <main>

            <PageHeader
                title="Clientes"
                buttonText="Novo Cliente"
                buttonPath="/createClient"
            />

            <ListHeader
                columns={[
                    { label: "Id" },
                    { label: "Nome" },
                    { label: "E-mail" },
                    { label: "Telefone" },
                    { label: "Ações" }
                ]}
            />

            {clientList.map((client, index) => (

                <div
                    className="list-row"
                    key={client.id}
                >

                    <span>{client.id}</span>

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
                                deletarItem(client.id);
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
