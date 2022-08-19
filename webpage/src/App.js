import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home';
import Login from './Pages/Login'
import ForgotPass from './Components/ForgotPass';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import CountryPreview from './Components/CountryPreview';
import Protected from './Components/Protected';
import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <>
    <AuthProvider>
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path='/' element={<Login />} /> 
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/country/:name' element={<CountryPreview />} />
        <Route exact path='/forgot-password' element={<ForgotPass />} /> 
        <Route exact path='/sign-up' element={<SignUp />} />
        <Route exact path='/profile' element={<Protected />}>
          <Route exact path='/profile' element={<Profile />} />
        </Route>
       </Routes>
    </Router>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    </AuthProvider>
    </>
  );
}

export default App;
