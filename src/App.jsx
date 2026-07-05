import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import { Dashboard } from "./pages/Dashboard"
import { Products } from "./pages/Products"
import { CreateProductPage } from "./pages/CreateProduct"
import { Sales } from "./pages/Sale"
import { Client } from "./pages/Client"
import { CreateClientPage } from "./pages/CreateClient"

import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

function App() {

    const [clientList, setClientList] = useState([])
    const [productList, setProductList] = useState([])

    return (

        <div className="app-container">

            <Header />

            <Sidebar />

            <Routes>

                <Route
                    path="/"
                    element={<Dashboard />}
                />

                <Route
                    path="/products"
                    element={
                        <Products
                            productList={productList}
                        />
                    }
                />

                <Route
                    path="/createProduct"
                    element={
                        <CreateProductPage
                            productList={productList}
                            setProductList={setProductList}
                        />
                    }
                />

                <Route
                    path="/clients"
                    element={
                        <Client
                            clientList={clientList}
                        />
                    }
                />

                <Route
                    path="/createClient"
                    element={
                        <CreateClientPage
                            clientList={clientList}
                            setClientList={setClientList}
                        />
                    }
                />

                <Route
                    path="/sales"
                    element={<Sales />}
                />

            </Routes>

        </div>

    )
}

export default App