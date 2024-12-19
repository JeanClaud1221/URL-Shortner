import Button from "./button"
function Navigation({sign_in,sign_up}){
    return(
        <div className="d-flex flex-justify-center">


        <Button text={"Sign In"} clicker={sign_in}/>
        <Button text={"Sign Up"} clicker={sign_up}/>
        <div className="main-dark w-3 h-2"></div>
        </div>
    )

}
export default Navigation