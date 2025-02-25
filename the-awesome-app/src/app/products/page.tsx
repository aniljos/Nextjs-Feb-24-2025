'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "@/model/Product";
import classes from './products.module.css';

const baseUrl = "http://localhost:9000/products";

export default function ListProductsPage(){

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        fetchProducts();

    }, [])

    async function fetchProducts(){

        try {
            
            const response = await axios.get<Product[]>(baseUrl);
            console.log("products", response.data);
            setProducts(response.data);

        } catch (error) {
            console.log("error", error);
        }
    }

    async function deleteProduct(product: Product){

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

    }

    return (
        <div>
            <h4>List Products</h4>

            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map(product => {

                    return (
                        <div key={product.id} className={classes.product}>
                            <p>Id: {product.id}</p>
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                            <p>Price: {product.price}</p>
                            <div>
                                <button className="btn btn-warning" onClick={() => {deleteProduct(product)}}>Delete</button>&nbsp;
                                <button className="btn btn-primary">Edit</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}