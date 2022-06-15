import './App.css';
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";

import Register from './views/pages/Register';
import Login from './views/pages/Login';
import Dashboard from './views/pages/dashboard/Dashboard';
import Page404 from './views/pages/Page404';
import { useSelector } from 'react-redux';
import Modal from './views/components/Modal/Modal';

function App() {

  const {modal}= useSelector(state=>state)

  return (
    <div className='containerApp'>
    <Router>

    {modal.isLoad === true ? <Modal /> : " "}
   
    <Routes>
    
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/> 
      <Route exact path="/dashboard/*" element={<Dashboard/>} />
      <Route exact path="*" element={<Page404/>} />

    </Routes>

   </Router>

    </div>
  );
}

export default App;
