import { useState } from "react"
import Button from "./Button"
import axios from "axios"
function UrlShortner(){
    const [shortenedUrl,setShortenedUrls]=useState("")
    const [url,setUrl]=useState("")
    function displayShortned(){
        if(shortenedUrl!==""){

            return (
                <>
                <h3 className="TODO">Short URL</h3>
                <input type="text" readOnly  value={shortenedUrl} className="TODO"/>
                </>
            )
        }
    }
    function updateUrl(e){
        const val=e.target.value
        setUrl(val)
    }
    async function getUrl(){
        const obj={"data":url}
        const res=await axios.post("http://localhost:8080/save",obj)
        setShortenedUrls(res.data.data)
    }
    function copyText(){
        navigator.clipboard.writeText(shortenedUrl)
    }

    return (
        <>
        <div className="TODO">
            <h2 className="TODO">Long URL</h2>
            <input type="text" className="TODO" onChange={(e)=>{updateUrl(e)}}/>
            {displayShortned()}
            <div className="TODO">
            <div className="TODO">
            <Button text={"Generate Url"} additional="TODO" clicker={getUrl}/>
            <Button text={"Copy"} additional="TODO" clicker={copyText}/>
            </div>
            </div>
        </div>
        </>
    )
}
export default UrlShortner