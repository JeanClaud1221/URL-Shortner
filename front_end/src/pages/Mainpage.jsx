import Navbar from "../components/Navbar"
import UrlShortner from "../components/UrlShortner"
import Overlay from "../components/Overlay"
import Sign_In from "../components/signIn"
import { useState } from "react"
function MainPage(){
    const [sign_in_toggle,set_sign_in_toggle]=useState(false)
    const [sign_up_toggle,set_sign_up_clicked]=useState(false)

    function toggle_sign_in(){
        set_sign_in_toggle(!sign_in_toggle)
    }
    function toggle_sign_up(){
        set_sign_up_clicked(!sign_up_toggle)
    }
    // if(sign_in_toggle){
    //     return <SignIn xclick={click_sign_in}/>
    // }else{
    //     return(
    //         <>
    //         <div>
    //         <Navbar sign_in={click_sign_in} sign_up={click_sign_up}/>
    //         </div>
    //         </>
    //     )
    // }
    const t1=<><h1>Sign In</h1></>
    const t2=<><h1>Sign Up</h1></>

    return (
        <>
        <div>
        <Overlay is_open={sign_in_toggle} close={toggle_sign_in} content={<Sign_In/>}/>
        <Overlay is_open={sign_up_toggle} close={toggle_sign_up} content={t2}/>

        <Navbar sign_in={toggle_sign_in} sign_up={toggle_sign_up}/>
        {/* <UrlShortner/> */}
        </div>
        </>
    )
        

}
export default MainPage