import Button from "./button"
function Navigation(){
    return(
        <div className="d-flex flex-justify-center">


        <Button text={"Sign In"}/>
        <Button text={"Sign Up"}/>
        <div className=" main-dark w-4 h-2"></div>
        </div>
    )

}
export default Navigation