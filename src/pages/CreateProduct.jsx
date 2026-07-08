import { useState } from "react"

export function CreateProductPage({

    productList,
    setProductList

}) {

    const [product, setProduct] = useState({
        id,
        name: "",
        price: "",
        description: ""

    })

    function saveProduct(product) {

        setProductList([

            ...productList,
            product

        ])

        console.log(product)

    }

    function handleSubmit(event) {

        event.preventDefault()

        saveProduct(product)

        setProduct({
            id: crypto.randomUUID(),
            name: "",
            price: "",
            description: ""

        })

    }

    return (

        <main>

            <div className="page-header">

                <h2 className="page-header__title">
                    Novo Produto
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
                        id="name"
                        type="text"
                        value={product.name}
                        onChange={(event) =>
                            setProduct({
                                ...product,
                                name: event.target.value
                            })
                        }
                    />

                </div>

                <div className="form__group">

                    <label htmlFor="price">
                        Preço
                    </label>

                    <input
                        id="price"
                        type="number"
                        value={product.price}
                        onChange={(event) =>
                            setProduct({
                                ...product,
                                price: event.target.value
                            })
                        }
                    />

                </div>

                <div className="form__group">

                    <label htmlFor="description">
                        Descrição
                    </label>

                    <textarea
                        id="description"
                        value={product.description}
                        onChange={(event) =>
                            setProduct({
                                ...product,
                                description: event.target.value
                            })
                        }
                    />

                </div>

                <button
                    className="btn btn--primary"
                    type="submit"
                >
                    Salvar Produto
                </button>

            </form>

        </main>

    )
}