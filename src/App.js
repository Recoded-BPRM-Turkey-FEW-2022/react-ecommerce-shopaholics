// import { QueryClientProvider, QueryClient } from "react-query";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Routes,
} from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar";
import AllProducts from "./routes/AllProducts";
import ProductDetail from "./routes/ProductDetail";
import {getProducts} from "./util/API";
import Cart from "./routes/Cart"


// const queryClient = new QueryClient();

function App() {
  const {status, data} = getProducts() //CHECK IF THIS IS REFETCHING OR JUST BRINGING CACHED DATA
  const [searchedName, setSearchedName] = useState(data) // NOT SURE

  useEffect(() => {
    setSearchedName(data)
  }, [data])

  return (
  //  <QueryClientProvider client={queryClient}>
    <>
      
      <Router>
      <ResponsiveAppBar
        searchedName={searchedName}
        setSearchedName={setSearchedName}
        data={data}
      />
      
        <Routes>
          <Route
            exact
            path="/"
            element={
              <AllProducts
                searchedName={searchedName}
              />
            }
              />
          <Route
            exact
            path="/products/:productId"
            element={<ProductDetail />}
          />
          <Route
            exact
            path="/cart"
            element={<Cart />}
          />
        </Routes>
      </Router>
    {/* </QueryClientProvider> */}
    </>
  );
}

export default App;
