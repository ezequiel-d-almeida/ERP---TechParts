import { useState } from "react"

export function CreateClientPage({
    clientList,
    setClientList
}) {

    const [client, setClient] = useState({
        id: crypto.randomUUID(),
        name: "",
        cpf: "",
        phone: "",
        email: ""
    })

    function saveClient(client) {

        setClientList([
            ...clientList,
            client
        ])

        console.log(client)
    }

    function handleSubmit(event) {

        event.preventDefault()

        saveClient(client)

        setClient({
            id: crypto.randomUUID(),
            name: "",
            cpf: "",
            phone: "",
            email: ""
        })
    }

    return (

        <main>

            <div className="page-header">

                <h2 className="page-header__title">
                    Novo Cliente
                </h2>

            </div>

            <form
                className="form"
                onSubmit={handleSubmit}
            >

                <div className="form__group">

                    <label htmlFor="name">
                        Nome
                    </label>

                    <input
                        type="text"
                        id="name"
                        value={client.name}
                        onChange={(event) =>
                            setClient({
                                ...client,
                                name: event.target.value
                            })
                        }
                    />

                </div>

                <div className="form__group">

                    <label htmlFor="cpf">
                        CPF
                    </label>

                    <input
                        type="tel"
                        id="cpf"
                        value={client.cpf}
                        maxLength={14}
                        placeholder="000.000.000-00"
                        onChange={(event) =>
                            setClient({
                                ...client,
                                cpf: event.target.value
                            })
                        }
                    />

                </div>

                <div className="form__group">

                    <label htmlFor="phone">
                        Telefone
                    </label>

                    <input
                        type="tel"
                        id="phone"
                        value={client.phone}
                        placeholder="(00)00000-0000"
                        onChange={(event) =>
                            setClient({
                                ...client,
                                phone: event.target.value
                            })
                        }
                    />

                </div>

                <div className="form__group">

                    <label htmlFor="email">
                        E-mail
                    </label>

                    <input
                        type="email"
                        id="email"
                        value={client.email}
                        onChange={(event) =>
                            setClient({
                                ...client,
                                email: event.target.value
                            })
                        }
                    />

                </div>

                <button
                    className="btn btn--primary"
                    type="submit"
                >
                    Salvar Cliente
                </button>

            </form>

        </main>

    )
}