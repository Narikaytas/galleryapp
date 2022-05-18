
const Gallary = (props) => {
    const {picsList,updateApp} = props
    const {picUrl,picCategory} = picsList
    const clicked =( )=>{
        updateApp(picCategory)
    }
    
    return(
        <>
             
            <div className="bottomGalaryStyle m-3 d-inline-flex">             
            <button className="butStyle" onClick={clicked}><img src={picUrl} alt="pic" className="w-100"/></button>
            </div>
        </>
    )
}
export default Gallary