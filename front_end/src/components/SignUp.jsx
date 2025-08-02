import { useState } from "react"
export default function Sign_Up(){
    const [email,set_email]=useState("")
    const [password,set_password]=useState("")
    const [confirm_password,set_confirm_password]=useState("")
    function update_email(val){set_email(val)}
    function update_password(val){set_password(val)}
    function update_confirm_password(val){set_confirm_password(val)}
    function create_account(){
        // Implement the post request to make the user create an account in the db
        console.log(email)
        console.log(password)
        console.log(confirm_password)
        set_email("")
        set_password("")
        set_confirm_password("")
    }

    return(
        <>
        <div className="TODO">
            <h3>Email</h3>
            <input type="text" className="TODO" onChange={(e)=>{update_email(e.target.value)}} value={email}/>

            <h3>Password</h3>
            <input type="password" className="TODO" onChange={(e)=>{update_password(e.target.value)}} value={password}/>

            <h3>Confirm Password</h3>
            <input type="password" className="TODO" onChange={(e)=>{update_confirm_password(e.target.value)}} value={confirm_password}/>
            
            <p>By clicking on “Create Account”, I agree to the Terms of Service,Privacy Policy, and Use of Cookies.</p>
            <button className="TODO" onClick={create_account}>Create Account</button>
        </div>
        </>
    )
}