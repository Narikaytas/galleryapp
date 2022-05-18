

const Display =(props) =>{
    const {displayGalaryList} = props
    const {dispUrl} = displayGalaryList
    return(
        <>
            <div className="displaySec mt-3">
                <img src={dispUrl} alt="displayPic" className="w-100"/>
            </div>
        </>
    )
}
export default Display