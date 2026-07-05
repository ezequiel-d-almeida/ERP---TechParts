import { Link } from "react-router-dom"

export function Products({
    productList
}) {
    return (
        <main>
            {productList.map(product => (<p key={productList.indexOf(product)}>{product.name}</p>))}

            <Link  className="new__button" to="/createProduct">
                Novo Produto
            </Link>
        </main>
    )
}