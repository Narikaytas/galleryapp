import {Component} from 'react'
import Gallary from './components/Gallary'
import Display from './components/Gallary/display'

let picsList =[
  {picId: 1, picCategory: 'LAB', picName: 'Labrador Puppy', picUrl: 'http://wallpapersdsc.net/wp-content/uploads/2016/10/Labrador-Retriever-Images.jpg'},
  {picId: 2, picCategory: 'GOLDEN-R', picName: 'Golden Retriever Puppy', picUrl: 'https://wallpapercave.com/wp/wp3949631.jpg'},
  {picId: 3, picCategory: 'TIGER', picName: 'Tiger', picUrl: 'https://images8.alphacoders.com/421/421910.jpg'},
  {picId: 4, picCategory: 'LION', picName: 'Lion', picUrl: 'https://wallpapercave.com/wp/oKH7LjH.jpg'}, 
]
let displayGalaryList =[
  {dispId: 1, displayCategory: 'LAB', displayName: 'Labrador Puppy', dispUrl: 'http://wallpapersdsc.net/wp-content/uploads/2016/10/Labrador-Retriever-Images.jpg'},
  {dispId: 2, displayCategory: 'GOLDEN-R', displayName: 'Golden Retriever Puppy', dispUrl: 'https://wallpapercave.com/wp/wp3949631.jpg'},
  {dispId: 3, displayCategory: 'TIGER', displayName: 'Tiger', dispUrl: 'https://images8.alphacoders.com/421/421910.jpg'},
  {dispId: 4, displayCategory: 'LION', displayName: 'Lion', dispUrl: 'https://wallpapercave.com/wp/oKH7LjH.jpg'}, 
]  

class App extends Component{
  state ={
    updatedPicId : picsList[3].picCategory
  }
  getFilteredGal = ( )=>{
    const {updatedPicId} =this.state
    const filteredGal = displayGalaryList.filter(
      eachGal=> eachGal.displayCategory ===updatedPicId
    )
    return filteredGal
  }
  
  updateApp = picCategory=>{
    this.setState({updatedPicId:picCategory})
  }
     
  render(){ 
    const filteredGal = this.getFilteredGal()
    return(
      <div>
        <div className='gallaryBoxStyling col-12- col-sm-12 col-md-6 m-auto mt-5 p-3'>
        <h1>Photo Gallary Application</h1>
          {
           filteredGal.map(eachGal =>(
             <Display displayGalaryList ={eachGal} key ={eachGal.dispId}/>
           )) 
          }

        </div>
        <div className="galStyle col-12- col-sm-12 col-md-6 m-auto mt-1 p-3">
        {
          picsList.map(eachPic=>(
            <Gallary updateApp={this.updateApp} picsList = {eachPic} key={eachPic.picId} />
          ))
        }
        </div>
      
      </div>
    )
  }
}
export default App