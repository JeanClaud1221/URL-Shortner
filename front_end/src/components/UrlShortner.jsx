import Button from "./button"
function UrlShortner(){
    return (
        <>
        <div className="d-flex flex-col w-33p flex-justify-center">
            <h2 className="main-text">Shorten URL</h2>
            <input type="text" className=" text-input font-large"/>
            <div className=" d-flex w-66p flex-justify-space-between mx-2 my-1">

            <Button text={"Generate Url"} additional="button-rounded"/>
            <Button text={"Paste"} additional="button-rounded"/>
            </div>
        </div>
        </>
    )
}
export default UrlShortner