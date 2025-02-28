
import { headers } from "next/headers"
//export const dynamic = 'force-dymanic'

export default async function AboutPage(){

    const contentTypeHeader =  (await headers()).get("Content-Type");
    console.log("contentTypeHeader", contentTypeHeader);

    return (
        <div>
            <h3>About</h3>
            <p>This is a Next.js application bsed on the App router</p>
        </div>
    )
}