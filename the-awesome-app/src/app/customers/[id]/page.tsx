import { Customer } from "@/model/Customer";
import Link from "next/link";

type CustomerViewProps = {

    params: Promise<{id: number}>
}

export default async function CustomerView(props: CustomerViewProps){

    const id =  (await props.params).id
    const url = process.env.CUSTOMERS_URL + "/" + id;
    const response = await fetch(url);
    const customer = await response.json() as Customer;


    return (
        <div>
            <h3>Customer View : {id}</h3>
            <p>Name: {customer.name}</p>
            <p>Location: {customer.location}</p>

            <Link href="/customers">Back</Link>
        </div>
    )
}