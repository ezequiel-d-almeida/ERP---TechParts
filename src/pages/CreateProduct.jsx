import { useState } from 'react'
import { Link } from 'react-router-dom'

export function CreateProductPage({
    productList,
    setProductList
}) {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: "",
    })

    function saveProduct(product) {
        setProductList([
            ...productList,
            product
        ])
        console.log("Produto salvo:")
        console.log(product)
    }

    function handleSubmit(event) {
        event.preventDefault()

        saveProduct(product)
        setProduct({
            name: "",
            price: "",
            description: "",
        })
    }

    return (
        <main>
            <h2>Cadastrar novo produto</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        value={product.name}
                        onChange={(e) => setProduct({ ...product, name: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="price">Preço:</label>
                    <input
                        type="number"
                        id="price"
                        value={product.price}
                        onChange={(e) => setProduct({ ...product, price: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="description">Descrição:</label>
                    <textarea
                        id="description"
                        value={product.description}
                        onChange={(e) => setProduct({ ...product, description: e.target.value })}
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </main>
    )
}