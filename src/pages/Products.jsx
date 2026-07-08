import { Link } from "react-router-dom"
import { PageHeader } from "../components/PageHeader/PageHeader"
import { ListHeader } from "../components/ListHeader/ListHeader"

export function Products({
    productList
}) {

    return (

        <main>

            <PageHeader
                title="Produtos"
                buttonText="Novo Produto"
                buttonPath="/createProduct"
            />

            <ListHeader
                columns={[
                    { label: "Id" },
                    { label: "Nome" },
                    { label: "Preço" },
                    { label: "Descrição" },
                    { label: "Ações" }
                ]}
            />

            {productList.map((product, index) => (

                <div
                    className="list-row"
                    key={index}
                >

                    <span>{product.id}</span>

                    <span>{product.name}</span>

                    <span>R$ {product.price}</span>

                    <span>{product.description}</span>

                    <span>

                        <Link
                            className="btn btn--secondary"
                            to={`/editProduct/${product.id}`}
                        >
                            Editar
                        </Link>

                        <button
                            className="btn btn--danger"
                            onClick={() => {

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