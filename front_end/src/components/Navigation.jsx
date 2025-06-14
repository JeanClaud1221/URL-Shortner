import Button from "./Button"
function Navigation({sign_in,sign_up,is_logged_in}){
    if (!is_logged_in){
        return(
            <div className="d-flex flex-justify-center">


            <Button text={"Sign In"} clicker={sign_in}/>
            <Button text={"Sign Up"} clicker={sign_up}/>
            <div className="main-dark w-3 h-2"></div>
            </div>
        )
    }
    
    return(
        <div className="d-flex flex-justify-center">

        <h3>Logged In</h3>
        {/* <Button text={"Sign In"} clicker={sign_in}/> */}
        {/* <Button text={"Sign Up"} clicker={sign_up}/> */}
        <div className="main-dark w-3 h-2"></div>
        </div>
    )

}
export default Navigation