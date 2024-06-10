import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Login from './pages/Login.jsx';
import PaymentSuccess from './pages/PaymentSuccess.jsx';
import Form from './pages/Form.jsx';
import MySubmission from './pages/MySubmission.jsx';
import Signup from './pages/Signup.jsx';
import Submission from './pages/Submission.jsx';
import Home from './pages/Home.jsx';
import Idea from './pages/Idea.jsx';
import Profile from './pages/Profile.jsx';
import { Toaster } from 'react-hot-toast';
import Discuss from './pages/Discuss.jsx';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path = "/login" element={<Login/>} />
          <Route path = "/" element={<Signup/>}/>
          <Route path = "/discuss" element={<Discuss/>}/>
          <Route path = "/profile" element={<Profile/> }/>
          <Route path = "/idea" element={<Idea/>}/>
          <Route path = "/home" element={<Home/>}/>
          <Route path = "/paymentsuccess" element={<PaymentSuccess/>}/>
          <Route path = "/submitform" element={<Form/>}/>
          <Route path = "/mysubmission" element={<MySubmission/>}/>
          <Route path = "/submission" element={<Submission/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App
