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
                <h3 className="main-text">Short URL</h3>
                <input type="text" readOnly  value={shortenedUrl} className="text-input font-large h-2 min-h-1.5 color-green"/>
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
        <div className="d-flex flex-col flex-justify-center min-w-.3 max-w-33p">
            <h2 className="main-text">Long URL</h2>
            <input type="text" className=" text-input font-large h-2 min-h-1.5" onChange={(e)=>{updateUrl(e)}}/>
            {displayShortned()}
            <div className=" d-flex w-auto flex-justify-space-between my-1 max-w-4">
            <Button text={"Generate Url"} additional="button-rounded" clicker={getUrl}/>
            <Button text={"Copy"} additional="button-rounded" clicker={copyText}/>
            </div>
        </div>
        </>
    )
}
export default UrlShortner