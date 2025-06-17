export default function Overlay({is_open,close,content,login}){
    if(is_open){
            return(
                <div className=" w-screen h-screen bg-black-transparent position-fixed z-2 max-w-full">
                    <div className=" d-flex flex-justify-end w-55p px-2 py-.5">

                    <button onClick={close} className="h-2 w-2 full-rounded border-none">X</button>
                    </div>
                    <div className="d-flex flex-align-center flex-justify-center h-full">
                        {content(login)}
                    </div>
                </div>
            )
    }

}