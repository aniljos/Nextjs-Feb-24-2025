import { Customer } from "@/model/Customer";
import Link from "next/link";
import { Suspense } from "react";
//import axios from "axios";

export default async function CustomerListing(){

    await new Promise(resolve => setTimeout(resolve, 5000));
    return (
        <div>
            <h2>Customers Listing</h2>
            <p>This pages uses suspense and streaming</p>
            <Suspense fallback={<div className="alert alert-primary">Loading the Customers data(10secs)...</div>}>
                <CustomersPage interval={10000}/>
            </Suspense>

            <Suspense fallback={<div className="alert alert-primary">Loading the Customers data(7secs)...</div>}>
                <CustomersPage interval={7000}/>
            </Suspense>
            
        </div>
    )
}

type CustomersPageProps = {
    interval: number
}
export async function CustomersPage(props: CustomersPageProps){

    //simuate an error
    //throw new Error("error in customers");

    //simulate a delay
    await new Promise(resolve => setTimeout(resolve, props.interval));

    //api call
    const url = "http://localhost:9000/customers";
    //const response = await axios.get<Customer[]>(url);
    //const customers = response.data;

    const response = await fetch(url, {cache: 'no-cache'}); //fetch(url, {method: "GET"})
    const customers = await response.json() as Customer[];

    return (
        <div>
            <h4>Customers</h4>
            <p>This is a React Server Component</p>

            <table className="table">
                <thead>
                    <tr>
                        <th>CustomerID</th>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => {
                        return (
                            <tr key={customer.id}>
                                 <td>{customer.id}</td>  
                                 <td><Link href={"/customers/" + customer.id}>{customer.name}</Link> </td>  
                                 <td>{customer.location}</td>   
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}