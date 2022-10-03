import './App.css';
import { Route, Routes } from "react-router-dom";
import Beeghome from "./components/Pages/Beeghome";
import Beeglayout from "./components/BeegLayout/Beeglayout";
import About from "./components/Pages/About";


function App() {
  return (
      <Beeglayout>
         <Routes>
             <Route path='/' element={<Beeghome />} />
             <Route path='/about' element={<About />} />

         </Routes>


      </Beeglayout>



  );
}

export default App;
