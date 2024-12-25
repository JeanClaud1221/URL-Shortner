function Button({text,clicker,additional=""}){
    const styling=`main-dark white border-none min-w-fit px-1 min-h-fit h-2 text-large ${additional}`
    return (
        <>
        <button onClick={clicker} className={styling}>{text}</button>
        </>
    )
}
export default Button