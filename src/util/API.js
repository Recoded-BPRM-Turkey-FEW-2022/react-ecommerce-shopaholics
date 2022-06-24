import { useQuery } from 'react-query';


async function fetchProducts () {
        const response = await fetch('https://sleepy-hollows-09914.herokuapp.com/products');
        return response.json();
    };

// async function fetchProductsByCategory (category) {
//         const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
//         return response.json();
//     };
        
    // const {data, status} = useQuery("products", fetchProducts)

export function getProducts () {
    return useQuery("products", fetchProducts)
}

// export function getProductsByCategory (category) {
//     return useQuery(`products/${category}`, fetchProductsByCategory)
// }
