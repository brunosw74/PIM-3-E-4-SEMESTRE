import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'

import Securitys from './components/pages/Securitys'
import Services from './components/pages/Services'
import Sinister from './components/pages/Sinister'
import Price from './components/pages/Price'
import Workshops from './components/pages/Workshops'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import UserData from './components/pages/UserData'
import Documents from './components/pages/Documents'
import Suport from './components/pages/Suport'
import Payments from './components/pages/Payments'
import Securitys2 from './components/pages/Securitys2'

function App() {
  return (
    <Router>

      <Navbar />

      <Container customClass='min-height'>

        <Routes>
            <Route exact path="/" element={<Securitys />}></Route>

            <Route path='/seguros2' element={<Securitys2 />}></Route>

            <Route path="/servicos" element={<Services />}></Route>

            <Route path="/sinistro" element={<Sinister />}></Route>

            <Route path="/cotacao" element={<Price />}></Route>

            <Route path="/oficinas" element={<Workshops />}></Route>

            <Route path="/login" element={<Login />}></Route>

            <Route path="/register" element={<Register />}></Route>

            <Route path="/user-data" element={<UserData />}></Route>

            <Route path="/docs" element={<Documents />}></Route>

            <Route path="/payments" element={<Payments />}></Route>

            <Route path="/suport" element={<Suport/>}></Route>

        </Routes>
      </Container>

      <Footer />

    </Router>
  );
}

export default App;
