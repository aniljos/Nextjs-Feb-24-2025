'use client'
import { sayHello } from "@/actions/actions";

import { JSX, useRef, useState } from "react"

type SearchSupplierProps = {
    fetchData: (query:string) => Promise<JSX.Element>
}

export function SearchSupplier(props: SearchSupplierProps){

    const searchInputRef = useRef<HTMLInputElement>(null);
    const [helloMessage, setHelloMessage] = useState<JSX.Element>();
    const [suppliersView, setSuppliersView] = useState<JSX.Element>();

    async function search(){
        console.log("searching for ", searchInputRef.current?.value);
        const searchtext = searchInputRef.current?.value;

        if(searchtext){
            const result = await sayHello(searchtext);
            setHelloMessage(result);

            const view = await props.fetchData(searchtext);
            setSuppliersView(view);

        }
        

    }

    return (
        <div>
            <input type="search" className="form-control" ref={searchInputRef} placeholder="Filter Suppliers"/>
            <br />
            <button className="btn btn-primary" onClick={search}>Search</button>

           <div>{helloMessage}</div>

           <div>{suppliersView}</div>
        </div>
    )
}