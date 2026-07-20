import { Link } from "react-router-dom"
import { PageHeader } from "../components/PageHeader/PageHeader"
import { ListHeader } from "../components/ListHeader/ListHeader"
import { SaleList } from "../components/SaleList/SaleList"

export function Sales({ saleList, setSaleList }) {
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

           {saleList.map((sale, index) => (
                <SaleList
                    key={index}     
                    sale={sale}
                />
            ))}

        </main>
    )
}