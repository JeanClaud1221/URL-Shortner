function Button({text,clicker}){
    return (
        <>
        <button onClick={clicker} className="main-dark white border-none min-w-fit px-1 min-h-fit h-2 text-large">{text}</button>
        </>
    )
}
export default Button