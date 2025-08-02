function Button({text,clicker,additional=""}){
    const styling=`TODO ${additional}`
    return (
        <>
        <button onClick={clicker} className={styling}>{text}</button>
        </>
    )
}
export default Button