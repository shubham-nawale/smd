import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import AdminPanel from './pages/AdminPanel';
import Billing from './pages/Billing';
import AllBills from './components/AllBills';
import Offers from './pages/Offers';
import './index.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AdminLogin from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';
import Contact from './components/Contact';
import Header from './components/Header';
import SingleBill from './components/SingleBill';

function App() {
  return (
    <div>
      <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bill/:id" element={<SingleBill />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/billing" element={<Billing />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/create-bill" element={<Billing />} />
      <Route path="/all-bills" element={<AllBills/>} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      <Route path='/Contact' element={<Contact />}/>
        </Routes>
    </div>
  )
}

export default App
