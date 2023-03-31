import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import AboutMe from './pages/AboutMe';
import Qualification from './pages/Qualificaton';
import Skills from './pages/Skills';
import Hobbies from './pages/Hobbies';


import Experience from './pages/Experience';

function App() {
     return (
    <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/AboutMe' element={<AboutMe/>}/>
            <Route path='/Qualification' element={<Qualification/>}/>
            <Route path='/Skills' element={<Skills/>}/>
            <Route path='/Hobbies' element={<Hobbies/>}/>
            <Route path='/Experience' element={<Experience/>}/>
            
            
            
            </Routes>
         </div>
    );
}  

export default App;
