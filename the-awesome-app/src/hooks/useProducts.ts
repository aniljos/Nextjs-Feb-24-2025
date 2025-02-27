import axios from "axios";
import {  useEffect,  useState } from "react";
import { Product } from "@/model/Product";
import { useSelector } from "react-redux";
import { AppState } from "@/redux/store";
import { useRouter } from "next/navigation";

export function useProducts(apiEndpointUrl: string){

     const [products, setProducts] = useState<Product[]>([]);
     const auth = useSelector((state: AppState) => state.auth);
     const router = useRouter();

     useEffect(() => {

        fetchProducts();

    }, [])

    async function fetchProducts(){

        try {

            if(!auth.isAuthenticated){
               router.push("/login");
               return;
            }
            
            const headers = {Authorization: `Bearer ${auth.accessToken}`}
            const response = await axios.get<Product[]>(apiEndpointUrl, {headers} );
            console.log("products", response.data);
            setProducts(response.data);

        } catch (error) {
            console.log("error", error);
        }
    }

    return {products, setProducts, fetchProducts};
}