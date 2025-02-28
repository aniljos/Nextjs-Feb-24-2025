'use server'

//server action
// export async function sayHello(message: string){

//     console.log("invoking sayHello");
//     return "Hello " + message;
// }

export async function sayHello(message: string){

    // access db etc
    console.log("invoking sayHello");
    return (
        <div>Hello {message}</div>
    )
}