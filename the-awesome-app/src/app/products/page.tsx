'use client'

import axios from "axios";
import { useCallback, useMemo, useState } from "react";
import { Product } from "@/model/Product";
import { useRouter } from "next/navigation";
import { ProducView } from "./ProductView";
import { useTitle } from "@/hooks/useTitle";
import { useProducts } from "@/hooks/useProducts";

//const baseUrl = "http://localhost:9000/products";
const baseUrl = "http://localhost:9000/secure_products";



export default function ListProductsPage(){

   
    
    const [isMessageVisible, setMessageVisible] = useState(false);
    const router = useRouter();
    useTitle("List-Products");
    const {products, setProducts} = useProducts(baseUrl);
   
    

    const deleteProduct = useCallback(async (product: Product) => {

        try {
            
            const url = baseUrl + "/" + product.id;
            await axios.delete(url);
            //await fetchProducts();
            const index = products.findIndex(item => item.id === product.id);
            if(index !== -1){
                const copy_of_products = [...products]; //spread operator
                copy_of_products.splice(index, 1);
                setProducts(copy_of_products);
            }
            products.splice(index, 1);
            alert("record deleted " + product.id);

        } catch  {
            
            alert("record not deleted " + product.id);
        }

    }, [products])

    const editProduct = useCallback( (product: Product)=> {

        router.push("/products/" + product.id);
    
    }, [])

    const totalProductPrice = useMemo( () => {

        console.log("calculating the total price...");
        let totalPrice = 0;
        products.forEach(prd => {

            if(prd.price)
                totalPrice += prd.price;

            
        });
        return totalPrice;
    }, [products])

    return (
        <div>
            <h4>List Products</h4>

            <div>Total Price: {totalProductPrice}</div>

            {isMessageVisible? <div className="alert alert-info">This is a page to demonstate API calls</div>: null}

            <button className="btn btn-info" onClick={() => setMessageVisible(!isMessageVisible)}>Hide/Show</button>

            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map(product => {

                    return (
                       <ProducView 
                            key={product.id} 
                            product={product} 
                            onDelete={deleteProduct} 
                            onEdit={editProduct}/>
                    )
                })}
            </div>
        </div>
    )
}