import { Link } from "react-router-dom"
import { PageHeader } from "../components/PageHeader/PageHeader"
import { ListHeader } from "../components/ListHeader/ListHeader"

export function Sales() {
    return (
        <main>
            <PageHeader
                title="Vendas"
                buttonText="Nova Venda"
                buttonPath="/createSale"
            />
            <ListHeader
                columns={[
                    { label: "Cliente" },
                    { label: "Produto" },
                    { label: "Quantidade" },
                    { label: "Preço Total" },
                    { label: "Ações" }
                ]}
            />

            
        </main>
    )
}