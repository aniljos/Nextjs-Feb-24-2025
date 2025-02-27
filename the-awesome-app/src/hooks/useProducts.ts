import axios from "axios";
import {  useEffect,  useState } from "react";
import { Product } from "@/model/Product";

export function useProducts(apiEndpointUrl: string){

     const [products, setProducts] = useState<Product[]>([]);

     useEffect(() => {

        fetchProducts();

    }, [])

    async function fetchProducts(){

        try {
            
            const response = await axios.get<Product[]>(apiEndpointUrl);
            console.log("products", response.data);
            setProducts(response.data);

        } catch (error) {
            console.log("error", error);
        }
    }

    return {products, setProducts, fetchProducts};
}