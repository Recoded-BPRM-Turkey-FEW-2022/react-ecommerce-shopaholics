import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ButtonAppBar from './components/Navbar'
import AllProducts from './routes/AllProducts'
import ProductDetail from './routes/ProductDetail'

const queryClient = new QueryClient();

function App () {

  return (
      <QueryClientProvider client={queryClient}>
      <ButtonAppBar />
          <AllProducts />
      </QueryClientProvider>
  )
}

export default App;


//Routing:
{/* <Router>
<QueryClientProvider client={queryClient}>
<ResponsiveAppBar />
<Routes>
  <Route path='/'>
    <AllProducts />
  </Route>
  <Route path='/productdetail'>
    <ProductDetail />
  </Route>
</Routes>
</QueryClientProvider>
</Router> */}