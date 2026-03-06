import { Navigate, Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage.jsx'
import DesignsPage from './pages/DesignsPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import CreateAccountPage from './pages/CreateAccountPage.jsx'
import HomePage from './pages/HomePage.jsx'
import DesignStudioPage from './pages/DesignStudioPage.jsx'
import OrdersPage from './pages/OrdersPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Header1 from './components/Header1.jsx';

export default function App() {
  return (

    
    <Routes>
      <Route path="/" element={<Navigate to="/productos" replace />} />

      <Route path="/inicio" element={<HomePage />} />
      <Route path="/productos" element={<ProductsPage />} />
      <Route path="/disenos" element={<DesignsPage />} />
      <Route path="/disenar" element={<DesignStudioPage />} />
      <Route path="/pedidos" element={<OrdersPage />} />
      <Route path="/perfil" element={<ProfilePage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/registro" element={<CreateAccountPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
