'use client'

import { ChangeEvent, FormEvent, useState } from "react"
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {

    const [name, setName]  = useState(""); 
    const [password, setPassword] = useState("");
    const [message, setMessage]  = useState("");
    const router = useRouter();
    

    async function handleLogin(evt: FormEvent<HTMLFormElement>){
         evt.preventDefault();

         // clients-side validation
         if(name && password){
            //validate the credential(server)

            const url = "http://localhost:9000/login"
            // axios
            //     .post(url, {name, password})
            //     .then((resp) => {
            //         console.log("resp", resp);
            //     })
            //     .catch((errResponse) => {
            //         console.log("err", errResponse);
            //     })

            try{

                const resp = await axios.post(url, {name, password});
                console.log("resp", resp);
                setMessage("");
                router.push("/");

            }
            catch(errResponse){
                console.log("err", errResponse);
                setMessage("Invalid Credentials");
            }

        
            
         }
         else{
            //alert("Enter the credentials...");
            setMessage("Enter the credentials");
         }
         

    }
    function handleNameChange(evt: ChangeEvent<HTMLInputElement>){

        //const value = evt.target.value;
        //setName(value);
        setName(evt.target.value);
    }
    return (
        <div>
            <h3>Login</h3>
            <p>Signin to your application</p>

            {message ? <div className="alert alert-warning">{message}</div> : null}

            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={handleNameChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="pwd">Password</label>
                    <input type="password" className="form-control" id="pwd" 
                                                            value={password} onChange={evt => setPassword(evt.target.value)}/>
                </div>

                <br />
                <button className="btn btn-success">Login</button>
            </form>
        </div>
    )
}