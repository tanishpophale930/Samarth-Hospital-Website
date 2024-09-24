import React from "react";
import Homepage from "./components/Homepage";
import { Route, Routes } from "react-router-dom";
import Services from "./components/Services";



const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Homepage/>}/>
          
        <Route path="/services" element={<Services/>}/>
      </Routes>
    </div>
  );
};


export default App;


/*  // Tanish made function for testing services page individually
function App(){
   return (
    <div>
      <Navbar/>
      <Facilities/>
      <Footer/>
    </div>
   )
}
*/
