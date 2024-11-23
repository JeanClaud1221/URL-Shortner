import Navigation from "./Navigation"
function Navbar(){
    return (

        <>
        <div className="d-flex flex-align-center flex-justify-space-between py-.5">

        <div>
             <h2 className="main-text px-2">SHORT URL</h2>
        </div>
        <Navigation />


        </div>

        </>
    )
}
export default Navbar