
// import { QueryClientProvider, QueryClient } from 'react-query';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ButtonAppBar from './components/Navbar'
// import AllProducts from './routes/AllProducts'
// import ProductDetail from './routes/ProductDetail'

import { QueryClientProvider, QueryClient } from "react-query";
import { Container } from "@mui/material";
import ResponsiveAppBar from "./components/Navbar";
import AllProducts from "./routes/AllProducts";
import ProductDetail from "./routes/ProductDetail";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Routes,
} from "react-router-dom";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ResponsiveAppBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<AllProducts />} />
          <Route
            exact
            path="/products/:productId"
            element={<ProductDetail />}
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
