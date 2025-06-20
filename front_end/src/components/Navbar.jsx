import Navigation from "./Navigation"
function Navbar({sign_in,sign_up,is_logged_in}){
    return (

        <>
        <div className="d-flex flex-align-center flex-justify-space-between py-.5 z-1 w-full position-sticky bg-white">

        <div>
             <h2 className="main-text px-2">SHORT URL</h2>
        </div>
        <Navigation sign_in={sign_in} sign_up={sign_up} is_logged_in={is_logged_in}/>


        </div>

        </>
    )
}
export default Navbar