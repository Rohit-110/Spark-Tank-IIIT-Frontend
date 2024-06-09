import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Payment from './pages/Payment.jsx'
import PaymentSuccess from './pages/PaymentSuccess.jsx';
import Form from './pages/Form.jsx';
import MySubmission from './pages/MySubmission.jsx';
import Signup from './pages/Signup.jsx';
import Submission from './pages/Submission.jsx';
import Home from './pages/Home.jsx';
import Idea from './pages/Idea.jsx';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path = "/login" element={<Login/>} />
          <Route path = "/" element={<Signup/>}/>
          <Route path = "/idea" element={<Idea/>}/>
          <Route path = "/home" element={<Home/>}/>
          <Route path = "/paymentsuccess" element={<PaymentSuccess/>}/>
          <Route path = "/submitform" element={<Form/>}/>
          <Route path = "/mysubmission" element={<MySubmission/>}/>
          <Route path = "/submission" element={<Submission/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
