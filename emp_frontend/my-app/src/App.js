import logo from'./logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Admincrud from './components/Admincrud';
import Employeeform from './components/Employeeform';
import Employeelist from './components/Employeelist';


function App() {
  return ( 
  
      <div>
        
        
        
    
        <BrowserRouter>

        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/employeeform'  element={<Employeeform />} />
        <Route path='/employeelist' exact element={<Employeelist />} />
        <Route path='/admincrud'  element={<Admincrud />} />
       
        
       

      </Routes>
        
      </BrowserRouter>
        </div>
    
   
  );
}

export default App;
