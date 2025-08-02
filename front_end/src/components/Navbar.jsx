import Navigation from "./Navigation"
function Navbar({sign_in,sign_up,is_logged_in}){
    return (

        <>
        <div className="TODO">

        <div>
             <h2 className="TODO">SHORT URL</h2>
        </div>
        <Navigation sign_in={sign_in} sign_up={sign_up} is_logged_in={is_logged_in}/>


        </div>

        </>
    )
}
export default Navbar