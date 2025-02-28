//http://localhost:3000/api/suppliers

import { NextResponse } from "next/server";

//GET http://localhost:3000/api/suppliers

export function GET(request: Request){

    // access the database/ message queue
    return NextResponse.json({message: "Hello Next.js"}, {status: 200});
}

//POST http://localhost:3000/api/suppliers

export function POST(){
    
}

//PUT