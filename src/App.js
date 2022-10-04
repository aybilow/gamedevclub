import './App.css';
import { Route, Routes } from "react-router-dom";
import Beeghome from "./components/Pages/Beeghome";
import Beeglayout from "./components/BeegLayout/Beeglayout";
import About from "./components/Pages/About";
import Resources from "./components/Pages/Resources";


function App() {
  return (
      <Beeglayout>
         <Routes>
             <Route path='/' element={<Beeghome />} />
             <Route path='/about' element={<About />} />
             <Route path='/resources' element={<Resources />} />

         </Routes>


      </Beeglayout>



  );
}

export default App;
