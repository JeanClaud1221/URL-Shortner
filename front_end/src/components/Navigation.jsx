import Button from "./Button"
function Navigation({sign_in,sign_up,is_logged_in}){
    if (!is_logged_in){
        return(
            <div className="TODO">


            <Button text={"Sign In"} clicker={sign_in}/>
            <Button text={"Sign Up"} clicker={sign_up}/>
            <div className="TODO"></div>
            </div>
        )
    }
    
    return(
        <div className="TODO">

        <h3>Logged In</h3>
        {/* <Button text={"Sign In"} clicker={sign_in}/> */}
        {/* <Button text={"Sign Up"} clicker={sign_up}/> */}
        <div className="TODO"></div>
        </div>
    )

}
export default Navigation