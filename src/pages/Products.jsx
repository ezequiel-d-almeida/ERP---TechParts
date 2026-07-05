import { Link } from "react-router-dom"

export function Products({
    productList
}) {

    return (

        <main>

            <div className="page-header">

                <h2 className="page-header__title">
                    Produtos
                </h2>

                <Link
                    className="btn btn--primary"
                    to="/createProduct"
                >
                    Novo Produto
                </Link>

            </div>

            <div className="list-header">

                <span>Nome</span>
                <span>Preço</span>
                <span>Descrição</span>

            </div>

            {productList.map((product, index) => (

                <div
                    className="list-row"
                    key={index}
                >

                    <span>{product.name}</span>

                    <span>R$ {product.price}</span>

                    <span>{product.description}</span>

                </div>

            ))}

        </main>

    )
}