import { Dashboard } from './pages/Dashboard'
import { Products } from './pages/Products'
import { Sales } from './pages/Sale'
import { Client, clientList } from './pages/Client'
import { CreateClientPage } from './pages/CreateClient'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <div className='app-container'>
          <Header></Header>
          <Sidebar></Sidebar>
          
          <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="/products" element={<Products />} />

              <Route path="/clients" element={<Client />} />

              <Route path="/sales" element={<Sales />} />

              <Route path="/createClient" element={<CreateClientPage />} />
          </Routes>
      </div>
    </>   
  )
}

export default App