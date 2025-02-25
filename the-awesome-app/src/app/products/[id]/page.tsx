'use client'

import { useParams } from "next/navigation"

export default function EditProductPage(){

    const params = useParams();
    const id = params.id; // folder name [id]

    return (
        <div>
            <h4>Edit Product: {id}</h4>

            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" id="price" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" id="desc" className="form-control"/>
                </div>
                <br />
                <div>
                    <button className="btn btn-primary">Save</button> &nbsp;
                    <button className="btn btn-secondary">Cancel</button>
                </div>

            </form>
        </div>
    )
}