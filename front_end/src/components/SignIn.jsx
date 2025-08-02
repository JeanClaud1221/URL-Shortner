import { useState } from "react"
import axios from "axios"
export default function Sign_In(login){
    const [email,set_email]=useState("")
    const [password,set_password]=useState("")
    function update_email(val){set_email(val)}
    function update_password(val){set_password(val)}
    function create_account(){
        // Implement the logic to make the sign in use a request to check if its valid
        axios.post('http://localhost:3000/test',{em:email,pw:password})
            .then((res)=>{
                console.log(res.body)
                login()
            })
            .catch((err)=>{
                console.log(err.message)
            })
        set_email("")
        set_password("")
    }

    return(
        <>
        <div className="TODO">
            <h3>Email</h3>
            <input type="text" className="TODO" onChange={(e)=>{update_email(e.target.value)}} value={email}/>
            <h3>Password</h3>
            <input type="password" className="TODO" onChange={(e)=>{update_password(e.target.value)}} value={password}/>
            <p>By clicking on “Create Account”, I agree to the Terms of Service,Privacy Policy, and Use of Cookies.</p>
            <button className="TODO" onClick={create_account}>Sign In</button>
        </div>
        </>
    )
}