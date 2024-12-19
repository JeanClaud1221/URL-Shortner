export default function Overlay({is_open,close,content}){
    if(is_open){
            return(
                <div className=" w-screen h-screen test-bg position-fixed z-2">
                    <button onClick={close}>X</button>
                        {content}
                </div>
            )
    }

}