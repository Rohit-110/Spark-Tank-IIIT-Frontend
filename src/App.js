import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Payment from './pages/Payment.jsx'
import PaymentSuccess from './pages/PaymentSuccess.jsx';
import Form from './pages/Form.jsx';
import MySubmission from './pages/MySubmission.jsx';
import Signup from './pages/Signup.jsx';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path = "/login" element={<Login/>} />
          <Route path = "/signup" element={<Signup/>}/>
          <Route path = "/" element={<Payment/>}/>
          <Route path = "/paymentsuccess" element={<PaymentSuccess/>}/>
          <Route path = "/submitform" element={<Form/>}/>
          <Route path = "/mysubmission" element={<MySubmission/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
