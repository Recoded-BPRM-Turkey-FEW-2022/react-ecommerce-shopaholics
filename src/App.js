import React from "react";
import "./style.css";
import ResponsiveAppBar from './components/Navbar'
import AllProducts from './routes/AllProducts'

function App () {
  return (
    <div>
      <ResponsiveAppBar />
      <h1>React Ecommerce!</h1>
      <AllProducts />
    </div>
  );
}

export default App;