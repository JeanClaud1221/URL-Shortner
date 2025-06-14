import Navbar from "../components/Navbar"
import UrlShortner from "../components/UrlShortner"
import Overlay from "../components/Overlay"
import Sign_In from "../components/SignIn"
import Sign_Up from "../components/SignUp"
import Hero from "../components/Hero"
import { useState } from "react"
function MainPage(){
    const [sign_in_toggle,set_sign_in_toggle]=useState(false)
    const [sign_up_toggle,set_sign_up_clicked]=useState(false)
    const [is_logged_in,set_login]=useState(false)

    function toggle_login(){
        set_login(!is_logged_in)
        console.log("Do I work or not")
    }

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

    return (
        <>
        <div>

        <Overlay is_open={sign_in_toggle} close={toggle_sign_in} content={Sign_In} login={toggle_login}/>
        <Overlay is_open={sign_up_toggle} close={toggle_sign_up} content={Sign_Up} login={toggle_login}/>

        <Navbar sign_in={toggle_sign_in} sign_up={toggle_sign_up} is_logged_in={is_logged_in}/>
        <div className=" d-flex w-full flex-justify-space-evenly my-2 h-full flex-wrap">
            <UrlShortner/>
            <Hero/>
        </div>
        </div>
        </>
    )
        

}
export default MainPage