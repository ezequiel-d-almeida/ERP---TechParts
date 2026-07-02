import { useState } from "react"
import { clientList } from "./Client"

export function CreateClientPage() {

    const [client, setClient] = useState({
        name: "",
        cpf: "",
        phone: "",
        email: "",
    })

    function saveClient() {
        clientList.push(client)

        console.log("Cliente salvo:")
        console.log(client)
    }

    function handleSubmit(event) {
        event.preventDefault()

        saveClient(client)

        setClient({
            name: "",
            cpf: "",
            phone: "",
            email: "",
        })
    }

    return (
       <main>
            <h2>Cadastrar novo cliente</h2>

            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Nome</label>
                <input 
                type="text" 
                id="name" 
                name="name" 
                value={client.name}
                onChange={(event) => {
                    setClient({
                        ...client,
                        name: event.target.value
                    })
                }} />

                <label htmlFor="cpf">CPF</label>
                <input 
                type="tel" 
                id="cpf" 
                name="cpf" 
                placeholder="000.000.000-00" 
                pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
                maxLength={14} 
                required 
                value={client.cpf}
                onChange={(event) => {
                    setClient({
                        ...client,
                        cpf: event.target.value
                    })
                }}/>

                <label htmlFor="phone">Phone</label>
                <input
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="(00)00000-0000" 
                value={client.phone}
                onChange={(event) => {
                    setClient({
                        ...client,
                        phone: event.target.value
                    })
                }}/>

                <label htmlFor="email">E-mail</label>
                <input 
                type="email" 
                id="email" 
                name="email" 
                value={client.email}
                onChange={(event) => {
                    setClient({
                        ...client,
                        email: event.target.value
                    })
                }} />

                <button id="saveClient" type="submit">Salvar</button>
            </form>
        </main> 
    )
}