// <ProductView product={product} />

import { Product } from "@/model/Product"
import classes from './products.module.css';
import React, {memo} from "react";

type ProducViewProps = {
    product: Product;
    onDelete: (product: Product) => void;
    onEdit: (product: Product) => void;
}

export const ProducView = memo(function ProductView (props: ProducViewProps){

    const {product, onDelete, onEdit} = props;
    console.log("rendering product view", product.id);
    

    return (
        <div className={classes.product}>
        <p>Id: {product.id}</p>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <div>
            <button className="btn btn-warning" onClick={() => {onDelete(product)}}>Delete</button>&nbsp;
            <button className="btn btn-primary" onClick={() => onEdit(product)}>Edit</button>
        </div>
    </div>
    )
})