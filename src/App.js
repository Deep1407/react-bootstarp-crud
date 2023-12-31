import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddUser from './Components/AddUser'
import AllUsers from './Components/AllUsers'
import EditUser from './Components/EditUser'
import NavBar from './Components/Navbar'
import Home from './Components/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
        <ToastContainer />
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/add' element={ <AddUser /> } />
                    <Route path='/all' element={ <AllUsers /> } />
                    <Route path='/edit/:id' element={ <EditUser /> } />
                </Routes>
            </Router>
        </>
    )
}

export default App