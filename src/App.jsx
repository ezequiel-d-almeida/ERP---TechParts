import { Dashboard } from './pages/Dashboard'
import { Products } from './pages/Products'
import { CreateProductPage } from './pages/CreateProduct'
import { Sales } from './pages/Sale'
import { Client } from './pages/Client'
import { CreateClientPage } from './pages/CreateClient'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Routes, Route } from "react-router-dom"
import { useState } from 'react'

function App() {
  const[clientList, setClientList] = useState([])
  const[productsList, setProductList] = useState([])

  return (
    <>
      <div className='app-container'>
          <Header></Header>
          <Sidebar></Sidebar>
          
          <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="/products" element={<Products productList={productsList} />} />

              <Route path="/clients" element={<Client clientList={clientList}/>} />

              <Route path="/sales" element={<Sales />} />

              <Route path="/createClient" element={<CreateClientPage clientList={clientList} setClientList={setClientList}/>} />

              <Route path="/createProduct" element={<CreateProductPage productList={productsList} setProductList={setProductList}/>} />
          </Routes>
      </div>
    </>   
  )
}

export default App