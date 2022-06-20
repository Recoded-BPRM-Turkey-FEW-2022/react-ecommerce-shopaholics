import { QueryClientProvider, QueryClient } from 'react-query';
import { Container } from '@mui/material';
import ResponsiveAppBar from './components/Navbar'
import AllProducts from './routes/AllProducts'

const queryClient = new QueryClient();

function App () {

  return (
    <>
      <QueryClientProvider client={queryClient}>
      <ResponsiveAppBar />
      <Container >
        <h1>React Ecommerce!</h1>
        <AllProducts />
      </Container>
      </QueryClientProvider>
    </>
  );
}

export default App;