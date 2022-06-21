import { useQuery } from 'react-query';


async function fetchProducts () {
        const response = await fetch('https://fakestoreapi.com/products');
        return response.json();
    };
        
    // const {data, status} = useQuery("products", fetchProducts)

export function getProducts () {
    return useQuery("products", fetchProducts)
}
