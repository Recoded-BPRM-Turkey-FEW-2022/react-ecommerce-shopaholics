import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar";
import AllProducts from "./routes/AllProducts";
import ProductDetail from "./routes/ProductDetail";
import {getProducts} from "./util/API";
import CategoryPage from "./routes/CategoryPage";

function App() {
  const {status, data} = getProducts() //CHECK IF THIS IS REFETCHING OR JUST BRINGING CACHED DATA
  const [searchedName, setSearchedName] = useState(data)
  const [category, setCategory] = useState('');
  console.log(category);

  useEffect(() => {
    setSearchedName(data)
  }, [data])

  return (
    <>
          <Router>

      <ResponsiveAppBar
        searchedName={searchedName}
        setSearchedName={setSearchedName}
        data={data}
        category={category}
        setCategory={setCategory}
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
            path="/products/category/:categoryName"
            element={
            <CategoryPage
              category={category}
            />}
          />

        </Routes>
      </Router>
    </>
  );
}

export default App;
