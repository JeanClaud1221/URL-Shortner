export default function Overlay({is_open,close,content,login}){
    if(is_open){
            return(
                <div className="TODO">
                    <div className="TODO">

                    <button onClick={close} className="TODO">X</button>
                    </div>
                    <div className="TODO">
                        {content(login)}
                    </div>
                </div>
            )
    }

}