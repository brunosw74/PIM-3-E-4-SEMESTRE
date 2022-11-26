import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Origin from './components/pages/Origin'
import Login from './components/pages/Login'
import Containers from './components/layout/Containers'
import Menu from './components/pages/Menu'
import Franchise from './components/pages/Franchise'
import Sinister from './components/pages/Sinister'
import Security from './components/pages/Security'
import CallClient from './components/pages/CallClient'
import Credentials from './components/pages/Credentials'
import Reports from './components/pages/Reports'
import Fipe from './components/pages/Fipe'

function App() {

  return (
    <Router>
      <Navbar />
      <Containers customClass='min-height'>
        <Routes>
          <Route exact path="/" element={<Origin />}></Route>

          <Route path="/login" element={<Login />}></Route>

          <Route path="/menu" element={<Menu />}></Route>

          <Route path="/franquia" element={<Franchise />}></Route>

          <Route path="/sinistro" element={<Sinister />}></Route>

          <Route path="/seguros" element={<Security />}></Route>

          <Route path="/attcliente" element={<CallClient />}></Route>

          <Route path="/credenciais" element={<Credentials />}></Route>

          <Route path="/relatorio" element={<Reports />}></Route>

            <Route path="/fipe" element={<Fipe />}></Route> 
        </Routes>
      </Containers>
      <Footer />
    </Router>
  );
}

export default App;
