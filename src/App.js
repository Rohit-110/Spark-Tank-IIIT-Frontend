import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Payment from './pages/Payment.jsx'
import PaymentSuccess from './pages/PaymentSuccess.jsx';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element={<Payment/>} />
          <Route path = "/paymentsuccess" element={<PaymentSuccess/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
