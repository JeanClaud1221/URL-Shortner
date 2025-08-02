function Button({text,clicker,type}){
    let styling="bg-main text-white px-2 py-2 border-2 border-black hover:bg-white hover:text-black hover:border-2 hover:border-black rounded-xs font-bold"
    if (type==='white'){
        styling="bg-white px-2 py-2 border-2 hover:bg-black hover:text-white hover:border-2 hover:border-black rounded-xs font-bold"

    }
    return (
        <>
        <button onClick={clicker} className={styling}>{text}</button>
        </>
    )
}
export default Button