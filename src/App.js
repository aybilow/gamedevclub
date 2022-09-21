import './App.css';
import { Route, Routes } from "react-router-dom";
import Beeghome from "./components/Pages/Beeghome";
import Beeglayout from "./components/BeegLayout/Beeglayout";


function App() {
  return (
      <Beeglayout>
         <Routes>
             <Route path='/' element={<Beeghome />} />

         </Routes>


      </Beeglayout>



  );
}

export default App;
