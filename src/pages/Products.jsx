import { Link } from "react-router-dom"
import { PageHeader } from "../components/PageHeader"

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

            <div className="list-header">

                <span>Nome</span>
                <span>Preço</span>
                <span>Descrição</span>
                <span>Ações</span>

            </div>

            {productList.map((product, index) => (

                <div
                    className="list-row"
                    key={index}
                >

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